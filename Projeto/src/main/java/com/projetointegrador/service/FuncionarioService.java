package com.projetointegrador.service;

import java.nio.charset.Charset;
import java.util.List;
import java.util.Optional;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.projetointegrador.model.Funcionario;
import com.projetointegrador.model.FuncionarioLogin;
import com.projetointegrador.repository.FuncionarioRepository;

@Service
public class FuncionarioService {

	@Autowired
	private FuncionarioRepository funcionarioRepository;

	public Optional<Funcionario> CadastrarFuncionario(Funcionario funcionario) {

		if (funcionarioRepository.findByCodf(funcionario.getCodf()).isPresent())
			return Optional.empty();

		funcionario.setSenha(criptografarSenha(funcionario.getSenha()));

		return Optional.of(funcionarioRepository.save(funcionario));
	}

	public Optional<Funcionario> atualizarFuncionario(Funcionario funcionario) {

		if (funcionarioRepository.findByCodf(funcionario.getCodf()).isPresent()) {
			Optional<Funcionario> buscaFuncionario = funcionarioRepository.findByCodf(funcionario.getCodf());
			if ((buscaFuncionario.isPresent()) && (buscaFuncionario.get().getCodf() != funcionario.getCodf()))
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuário já existe!", null);
			funcionario.setSenha(criptografarSenha(funcionario.getSenha()));
			return Optional.ofNullable(funcionarioRepository.save(funcionario));
		}

		return Optional.empty();

	}
	
	public Optional<FuncionarioLogin> Logar(Optional<FuncionarioLogin> FuncionarioLogin){
		
		Optional<Funcionario> funcionario = funcionarioRepository.findByCodf(FuncionarioLogin.get().getCodf());
		
		if(funcionario.isPresent()) {
			
			if(compararSenhas(FuncionarioLogin.get().getSenha(), funcionario.get().getSenha())) {
				
				
				FuncionarioLogin.get().setCodf(funcionario.get().getCodf());
				FuncionarioLogin.get().setSenha(funcionario.get().getSenha());
				FuncionarioLogin.get().setNome(funcionario.get().getNome());
				FuncionarioLogin.get().setToken(gerarBasicToken(FuncionarioLogin.get().getCodf(), FuncionarioLogin.get().getSenha()));
				
				return FuncionarioLogin;
				
			}
		}
		
		return Optional.empty();
		
	}
	
	private String criptografarSenha(String senha) {

	BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
	
	return encoder.encode(senha);
	
	}
	
	private boolean compararSenhas(String senhaDigitada, String senhaBanco) {
	
	BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
	
	return encoder.matches(senhaDigitada, senhaBanco);
	
	}
	
	private String gerarBasicToken(String funcionario, String senha) {

	String token = funcionario + ":" + senha;
	byte[] tokenBase64 = Base64.encodeBase64(token.getBytes(Charset.forName("US-ASCII")));
	return "Basic " + new String(tokenBase64);
	
	}

}

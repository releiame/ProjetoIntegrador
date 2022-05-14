package com.projetointegrador.service;

import java.nio.charset.Charset;
import java.util.Optional;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.projetointegrador.model.Cliente;
import com.projetointegrador.model.ClienteLogin;
import com.projetointegrador.repository.ClienteRepository;

@Service
public class ClienteService {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	public Optional<Cliente> CadastrarCliente(Cliente cliente){
		
		if(clienteRepository.findByEmail(cliente.getEmail()).isPresent())
			return Optional.empty();
		
		cliente.setSenha(criptografarSenha(cliente.getSenha()));
		
		return Optional.of(clienteRepository.save(cliente));
	}
	
	public Optional<Cliente> atualizarCliente(Cliente cliente){
		
		if(clienteRepository.findById(cliente.getId_cliente()).isPresent()) {
			
			Optional<Cliente> buscaCliente = clienteRepository.findByEmail(cliente.getEmail());
			
			if((buscaCliente.isPresent()) && (buscaCliente.get().getId_cliente() != cliente.getId_cliente()))
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuário já existe!", null);
			
			cliente.setSenha(criptografarSenha(cliente.getSenha()));
			
			return Optional.ofNullable(clienteRepository.save(cliente));
		}
		
		return Optional.empty();
		
	}
	
	public Optional<ClienteLogin> Logar(Optional<ClienteLogin> ClienteLogin){
		
		Optional<Cliente> cliente = clienteRepository.findByEmail(ClienteLogin.get().getEmail());
		
		if(cliente.isPresent()) {
			
			if(compararSenhas(ClienteLogin.get().getSenha(), cliente.get().getSenha())) {
				
				ClienteLogin.get().setId_cliente(cliente.get().getId_cliente());
				ClienteLogin.get().setNome(cliente.get().getNome());
				ClienteLogin.get().setEmail(cliente.get().getEmail());
				ClienteLogin.get().setDataNascimento(cliente.get().getDataNascimento());
				ClienteLogin.get().setSenha(cliente.get().getSenha());
				ClienteLogin.get().setTelefone(cliente.get().getTelefone());
				ClienteLogin.get().setToken(gerarBasicToken(ClienteLogin.get().getEmail(), ClienteLogin.get().getSenha()));
				
				return ClienteLogin;
				
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
	
	private String gerarBasicToken(String usuario, String senha) {

		String token = usuario + ":" + senha;
		byte[] tokenBase64 = Base64.encodeBase64(token.getBytes(Charset.forName("US-ASCII")));
		return "Basic " + new String(tokenBase64);

	}

}

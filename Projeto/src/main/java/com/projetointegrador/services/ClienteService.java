package com.projetointegrador.services;

import java.nio.charset.Charset;
import java.util.Optional;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.projetointegrador.model.ClienteModel;
import com.projetointegrador.repository.ClienteRepository;

@Service
public class ClienteService {

	@Autowired // Injeção de Dependencia, ou seja, esta criando um Objeto/Atributo repository do Tipo UsuarioRepository, pois esta é uma Interface
	private ClienteRepository repository;
	
	//Método para criar/cadastrar e criptografar a senha do usuario na Entidade: UsuarioModel
	public ClienteModel CadastrarUsuario(ClienteModel emailUsuario)
	{
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(); //BCryptPasswordEncoder: Vai criptografar a senha do usuario
		String senhaEncoder  = encoder.encode(emailUsuario.getSenha()); //Criando um Atributo/Variavel senhaEncoder e receber o que tiver dentro do usuario
		emailUsuario.setSenha(senhaEncoder); //senhaEncoder: é onde vai retornar a senha criptografada
		return repository.save(emailUsuario);//Retorna a senha que foi criptografada e salva na Entidade: UsuarioModel;Atributo: senha; através do getSenha
	}
	
	//Método do Tipo: Optional com nome Logar; que vai cadastrar o usuario, ou seja, vai receber um usuario e devolver um usuario
	public Optional<ClienteModel> LogarUsuario(Optional<ClienteModel> emailUser)
	{
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();//BCryptPasswordEncoder: Vai criptografar a senha do usuario
		Optional<ClienteModel> usuario = repository.findByEmail(emailUser.get().getEmail()); // Aqui criamos um objeto usuario, que vamos acessar dentro do getUsuario
		
		if(usuario.isPresent())//Esta verificando se realmente tem um usuario, caso exista vamos para a linha 38
		{
			if(encoder.matches(emailUser.get().getSenha(), usuario.get().getSenha()))//Se as senhas forem iguais vai retornar true
			{	//Aqui vamos realizar as regras de negocio para devolver a senha criptografada, comparando tanto a Senha quanto o UsuarioLogin
				String authorization = emailUser.get().getEmail()+":"+emailUser.get().getSenha();//Esta variavel é para guardar o Usuario e a Senha que vai passar através de uma String
				byte[] encodeAuth = Base64.encodeBase64(authorization.getBytes(Charset.forName("US-ASCII")));//Esta criando um Array do Tipo byte e vai pegar a Base64 e vai passar qual o formato de byte que queremos, nesse caso o US-ASCII 
				String authHeader = "Basic"+new String(encodeAuth);//Vai converter o encodeAuth que esta na Base64 para uma "new" String
				emailUser.get().setToken(authHeader);//Vai Setar o Token com a String authHeader
				emailUser.get().setNome(authHeader);//Vai Setar o setNome "Nome" que esta na Classe UsuarioLoginModel com o usuario que esta na Entidade/Tabela UsuarioModel
				return emailUser;//Se tudo der certo return user, senão return linha 48, ou seja, null
			}
		}
		return null;
	}
	
	// Método para atualizar o email do cliente
	public ClienteModel atualizarEmail(ClienteModel email) 
	{
		return repository.save(email);
	}
	
	// Método para atualizar o telefone do cliente
	public ClienteModel atualizarTelefone(ClienteModel telefone) {
		return repository.save(telefone);
	}

	// Método para atualizar a senha do cliente
	public ClienteModel atualizarSenha(ClienteModel senha) {
		return repository.save(senha);
	}
	
	// Método para cadastrar Data Nascimento do cliente
	public ClienteModel DataNascimento(ClienteModel dataNascimento) {
		return repository.save(dataNascimento);
	}
	
}
/*
## LINHA 38: Verifique se a senha codificada obtida do armazenamento corresponde à senha bruta enviada depois que ela também for 
			 codificada. Retorna verdadeiro se as senhas corresponderem, falso se não corresponderem. A própria senha armazenada nunca 
			 é decodificada. vai pegar as duas senhas a existente e a digitada e comparar se são iguais, se forem iguais vamos para a 
			 linha 40.
			 
 ##Linha 41: Fornece codificação e decodificação Base64 conforme definido pela RFC 2045. Codifica dados binários usando o algoritmo 
 			 base64, mas não fragmenta a saída.
 			 
 ## Optional: é para encapsular o retorno de métodos e informar se um valor do tipo <T>	está presente ou ausente. Com isso é possível, evitar 
 	erros NullPointerException, parar de fazer verificações de valor nulo do tipo if (cliente != null) e escrever código mais limpo e elegante
 */

	


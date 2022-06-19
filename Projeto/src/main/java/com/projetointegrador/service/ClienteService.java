package com.projetointegrador.service;

import java.nio.charset.Charset;
import java.text.SimpleDateFormat;
import java.util.Calendar;
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
	
	/*
	 * Regras do nosso negócio
	 * 1 - Não pode ter 2 clientes cadastrados no sistema com o mesmo e-mail
	 * 2 - Não pode ter cadastrado no nosso sistema um cliente menor de idade (menos que 18 anos)
	 */
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	public Optional<Cliente> CadastrarCliente(Cliente cliente){
		
		//Checa se o Cliente existe no Banco, pois não pode ter 2 clientes com o mesmo e-mail, se não existir retorna o Optional vazio
		if(clienteRepository.findByEmail(cliente.getEmail()).isPresent())
			return Optional.empty();
		
		//Se o cliente não existir a senha sera criptografada
		
		cliente.setSenha(criptografarSenha(cliente.getSenha()));
		
		//O resultado do método save será retornado dentro de um Optional, com o Usuario persistido no Banco de Dados
		
		//Retorna um Optional com o valor fornecido, não podendo ser nulo
		return Optional.of(clienteRepository.save(cliente));
	}
	
	public Optional<Cliente> atualizarCliente(Cliente cliente){
		
		//Cria um Objeto Optional com o resultado do método findById
		
		if(clienteRepository.findById(cliente.getId_cliente()).isPresent()) {
			
			/**
			 * Se o Cliente existir no Banco de dados e o Id do Cliente encontrado no Banco for 
			 * diferente do usuário do Id do Cliente enviado na requisição, a Atualização dos 
			 * dados do Usuário não pode ser realizada.
			 */
			
			Optional<Cliente> buscaCliente = clienteRepository.findByEmail(cliente.getEmail());
			if((buscaCliente.isPresent()) && (buscaCliente.get().getId_cliente() != cliente.getId_cliente()))
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuário já existe!", null);
			
			//Se o cliente existir e o Id for o mesmo a senha será criptografada
			
			cliente.setSenha(criptografarSenha(cliente.getSenha()));	
			
			/**
		 	* Assim como na Expressão Lambda, o resultado do método save será retornado dentro
		 	* de um Optional, com o Usuario persistido no Banco de Dados ou um Optional vazio,
			* caso aconteça algum erro.
			* 
			* ofNullable​ -> Se um valor estiver presente, retorna um Optional com o valor, 
			* caso contrário, retorna um Optional vazio.
		 	*/
			
			return Optional.ofNullable(clienteRepository.save(cliente));
		}
		return Optional.empty();
		
	}
	
	//Metodo para autenticação do Cliente no endpoint "logar", usado com a principal função de gerar o token do usuário codificado em Base64
	
	public Optional<ClienteLogin> Logar(Optional<ClienteLogin> ClienteLogin){
		
		//Cria um Optional do tipo Cliente para receber o resultado do método "FindByEmail", usando como parametro o ClienteLogin
		//Com o get ele retorna o valor, se caso estiver vazio lança uma Exception NoSuchElementException
		
		Optional<Cliente> cliente = clienteRepository.findByEmail(ClienteLogin.get().getEmail());
		
		//Checa se o cliente existe
		
		if(cliente.isPresent()) {
			
			//Checa se a senha digitada é igual a senha no banco (ambas criptografadas), retornando verdadeiro se forem iguais ou falso se não forem
			
			if(compararSenhas(ClienteLogin.get().getSenha(), cliente.get().getSenha())) {
				
				//Se forem iguais retorna objeto com os dados recuperados do Banco de Dados, além de inserir o token gerado
				
				ClienteLogin.get().setId_cliente(cliente.get().getId_cliente());
				ClienteLogin.get().setNome(cliente.get().getNome());
				ClienteLogin.get().setEmail(cliente.get().getEmail());
				ClienteLogin.get().setSenha(cliente.get().getSenha());
				ClienteLogin.get().setToken(gerarBasicToken(ClienteLogin.get().getEmail(), ClienteLogin.get().getSenha()));
				
				//Retorna o objeto atualizado para a classe controller
				
				return ClienteLogin;
				
			}
		}
		
		//empty -> Retorna uma instância de Optional vazia, caso o usuário não seja encontrado.
		
		return Optional.empty();
		
	}
	
	//Método para criptografar a senha do usuário
	
	private String criptografarSenha(String senha) {
		
		//Instancia um objeto da Classe BCryptPasswordEncoder para criptografar a senha do usuário

		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		//O método encode retorna a senha criptografada no formato BCrypt
		
		return encoder.encode(senha);

	}
	
	//Método para comparar a senha Digitada com a senha do Banco de Dados
	
	private boolean compararSenhas(String senhaDigitada, String senhaBanco) {
		
		//Instancia o objeto BCrypt novamente para criptografar a senha digitada
		
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		//Verifica se a senha criptografada digitada é igual a senha do banco (tambem criptografada), retorna verdadeiro se as 
		//senhas coincidem e falso se não coincidem
		
		return encoder.matches(senhaDigitada, senhaBanco);

	}
	
	private String gerarBasicToken(String cliente, String senha) {
		
		//Monta uma string (no caso token) concatenando <username>:<password>
		
		String token = cliente + ":" + senha;
		
		/*Fazendo a codificação em Base 64
		 * 
		 * Base64.encodeBase64 -> aplica o algoritmo de codificação do Código Decimal para Base64, 
		 * que foi gerado no próximo método.
		 * 
		 * Charset.forName("US-ASCII") -> Retorna o codigo ASCII (formato Decimal) de cada 
		 * caractere da String
		 * 
		 */
		
		byte[] tokenBase64 = Base64.encodeBase64(token.getBytes(Charset.forName("US-ASCII")));
		
		//Retorna token acrescendo "Basic" a frente além de converter ele para String novamente
		
		return "Basic " + new String(tokenBase64);

	}

}

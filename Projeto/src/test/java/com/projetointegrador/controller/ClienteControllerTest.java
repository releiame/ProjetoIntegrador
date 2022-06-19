package com.projetointegrador.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.projetointegrador.model.Cliente;
import com.projetointegrador.model.ClienteLogin;
import com.projetointegrador.repository.ClienteRepository;
import com.projetointegrador.service.ClienteService;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class ClienteControllerTest {
	
	@Autowired
	private TestRestTemplate testRestTemplate;
	
	@Autowired
	private ClienteService clienteService;
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@BeforeAll
	void start()
	{
		clienteRepository.deleteAll();
	}
	
	SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
	
	
	@Test
	@Order(1)
	@DisplayName("Cadastrar um Usuário")
	public void deveCriarUmUsuario() throws ParseException
	{
		Date dataFormatada = formato.parse("01/01/2000");
		
		HttpEntity<Cliente> requisicao = new HttpEntity<Cliente>(new Cliente(0L,"teste@gmail.com","123456789","teste", dataFormatada));
		ResponseEntity<Cliente> resposta = testRestTemplate
				.exchange("/cliente/cadastrar",HttpMethod.POST,requisicao,Cliente.class);
		
		assertEquals(HttpStatus.CREATED,resposta.getStatusCode());
		assertEquals(requisicao.getBody().getEmail(),resposta.getBody().getEmail());
		assertEquals(requisicao.getBody().getNome(),resposta.getBody().getNome());
		assertEquals(requisicao.getBody().getDataNascimento(),resposta.getBody().getDataNascimento());
		
	}
	
	@Test
	@Order(2)
	@DisplayName("Não deve permitir duplicação de usuário")
	public void naoDeveDuplicarUsuario() throws ParseException
	{ 
		Date dataFormatada = formato.parse("01/01/2000");
		
		clienteService.CadastrarCliente(new Cliente(0L,"teste2@gmail.com","1234567891","teste2", dataFormatada));
		HttpEntity<Cliente> requisicao = new HttpEntity<Cliente>(new Cliente(0L,"teste2@gmail.com","1234567891","teste2", dataFormatada));
		ResponseEntity<Cliente> resposta = testRestTemplate
				.exchange("/cliente/cadastrar",HttpMethod.POST,requisicao,Cliente.class);
		assertEquals(HttpStatus.BAD_REQUEST, resposta.getStatusCode());
	}
	
	@Test
	@Order(3)
	@DisplayName("Atualizar um usuário")
	public void deveAtualizarUmUsuario() throws ParseException
	{
		Date dataFormatada = formato.parse("01/01/2000");
		
		//Cadastrando o cliente no banco
		
		Optional<Cliente> clienteCreate = clienteService.CadastrarCliente(new Cliente(0L,
				"teste2@gmail.com","1234567891","teste2", dataFormatada));
		
		//É usado o "isPresent" pois nunca se pode usar um "get()" sem provar que o Optional está presente
		
		if(clienteCreate.isPresent()) {
			
			//Após provar que o Optional não está vazio inicia o método para atualizar o cliente que está no banco
			
		Cliente clienteUpdate = new Cliente(clienteCreate.get().getId_cliente(),
				"testeAtualizado2@gmail.com","1234567891","testeAtualizado2", dataFormatada);
		
		//Insere o objeto da Classe Cliente (clienteUpdate) dentro de um Objeto da Classe HttpEntity (Entidade HTTP)
		
		HttpEntity<Cliente> requisicao = new HttpEntity<Cliente>(clienteUpdate);
		
		/**
		 * Cria um Objeto da Classe ResponseEntity (corpoResposta), que receberá a Resposta da Requisição que será 
		 * enviada pelo Objeto da Classe TestRestTemplate.
		 * 
		 * Na requisição HTTP será enviada a URL do recurso (/cliente/atualizar), o verbo (PUT), a entidade
		 * HTTP criada acima (corpoRequisicao) e a Classe de retornos da Resposta (Cliente).
		 * 
		 * Observe que o Método Atualizar não está liberado de autenticação (Login do usuário), por isso utilizamos o
		 * Método withBasicAuth para autenticar o usuário em memória, criado na BasicSecurityConfig.
		 * 
		 * Usuário: root
		 * Senha: root
		 */
		
		ResponseEntity<Cliente> resposta = testRestTemplate
				.withBasicAuth("root", "root")
				.exchange("/cliente/atualizar",HttpMethod.PUT,requisicao,Cliente.class);
		
		/**
		 *  Verifica se a requisição retornou o Status Code OK (200) 
		 * Se for verdadeira, o teste passa, se não, o teste falha.
		 */
		
		assertEquals(HttpStatus.OK,resposta.getStatusCode());
		
		/**
		 * Verifica se o Atributo Nome do Objeto da Classe Usuario retornado no Corpo da Requisição 
		 * é igual ao Atributo Nome do Objeto da Classe Usuario Retornado no Corpo da Resposta
		 * Se for verdadeiro, o teste passa, senão o teste falha.
		 */
		
		assertEquals(clienteUpdate.getEmail(),resposta.getBody().getEmail());
		assertEquals(clienteUpdate.getNome(),resposta.getBody().getNome());
		assertEquals(clienteUpdate.getDataNascimento(),resposta.getBody().getDataNascimento());
		}else {
			System.out.println("Nenhum valor");
		}
		
	}
	
	@Test
	@Order(4)
	@DisplayName("Listar todos os clientes")
	public void deveMostrarTodosUsuarios() throws ParseException
	{
		Date dataFormatada = formato.parse("01/01/2000");
		
		clienteService.CadastrarCliente(new Cliente(0L,"teste@gmail.com","123456789","teste", dataFormatada));
		clienteService.CadastrarCliente(new Cliente(0L,"teste2@gmail.com","1234567891","teste2", dataFormatada));
		ResponseEntity<String> resposta = testRestTemplate
				.withBasicAuth("root", "root")
				.exchange("/cliente/listartodos", HttpMethod.GET,null,String.class);
		assertEquals(HttpStatus.OK,resposta.getStatusCode());
	}
	
	@Test
	@Order(5)
	@DisplayName("Listar um Cliente Especifico")
	public void deveListarUmCliente() throws ParseException
	{
		Date dataFormatada = formato.parse("01/01/2000");
		
		Optional<Cliente> clienteBusca = clienteService.CadastrarCliente(new Cliente(0L,"teste@gmail.com","123456789","teste", dataFormatada));
		if(clienteBusca.isPresent()) {
		ResponseEntity<String> resposta = testRestTemplate
				.withBasicAuth("root", "root")
				.exchange("/cliente/" + clienteBusca.get().getId_cliente(), HttpMethod.GET,null,String.class);
		assertEquals(HttpStatus.OK,resposta.getStatusCode());
		}else {
			System.out.println("Vazio");
		}
	}
	
	@Test
	@Order(6)
	@DisplayName("Deve logar um Cliente")
	public void deveLogarCliente() throws ParseException
	{
		Date dataFormatada = formato.parse("01/01/2000");
		
		clienteService.CadastrarCliente(new Cliente(0L,"teste@gmail.com","123456789","teste", dataFormatada));
		HttpEntity<ClienteLogin> corpoRequisicao = new HttpEntity<ClienteLogin>(new ClienteLogin(0L, "teste@gmail.com", "123456789", "", "", dataFormatada));
		ResponseEntity<ClienteLogin> corpoResposta = testRestTemplate
				.exchange("/cliente/logar", HttpMethod.POST, corpoRequisicao, ClienteLogin.class);
		assertEquals(HttpStatus.OK, corpoResposta.getStatusCode());
		
	}
	
	@Test
	@Order(7)
	@DisplayName("Não deve cadastrar um cliente menor de idade")
	public void clienteMenorIdade() throws ParseException
	{
		Date dataFormatada = formato.parse("01/01/2005");
		
		HttpEntity<Cliente> requisicao = new HttpEntity<Cliente>(new Cliente(0L,"teste@gmail.com","123456789","teste", dataFormatada));
		ResponseEntity<Cliente> resposta = testRestTemplate
				.exchange("/cliente/cadastrar",HttpMethod.POST,requisicao,Cliente.class);
		
		assertEquals(HttpStatus.BAD_REQUEST, resposta.getStatusCode());
		
	}

}

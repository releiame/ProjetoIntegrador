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
		
		HttpEntity<Cliente> requisicao = new HttpEntity<Cliente>(new Cliente(0L,"teste@gmail.com","123456789","teste","1122223333", dataFormatada));
		ResponseEntity<Cliente> resposta = testRestTemplate
				.exchange("/cliente/cadastrar",HttpMethod.POST,requisicao,Cliente.class);
		
		assertEquals(HttpStatus.CREATED,resposta.getStatusCode());
		assertEquals(requisicao.getBody().getEmail(),resposta.getBody().getEmail());
		assertEquals(requisicao.getBody().getNome(),resposta.getBody().getNome());
		assertEquals(requisicao.getBody().getTelefone(),resposta.getBody().getTelefone());
		assertEquals(requisicao.getBody().getDataNascimento(),resposta.getBody().getDataNascimento());
		
	}
	
	@Test
	@Order(2)
	@DisplayName("Não deve permitir duplicação de usuário")
	public void naoDeveDuplicarUsuario() throws ParseException
	{ 
		Date dataFormatada = formato.parse("01/01/2000");
		
		clienteService.CadastrarCliente(new Cliente(0L,"teste2@gmail.com","1234567891","teste2","1122223333", dataFormatada));
		HttpEntity<Cliente> requisicao = new HttpEntity<Cliente>(new Cliente(0L,"teste2@gmail.com","1234567891","teste2","1122223333", dataFormatada));
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
		
		Optional<Cliente> clienteCreate = clienteService.CadastrarCliente(new Cliente(0L,
				"teste2@gmail.com","1234567891","teste2","1122223333", dataFormatada));
		if(clienteCreate.isPresent()) {
		Cliente clienteUpdate = new Cliente(clienteCreate.get().getId_cliente(),
				"testeAtualizado2@gmail.com","1234567891","testeAtualizado2","1122223333", dataFormatada);
		HttpEntity<Cliente> requisicao = new HttpEntity<Cliente>(clienteUpdate);
		ResponseEntity<Cliente> resposta = testRestTemplate
				.withBasicAuth("root", "root")
				.exchange("/cliente/cadastrar",HttpMethod.PUT,requisicao,Cliente.class);
		assertEquals(HttpStatus.OK,resposta.getStatusCode());
		assertEquals(clienteUpdate.getEmail(),resposta.getBody().getEmail());
		assertEquals(clienteUpdate.getNome(),resposta.getBody().getNome());
		assertEquals(clienteUpdate.getTelefone(),resposta.getBody().getTelefone());
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
		
		clienteService.CadastrarCliente(new Cliente(0L,"teste@gmail.com","123456789","teste","1122223333", dataFormatada));
		clienteService.CadastrarCliente(new Cliente(0L,"teste2@gmail.com","1234567891","teste2","1122223333", dataFormatada));
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
		
		Optional<Cliente> clienteBusca = clienteService.CadastrarCliente(new Cliente(0L,"teste@gmail.com","123456789","teste","1122223333", dataFormatada));
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
		
		clienteService.CadastrarCliente(new Cliente(0L,"teste@gmail.com","123456789","teste","1122223333", dataFormatada));
		HttpEntity<ClienteLogin> corpoRequisicao = new HttpEntity<ClienteLogin>(new ClienteLogin(0L, "teste@gmail.com", "123456789", "", "", "", dataFormatada));
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
		
		HttpEntity<Cliente> requisicao = new HttpEntity<Cliente>(new Cliente(0L,"teste@gmail.com","123456789","teste","1122223333", dataFormatada));
		ResponseEntity<Cliente> resposta = testRestTemplate
				.exchange("/cliente/cadastrar",HttpMethod.POST,requisicao,Cliente.class);
		
		assertEquals(HttpStatus.BAD_REQUEST, resposta.getStatusCode());
		
	}
	
	
	
	
	
	
	
	

}

package com.projetointegrador.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

import com.projetointegrador.model.Cliente;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class ClienteRepositoryTest {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@BeforeAll
	void start() throws ParseException
	{
		SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
		
		Date dataFormatada = formato.parse("01/01/2000");
		
		
		clienteRepository.deleteAll();
		clienteRepository.save(new Cliente(0L,"testt@gmail.com","123456789","testt", dataFormatada));
		clienteRepository.save(new Cliente(0L,"teste1@gmail.com","1234567891","Teste1", dataFormatada));
		clienteRepository.save(new Cliente(0L,"teste2@gmail.com","1234567892","Teste2", dataFormatada));
		clienteRepository.save(new Cliente(0L,"teste3@gmail.com","1234567893","Teste3", dataFormatada));
		
	}
	
	@Test
	@DisplayName("Retorna 1 cliente")
	public void deveRetornarCliente()
	{
		Optional<Cliente> cliente = clienteRepository.findByEmail("testt@gmail.com");
		assertTrue(cliente.get().getEmail().equals("testt@gmail.com"));
	}
	
	@Test
	@DisplayName("Retorna 3 cliente")
	public void deveRetornarTresClientes()
	{
		List<Cliente> listaDeClientes = clienteRepository.findAllByNomeContainingIgnoreCase("Teste");
		assertEquals(3,listaDeClientes.size());
		assertTrue(listaDeClientes.get(0).getNome().equals("Teste1"));
		assertTrue(listaDeClientes.get(1).getNome().equals("Teste2"));
		assertTrue(listaDeClientes.get(2).getNome().equals("Teste3"));
	}

}

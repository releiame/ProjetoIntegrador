package com.projetointegrador.controller;

import java.text.ParseException;

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

import com.projetointegrador.repository.FuncionarioRepository;
import com.projetointegrador.service.FuncionarioService;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class FuncionarioControllerTest {
	
	@Autowired
	private TestRestTemplate testRestTemplate;
	
	@Autowired
	private FuncionarioService service;
	
	@Autowired
	private FuncionarioRepository repository;
	
	@BeforeAll
	void start()
	{
		repository.deleteAll();
	}
	
	@Test
	@Order(1)
	@DisplayName("Logar")
	public void deveLogarFuncionario() throws ParseException
	{
		
	}

}

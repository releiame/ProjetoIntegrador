package com.projetointegrador.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetointegrador.model.Cliente;
import com.projetointegrador.model.ClienteLogin;
import com.projetointegrador.repository.ClienteRepository;
import com.projetointegrador.service.ClienteService;

@RestController
@RequestMapping("/cliente")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class ClienteController {
	
	@Autowired
	private ClienteRepository repository;
	
	@Autowired
	private ClienteService clienteService;
	
	@GetMapping("/listartodos")
	public ResponseEntity <List<Cliente>> getAll(){
		return ResponseEntity.ok(repository.findAll());
		
	}
	
	@GetMapping("/{id_cliente}")
	public ResponseEntity<Cliente> getById(@PathVariable long id_cliente) {
		return repository.findById(id_cliente)
			.map(resposta -> ResponseEntity.ok(resposta))
			.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping("/logar")
	public ResponseEntity<ClienteLogin> Autentication(@RequestBody Optional<ClienteLogin> user)
	{
		return clienteService.Logar(user).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
	}
	
	@PostMapping("/cadastrar")
	public ResponseEntity<Cliente> PostCliente(@Valid @RequestBody Cliente cliente)
	{
		return clienteService.CadastrarCliente(cliente)
				.map(resposta -> ResponseEntity.status(HttpStatus.CREATED).body(resposta))
				.orElse(ResponseEntity.status(HttpStatus.BAD_REQUEST).build());
	}
	
	@PutMapping("/atualizar")
	public ResponseEntity<Cliente> putCliente(@Valid @RequestBody Cliente cliente) {
		return clienteService.atualizarCliente(cliente)
			.map(resposta -> ResponseEntity.status(HttpStatus.OK).body(resposta))
			.orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
		
	}
	
}

package com.projetointegrador.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetointegrador.model.Carrinho;
import com.projetointegrador.repository.CarrinhoRepository;

@RestController
@RequestMapping("/carrinho")
@CrossOrigin("*")
public class CarrinhoController {

	@Autowired
	private CarrinhoRepository carrinhoRepository;

	@GetMapping
	public ResponseEntity<List<Carrinho>> GetAll() {
		return ResponseEntity.ok(carrinhoRepository.findAll());
	}

	@GetMapping("/{id_carrinho}")
	public ResponseEntity<Carrinho> GetById(@PathVariable long id_carrinho) {
		return carrinhoRepository.findById(id_carrinho).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}


	@PostMapping
	public ResponseEntity<Carrinho> post(@RequestBody Carrinho carrinho) {
		return ResponseEntity.status(HttpStatus.CREATED).body(carrinhoRepository.save(carrinho));
	}

	@PutMapping
	public ResponseEntity<Carrinho> put(@RequestBody Carrinho carrinho) {
		return ResponseEntity.status(HttpStatus.OK).body(carrinhoRepository.save(carrinho));

	}

	@DeleteMapping("/{id_carrinho}")
	public void delete(@PathVariable long id_carrinho) {
		carrinhoRepository.deleteById(id_carrinho);

	}
}

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

import com.projetointegrador.model.Funcionario;
import com.projetointegrador.model.Livros;
import com.projetointegrador.repository.FuncionarioRepository;
import com.projetointegrador.repository.LivrosRepository;

@RestController
@RequestMapping("/funcionario")
@CrossOrigin("*")
public class FuncionarioController {
	
	@Autowired
	private FuncionarioRepository repository;
	
	@Autowired
	private LivrosRepository repositoryLivros;
	
	@GetMapping
	public ResponseEntity<List<Funcionario>>GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id_funcionario}")
	public ResponseEntity<Funcionario> GetById(@PathVariable long id_funcionario){
		return repository.findById(id_funcionario)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/codf/{codf}")
	public ResponseEntity<List<Funcionario>> GetByCodf(@PathVariable int codf){
		return ResponseEntity.ok(repository.findAllByCodfContainingIgnoreCase(codf));
	}
	
	@PostMapping
	public ResponseEntity<Funcionario> post (@RequestBody Funcionario funcionario){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(funcionario));
	}
	
	@PutMapping
	public ResponseEntity<Funcionario> put (@RequestBody Funcionario funcionario){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(funcionario));
	}
	
	@DeleteMapping("/{id_funcionario}")
	public void delete(@PathVariable long id_funcionario) {
		repository.deleteById(id_funcionario);
	}
	
	//CRUD dos Livros
	
	@GetMapping
	public ResponseEntity<List<Livros>>GetAllLivros(){
		return ResponseEntity.ok(repositoryLivros.findAll());
	}
	
	@GetMapping("/{id_livros}")
	public ResponseEntity<Livros> GetByIdLivros(@PathVariable long id_livros){
		return repositoryLivros.findById(id_livros)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/titulo/{titulo}")
	public ResponseEntity<List<Livros>> GetByTitulo(@PathVariable String titulo){
		return ResponseEntity.ok(repositoryLivros.findAllByTituloContainingIgnoreCase(titulo));
	}
	
	@PostMapping
	public ResponseEntity<Livros> post (@RequestBody Livros livros){
		return ResponseEntity.status(HttpStatus.CREATED).body(repositoryLivros.save(livros));
	}
	
	@DeleteMapping("/{id_livros}")
	public void deleteLivros(@PathVariable long id_livros) {
		repositoryLivros.deleteById(id_livros);
	}
	
	@PutMapping
	public ResponseEntity<Livros> put (@RequestBody Livros livros){
		return ResponseEntity.status(HttpStatus.OK).body(repositoryLivros.save(livros));
	}

}
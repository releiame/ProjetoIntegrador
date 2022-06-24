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

import com.projetointegrador.model.Tag;
import com.projetointegrador.repository.TagRepository;
import com.projetointegrador.service.TagService;

@RestController
@RequestMapping("/tag")
@CrossOrigin("*")
public class TagController {
	
	@Autowired
	private TagRepository repository;
	
	@Autowired
	private TagService service;
	
	@GetMapping
	public ResponseEntity<List<Tag>>GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id_tag}")
	public ResponseEntity<Tag> GetById(@PathVariable long id_tag){
		return repository.findById(id_tag)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("nome/{nome}")
	public ResponseEntity<List<Tag>> GetByNome (@PathVariable String nome){
		return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome));
	}

	@PostMapping("/cadastrar")
	public ResponseEntity<Tag> post (@RequestBody Tag tag){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(tag));
	}
	
	@PutMapping("/alterar")
	public ResponseEntity<Tag> put (@RequestBody Tag tag){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(tag));
	}
	
	@DeleteMapping("/{id_tag}")
	public void delete(@PathVariable long id_tag) {
		repository.deleteById(id_tag);
	}
}

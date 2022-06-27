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

import com.projetointegrador.model.Etiqueta;
import com.projetointegrador.repository.EtiquetaRepository;
import com.projetointegrador.service.EtiquetaService;

@RestController
@RequestMapping("/etiqueta")
@CrossOrigin("*")
public class EtiquetaController {
	
	@Autowired
	private EtiquetaRepository repository;
	
	@Autowired
	private EtiquetaService service;
	
	@GetMapping("/listartodos")
	public ResponseEntity<List<Etiqueta>>GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id_etiqueta}")
	public ResponseEntity<Etiqueta> GetById(@PathVariable long id_etiqueta){
		return repository.findById(id_etiqueta)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<Etiqueta>> GetByNome (@PathVariable String nome){
		return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome));
	}

	@PostMapping("/cadastrar")
	public ResponseEntity<Etiqueta> post (@RequestBody Etiqueta etiqueta){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(etiqueta));
	}
	
	@PutMapping("/alterar")
	public ResponseEntity<Etiqueta> put (@RequestBody Etiqueta etiqueta){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(etiqueta));
	}
	
	@DeleteMapping("/{id_etiqueta}")
	public void delete(@PathVariable long id_etiqueta) {
		repository.deleteById(id_etiqueta);
	}
	
	/*@DeleteMapping("remover_etiqueta/{id_etiqueta}/livro/{id_livros}")
	public void putTag(@PathVariable long id_etiqueta, @PathVariable long id_livros) {
		service.DeletarTag(id_etiqueta, id_livros);
	}*/
	
}

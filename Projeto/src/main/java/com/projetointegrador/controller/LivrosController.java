package com.projetointegrador.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
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
import com.projetointegrador.model.Pedido;
import com.projetointegrador.model.Etiqueta;
import com.projetointegrador.repository.FuncionarioRepository;
import com.projetointegrador.repository.LivrosRepository;
import com.projetointegrador.repository.PedidoRepository;
import com.projetointegrador.repository.EtiquetaRepository;
import com.projetointegrador.service.LivroService;
import com.projetointegrador.service.PedidoService;

@RestController
@RequestMapping("/livros")
@CrossOrigin("*")
public class LivrosController {
	
	@Autowired
	private LivrosRepository repositoryLivros;
	
	@Autowired
	private FuncionarioRepository funcionarioRepository;
	
	@Autowired
	private PedidoRepository pedidoRepository;
	
	@Autowired
	private EtiquetaRepository etiquetaRepository;
	
	@Autowired
	private LivroService service;
	
	@GetMapping
	public ResponseEntity<List<Livros>>GetAll(){
		return ResponseEntity.ok(repositoryLivros.findAll());
	}
	
	@GetMapping("/{id_livros}")
	public ResponseEntity<Livros> GetById(@PathVariable long id_livros){
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
	
	@PutMapping("/livro_pedido/livros/{id_livros}/pedido/{id_pedido}")
	public ResponseEntity<Livros> putLivros(@PathVariable long id_livros, @PathVariable long id_pedido){
		return ResponseEntity.ok(service.AdicionarMais(id_pedido, id_livros));
	}
	
	@PutMapping("adicionar_etiqueta/livros/{id_livros}/etiqueta/{id_etiqueta}")
	public ResponseEntity<Livros> putTag(@PathVariable long id_livros, @PathVariable long id_etiqueta){
		return ResponseEntity.ok(service.AdicionarTag(id_livros, id_etiqueta));
	}
}

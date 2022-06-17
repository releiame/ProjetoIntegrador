package com.projetointegrador.controller;

import java.util.List;
import java.util.Optional;

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

import com.projetointegrador.model.Cliente;
import com.projetointegrador.model.Livros;
import com.projetointegrador.model.Pedido;
import com.projetointegrador.repository.ClienteRepository;
import com.projetointegrador.repository.LivrosRepository;
import com.projetointegrador.repository.PedidoRepository;
import com.projetointegrador.service.LivroService;
import com.projetointegrador.service.PedidoService;

@RestController
@RequestMapping("/pedidos")
@CrossOrigin("*")
public class PedidoController {

	@Autowired
	private PedidoRepository repositoryPedido;
	
	@Autowired
	private PedidoService pedidoService;
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private LivrosRepository livroRepository;
	
	@Autowired
	private LivroService service;
	
	@GetMapping
	public ResponseEntity<List<Pedido>>GetAll(){
		return ResponseEntity.ok(repositoryPedido.findAll());
	}
	
	@GetMapping("/{id_pedido}")
	public ResponseEntity<Pedido> GetById(@PathVariable long id_pedido){
		return repositoryPedido.findById(id_pedido)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public ResponseEntity<Pedido> post (@RequestBody Pedido pedido){
		Cliente cliente = clienteRepository.getById(pedido.getCliente().getId_cliente());
		pedido.setCliente(cliente);
		pedidoService.AdicionarLivroPedido(pedido);
		pedidoService.calcularValor(pedido);
		return ResponseEntity.status(HttpStatus.CREATED).body(repositoryPedido.save(pedido));
	}
	
	@DeleteMapping("/{id_pedido}")
	public void deletePedido(@PathVariable long id_pedido) {
		repositoryPedido.deleteById(id_pedido);
	}
	
	@PutMapping
	public ResponseEntity<Pedido> put (@RequestBody Pedido pedido){
		return ResponseEntity.status(HttpStatus.OK).body(repositoryPedido.save(pedido));
	}
	
	@DeleteMapping("livros_pedido/livros/{id_livros}/pedido/{id_pedido}")
	public void putLivro(@PathVariable long id_livros, @PathVariable long id_pedido) {
		service.deletarLivro(id_livros, id_pedido);
	}
	
}

package com.projetointegrador.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.projetointegrador.model.Livros;
import com.projetointegrador.model.Pedido;
import com.projetointegrador.repository.LivrosRepository;
import com.projetointegrador.repository.PedidoRepository;

@Service
@Component
public class PedidoService {
	
	@Autowired
	private LivrosRepository livroRepository;
	
	@Autowired
	private PedidoRepository pedidoRepository;
	
	private Livros livro = new Livros();
	
	private List<Livros> livros = new ArrayList<Livros>();
	
	public void AdicionarLivroPedido(Pedido pedido) {
		
		List<Livros> carrinho = new ArrayList<Livros>();
		List<Pedido> p = new ArrayList<Pedido>();
		p.add(pedido);
		
		for(int i = 0; i<pedido.getLivros().size(); i++) {
			livro = livroRepository.getById(pedido.getLivros().get(i).getId_livros());
			carrinho.add(livro);
			livro.setQtdeEstoque(livro.getQtdeEstoque() - 1);
		}
		
		livro.setPedido(p);
		pedido.setLivros(carrinho);
		
		
	}
	/*
	public void RemovendoLivro(Pedido pedido, Livros livro) {
		
		for(int i = 0; i<pedido.getLivros().size(); i++) {
			if(pedido.getLivros().get(i).equals(livro)) {
				pedido.getLivros().remove(i);
				livro.setQtdeEstoque(livro.getQtdeEstoque() + 1);
				break;
			}
		}
	}
	
	public void adicionarLivro(Livros livro, Pedido pedido) {
		pedido.getLivros().add(livro);
		livro.getPedido().add(pedido);
	}*/
	
}

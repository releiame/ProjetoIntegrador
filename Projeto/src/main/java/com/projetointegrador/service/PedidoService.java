package com.projetointegrador.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.projetointegrador.model.Cliente;
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
	
	public void AdicionarLivroPedido(Pedido pedido) {
		
		List<Livros> carrinho = new ArrayList<Livros>();
		
		for(int i = 0; i<pedido.getLivros().size(); i++) {
			livro = livroRepository.getById(pedido.getLivros().get(i).getId_livros());
			carrinho.add(livro);
		}
		
		pedido.setLivros(carrinho);
		
	}
	
	public void calcularValor(Pedido pedido){
		
		Double valor = 0.;
		
		for(int i=0; i<pedido.getLivros().size(); i++) {
			livro = pedido.getLivros().get(i);
			valor += livro.getQtdePedido()*livro.getValorUnitario();
		}
		
		pedido.setValorTotal(valor);	
	}
	
	public void checarEstoque(Livros livro) {
		for(int i = 0; i<livroRepository.count(); i++) {
			livro = livroRepository.getById((long) i);
			if(livro.getQtdeEstoque() == 0) {
				livro.setTemEstoque(false);
			}
		}
	}
	
	/*
	public void AdicionarLivro(Livros livro, Pedido pedido) {
		List<Livros> carrinho = new ArrayList<Livros>();
		carrinho = pedido.getLivros();
		carrinho.add(livro);
		livro.setQtdeEstoque(livro.getQtdeEstoque() - 1);
		livroRepository.save(livro);
	}*/
	
	
	
	
}

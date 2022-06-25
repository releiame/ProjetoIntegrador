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
		pedido.setValorTotal(0.);
		
		for(int i = 0; i<pedido.getLivros().size(); i++) {
			livro = livroRepository.getById(pedido.getLivros().get(i).getId_livros());
			carrinho.add(livro);
			livro.setQtdeEstoque(livro.getQtdeEstoque() - 1);
			pedido.setValorTotal(livro.getValorUnitario() + pedido.getValorTotal());
		}
		
		livro.setPedido(p);
		pedido.setLivros(carrinho);
		
		
	}
	
}

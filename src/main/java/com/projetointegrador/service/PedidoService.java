package com.projetointegrador.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
	
	public Pedido AdicionarLivroPedido(Pedido pedido) {
		
		List<Livros> carrinho = new ArrayList<Livros>();
		pedido.setValorTotal(0.);
		
		for(int i = 0; i<pedido.getLivros().size(); i++) {
			Optional<Livros> livro = livroRepository.findById(pedido.getLivros().get(i).getId_livros());
			if(livro.get().getQtdeEstoque() <= 0) {
				livro.get().setQtdeEstoque(50);
			}
			carrinho.add(livro.get());
			livro.get().setQtdeEstoque(livro.get().getQtdeEstoque() - 1);
			pedido.setValorTotal(livro.get().getValorUnitario() + pedido.getValorTotal());
			livro.get().getPedido().add(pedido);
		}
		
		pedido.setLivros(carrinho);
		
		return pedidoRepository.save(pedido);		
		
	}
	
	
	
}

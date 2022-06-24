package com.projetointegrador.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.management.RuntimeErrorException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.projetointegrador.model.Livros;
import com.projetointegrador.model.Pedido;
import com.projetointegrador.model.Tag;
import com.projetointegrador.repository.LivrosRepository;
import com.projetointegrador.repository.PedidoRepository;
import com.projetointegrador.repository.TagRepository;

@Service
@Component
public class LivroService {
	
	@Autowired
	private LivrosRepository livroRepository;
	
	@Autowired
	private PedidoRepository pedidoRepository;
	
	@Autowired
	private PedidoService pedidoService;
	
	@Autowired
	private TagRepository repository;
	
	private Tag tag = new Tag();

	double a = 0;
	
	public Livros AdicionarTag(long id_livros, long id_tag) {
		
		Optional<Livros> livro = livroRepository.findById(id_livros);
		Optional<Tag> tag = repository.findById(id_tag);
		
		livro.get().setTag(tag.get());
		
		livroRepository.save(livro.get());
		repository.save(tag.get());
		
		return livroRepository.save(livro.get());
		
	}
	
	public Livros AdicionarMais(long id_pedido, long id_livros) {
		
		//Fazendo a busca pelos ID's recebidos e adicionando os respectivos objetos em Optionals
		Optional<Livros> livro = livroRepository.findById(id_livros);
		Optional<Pedido> pedido = pedidoRepository.findById(id_pedido);
		
		if(livro.isPresent() && pedido.isPresent() && livro.get().getQtdeEstoque() == 0) {
			livro.get().setQtdeEstoque(50);
		}
		
		//Verificando se o Optional Livro e Pedido não estão vazios
		if(livro.isPresent() && pedido.isPresent() && livro.get().getQtdeEstoque() >= 0 && !(pedido.get().getLivros().isEmpty())) {
			
			//Adicionando o Pedido ao Livro
			livro.get().getPedido().add(pedido.get());
			
			int qtde = 0;
			
			//Criando um vetor com o tamanho da lista de Livros na classe Pedido
			long[] vetor = new long[pedido.get().getLivros().size()];
			
			//Fazendo um for até o tamanho da Lista de Livros na classe Pedido
			for(int i = 0; i< pedido.get().getLivros().size(); i++) {
				
				//Adicionando a respectiva posição "i" do Array "vetor" com o respectiva posição "i" da lista de Livros da classe Pedido
				vetor [i] = pedido.get().getLivros().get(i).getId_livros();
				
				//Comparando o ID que está na posição do vetor com o ID do livro que foi pego no inicio do código pelo Optional
				if(vetor[i] == livro.get().getId_livros()) {
					//Se for igual ele aumenta a variavel "qtde" em 1
					qtde++;
				}
			}
			pedido.get().setValorTotal(pedido.get().getValorTotal() - (livro.get().getValorUnitario() * qtde));
			
			qtde++;
			livro.get().setQtdePedidoLivro(qtde);
			livro.get().setQtdeEstoque(livro.get().getQtdeEstoque() - 1);
			
			pedido.get().setValorTotal(pedido.get().getValorTotal() + (livro.get().getValorUnitario() * livro.get().getQtdePedidoLivro()));
			
			livroRepository.save(livro.get());
			pedidoRepository.save(pedido.get());
			pedidoRepository.save(pedido.get()).getValorTotal();
			
			return livroRepository.save(livro.get());
			
		}else if(livro.isPresent() && pedido.isPresent()) {
			
			livro.get().getPedido().add(pedido.get());
			
			livro.get().setQtdePedidoLivro(1);
			
			livro.get().setQtdeEstoque(livro.get().getQtdeEstoque() - 1);
			
			pedido.get().setValorTotal(pedido.get().getValorTotal() + (livro.get().getValorUnitario() * livro.get().getQtdePedidoLivro()));
		
			livroRepository.save(livro.get());
			pedidoRepository.save(pedido.get());
			pedidoRepository.save(pedido.get()).getValorTotal();
			
			return livroRepository.save(livro.get());
		}
		
		return null;
	}
	
	public void deletarLivro(long id_livros, long id_pedido) {
		
		Optional<Livros> livro = livroRepository.findById(id_livros);
		Optional<Pedido> pedido = pedidoRepository.findById(id_pedido);
		
		if(pedido.get().getLivros().contains(livro.get())) {
			livro.get().getPedido().remove(pedido.get());
			
			livro.get().setQtdeEstoque(livro.get().getQtdeEstoque() + 1);
			
			int qtde = 0;
			
			long[] vetor = new long[pedido.get().getLivros().size()];
			
			for(int i = 0; i< pedido.get().getLivros().size(); i++) {
				
				vetor [i] = pedido.get().getLivros().get(i).getId_livros();
				
				if(vetor[i] == livro.get().getId_livros()) {
					qtde++;
				}
			}
			
			livro.get().setQtdePedidoLivro(qtde - 1);
			
			pedido.get().setValorTotal(pedido.get().getValorTotal() - livro.get().getValorUnitario());
			
			
			a = pedido.get().getValorTotal();
			a = Math.floor(a * 100) / 100;
				pedido.get().setValorTotal(a);
			
			if(pedido.get().getValorTotal()<0) {
				pedido.get().setValorTotal(0.);
			}
			
			livroRepository.save(livro.get());
			pedidoRepository.save(pedido.get());
			pedidoRepository.save(pedido.get()).getValorTotal();
		}
	}

}

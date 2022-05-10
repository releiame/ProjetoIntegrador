package com.projetointegrador.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Carrinho {

	@OneToMany(mappedBy = "carrinho")
	private List<Livros> produtosCarrinho;
	private Double valorTotal;
	private int quantidadeDeProdutos;
	@OneToOne
	private Cliente cliente;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_carrinho;

	public Carrinho(List<Livros> produtosCarrinho, Double valorTotal, int quantidadeDeProdutos, Cliente cliente,
			Long id_carrinho) {
		this.produtosCarrinho = produtosCarrinho;
		this.valorTotal = valorTotal;
		this.quantidadeDeProdutos = quantidadeDeProdutos;
		this.cliente = cliente;
		this.id_carrinho = id_carrinho;
	}

	public List<Livros> getProdutosCarrinho() {
		return produtosCarrinho;
	}

	public void setProdutosCarrinho(List<Livros> produtosCarrinho) {
		this.produtosCarrinho = produtosCarrinho;
	}

	public Double getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(Double valorTotal) {
		this.valorTotal = valorTotal;
	}

	public int getQuantidadeDeProdutos() {
		return quantidadeDeProdutos;
	}

	public void setQuantidadeDeProdutos(int quantidadeDeProdutos) {
		this.quantidadeDeProdutos = quantidadeDeProdutos;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public Long getId_carrinho() {
		return id_carrinho;
	}

	public void setId_carrinho(Long id_carrinho) {
		this.id_carrinho = id_carrinho;
	}
	
	
	
	
	
}

package com.projetointegrador.projetointegrador.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tb_pedido")
public class Pedido {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_pedido;
	
	@ManyToOne
	private long id_cliente;
	
	@OneToMany
	private long id_livros;
	
	private int qtde_pedido;

	public long getId_pedido() {
		return id_pedido;
	}

	public void setId_pedido(long id_pedido) {
		this.id_pedido = id_pedido;
	}

	public long getId_cliente() {
		return id_cliente;
	}

	public void setId_cliente(long id_cliente) {
		this.id_cliente = id_cliente;
	}

	public long getId_livros() {
		return id_livros;
	}

	public void setId_livros(long id_livros) {
		this.id_livros = id_livros;
	}

	public int getQtde_pedido() {
		return qtde_pedido;
	}

	public void setQtde_pedido(int qtde_pedido) {
		this.qtde_pedido = qtde_pedido;
	}
}

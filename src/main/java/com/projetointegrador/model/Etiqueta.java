package com.projetointegrador.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_etiqueta")
public class Etiqueta {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_etiqueta;
	
	@NotNull
	private String nome;
	
	
	@OneToMany(mappedBy = "etiqueta", cascade = CascadeType.MERGE)
	@JsonIgnoreProperties({"capa", "descricao", "autor", "qtdeEstoque", "temEstoque", "isbn", 
		"valorUnitario", "qtdePedidoLivro", "etiqueta", "pedido", "funcionario"})
	private List<Livros> livros;

	public Long getId_etiqueta() {
		return id_etiqueta;
	}

	public void setId_etiqueta(Long id_etiqueta) {
		this.id_etiqueta = id_etiqueta;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public List<Livros> getLivros() {
		return livros;
	}

	public void setLivros(List<Livros> livros) {
		this.livros = livros;
	}

}

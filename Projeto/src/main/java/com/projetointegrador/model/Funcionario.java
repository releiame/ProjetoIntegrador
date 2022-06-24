package com.projetointegrador.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_funcionario", uniqueConstraints={@UniqueConstraint(columnNames={"codf"})})
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Funcionario{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_funcionario;
	
	@NotNull
	@Column(unique = true)
	private String codf;
	
	@NotNull
	@Size(min = 8)
	private String senha;
	
	@NotNull
	@Size(min = 4, max = 100)
	private String nome;
	
	@OneToMany(mappedBy = "funcionario", cascade = CascadeType.ALL)
	@JsonIgnoreProperties({"funcionario", "capa", "descricao", "autor", "qtdeEstoque", "temEstoque", "isbn", "valorUnitario", "qtdePedidoLivro", "tag", "pedido"})
	private List<Livros> livros;
	
	//CRIANDO OS CONSTRUTORES
	
	public Funcionario(Long id_funcionario, String codf, String senha, String nome, List<Livros> livros) {
		this.id_funcionario = id_funcionario;
		this.codf = codf;
		this.senha = senha;
		this.nome = nome;
		this.livros = livros;
	}

	public Funcionario() {
		
	}
	
	//CRIANDO OS GETTERS E SETTERS
	
	public Long getId_funcionario() {
		return id_funcionario;
	}

	public void setId_funcionario(Long id_funcionario) {
		this.id_funcionario = id_funcionario;
	}

	public String getCodf() {
		return codf;
	}
	
	public void setCodf(String codf) {
		this.codf = codf;
	}
	
	public String getSenha() {
		return senha;
	}
	
	public void setSenha(String senha) {
		this.senha = senha;
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

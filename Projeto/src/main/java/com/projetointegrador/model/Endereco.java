package com.projetointegrador.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table (name = "tb_endereco")
public class Endereco {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_endereco;
	
	@NotNull
	@Size(min = 5, max = 15)
	private String cep;
	
	@NotNull
	private int numero;

	private String complemento;
	
	@NotNull
	@Size(min = 5, max = 50)
	private String bairro;
	
	@NotNull
	@Size(min = 5, max = 50)
	private String rua;
	
	@NotNull
	@Size(min = 5, max = 50)
	private String cidade;
	
	@NotNull
	@Size(min = 4, max = 15)
	private String nome_endereco;
	
	@ManyToOne//Indicando que é um relacionamento "muitos para um"
	@JsonIgnoreProperties({"id_cliente","senha","pedido","endereco"})
	@JoinColumn(name = "id_cliente")
	private Cliente cliente;
	
	//CRIANDO OS GETTERS E SETTERS

	public Long getId_endereco() {
		return id_endereco;
	}

	public void setId_endereco(Long id_endereco) {
		this.id_endereco = id_endereco;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getRua() {
		return rua;
	}

	public void setRua(String rua) {
		this.rua = rua;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getNome_endereco() {
		return nome_endereco;
	}

	public void setNome_endereco(String nome_endereco) {
		this.nome_endereco = nome_endereco;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

}

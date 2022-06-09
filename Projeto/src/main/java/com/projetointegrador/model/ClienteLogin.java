package com.projetointegrador.model;

import java.util.Date;

public class ClienteLogin {
	
	private Long id_cliente;
	private String email;
	private String senha;
	private String nome;
	private String telefone;
	private String token;
	private Date dataNascimento;
	
	public ClienteLogin(Long id_cliente, String email, String senha, String nome, String telefone, String token,
			Date dataNascimento) {
		this.id_cliente = id_cliente;
		this.email = email;
		this.senha = senha;
		this.nome = nome;
		this.telefone = telefone;
		this.token = token;
		this.dataNascimento = dataNascimento;
	}
	
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public Long getId_cliente() {
		return id_cliente;
	}
	public void setId_cliente(Long id_cliente) {
		this.id_cliente = id_cliente;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public Date getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}
	
}

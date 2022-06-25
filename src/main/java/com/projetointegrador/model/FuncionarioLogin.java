package com.projetointegrador.model;

public class FuncionarioLogin {

	private Long id_funcionario;
	private String codf;
	private String senha;
	private String nome;
	private String token;

	public FuncionarioLogin(Long id_funcionario, String codf, String senha, String nome, String token) {
		this.id_funcionario = id_funcionario;
		this.codf = codf;
		this.senha = senha;
		this.nome = nome;
		this.token = token;
	}

	public Long getId_funcionario() {
		return id_funcionario;
	}

	public void setId_funcionario(Long id_funcionario) {
		this.id_funcionario = id_funcionario;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
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
}

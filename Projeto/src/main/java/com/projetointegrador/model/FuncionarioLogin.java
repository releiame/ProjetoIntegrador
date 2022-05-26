package com.projetointegrador.model;

public class FuncionarioLogin {

	private int codf;
	private String senha;
	private String nome;
	private String telefone;
	private String token;

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;

	}

	public int getCodf() {
		return codf;
	}

	public void setCodf(int codf) {
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

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
}

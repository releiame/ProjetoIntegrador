package com.projetointegrador.model;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.swagger.v3.oas.annotations.media.Schema;

@Entity //Indicando ao SPRING a classe é uma entidade
@Table(name = "tb_cliente") //Nome que vai ser dado a tabela no banco de dados
public class Cliente {
	
	@Id //Indicando que é a chave primaria
	@GeneratedValue(strategy = GenerationType.IDENTITY) //Para fazer o auto-incremendo do ID na tabela no banco de dados
	private long id_cliente;
	
	@NotNull(message = "O atributo cliente é obrigatório") //Obrigando o campo a não ser nulo
	@Schema(example = "email@email.com")
	@Email(message = "O atributo cliente deve ser um e-mail válido")
	private String email;
	
	@NotNull
	@Size(min = 3)
	private String senha;
	
	@NotNull
	@Size(min = 5, max = 100)
	private String nome;
	
	@Size(min = 5, max = 15)
	private String telefone;
	
	@NotNull
	private Date dataNascimento;

	@OneToMany(mappedBy = "cliente", cascade = CascadeType.REMOVE)
	@JsonIgnoreProperties("cliente") //Indicando que deve ignorar campos desconhecidos
	private List<Endereco> endereco;
	
	@OneToMany(mappedBy = "cliente", cascade = CascadeType.REMOVE)
	@JsonIgnoreProperties("cliente")
	private List<Pedido> pedido;
	
	//CRIANDO OS CONSTRUTORES
	
	public Cliente(long id_cliente, String email,String senha, String nome, String telefone) {
		this.id_cliente = id_cliente;
		this.email = email;
		this.senha = senha;
		this.nome = nome;
		this.telefone = telefone;
	}
	
	public Cliente() {
		
	}
	
	//CRIANDO OS GETTERS E SETTERS

	public long getId_cliente() {
		return id_cliente;
	}

	public void setId_cliente(long id_cliente) {
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

	public List<Endereco> getEndereco() {
		return endereco;
	}

	public void setEndereco(List<Endereco> endereco) {
		this.endereco = endereco;
	}

	public List<Pedido> getPedido() {
		return pedido;
	}

	public void setPedido(List<Pedido> pedido) {
		this.pedido = pedido;
	}
	
}

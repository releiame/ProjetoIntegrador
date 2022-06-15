package com.projetointegrador.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_tag")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Tag {
	
	@Id
	@GeneratedValue
	private Long id_tag;
	
	@NotNull
	private String nome;
	
	@ManyToMany
	@JsonIgnoreProperties("livros")
	@JoinTable(
			name = "tag_livros", 
			uniqueConstraints = @UniqueConstraint(columnNames = {"tag_fk", "livros_fk"}),
			joinColumns = {@JoinColumn(name = "tag_fk")}, 
			inverseJoinColumns = {@JoinColumn(name = "livro_fk")})
	private List<Livros> livros;

	public Long getId_tag() {
		return id_tag;
	}

	public void setId_tag(Long id_tag) {
		this.id_tag = id_tag;
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

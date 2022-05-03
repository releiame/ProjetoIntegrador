package com.projetointegrador.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projetointegrador.model.ClienteModel;

@Repository
public interface ClienteRepository extends JpaRepository<ClienteModel, Long> {
	
	public Optional<ClienteModel>findByEmail(String email);
	public Optional<ClienteModel>findByTelefone(String telefone);
	public Optional<ClienteModel>findBySenha(String senha);
	public Optional<ClienteModel>findByDataNascimento(String dataNascimento);
	
}
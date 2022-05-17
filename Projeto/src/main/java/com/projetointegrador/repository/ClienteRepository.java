package com.projetointegrador.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.projetointegrador.model.Cliente;

@Repository //Indicando que a interface é um repositório
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
	
	public Optional<Cliente>findByEmail(String email);
	
	public List<Cliente>findAllByNomeContainingIgnoreCase(@Param("nome") String nome);
	
}
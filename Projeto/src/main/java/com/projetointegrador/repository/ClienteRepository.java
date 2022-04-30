package com.projetointegrador.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projetointegrador.model.Cliente;

@Repository //Indicando que a interface é um repositório
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
	
	public List<Cliente>findAllByEmailContainingIgnoreCase(String email);
	
}
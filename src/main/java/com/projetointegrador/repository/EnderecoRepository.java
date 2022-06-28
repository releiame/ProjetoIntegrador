package com.projetointegrador.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.projetointegrador.model.Endereco;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco, Long>{
	
	public Optional<Endereco> findByApelido(String apelido);
	
	public List<Endereco>findAllByCepContainingIgnoreCase(@Param("cep") String cep);
	
}
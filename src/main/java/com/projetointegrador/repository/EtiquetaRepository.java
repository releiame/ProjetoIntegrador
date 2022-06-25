package com.projetointegrador.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.projetointegrador.model.Etiqueta;

@Repository
public interface EtiquetaRepository extends JpaRepository<Etiqueta, Long>{
	
	public Optional<Etiqueta> findByNome(String nome);
	
	public List<Etiqueta>findAllByNomeContainingIgnoreCase(@Param("nome") String nome);

}

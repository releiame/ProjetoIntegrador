package com.projetointegrador.projetointegrador.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projetointegrador.projetointegrador.model.Livros;

@Repository
public interface LivrosRepository extends JpaRepository<Livros, Long>{
	
}
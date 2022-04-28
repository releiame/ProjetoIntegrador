package com.projetointegrador.projetointegrador.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projetointegrador.projetointegrador.model.Funcionario;

@Repository
public interface FuncionarioRepository extends JpaRepository<Funcionario, Long>{
	
}
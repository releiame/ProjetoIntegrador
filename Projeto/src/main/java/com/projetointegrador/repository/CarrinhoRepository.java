package com.projetointegrador.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projetointegrador.model.Carrinho;

@Repository
public interface CarrinhoRepository extends JpaRepository <Carrinho, Long>{

}

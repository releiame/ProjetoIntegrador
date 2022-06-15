package com.projetointegrador.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.projetointegrador.model.Tag;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long>{
	
	public Optional<Tag> findByNome(String nome);
	
	public List<Tag>findAllByNomeContainingIgnoreCase(@Param("nome") String nome);

}

package com.projetointegrador.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projetointegrador.repository.FuncionarioRepository;
import com.projetointegrador.repository.LivrosRepository;

@Service
public class FuncionarioService {
	
	@Autowired
	private FuncionarioRepository repository;
	
	@Autowired
	private LivrosRepository livrosRepository;
	
}

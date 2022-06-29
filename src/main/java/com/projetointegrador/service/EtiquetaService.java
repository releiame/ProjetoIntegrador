package com.projetointegrador.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.projetointegrador.model.Livros;
import com.projetointegrador.model.Pedido;
import com.projetointegrador.model.Endereco;
import com.projetointegrador.model.Etiqueta;
import com.projetointegrador.repository.LivrosRepository;
import com.projetointegrador.repository.EnderecoRepository;
import com.projetointegrador.repository.EtiquetaRepository;

@Service
@Component
public class EtiquetaService {
	
	@Autowired
	private LivrosRepository livroRepository;
	
	@Autowired
	private EtiquetaRepository etiquetaRepository;

}

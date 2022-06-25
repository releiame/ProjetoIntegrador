package com.projetointegrador.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.projetointegrador.model.Livros;
import com.projetointegrador.model.Pedido;
import com.projetointegrador.model.Etiqueta;
import com.projetointegrador.repository.LivrosRepository;
import com.projetointegrador.repository.EtiquetaRepository;

@Service
@Component
public class EtiquetaService {
	
	@Autowired
	private LivrosRepository livroRepository;
	
	@Autowired
	private EtiquetaRepository etiquetaRepository;
	
	/*public void DeletarTag(long id_tag, long id_livros) {
		
		Optional<Livros> livro = livroRepository.findById(id_livros);
		Optional<Etiqueta> etiqueta = etiquetaRepository.findById(id_tag);
		
		if(livro.get().getEtiqueta().contains(etiqueta.get())) {
			livro.get().getEtiqueta().remove(etiqueta.get());
		}
		
		livroRepository.save(livro.get());
		etiquetaRepository.save(etiqueta.get());
		
		
	}*/

}

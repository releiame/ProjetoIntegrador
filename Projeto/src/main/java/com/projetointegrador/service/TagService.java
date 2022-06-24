package com.projetointegrador.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.projetointegrador.model.Livros;
import com.projetointegrador.model.Pedido;
import com.projetointegrador.model.Tag;
import com.projetointegrador.repository.LivrosRepository;
import com.projetointegrador.repository.TagRepository;

@Service
@Component
public class TagService {
	
	@Autowired
	private LivrosRepository livroRepository;
	
	@Autowired
	private TagRepository tagRepository;
	
	public void DeletarTag(long id_tag, long id_livros) {
		
		Optional<Livros> livro = livroRepository.findById(id_livros);
		Optional<Tag> tag = tagRepository.findById(id_tag);
		
		if(livro.get().getTag().contains(tag.get())) {
			livro.get().getTag().remove(tag.get());
		}
		
		livroRepository.save(livro.get());
		tagRepository.save(tag.get());
		
		
	}

}

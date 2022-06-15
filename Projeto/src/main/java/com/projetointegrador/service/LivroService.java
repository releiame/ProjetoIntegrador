package com.projetointegrador.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.projetointegrador.model.Livros;
import com.projetointegrador.model.Tag;
import com.projetointegrador.repository.LivrosRepository;
import com.projetointegrador.repository.TagRepository;

@Service
@Component
public class LivroService {
	
	@Autowired
	private LivrosRepository livroRepository;
	
	@Autowired
	private TagRepository repository;
	
	private Tag tag = new Tag();
	
	public void AdicionarTag(Livros livro) {
		
		List<Tag> t = new ArrayList<Tag>();
		List<Livros> l = new ArrayList<Livros>();
		l.add(livro);
		
		for(int i = 0; i<livro.getTag().size(); i++) {
			tag = repository.getById(livro.getTag().get(i).getId_tag());
			t.add(tag);
		}
		
		tag.setLivros(l);
		livro.setTag(t);
		
	}

}

package com.projetointegrador.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetointegrador.model.Funcionario;
import com.projetointegrador.model.Livros;
import com.projetointegrador.repository.FuncionarioRepository;
import com.projetointegrador.repository.LivrosRepository;

@RestController //Indicando ao Spring que essa classe é um controller
@RequestMapping("/funcionario") //O parametro o qual devo usar para acessar a classe
@CrossOrigin("*") //Para aceitar solicitações de qualquer origem
public class FuncionarioController {
	
	@Autowired //Injeção de dependencia
	private FuncionarioRepository repository;
	
	@GetMapping //Vai dizer que sempre que vier uma requisição externa
	public ResponseEntity<List<Funcionario>>GetAll(){
		return ResponseEntity.ok(repository.findAll());
	} //Metodo para retornar todos o funcionarios cadastrados
	
	@GetMapping("/{id_funcionario}")
	public ResponseEntity<Funcionario> GetById(@PathVariable long id_funcionario){
		return repository.findById(id_funcionario)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	} //Metodo de busca de funcionarios pelo id cadastrado
	
	@GetMapping("/codf/{codf}")
	public ResponseEntity<List<Funcionario>> GetByCodf(@PathVariable int codf){
		return ResponseEntity.ok(repository.findAllByCodfContainingIgnoreCase(codf));
	} //Metodo de busca de funcionario pelo codf cadastrado
	
	@PostMapping
	public ResponseEntity<Funcionario> post (@RequestBody Funcionario funcionario){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(funcionario));
	} //Metodo de cadastro de um funcionario
	
	@PutMapping
	public ResponseEntity<Funcionario> put (@RequestBody Funcionario funcionario){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(funcionario));
	} //Metodo de alteração de dados de um funcionario cadastrado
	
	@DeleteMapping("/{id_funcionario}")
	public void delete(@PathVariable long id_funcionario) {
		repository.deleteById(id_funcionario);
	} //Metodo de exclusão de um funcionario
}

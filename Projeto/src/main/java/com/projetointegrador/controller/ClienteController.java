package com.projetointegrador.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetointegrador.model.ClienteModel;
import com.projetointegrador.services.ClienteService;

@RestController
@RequestMapping("/clientes")
@CrossOrigin(origins = "*", allowedHeaders = "*") //é um mecanismo que usa cabeçalhos adicionais HTTP; origins="*" (Aceita todas Origens: Angular, React); allowedHeaders = "*"(Aceita todos cabeçalhos: Request(Solicitações))
public class ClienteController {

	@Autowired //Injeção de Dependencia da camada usuarioService
	private ClienteService usuarioService;
	
	@PostMapping("/cadastrarUsuario")
	public ResponseEntity<ClienteModel> Post(@RequestBody ClienteModel usuario)
	{
		return ResponseEntity.status(HttpStatus.CREATED)//HttpStatus.CREATED: CREATED(201, Series.SUCCESSFUL, "Created")
			   .body(usuarioService.CadastrarUsuario(usuario));
	}
	
	@GetMapping("/visualizarDados")// Método para visualizar os dados do cliente
	public void visualizarDados() {
			
	}
	
	@PostMapping("/logarUsuario")//Vamos utilizar o @RequestBody para aumentar a segurança
	public ResponseEntity <ClienteModel> Autentication (@RequestBody Optional<ClienteModel> user)
	{
		return usuarioService.LogarUsuario(user).map(resp -> ResponseEntity.ok(resp))
			   .orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());//HttpStatus.UNAUTHORIZED: UNAUTHORIZED(401, Series.CLIENT_ERROR, "Unauthorized"),
	}
		
	@PutMapping("/atualizarEmail")//updateEmail
	public ResponseEntity<ClienteModel> PutEmail(@RequestBody ClienteModel email)
	{
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(usuarioService.atualizarEmail(email));
	}
	
	@PutMapping("/atualizarTelefone")//updateTelefone
	public ResponseEntity<ClienteModel> PutTelefone(@RequestBody ClienteModel telefone)
	{
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(usuarioService.atualizarTelefone(telefone));
	}
	
	@PutMapping("/atualizarSenha")//updateSenha
	public ResponseEntity<ClienteModel> PutSenha(@RequestBody ClienteModel senha)
	{
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(usuarioService.atualizarSenha(senha));
	}
	
	@PostMapping("/dataNascimento")
	public ResponseEntity<ClienteModel> DataNascimento(@RequestBody ClienteModel dataNascimento)
	{
		return ResponseEntity.status(HttpStatus.CREATED)//HttpStatus.CREATED: CREATED(201, Series.SUCCESSFUL, "Created")
			   .body(usuarioService.DataNascimento(dataNascimento));
	}
	
		
	
/*
LINHA 18 - @RestController: é o responsável por controlar as requisições indicando quem deve receber as requisições para quem deve 
		   responde-las. Também pode mandar diretamente no fluxo do response usando a anotação @ResponseBody e concluir a solicitação.
		 
LINHA 19 - @RequestMapping: utilizada tradicionalmente para implementar URL handler, ela suporta os métodos Post, Get, Put, Delete e Pacth.

LINHA 20 - @CrossOrigin: Cross-Origin Resource Sharing (Compartilhamento de recursos com origens diferentes) é um mecanismo que usa 
		   cabeçalhos adicionais HTTP para informar a um navegador que permita que um aplicativo Web seja executado em uma origem 
		   (domínio) com permissão para acessar recursos selecionados de um servidor em uma origem distinta. Um aplicativo Web executa 
		   uma requisição cross-origin HTTP ao solicitar um recurso que tenha uma origem diferente (domínio, protocolo e porta) da sua
		   própria origem.
		   	Onde Cada requisição HTTP pode usar um dos muitos métodos de requisição existente, a versão HTTP/1.1 suporta sete tipos de 
		   requisição: GET, POST, HEAD, OPTIONS, PUT, DELETE e TRACE. GET e POST são os mais usados em aplicações na internet.
		   
LINHA 33 - @RequestBody: Esta anotação é usada para anotar os argumentos do método do manipulador de solicitações, indicando que um 
		   parâmetro de método deve ser associado ao valor do corpo da solicitação HTTP. O HttpMessageConveter é responsável pela 
		   conversão da mensagem de solicitação HTTP para o objeto.
*/
    
    
    
}

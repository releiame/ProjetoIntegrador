package com.projetointegrador.seguranca;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.projetointegrador.model.Cliente;
import com.projetointegrador.model.Funcionario;
import com.projetointegrador.repository.ClienteRepository;
<<<<<<< HEAD
import com.projetointegrador.repository.FuncionarioRepository;
=======

//Indicando que essa é uma classe de serviço
>>>>>>> d788b54a08ae1ce97c85d0b30187e1b60095eb6e

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private ClienteRepository userRepository;
	
<<<<<<< HEAD

=======
	/**
	 * 
	 * Sobrescreve (@Override) o método loadUserByUsername.
	 * 
	 * A implementação de autenticação chama o método loadUserByUsername(String username),
	 * para obter os dados de um usuário com um determinado nome de usuário. 
	 * O nome do usuário deve ser único. O usuário retornado por este método é um objeto
	 * da classe UserDetailsImpl. 
	 * 
	 */
	
>>>>>>> d788b54a08ae1ce97c85d0b30187e1b60095eb6e
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		
		//Busca o cliente no Bancod de dados
		
		Optional<Cliente> user = userRepository.findByEmail(email);
<<<<<<< HEAD
		user.orElseThrow(() -> new UsernameNotFoundException(email + ": not found"));
=======
		
		//Se não existir o método lança uma Exception do tipo UsernameNotFoundException
		
		user.orElseThrow(() -> new UsernameNotFoundException(email+": not found"));
		
		/**
		 * Retorna um objeto do tipo UserDetailsImpl criado com os dados recuperados do
		 * Banco de dados.
		 * 
		 * O operador :: faz parte de uma expressão que referencia um método, complementando
		 * uma função lambda. Neste exemplo, o operador faz referência ao construtor da 
		 * Classe UserDetailsImpl. 
		 */
		
>>>>>>> d788b54a08ae1ce97c85d0b30187e1b60095eb6e
		return user.map(UserDetailsImpl::new).get();
	
			
		}
	@Autowired
	private FuncionarioRepository funcionarioRepository;
	
	public UserDetails loadByUserFunc(int codf) throws UsernameNotFoundException {
		Optional<Funcionario> userFunc = funcionarioRepository.findByCodf(codf);
		userFunc.orElseThrow(() -> new UsernameNotFoundException(codf + " not found!"));
		return userFunc.map(UserDetailsImpl::new).get();
		
		
	}
	
	
	
	}
	




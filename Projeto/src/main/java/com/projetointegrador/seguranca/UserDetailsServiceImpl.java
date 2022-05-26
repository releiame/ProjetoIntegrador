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
import com.projetointegrador.repository.FuncionarioRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private ClienteRepository userRepository;
	

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Optional<Cliente> user = userRepository.findByEmail(email);
		user.orElseThrow(() -> new UsernameNotFoundException(email + ": not found"));
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
	




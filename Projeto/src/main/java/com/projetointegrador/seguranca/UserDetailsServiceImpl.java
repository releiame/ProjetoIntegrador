package com.projetointegrador.seguranca;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.projetointegrador.model.Cliente;
import com.projetointegrador.repository.ClienteRepository;



@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private ClienteRepository userRepository;
	
	
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Optional<Cliente> user = userRepository.findByEmail(email);
		user.orElseThrow(() -> new UsernameNotFoundException(email+": not found"));
		return user.map(UserDetailsImpl::new).get();
	}

}

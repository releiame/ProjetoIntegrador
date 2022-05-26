package com.projetointegrador.seguranca;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.projetointegrador.model.Cliente;
import com.projetointegrador.model.Funcionario;

public class UserDetailsImpl implements UserDetails {

	private static final long serialVersionUID = 1L;

	private String userName;
	private String password;
	private int userFunc;

	private List<GrantedAuthority> authorities;

	public UserDetailsImpl(Cliente user) {
		this.userName = user.getEmail();
		this.password = user.getSenha();

	}

	public UserDetailsImpl(Funcionario userFuncionario) {
		this.userFunc = userFuncionario.getCodf();
		this.password = userFuncionario.getSenha();

	}

	public UserDetailsImpl() {

	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return userName;

	}

	public int getUserFunc() {
		return userFunc;

	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}

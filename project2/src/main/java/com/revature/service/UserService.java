package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.revature.model.User;
import com.revature.repository.UserRepository;

public class UserService {

	private UserRepository ur;
	
	@Autowired
	public UserService(UserRepository ur) {
		this.ur = ur;
	}
	
	public void setUr(UserRepository ur){
		this.ur = ur;
	}
	
	public List<User> getAllUsers(){
		return ur.getAllUsers();
	}
}

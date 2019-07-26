package com.revature.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.User;
import com.revature.repository.UserRepository;

@Service("us")
public class UserService {
	private UserRepository ur;

	@Autowired
	public UserService(UserRepository ur) {
		this.ur = ur;
	}

	public void setUr(UserRepository ur) {
		this.ur = ur;
	}

	public List<User> getAllUsers() {
		return ur.getAllUsersByPoints();
	}

	public User getUserById(int user_id) {
		return ur.getUserById(user_id);
	}

	public User userLogin(User u, HttpServletRequest req) {
		System.out.println("we are in the service layer of the log in method.");
		return ur.userLogin(u, req);

	}

	public void userRegistration(User u) {
		// TODO Auto-generated method stub
        ur.userRegistration(u);

	}
}

package com.revature;

import java.util.List;

import com.revature.model.User;
import com.revature.repository.UserRepository;

public class Driver {
	public static void main(String[] args) throws Exception {

	
		
		List<User> us = new UserRepository().getAllUsersByPoints();
		
		System.out.println(us);
	}
}

package com.revature;

import java.util.List;

import com.revature.model.User;
import com.revature.repository.UserRepository;

public class Driver {
	public static void main(String[] args) throws Exception {

		/*
		 * This line of code specifies that we are defining our application
		 * context as a resource that exists as an XML file on our classpath.
		 */
		//ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		
		List<User> us = new UserRepository().getAllUsers();
		
		System.out.println(us);
		
	}
}

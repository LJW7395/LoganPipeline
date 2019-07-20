package com.revature;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.revature.service.UserService;

public class Driver {
	public static void main(String[] args) throws Exception {

		/*
		 * This line of code specifies that we are defining our application
		 * context as a resource that exists as an XML file on our classpath.
		 */
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		
		UserService us = context.getBean("us2", UserService.class);
		
		System.out.println(us.getAllUsers());
	}
}

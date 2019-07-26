package com.revature.util;

import org.hibernate.Session;
import org.hibernate.cfg.Configuration;

public class SessionFactory {
	private static org.hibernate.SessionFactory sessionFactory;

	public static Session getSession() {


		if (sessionFactory == null) {
			sessionFactory = new Configuration().configure()
					.setProperty("hibernate.connection.url", "jdbc:postgresql://loganw2.cl7of5otbbur.us-east-1.rds.amazonaws.com/logandb")
					.setProperty("hibernate.connection.username", "LJW7395")
					.setProperty("hibernate.connection.password", "password2").buildSessionFactory();
		}
		return sessionFactory.getCurrentSession();
	}
}

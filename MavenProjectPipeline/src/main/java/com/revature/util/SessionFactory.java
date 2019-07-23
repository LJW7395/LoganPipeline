package com.revature.util;

import org.hibernate.Session;
import org.hibernate.cfg.Configuration;

public class SessionFactory {
	private static org.hibernate.SessionFactory sessionFactory;

	public static Session getSession() {
//		if(sessionFactory == null) {
//			sessionFactory = new Configuration().configure()
//				.setProperty("hibernate.connection.url", System.getenv("dburl"))
//				.setProperty("hibernate.connection.username", System.getenv("dbusername"))
//				.setProperty("hibernate.connection.password", System.getenv("dbpassword"))
//				.buildSessionFactory();
//		}

		if (sessionFactory == null) {
			sessionFactory = new Configuration().configure()
					.setProperty("hibernate.connection.url", System.getenv("dburl2"))
					.setProperty("hibernate.connection.username", System.getenv("dbusername2"))
					.setProperty("hibernate.connection.password", System.getenv("dbpassword2")).buildSessionFactory();
		}
		sessionFactory.openSession();
		return sessionFactory.getCurrentSession();
	}
}

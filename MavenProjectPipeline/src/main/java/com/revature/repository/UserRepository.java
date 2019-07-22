package com.revature.repository;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;

import com.revature.model.User;
import com.revature.util.SessionFactory;

import com.revature.repository.UserRepository;

@Repository("ur")
public class UserRepository {

	public List <User> getAllUsers(){
		List<User> users = new ArrayList<>();
		Session s = null;
		Transaction tx = null;
		
		try {
			s = SessionFactory.getSession();
			tx = s.beginTransaction();
			//This HQL (Hibernate Query Language). It provides a more object-oriented
			//way of querying our DB.
			users = s.createQuery("FROM User", User.class).getResultList();
			tx.commit();
		}catch(HibernateException e) {
			e.printStackTrace();
			tx.rollback();
		}finally {
			s.close();
		}
		
		return users;
	}
	
	public User getUserByUsername(String username) {
		User u = null;
		Session s = null;
		
		try {
			s = SessionFactory.getSession();
			//This CriteriaBuilder will help us narrow down our search by allowing
			//us to add Restrictions to our query.
			CriteriaBuilder cb = s.getCriteriaBuilder();
			CriteriaQuery<User> cq = cb.createQuery(User.class);
			Root<User> root = cq.from(User.class);
			cq.select(root).where(cb.equal(root.get("username"), username));
			Query<User> q = s.createQuery(cq);
			u = q.getSingleResult();
		}catch(HibernateException e) {
			e.printStackTrace();
		}finally {
			s.close();
		}
		
		return u;
	}
	
	
	public User getUserById(int user_id) {
		User u = null;
		Session s = null;
		
		try {
			s = SessionFactory.getSession();
			//This CriteriaBuilder will help us narrow down our search by allowing
			//us to add Restrictions to our query.
			CriteriaBuilder cb = s.getCriteriaBuilder();
			CriteriaQuery<User> cq = cb.createQuery(User.class);
			Root<User> root = cq.from(User.class);
			cq.select(root).where(cb.equal(root.get("user_id"), user_id));
			Query<User> q = s.createQuery(cq);
			u = q.getSingleResult();
		}catch(HibernateException e) {
			e.printStackTrace();
		}finally {
			s.close();
		}
		
		return u;
	}

	public boolean userLogin(HttpServletRequest req, HttpServletResponse resp) {
		// TODO Auto-generated method stub
//		Session s = null;
		System.out.println("We are in the repository layer of the log in method.");
		final String username = req.getParameter("username");
		final String password = req.getParameter("password");
		
		if (username != null && !username.equals("") && password != null && !password.equals("")) {
			UserRepository us = new UserRepository();
			if (us.getUserByUsername(username) != null
					&& password.equals(us.getUserByUsername(username).getPassword())) {
				
				HttpSession s = req.getSession();
				
				s.setAttribute("username", username);
				s.setAttribute("user_id", us.getUserByUsername(username).getUser_id());

				return true;
			}
	}
		return false;

}
	}

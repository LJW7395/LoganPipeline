package com.revature.repository;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.NoResultException;
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


	public List<User> getAllUsers() {
		List<User> users = new ArrayList<>();
		Session s = null;
		Transaction tx = null;

		try {
			s = SessionFactory.getSession();
			tx = s.beginTransaction();
			// This HQL (Hibernate Query Language). It provides a more object-oriented
			// way of querying our DB.
			users = s.createQuery("FROM User ", User.class).getResultList();
			tx.commit();
		} catch (HibernateException e) {
			e.printStackTrace();
			tx.rollback();
		} finally {
			s.close();
		}

		return users;
	}
	



	public User getUserByUsername(String username) {
		User u = null;
		Session s = null;
		Transaction tx = null;

		try {
			s = SessionFactory.getSession();
			tx = s.beginTransaction();
		
			CriteriaBuilder cb = s.getCriteriaBuilder();
			CriteriaQuery<User> cq = cb.createQuery(User.class);
			Root<User> root = cq.from(User.class);
			try {
				cq.select(root).where(cb.equal(root.get("username"), username));

				Query<User> q = s.createQuery(cq);

				u = q.getSingleResult();
			} catch (NoResultException nre) {

			}
			tx.commit();
			if (u != null) {
				System.out.println("username is 123: " + u.getUsername());
			} else {
				System.out.println("Not in DB!");
			}
		} catch (HibernateException e) {
			e.printStackTrace();
			tx.rollback();
		} finally {
			s.close();
		}

		return u;
	}
//did not use this method, however if we needed to get user id this is how we would get it.
	public User getUserById(int user_id) {
		User u = null;
		Session s = null;

		try {
			s = SessionFactory.getSession();

			CriteriaBuilder cb = s.getCriteriaBuilder();
			CriteriaQuery<User> cq = cb.createQuery(User.class);
			Root<User> root = cq.from(User.class);
			cq.select(root).where(cb.equal(root.get("user_id"), user_id));
			Query<User> q = s.createQuery(cq);
			u = q.getSingleResult();
		} catch (HibernateException e) {
			e.printStackTrace();
		} finally {
			s.close();
		}

		return u;
	}

	//creating a log in function in order to check the username/password. Created
	//an HTTP session in order to keep track of the responses and requests.
	public User userLogin(User u, HttpServletRequest req) {
		// TODO Auto-generated method stub
		System.out.println("We are in the repository layer of the log in method.");

		UserRepository us = new UserRepository();
		User user = us.getUserByUsername(u.getUsername());
		
		System.out.println("We are trying to get username: "+ u);

		if (u.getUsername() != null && !u.getUsername().equals("") && u.getPassword() != null
				&& !u.getPassword().equals("")) {

			if (us.getUserByUsername(u.getUsername()) != null
					&& u.getPassword().equals(us.getUserByUsername(u.getUsername()).getPassword())) {

				HttpSession s = req.getSession();

				s.setAttribute("username", u.getUsername());
				s.setAttribute("user_id", u.getUser_id());
				s.setAttribute("role", u.getUsers_role());

			}
		}
		return user;

	}

	//Registration we begin transaction and insert the values using the save() as 
	//it is the equivalent to the INSERT statement in SQL.
	public void userRegistration(User u) {
		Session s = null;
		Transaction tx = null;

		try {
			s = SessionFactory.getSession();
			tx = s.beginTransaction();

			s.save(u);
			tx.commit();
		} catch (HibernateException e) {
			e.printStackTrace();
			tx.rollback();

		} finally {
			s.close();

		}
	}
	
	public void updatePoints(String username, int points) {
        Session s = null;
        Transaction tx = null;
        User u = getUserByUsername(username);
        u.incrementPoints(points);
        try {
            s = SessionFactory.getSession();
            tx = s.beginTransaction();
            s.merge(u);
            tx.commit();
            
        }catch(HibernateException e) {
            e.printStackTrace();
            tx.rollback();
        }finally {
            s.close();
        }
    }

	public List<User> getAllUsersByPoints() {
		System.out.println("getAllUsersByPoints invoked");
		
		List<User> users = new ArrayList<>();
		Session s = null;
		Transaction tx = null;
		
		//use criteria builder in hibernate to do select equivalency in SQL.
		//Criteria query takes the root User and orders it by descending order by points.
		//This will be for the front end table in order to update 
		
		try {
			s = SessionFactory.getSession();
			tx = s.beginTransaction();

			CriteriaBuilder cb = s.getCriteriaBuilder();
			CriteriaQuery<User> cq = cb.createQuery(User.class);
			Root<User> root = cq.from(User.class);
			cq.select(root);
			cq.orderBy(cb.desc(root.get("points")));

			users = s.createQuery(cq).getResultList();
		} catch (HibernateException e) {
			e.printStackTrace();
			tx.rollback();
		} finally {
			s.close();
		}
		return users;
	}
}


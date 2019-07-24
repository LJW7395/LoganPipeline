package com.revature.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.revature.model.User;
import com.revature.service.UserService;

@CrossOrigin
@RestController
@RequestMapping(value = "/aether")
//@SessionAttributes("u")
public class UserControllerImpl {

	private UserService us;

	@Autowired
	public void setMs(UserService us) {
		this.us = us;
	}

//	@RequestMapping(value="/register", method = RequestMethod.POST)
//	public ModelAndView userRegister(HttpServletRequest request, HttpServletResponse response) {
//		
//	}

//	@Override
//	@RequestMapping(value = "/home", method = RequestMethod.GET)
//	public String home() {
//		return "index";
//	}
//
//	@RequestMapping(value = "/now-playing", method = RequestMethod.GET)
//	public String nowPlaying() {
//		return "now-playing";
//	}
//
//	/*
//	 * This is an ExceptionHandler. It is triggered whenever a certain exception
//	 * type is thrown.
//	 */
//	@ExceptionHandler(NonexistentMovieException.class)
//	public String error() {
//		return "404";
//	}

	@GetMapping(value = "/user/all", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody // Whatever we return is written to the response body
	public List<User> getAllUsers() {
		return us.getAllUsers();
	}

	@PostMapping(value = "/login")
	public @ResponseBody ResponseEntity<Object> userLogin(@ModelAttribute User u, HttpServletRequest req) {
		User user = us.userLogin(u, req);
		if (user != null) {
			//userInfo(u);
			return new ResponseEntity<Object>(user, HttpStatus.OK);
		} else {
			return new ResponseEntity<Object>(u, HttpStatus.UNAUTHORIZED);
		}
	}
	
//	@GetMapping(value = "/info")
//	public String userInfo(@SessionAttribute("u") User u) {
//		System.out.println("username is: " + u.getUsername());
//		return "u";
//	}

	@GetMapping(value = "/user/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public User getUserById(@PathVariable int id) {

//		if (id > 1) {
//			return new Movie(id, "title", 1, "something,", new Genre(1, "some genre"));
//		} else
//			throw new NonexistentMovieException();
		return us.getUserById(id);
	}

//	@GetMapping(value = "/user/byId", produces = MediaType.APPLICATION_JSON_VALUE)
//	@ResponseBody
//	public User getUserByIdAgain(@RequestParam int id) {
//		//return new Movie(id, "title", 1, "something,", new Genre(1, "some genre"));
//		return null;
//	}

	@PostMapping(value = "/registration")
    public @ResponseBody ResponseEntity<Object> postUser(@RequestBody User u) {
       
        System.out.println("The movie we received is " + u);
		 us.userRegistration(u);;
		 if (u != null) {
				//userInfo(u);
				return new ResponseEntity<Object>(u, HttpStatus.OK);
			} else {
				return new ResponseEntity<Object>(u, HttpStatus.UNAUTHORIZED);
			}
    }
}

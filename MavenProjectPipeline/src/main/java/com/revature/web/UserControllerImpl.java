package com.revature.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.model.User;
import com.revature.service.UserService;

@Controller
@RequestMapping(value = "/aether")
public class UserControllerImpl {

	private UserService us;

	@Autowired
	public void setMs(UserService us) {
		this.us = us;
	}

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

	@PostMapping(value = "/user/insert", consumes = MediaType.APPLICATION_JSON_VALUE)
	public void postUser(@RequestBody User m) {
		System.out.println("The movie we received is " + m);
	}
}

package com.revature.web;

import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.User;
import com.revature.service.UserService;


//Cross Origin is a cross point that will allow angular requests on handler
@CrossOrigin
//Rest Controller is a controller and request body so no need to have a requestbody annotation
@RestController
//Request mapping will say the value of our api name.
@RequestMapping(value = "/aether")

//@SessionAttributes("u")
public class UserControllerImpl {

	private UserService us;

	@Autowired
	public void setMs(UserService us) {
		this.us = us;
	}


//getting values for all users, this method will produce JSON as a result and will be 
	//sent in the response.
	@GetMapping(value = "/allUsers", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody // Whatever we return is written to the response body
	public List<User> getAllUsers() {
		System.out.println("getAllUsers invoked in controllerimpl");
		return us.getAllUsers();
	}

	//creating a HttpServlet in order to create a session, however due to the  scope of the project
	//we decided as a group to not have sessions. We are working functionality rather than number of services.
	@PostMapping(value = "/login")
	public @ResponseBody ResponseEntity<Object> userLogin(@ModelAttribute User u, HttpServletRequest req) {
		//System.out.println("Request:"+httpServletRequestToString(req));
		User user = us.userLogin(u, req);
		if (user != null) {
			// userInfo(u);
			return new ResponseEntity<Object>(user, HttpStatus.OK);
		} else {
			return new ResponseEntity<Object>(u, HttpStatus.UNAUTHORIZED);
		}
	}



	@GetMapping(value = "/user/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public User getUserById(@PathVariable int id) {


		return us.getUserById(id);
	}



	//Originally we had @Model Attribute and Response Body not getting params. It worked on Postman
	//However working with angular has been another issue. I tried using Request Params because it was
	//the most specific way to get values from the form as JSON values without the application breaking.
	@RequestMapping(value = "/registration", method = RequestMethod.POST)
	public @ResponseBody User postUser(@RequestParam(name = "username") String username,
			@RequestParam(name = "password") String password, @RequestParam(name = "first_name") String first_name,
			@RequestParam(name = "last_name") String last_name, @RequestParam(name = "region") String region,
			@RequestParam(name = "phrase") String phrase, @RequestParam(name = "users_role") String users_role) {
				User u = new User();
		u.setUsername(username);
		u.setPassword(password);
		u.setFirst_name(first_name);
		u.setLast_name(last_name);
		u.setRegion(region);
		u.setRanking(50);
		u.setPhrase(phrase);
		u.setPoints(1000);
		u.setUsers_role(users_role);
		System.out.println("The movie we received is " + u);
		us.userRegistration(u);

		return u;
	}

	@RequestMapping(value = "/updatePoints", method = RequestMethod.POST)
    public @ResponseBody User updatePoints(@RequestParam(name = "username") String username,
            @RequestParam(name = "points") int points) {

        us.updatePoints(username, points);

        return new User();
    }

	
}

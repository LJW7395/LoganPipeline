package com.revature.testng;


import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterGroups;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeGroups;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

import com.revature.model.User;

public class TestNgRegistrationTest {
	
	private User u;
	
	@BeforeSuite
	public void beforeSuite() {}
	
	/*
	 * This method will execute before our class.
	 */
	@BeforeClass
	public void beforeClass() {
		u = new User();
	}
	
	/*
	 * This method will execute before each method marked with @Test
	 */
	@BeforeMethod
	public void beforeMethod() {}
	
	/*
	 * This method will execute before certain test groups (as specified by us).
	 */
	@BeforeGroups
	public void beforeGroups() {}
	
	
	@Test(enabled=true)
	public void test() {
		
	}
	
	/*
	 * This is how we specify which groups a test will belong to.
	 */
	
	@AfterGroups
	public void afterGroups() {}
	
	@AfterMethod
	public void afterMethod() {}
	
	@AfterClass
	public void afterClass() {}
	
	@AfterSuite
	public void afterSuite() {}
	

}

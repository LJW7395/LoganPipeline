package com.revature.selenium;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class RegisterAccount {

	public String title = "Register Account";

	@FindBy(name = "username")
	public WebElement username;
	@FindBy(name = "password")
	public WebElement password;
	@FindBy(name = "first_name")
	public WebElement first_name;
	@FindBy(name = "last_name")
	public WebElement last_name;
	@FindBy(name = "region")
	public WebElement region;
	@FindBy(name = "phrase")
	public WebElement phrase;
	@FindBy(name = "users_role")
	public WebElement users_role;
	@FindBy(id = "submitbutton")
	public WebElement submit;

	public RegisterAccount(WebDriver driver) {
		PageFactory.initElements(driver, this);

	}

	public void registrationAdded(String username, String password, String first_name, String last_name, String region,
			String phrase, String users_role) {

		this.username.sendKeys(username);
		this.password.sendKeys(password);
		this.first_name.sendKeys(first_name);
		this.last_name.sendKeys(last_name);
		this.region.sendKeys(region);
		this.phrase.sendKeys(phrase);
		this.users_role.sendKeys(users_role);
		this.submit.click();
	}

}

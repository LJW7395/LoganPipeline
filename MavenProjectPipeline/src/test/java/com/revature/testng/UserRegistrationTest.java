package com.revature.testng;

import static org.testng.Assert.assertEquals;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.time.Duration;
import java.util.NoSuchElementException;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.revature.selenium.RegisterAccount;

public class UserRegistrationTest {

	public static WebDriver driver;
	public final String URL = "http://project2-syed.s3-website-us-east-1.amazonaws.com/register";

	@BeforeClass
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(URL);
	}

	@AfterClass
	public void teardown() {
		driver.quit();
	}

	@Test
	public void confirmRegisterPage() {
		RegisterAccount ra = new RegisterAccount(driver);
		assertEquals(driver.getTitle(), ra.title);
	}

	@Test(dataProvider = "mercData")
	public void registerToAether(String username, String password, String first_name, String last_name, String region,
			String phrase, String users_role) {

		RegisterAccount ra = new RegisterAccount(driver);
		ra.registrationAdded(username, password, first_name, last_name, region, phrase, users_role);
		ra.submit.click();
	}
	
	@DataProvider(name = "mercData")
	public Object[][] registrationDetails() {
		Object[][] data = null;
		
		try (Workbook wb = new XSSFWorkbook(new FileInputStream("src/test/resources/UserRegistrationData.xlsx"))) {
			
			Sheet sheet = wb.getSheet("Sheet1");
			int rowcount = sheet.getLastRowNum();
			data = new Object[rowcount][6];
			
			for (int i = 1; i <= rowcount; i++) {
				Row row = sheet.getRow(i);
				data[i - 1] = new Object[] { row.getCell(0).getStringCellValue(), row.getCell(1).getStringCellValue(), row.getCell(2).getStringCellValue(), row.getCell(3).getStringCellValue(), row.getCell(4).getStringCellValue(), row.getCell(5).getStringCellValue(),};
			}
			
		}catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		return data;
	

	}
	

}

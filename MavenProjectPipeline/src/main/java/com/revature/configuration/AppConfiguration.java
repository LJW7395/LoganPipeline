package com.revature.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.Scope;

import com.revature.repository.UserRepository;
import com.revature.service.UserService;

@Configuration
@EnableAspectJAutoProxy(proxyTargetClass=true)
public class AppConfiguration {
	
	@Bean(value="ur2")
	@Scope(scopeName="singleton")
	public UserRepository getUserRepository() {
		return new UserRepository();
	}
	
	@Bean(value="us2")
	@Scope(scopeName="singleton")
	public UserService getUserService() {
		return new UserService(new UserRepository());
	}

}

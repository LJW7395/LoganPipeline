package com.revature.aspect;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect {

private static final Logger LOG = LogManager.getLogger(LoggingAspect.class);
	
	@Pointcut("execution(public * *(..))")
	public void logAll() {
		
	}
	
	@Pointcut("within(com.revature.service.*)")
	public void logWithinServicePackage() {
	}
	
	@Before("logAll()")
	public void logBefore(JoinPoint jp) {
		LOG.info("The " + jp.getSignature().getName() + " method is about to be executed.");
	}
	
	@After("logWithinServicePackage()")
	public void logAfter(JoinPoint jp) {
		LOG.info("The " + jp.getSignature().getName() + " method was just triggered and its access modifier is: " + jp.getSignature().getModifiers());
	}
	
	@AfterReturning(pointcut="logWithinServicePackage()", returning="returnedValue")
	public void logAfterReturning(JoinPoint jp, Object returnedValue) {
		LOG.info("The " + jp.getSignature().getName() + " method was just completed and it returned " + returnedValue);
	}
	
	@AfterThrowing(pointcut="logWithinServicePackage()", throwing="exceptionThrown")
	public void logAfterException(JoinPoint jp, Exception exceptionThrown) {
		
	}
	
	/*
	 * When using Around Advice, be careful because all of your beans aren't
	 * guaranteed to be instantiated.
	 */
	
	@Around("logAll()")
	public void logAroundAll(JoinPoint jp) {
		LOG.info("This is Around Advice for the " + jp.getSignature().getName() + " method.");

	}
}

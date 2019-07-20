package com.revature.repository;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.revature.model.Tournament;

@Repository("tr")
public class TournamentRepository {

	 public List <Tournament> getAllTournaments(){
	        return Arrays.asList();
	    }
}

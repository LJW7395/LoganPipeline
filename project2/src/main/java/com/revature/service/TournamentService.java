package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.revature.model.Tournament;
import com.revature.repository.TournamentRepository;

public class TournamentService {

	private TournamentRepository tr;
	
	@Autowired
	public TournamentService(TournamentRepository tr) {
		this.tr = tr;
	}
	
	public void setTr(TournamentRepository tr) {
		this.tr = tr;
	}
	
	public List<Tournament> getAllTournaments(){
		return tr.getAllTournaments();
	}
}

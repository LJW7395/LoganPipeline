package com.revature.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="tournament", schema="tournament")
public class Tournament {
	
	@Id
	@Column(name="tournament_id")
	private int tournament_id;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="user_id")
	User user_id;
	
	@Column(name="num_participants")
	private int num_of_participants;
	
	@Column(name="tournament_loc")
	private String tournament_loc;
	
	@Column(name="tournament_date")
	private String date;
	
	@Column(name="tournament_time")
	private String time;
	
	@Column(name="winner")
	private String winner;

	public Tournament() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Tournament(int tournament_id, User user_id, int num_of_participants, String tournament_loc, String date,
			String time, String winner) {
		super();
		this.tournament_id = tournament_id;
		this.user_id = user_id;
		this.num_of_participants = num_of_participants;
		this.tournament_loc = tournament_loc;
		this.date = date;
		this.time = time;
		this.winner = winner;
	}

	public int getTournament_id() {
		return tournament_id;
	}

	public void setTournament_id(int tournament_id) {
		this.tournament_id = tournament_id;
	}

	public User getUser_id() {
		return user_id;
	}

	public void setUser_id(User user_id) {
		this.user_id = user_id;
	}

	public int getNum_of_participants() {
		return num_of_participants;
	}

	public void setNum_of_participants(int num_of_participants) {
		this.num_of_participants = num_of_participants;
	}

	public String getTournament_loc() {
		return tournament_loc;
	}

	public void setTournament_loc(String tournament_loc) {
		this.tournament_loc = tournament_loc;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getWinner() {
		return winner;
	}

	public void setWinner(String winner) {
		this.winner = winner;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + num_of_participants;
		result = prime * result + ((time == null) ? 0 : time.hashCode());
		result = prime * result + tournament_id;
		result = prime * result + ((tournament_loc == null) ? 0 : tournament_loc.hashCode());
		result = prime * result + ((user_id == null) ? 0 : user_id.hashCode());
		result = prime * result + ((winner == null) ? 0 : winner.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Tournament other = (Tournament) obj;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (num_of_participants != other.num_of_participants)
			return false;
		if (time == null) {
			if (other.time != null)
				return false;
		} else if (!time.equals(other.time))
			return false;
		if (tournament_id != other.tournament_id)
			return false;
		if (tournament_loc == null) {
			if (other.tournament_loc != null)
				return false;
		} else if (!tournament_loc.equals(other.tournament_loc))
			return false;
		if (user_id == null) {
			if (other.user_id != null)
				return false;
		} else if (!user_id.equals(other.user_id))
			return false;
		if (winner == null) {
			if (other.winner != null)
				return false;
		} else if (!winner.equals(other.winner))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Tournament [tournament_id=" + tournament_id + ", user_id=" + user_id + ", num_of_participants="
				+ num_of_participants + ", tournament_loc=" + tournament_loc + ", date=" + date + ", time=" + time
				+ ", winner=" + winner + "]";
	}
}

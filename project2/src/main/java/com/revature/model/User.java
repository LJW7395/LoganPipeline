package com.revature.model;

public class User {

	private int user_id;
	private String username;
	private String password;
	private String first_name;
	private String last_name;
	private String region;
	private String ranking;
	private String phrase;
	private int points;
	private String users_role;
	
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}


	public User(int user_id, String username, String password, String first_name, String last_name, String region,
			String ranking, String phrase, int points, String users_role) {
		super();
		this.user_id = user_id;
		this.username = username;
		this.password = password;
		this.first_name = first_name;
		this.last_name = last_name;
		this.region = region;
		this.ranking = ranking;
		this.phrase = phrase;
		this.points = points;
		this.users_role = users_role;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((first_name == null) ? 0 : first_name.hashCode());
		result = prime * result + ((last_name == null) ? 0 : last_name.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((phrase == null) ? 0 : phrase.hashCode());
		result = prime * result + points;
		result = prime * result + ((ranking == null) ? 0 : ranking.hashCode());
		result = prime * result + ((region == null) ? 0 : region.hashCode());
		result = prime * result + user_id;
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		result = prime * result + ((users_role == null) ? 0 : users_role.hashCode());
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
		User other = (User) obj;
		if (first_name == null) {
			if (other.first_name != null)
				return false;
		} else if (!first_name.equals(other.first_name))
			return false;
		if (last_name == null) {
			if (other.last_name != null)
				return false;
		} else if (!last_name.equals(other.last_name))
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (phrase == null) {
			if (other.phrase != null)
				return false;
		} else if (!phrase.equals(other.phrase))
			return false;
		if (points != other.points)
			return false;
		if (ranking == null) {
			if (other.ranking != null)
				return false;
		} else if (!ranking.equals(other.ranking))
			return false;
		if (region == null) {
			if (other.region != null)
				return false;
		} else if (!region.equals(other.region))
			return false;
		if (user_id != other.user_id)
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		if (users_role == null) {
			if (other.users_role != null)
				return false;
		} else if (!users_role.equals(other.users_role))
			return false;
		return true;
	}


	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", username=" + username + ", password=" + password + ", first_name="
				+ first_name + ", last_name=" + last_name + ", region=" + region + ", ranking=" + ranking + ", phrase="
				+ phrase + ", points=" + points + ", users_role=" + users_role + "]";
	}
	
	
	
	
	
	
	
}

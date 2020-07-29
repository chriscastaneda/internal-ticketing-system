package com.revature.models;

public class AuthenticationResponse {
	
	private final String jwt; //response to token
	
	public AuthenticationResponse(String jwt) {
		this.jwt = jwt;
	}
	
	public String getJwt() {
		return jwt;
	}

}

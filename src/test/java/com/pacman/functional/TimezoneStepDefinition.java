package com.pacman.functional;

import com.jayway.restassured.RestAssured;
import com.jayway.restassured.path.json.JsonPath;
import com.jayway.restassured.response.Response;
import com.jayway.restassured.specification.RequestSpecification;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.assertNotSame;
import static org.junit.Assert.assertEquals;

public class TimezoneStepDefinition {
	
	private String URL;
	private RequestSpecification spec = RestAssured.with();
	Response response;
	private final int STATUS_CODE = 200;
	
	@Given("^the location details$")
	public void the_location_details() throws Throwable {
	   URL = "https://maps.googleapis.com/maps/api/timezone/json?location=39.6034810,-119.6822510&timestamp=1331161200&key=AIzaSyA2XNT43sCz0cg4ygRq1TvJvwWwxXp8-Ks";
	   spec.given().header("Version", 1);
	}

	@When("^do a GET on the google API for Timezone$")
	public void do_a_GET_on_the_google_API_for_Timezone() throws Throwable {
		response  = spec.when().get(URL);
		System.out.println(response.asString());
	}

	@Then("^the serveice should return the Timezone details for the location$")
	public void the_service_should_return_the_Timezone_details_for_the_location() throws Throwable {
	   // spec.expect().statusCode(200);
		//spec.then()
		JsonPath jsonResponse  = new JsonPath(response.asString());
	    System.out.println(jsonResponse.get("status"));
	    System.out.println(jsonResponse.get("timeZoneName"));
	}
	
}
	
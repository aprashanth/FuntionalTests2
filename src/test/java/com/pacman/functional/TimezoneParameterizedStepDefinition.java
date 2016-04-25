package com.pacman.functional;
import com.jayway.restassured.RestAssured;
import com.jayway.restassured.path.json.JsonPath;
import com.jayway.restassured.response.Response;
import com.jayway.restassured.specification.RequestSpecification;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TimezoneParameterizedStepDefinition {
	
	private RequestSpecification spec = RestAssured.with();
	Response response;
	private final int STATUS_CODE = 200;
	final String BASE_URI = "https://maps.googleapis.com/maps/api/timezone/json";
	
	@Given("^input \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void input(String location, String timezone, String key) throws Throwable {
		System.out.println(location + "\t" + timezone + "\t" + key);
		
		spec.baseUri(BASE_URI);
		spec.queryParam("location", location);
		spec.queryParam("timestamp", timezone);
		spec.queryParam("key", key);
	}

	@When("^I do a GET on the google API for Timezone$")
	public void I_do_a_GET_on_the_google_API_for_Timezone() throws Throwable {
		response  = spec.when().get();
		System.out.println(response.asString());
	}

	@Then("^the service should return the Timezone details for the location with a status code of (\\d+)$")
	public void the_service_should_return_the_Timezone_details_for_the_location_with_a_status_code_of(int arg1) throws Throwable {
		JsonPath jsonResponse  = new JsonPath(response.asString());
	    System.out.println("--------------------->>>>>>>>>>>>" + jsonResponse.get("status"));
	    System.out.println(jsonResponse.get("timeZoneName"));
	}
}

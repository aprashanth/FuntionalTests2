package com.pacman.functional;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
//		format = {"pretty", "html:target/prettyHtml"}, 
		format = {"json:target/cucumber1.json"}, 			
		features = {"src/test/resources"},
		tags = "@smokeTest")

public class CucumberRunner {
}

 
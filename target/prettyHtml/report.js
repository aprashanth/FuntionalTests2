$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("first.feature");
formatter.feature({
  "line": 2,
  "name": "Cucumber test is running",
  "description": "I want to run a sample feature file.",
  "id": "cucumber-test-is-running",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "cucumber setup",
  "description": "",
  "id": "cucumber-test-is-running;cucumber-setup",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Sample feature file is ready",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I run the feature file",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Run should be successful",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("googleTimezone.feature");
formatter.feature({
  "line": 2,
  "name": "Determine the Timezone details for a point on Earth",
  "description": "",
  "id": "determine-the-timezone-details-for-a-point-on-earth",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Get the timezone details for a given point on the earth",
  "description": "",
  "id": "determine-the-timezone-details-for-a-point-on-earth;get-the-timezone-details-for-a-given-point-on-the-earth",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the location details",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "do a GET on the google API for Timezone",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the service should return the Timezone details for the location",
  "keyword": "Then "
});
formatter.match({
  "location": "TimezoneStepDefinition.the_location_details()"
});
formatter.result({
  "duration": 796045503,
  "status": "passed"
});
formatter.match({
  "location": "TimezoneStepDefinition.do_a_GET_on_the_google_API_for_Timezone()"
});
formatter.result({
  "duration": 1106884547,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("googleTimezoneParameterized.feature");
formatter.feature({
  "line": 2,
  "name": "Determine the Timezone details for a point on Earth",
  "description": "",
  "id": "determine-the-timezone-details-for-a-point-on-earth",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.scenario({
  "line": 11,
  "name": "Get the timezone details for a given point on the earth",
  "description": "",
  "id": "determine-the-timezone-details-for-a-point-on-earth;get-the-timezone-details-for-a-given-point-on-the-earth;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "input \"39.6034810,-119.6822510\" \"1331161200\" \"AIzaSyA2XNT43sCz0cg4ygRq1TvJvwWwxXp8-Ks\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I do a GET on the google API for Timezone",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the service should return the Timezone details for the location with a status code of 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "39.6034810,-119.6822510",
      "offset": 7
    },
    {
      "val": "1331161200",
      "offset": 33
    },
    {
      "val": "AIzaSyA2XNT43sCz0cg4ygRq1TvJvwWwxXp8-Ks",
      "offset": 46
    }
  ],
  "location": "TimezoneParameterizedStepDefinition.input(String,String,String)"
});
formatter.result({
  "duration": 3511135,
  "status": "passed"
});
formatter.match({
  "location": "TimezoneParameterizedStepDefinition.I_do_a_GET_on_the_google_API_for_Timezone()"
});
formatter.result({
  "duration": 124020623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 86
    }
  ],
  "location": "TimezoneParameterizedStepDefinition.the_service_should_return_the_Timezone_details_for_the_location_with_a_status_code_of(int)"
});
formatter.result({
  "duration": 493930020,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Get the timezone details for a given point on the earth",
  "description": "",
  "id": "determine-the-timezone-details-for-a-point-on-earth;get-the-timezone-details-for-a-given-point-on-the-earth;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "input \"39.6034810,-110.6822510\" \"1331161200\" \"AIzaSyA2XNT43sCz0cg4ygRq1TvJvwWwxXp8-Ks\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I do a GET on the google API for Timezone",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the service should return the Timezone details for the location with a status code of 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "39.6034810,-110.6822510",
      "offset": 7
    },
    {
      "val": "1331161200",
      "offset": 33
    },
    {
      "val": "AIzaSyA2XNT43sCz0cg4ygRq1TvJvwWwxXp8-Ks",
      "offset": 46
    }
  ],
  "location": "TimezoneParameterizedStepDefinition.input(String,String,String)"
});
formatter.result({
  "duration": 860514,
  "status": "passed"
});
formatter.match({
  "location": "TimezoneParameterizedStepDefinition.I_do_a_GET_on_the_google_API_for_Timezone()"
});
formatter.result({
  "duration": 98952028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 86
    }
  ],
  "location": "TimezoneParameterizedStepDefinition.the_service_should_return_the_Timezone_details_for_the_location_with_a_status_code_of(int)"
});
formatter.result({
  "duration": 17573042,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Get the timezone details for a given point on the earth",
  "description": "",
  "id": "determine-the-timezone-details-for-a-point-on-earth;get-the-timezone-details-for-a-given-point-on-the-earth;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "input \"39.6034810,-120.6822510\" \"1331161200\" \"AIzaSyA2XNT43sCz0cg4ygRq1TvJvwWwxXp8-Ks\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I do a GET on the google API for Timezone",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the service should return the Timezone details for the location with a status code of 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "39.6034810,-120.6822510",
      "offset": 7
    },
    {
      "val": "1331161200",
      "offset": 33
    },
    {
      "val": "AIzaSyA2XNT43sCz0cg4ygRq1TvJvwWwxXp8-Ks",
      "offset": 46
    }
  ],
  "location": "TimezoneParameterizedStepDefinition.input(String,String,String)"
});
formatter.result({
  "duration": 1875763,
  "status": "passed"
});
formatter.match({
  "location": "TimezoneParameterizedStepDefinition.I_do_a_GET_on_the_google_API_for_Timezone()"
});
formatter.result({
  "duration": 97736651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 86
    }
  ],
  "location": "TimezoneParameterizedStepDefinition.the_service_should_return_the_Timezone_details_for_the_location_with_a_status_code_of(int)"
});
formatter.result({
  "duration": 13640334,
  "status": "passed"
});
});
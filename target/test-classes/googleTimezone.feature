@smokeTest
Feature: Determine the Timezone details for a point on Earth

  Scenario: Get the timezone details for a given point on the earth
    Given the location details
    When do a GET on the google API for Timezone
    Then the service should return the Timezone details for the location

@smokeTest
Feature: Determine the Timezone details for a point on Earth

  Scenario Outline: Get the timezone details for a given point on the earth
    Given input <location> <timestamp> <key>
    When I do a GET on the google API for Timezone
    Then the service should return the Timezone details for the location with a status code of 200
    
Examples: 
      | location                  | timestamp     | key                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      | "39.6034810,-119.6822510" | "1331161200"  | "AIzaSyA2XNT43sCz0cg4ygRq1TvJvwWwxXp8-Ks"|
      | "39.6034810,-110.6822510" | "1331161200"  | "AIzaSyA2XNT43sCz0cg4ygRq1TvJvwWwxXp8-Ks"|
      | "39.6034810,-120.6822510" | "1331161200"  | "AIzaSyA2XNT43sCz0cg4ygRq1TvJvwWwxXp8-Ks"|
      
    
# features/find_execution.feature

@operations
@finder
@operation
Feature: Find an operation 
  As a user of JsApi
  I want to find an opreation
  So I can check if a operation exists and get their information

  Background:
    Given an apikey user by "require-real-apikey"

Scenario: Execute operation with default values and find operation
Given the operation by "ADMINISTRATIVE_STATUS_CHANGE"
    And the notes by ""
    And the timeout by 120000
    And the ackTimeout by 0
    And the retries by 0
    And the retriesDelay by 0
    And parameter "admsts" by "inventado"
    And the job timeout by 5 minutes
    And execute immediately
    And append entities by "{}" as filter with "ASSET" as entityType
    When I build it
    And I execute it
    Then response code should be: 201
    And an ogapi "operation finder" util
    And I want to read a "operation"
    When I try to find by operation's id
    Then I can see into the result an "operation type" as "ADMINISTRATIVE_STATUS_CHANGE"

  Scenario: Find a operation that not exists
    Given an ogapi "operation finder" util
    And I want to read a "operation"
 	When I try to find by...
     | field    | content    |
     | id       | not_exists |
     Then response code should be: 200  

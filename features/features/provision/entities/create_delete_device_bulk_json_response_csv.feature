# features/create_delete_device_bulk.feature
@provision
@create_provision
@entities_provision
@bulk_json_response_csv
@bulk_response_csv
@bulk
@csv
Feature: Delete and Create a device
  As a device of JsApi
  I want to create a device using json file
  So, I can create a new user with the parametres that I have been defined

  Background:
    Given an apikey user by "require-real-apikey"

  Scenario: Creating an organization to use in create device
    Given an ogapi "organizations builder" util
    Then I want to create an "organization"
    And the "name" "organization_bulk"
    And the "description" "device organization"
    And the "country code" "ES"
    And the "lang code" "es"
    And the "time zone" "Europe/Andorra"
    And the "zoom" 10
    And the "location" with 1 and 1
    Then I delete it
    And I create it
    And response code should be: 201

  Scenario: I want to create a device from json file
    Given an ogapi "json bulk builder" util with "organization_bulk"
    And I read the file from "/file_test/bulk_simple.json"
    And I "create" it with bulk and response with format csv
    Then does not throws an error
    Then the content of file "result.csv" must be:
      """
      statusCode;location;errors
      201;https://172.19.18.132:8444/v80/provision/organizations/organization_bulk/devices/device_bulk_json_simple;

      """

  Scenario: I want to create a device from json file - duplicated error
    Given an ogapi "json bulk builder" util with "organization_bulk"
    And I read the file from "/file_test/bulk_simple.json"
    And I "create" it with bulk and response with format csv
    Then does not throws an error
    Then the content of file "result.csv" must be:
      """
      statusCode;location;errors
      400;https://172.19.18.132:8444/v80/provision/organizations/organization_bulk/devices/device_bulk_json_simple;[{"code":"0x010114","message":"Entity duplicated.","context":[]}]

      """

  Scenario: I want to update a device from json file
    Given an ogapi "json bulk builder" util with "organization_bulk"
    And I read the file from "/file_test/bulk_simple.json"
    And I "update" it with bulk and response with format csv
    Then does not throws an error
    Then the content of file "result.csv" must be:
      """
      statusCode;location;errors
      200;https://172.19.18.132:8444/v80/provision/organizations/organization_bulk/devices/device_bulk_json_simple;

      """

  Scenario: I want to delete a device from json file
    Given an ogapi "json bulk builder" util with "organization_bulk"
    And I read the file from "/file_test/bulk_simple.json"
    And I "delete" it with bulk and response with format csv
    And response code should be: 200
    Then the content of file "result.csv" must be:
      """
      statusCode;location;errors
      200;https://172.19.18.132:8444/v80/provision/organizations/organization_bulk/devices/device_bulk_json_simple;

      """

  Scenario: Delete the organization
    Given an ogapi "organizations builder" util
    Then I want to create an "organization"
    And the "name" "organization_bulk"
    Then I delete it
    And response code should be: 200
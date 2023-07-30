Feature: Login
    
    As a User,
    I should be able to log in to Sauce Demo website,
    and access my account
    
    Background:
        Given Sauce Demo login page
    
    Scenario: Login to Sauce Demo website with valid credential
        When I enter a valid username
        And with a valid password
        And click login button
        Then I can logged in and access the account

    Scenario: Login to Sauce Demo website with invalid credential
        When I enter the username as "abc"
        And I enter the password as "abc"
        And click login button
        Then I will see an error message

    Scenario: Logout from the account and back to login page
        Given I already logged in to Sauce Demo website
        When I open side menu
        And click Logout
        Then I will back to login page
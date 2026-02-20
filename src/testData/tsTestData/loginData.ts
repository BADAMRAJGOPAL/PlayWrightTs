export interface LoginTestData {
    testId: string;
    description: string;
    email: string;
    password: string;
    emailErrorMessage: string;
    passwordErrorMessage: string;
}

export const loginTestData: LoginTestData[] = [
    {
        "testId": "TC_LOGIN_001",
        "description": "Verify login with empty email and password",
        "email": "",
        "password": "",
        "emailErrorMessage": "*Email is required",
        "passwordErrorMessage":"*Password is required"
    },
    {
        "testId": "TC_LOGIN_002",
        "description": "Verify login with empty email",
        "email": "",
        "password": "Valid@123",
        "emailErrorMessage": "*Email is required",
        "passwordErrorMessage":"None"
    },
    {
        "testId": "TC_LOGIN_003",
        "description": "Verify login with empty password",
        "email": "user@test.com",
        "password": "",
        "emailErrorMessage": "None",
        "passwordErrorMessage":"*Password is required"
    },
    {
        "testId": "TC_LOGIN_004",
        "description": "Verify login with invalid email format (no @)",
        "email": "usertest.com",
        "password": "Valid@123",
        "emailErrorMessage": "*Enter Valid Email",
        "passwordErrorMessage":"None"
    },
    {
        "testId": "TC_LOGIN_005",
        "description": "Verify login with invalid email format (no domain)",
        "email": "user@",
        "password": "Valid@123",
        "emailErrorMessage": "*Enter Valid Email",
        "passwordErrorMessage":"None"
    },
    {
        "testId": "TC_LOGIN_006",
        "description": "Verify login with email having leading/trailing spaces",
        "email": " user@test.com ",
        "password": "Valid@123",
        "emailErrorMessage": "None",
        "passwordErrorMessage":"None"
    },
    {
        "testId": "TC_LOGIN_007",
        "description": "Verify login with non-registered email",
        "email": "notregistered@test.com",
        "password": "Valid@123",
        "emailErrorMessage": "None",
        "passwordErrorMessage":"None"
    },
    {
        "testId": "TC_LOGIN_008",
        "description": "Verify login with incorrect password",
        "email": "user@test.com",
        "password": "WrongPass@123",
        "emailErrorMessage": "None",
        "passwordErrorMessage":"None"
    },
    {
        "testId": "TC_LOGIN_009",
        "description": "Verify login with password having leading space",
        "email": "user@test.com",
        "password": " Valid@123",
        "emailErrorMessage": "*Email is required",
        "passwordErrorMessage":"None"
    },
    {
        "testId": "TC_LOGIN_010",
        "description": "Verify login with very short password",
        "email": "user@test.com",
        "password": "123",
        "emailErrorMessage": "*Email is required",
        "passwordErrorMessage":"None"
    },
    {
        "testId": "TC_LOGIN_011",
        "description": "Verify login with very long password",
        "email": "user@test.com",
        "password": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        "emailErrorMessage": "*Email is required",
        "passwordErrorMessage":"None"
    },
    {
        "testId": "TC_LOGIN_012",
        "description": "Verify login with SQL injection in email",
        "email": "' OR 1=1 --",
        "password": "anything",
        "emailErrorMessage": "*Email is required",
        "passwordErrorMessage":"None"
    },
    {
        "testId": "TC_LOGIN_013",
        "description": "Verify login with SQL injection in password",
        "email": "user@test.com",
        "password": "' OR 1=1 --",
        "emailErrorMessage": "*Email is required",
        "passwordErrorMessage":"None"
    },
    {
        "testId": "TC_LOGIN_014",
        "description": "Verify login with XSS script in email",
        "email": "alert(1)",
        "password": "Valid@123",
        "emailErrorMessage": "*Email is required",
        "passwordErrorMessage":"None"
    },
    {
        "testId": "TC_LOGIN_015",
        "description": "Verify login with uppercase email",
        "email": "USER@TEST.COM",
        "password": "Valid@123",
        "emailErrorMessage": "*Email is required",
        "passwordErrorMessage":"None"
    }
];
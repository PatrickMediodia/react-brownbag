**Sample React Web App with Authentication using AWS Cognito**

**Open Routes**
/login                 - login using user credentials
/signup                - create a user using email and password
/confirmsignup         - accesible after login or signup if user has not yet confirmed their account
                       - users are able to resend confirmation codes if it has expired 
/forgotpassword        - TO BE IMPLEMENTED
            
**Protected Routes**
/                      - show post data to authenticated users
/changepassword        - change password
/logout                - logout user
/viewprofile           - TO BE IMPLEMENTED

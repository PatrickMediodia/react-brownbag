**Sample React Web App with Authentication using AWS Cognito** <br />

<br /><br />

**Open Routes** <br />
/login                 - login using user credentials <br />
/signup                - create a user using email and password <br />
/confirmsignup         - accesible after login or signup if user has not yet confirmed their account <br />
                       - users are able to resend confirmation codes if it has expired  <br />
/forgotpassword        - TO BE IMPLEMENTED <br />

<br /><br />

**Protected Routes** <br />
/                      - show post data to authenticated users <br />
/changepassword        - change password <br />
/logout                - logout user <br />
/viewprofile           - TO BE IMPLEMENTED <br />

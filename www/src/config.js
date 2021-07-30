// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "3qqba9dgtm41d9c0joohosg59d",     // CognitoClientID
  "api_base_url": "https://f62860g5l9.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-jmitch-todo-app.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d13fuowc8wlkvk.amplifyapp.com"                                      // AmplifyURL
};

export default config;

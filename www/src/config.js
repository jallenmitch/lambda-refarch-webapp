// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6b2k31564aics0e8r2o465mjbj",     // CognitoClientID
  "api_base_url": "https://mw5gz2er4j.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-jmitch-todo-app.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1es8z430zhr0e.amplifyapp.com"                                      // AmplifyURL
};

export default config;

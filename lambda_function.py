import json

def lamda_handler(event, context):
  # TODO implement
  return{
    'status code':200,
    'body': json.dumps('Hello from Lambda!')
  }
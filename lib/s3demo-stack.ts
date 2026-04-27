import * as cdk from "aws-cdk-lib/core";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as s3 from "aws-cdk-lib/aws-s3";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class S3DemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // S3 Bucket
    const s3demobucket = new s3.Bucket(this, "s3DemoBucket04242026", {
      bucketName: "demos3bucket212",
      versioned: true,
      publicReadAccess: false,
    });

    // dynamoDB table
    const dynamoDBdemo = new dynamodb.Table(this, "dynamodbLogicalId", {
      readCapacity: 3,
      writeCapacity: 3,
      partitionKey: { name: "customerId", type: dynamodb.AttributeType.NUMBER },
      tableName: "demoTableName",
    });

    // lambda function
    const demolambda = new lambda.Function(this, "logicalId", {
      code: lambda.Code.fromAsset("../services/"),
      handler: "lambda_function.lambda_handler",
      runtime: lambda.Runtime.PYTHON_3_10,
      functionName: "demoCdkLambda",
    });
  }
}

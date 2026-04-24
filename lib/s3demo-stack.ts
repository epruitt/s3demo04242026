import * as cdk from "aws-cdk-lib/core";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as s3 from "aws-cdk-lib/aws-s3";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";

export class S3DemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'S3DemoQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    // S3 Bucket
    const s3demobucket = new s3.Bucket(this, "s3demobucket04242026", {
      bucketName: "demos3bucket223",
      versioned: true,
      publicReadAccess: false,
    });

    // dynamoDB table
    const dynamoDBdemo = new dynamodb.Table(this, "dynamodblogicalid", {
      readCapacity: 3,
      writeCapacity: 3,
      partitionKey: { name: "customerid", type: dynamodb.AttributeType.NUMBER },
      tableName: "demotablename",
    });
  }
}

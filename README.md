# AWS CDK v2 S3 Bucket Guide

This project demonstrates how to create and manage an Amazon S3 bucket using AWS CDK v2 with TypeScript. It provides a step-by-step walkthrough of setting up your environment, defining infrastructure as code, deploying resources, and safely cleaning up.

## Overview

The guide walks through the full lifecycle of building cloud infrastructure using AWS CDK, including initialization, development, deployment, modification, and teardown. It follows best practices for structuring infrastructure code and validating changes before deployment.

## Steps

### 1. Environment Setup

* Create a project folder on your local machine.
* Open the folder in Visual Studio Code.
* Prepare your terminal for running CDK and Node.js commands.

### 2. Initialize Infrastructure Directory

* Create an `infra` directory to store infrastructure code.
* Initialize a CDK application using:

  ```bash
  cdk init app --language typescript
  ```

### 3. Import Required Modules

* Navigate to the `lib` directory.
* Import necessary AWS CDK modules, particularly for S3.

### 4. Define the S3 Bucket

* Create an S3 bucket construct by specifying:

  * **Scope**
  * **Logical ID**
  * **Properties**, such as:

    * Bucket name
    * Versioning
    * Public read access

### 5. Build the Application (Optional)

* Run the following command to catch syntax errors:

  ```bash
  npm run build
  ```

### 6. Bootstrap the Environment

* Prepare your AWS environment for CDK deployments:

  ```bash
  cdk bootstrap
  ```

### 7. Synthesize CloudFormation Template

* Generate a CloudFormation template from your CDK code:

  ```bash
  cdk synth
  ```

### 8. Deploy the Stack

* Deploy your infrastructure:

  ```bash
  cdk deploy
  ```
* Review created resources in AWS CloudFormation.

### 9. Modify and Validate Changes

* Update bucket properties as needed.
* Preview infrastructure changes before deployment:

  ```bash
  cdk diff
  ```

### 10. Clean Up Resources

* Delete the deployed stack:

  ```bash
  cdk destroy
  ```
* Ensures no unnecessary costs, while optionally retaining the S3 bucket.

## Summary

This project provides a complete introduction to using AWS CDK v2 for managing S3 resources. It emphasizes best practices, safe deployment workflows, and iterative development, making it a strong foundation for infrastructure as code on AWS.

const solArc = [
  {
    question: `A suite of web applications is hosted in an Auto Scaling group of EC2 instances across three Availability Zones and is configured with default settings.
       There is an Application Load Balancer that forwards the request to the respective target group on the URL path. 
       The scale-in policy has been triggered due to the low number of incoming traffic to the application. 
       Which EC2 instance will be the first one to be terminated by your Auto Scaling group?`,
    answers: {
      a: "The instance will be randomly selected by the auto scaling group",
      b: "The EC2 instance launched from the oldest launch configuration",
      c: "The instance which has the least number of user session",
    },
    correctAnswer: "b",
    explanation: `The default termination policy is designed to help ensure that your network architecture spans Availability Zones evenly. With the default termination policy, the behavior of the Auto Scaling group is as follows:

      1. If there are instances in multiple Availability Zones, choose the Availability Zone with the most instances and at least one instance that is not protected from scale in. If there is more than one Availability Zone with this number of instances, choose the Availability Zone with the instances that use the oldest launch configuration.
      
      2. Determine which unprotected instances in the selected Availability Zone use the oldest launch configuration. If there is one such instance, terminate it.
      
      3. If there are multiple instances to terminate based on the above criteria, determine which unprotected instances are closest to the next billing hour. (This helps you maximize the use of your EC2 instances and manage your Amazon EC2 usage costs.) If there is one such instance, terminate it.
      
      4. If there is more than one unprotected instance closest to the next billing hour, choose one of these instances at random.
      
      The following flow diagram illustrates how the default termination policy works:
      `,
  },

  {
    question: `An online cryptocurrency exchange platform is hosted in AWS which uses ECS Cluster and RDS in Multi-AZ Deployments configuration.
         The application is heavily using the RDS instance to process complex read and write database operations.
        To maintain the reliability, availability, and performance of your systems, you have to closely monitor how the different processes or threads on a DB instance use the CPU,
        including the percentage of the CPU bandwidth and total memory consumed by each process.   
         Which of the following is the most suitable solution to properly monitor your database?`,
    answers: {
      a:
        "Check the CPU% and MEM% metrics which are readily available in the Amazon RDS console that shows the percentage of the CPU bandwidth and total memory consumed by each database process of your RDS instance ",
      b:
        "Use Amazon CloudWatch to monitor the CPU Utilization of your database",
      c: "enabling Enhanced Monitoring in RDS",
      d:
        "Create a script that collects and publishes custom metrics to CloudWatch, which tracks the real-time CPU Utilization of the RDS instance and then set up a custom CloudWatch dashboard to view the metrics ",
    },
    correctAnswer: "c",
    explanation: `Amazon RDS provides metrics in real time for the operating system (OS) that your DB instance runs on. 
        You can view the metrics for your DB instance using the console, 
        or consume the Enhanced Monitoring JSON output from CloudWatch Logs in a monitoring system of your choice.
         By default, Enhanced Monitoring metrics are stored in the CloudWatch Logs for 30 days. 
         To modify the amount of time the metrics are stored in the CloudWatch Logs, 
         change the retention for the RDSOSMetrics log group in the CloudWatch console.
         Take note that there are certain differences between CloudWatch and Enhanced Monitoring Metrics.
         CloudWatch gathers metrics about CPU utilization from the hypervisor for a DB instance, 
         and Enhanced Monitoring gathers its metrics from an agent on the instance. 
         As a result, you might find differences between the measurements, 
         because the hypervisor layer performs a small amount of work. 
         Hence, enabling Enhanced Monitoring in RDS is the correct answer in this specific scenario.
         
         Using Amazon CloudWatch to monitor the CPU Utilization of your database is incorrect 
         because although you can use this to monitor the CPU Utilization of your database instance, 
         it does not provide the percentage of the CPU bandwidth and total memory consumed 
         by each database process in your RDS instance.
        Take note that CloudWatch gathers metrics about CPU utilization from the hypervisor for a DB instance 
        while RDS Enhanced Monitoring gathers its metrics from an agent on the instance.

The option that says: 
Create a script that collects and publishes custom metrics to CloudWatch,
 which tracks the real-time CPU Utilization of the RDS instance and then set up a custom CloudWatch dashboard to
  view the metrics is incorrect because although you can use Amazon CloudWatch Logs and CloudWatch dashboard to 
  monitor the CPU Utilization of the database instance, 
 using CloudWatch alone is still not enough to get the specific percentage of the CPU bandwidth and total memory 
 consumed by each database processes.
  The data provided by CloudWatch is not as detailed as compared with the Enhanced Monitoring feature in RDS. 
  Take note as well that you do not have direct access to the instances/servers of your RDS database instance, 
  unlike with your EC2 instances where you can install a CloudWatch agent or a custom script to get CPU and memory
   utilization of your instance.

The option that says: 
Check the CPU% and MEM% metrics which are readily available in the Amazon RDS console that shows 
the percentage of the CPU bandwidth and total memory consumed by each database 
process of your RDS instance is incorrect because the CPU% and MEM% metrics are not readily 
available in the Amazon RDS console, 
which is contrary to what is being stated in this option.
References:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.CloudWatchLogs

https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MonitoringOverview.html#monitoring-cloudwatch

Check out this Amazon CloudWatch Cheat Sheet:
https://tutorialsdojo.com/aws-cheat-sheet-amazon-cloudwatch/

Check out this Amazon RDS Cheat Sheet:

https://tutorialsdojo.com/aws-cheat-sheet-amazon-relational-database-service-amazon-rds/
         `,
  },
  {
    question: `A company has 3 DevOps engineers that are handling its software development and infrastructure management processes. 
        One of the engineers accidentally deleted a file hosted in Amazon S3 which has caused disruption of service.
       What can the DevOps engineers do to prevent this from happening again?`,
    answers: {
      a: "Setting up a signed URL for all users",
      b: "Using S3 Infrequently Accessed storage to store the data",
      c: "Creating an IAM bucket policy that disables delete operation",
      d:
        "Enable Versioning and Enable MFA (Multi-Factor Authentication) Delete",
    },
    correctAnswer: "d",
    explanation: `To avoid accidental deletion in Amazon S3 bucket, you can:
      - Enable Versioning
    - Enable MFA (Multi-Factor Authentication) Delete
    Versioning is a means of keeping multiple variants of an object in the same bucket.
     You can use versioning to preserve, retrieve, and restore every version of every object stored in your Amazon S3 bucket.
     With versioning, you can easily recover from both unintended user actions and application failures.
        
        If the MFA (Multi-Factor Authentication) Delete is enabled, 
        it requires additional authentication for either of the following operations:
        
        - Change the versioning state of your bucket
        
        - Permanently delete an object version
        
        
        Using S3 Infrequently Accessed storage to store the data is incorrect. 
        Switching your storage class to S3 Infrequent Access won't help mitigate accidental deletions.
        
        Setting up a signed URL for all users is incorrect. 
        Signed URLs give you more control over access to your content, 
        so this feature deals more on accessing rather than deletion.
        
        Creating an IAM bucket policy that disables delete operation is incorrect. 
        If you create a bucket policy preventing deletion, 
        other users won't be able to delete objects that should be deleted. 
        You only want to prevent accidental deletion, not disable the action itself.
        
        Reference:
    http://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html
    Check out this Amazon S3 Cheat Sheet:
    https://tutorialsdojo.com/amazon-s3/`,
  },
  {
    question: `A company plans to build a data analytics application in AWS which will be deployed in an Auto Scaling group of On-Demand EC2 instances and a MongoDB database. 
        It is expected that the database will have high-throughput workloads performing small, random I/O operations.
         As the Solutions Architect, you are required to properly set up and launch the required resources in AWS.
        Which of the following is the most suitable EBS type to use for your database?`,
    answers: {
      a: "Cold HDD (sc1)",
      b: "Throughput Optimized HDD (st1)",
      c: "Provisioned IOPS SSD (io1) ",
      d: "General Purpose SSD (gp2)",
    },
    correctAnswer: "c",
    explanation: `On a given volume configuration, certain I/O characteristics drive the performance behavior for your EBS volumes.
SSD-backed volumes, such as General Purpose SSD (gp2) and Provisioned IOPS SSD (io1), 
deliver consistent performance whether an I/O operation is random or sequential. 
HDD-backed volumes like Throughput Optimized HDD (st1) and Cold HDD (sc1) deliver optimal performance only when I/O operations are large and sequential.
Provisioned IOPS SSD (io1) volumes are designed to meet the needs of I/O-intensive workloads, particularly database workloads, that are sensitive to storage performance and consistency.
Unlike gp2, which uses a bucket and credit model to calculate performance, an io1 volume allows you to specify a consistent IOPS rate when you create the volume,
and Amazon EBS delivers within 10 percent of the provisioned IOPS performance 99.9 percent of the time over a given year.
General Purpose SSD (gp2) is incorrect because although General Purpose is a type of SSD that can handle small, random I/O operations, 
the Provisioned IOPS SSD volumes are much more suitable to meet the needs of I/O-intensive database workloads such as MongoDB, Oracle, MySQL, and many others.

Throughput Optimized HDD (st1) and Cold HDD (sc1) are incorrect because HDD volumes (such as Throughput Optimized HDD and Cold HDD volumes) 
are more suitable for workloads with large, sequential I/O operations instead of small, random I/O operations.
Reference:
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html#EBSVolumeTypes_piops

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html


Check out this Amazon EBS Cheat Sheet:

https://tutorialsdojo.com/amazon-ebs/
`,
  },
  {
    question: `A media company has an Amazon ECS Cluster,
         which uses the Fargate launch type, to host its news website. 
         The database credentials should be supplied using environment variables,
          to comply with strict security compliance. 
          As the Solutions Architect, you have to ensure that the credentials are secure and that they cannot be viewed in plaintext on the cluster itself.
   Which of the following is the most suitable solution in this scenario that you can implement with minimal effort?
    `,
    answers: {
      a: ` Use the AWS Secrets Manager to store the database credentials and then encrypt them using AWS KMS.
           Create a resource-based policy for your Amazon ECS task execution role (taskRoleArn) 
           and reference it with your task definition which allows access to both KMS and AWS Secrets Manager.
            Within your container definition, specify secrets with the name of the environment variable to set in the container 
          and the full ARN of the Secrets Manager secret which contains the sensitive data, to present to the container`,
      b: `In the ECS task definition file of the ECS Cluster,
           store the database credentials using Docker Secrets to centrally 
           manage these sensitive data and securely transmit it to only those containers that need access to it.
            Secrets are encrypted during transit and at rest. 
            A given secret is only accessible to those services which have been granted explicit access to it via IAM Role,
           and only while those service tasks are running`,
      c: `Use the AWS Systems Manager Parameter Store to keep the database credentials and then encrypt them using AWS KMS. 
          Create an IAM Role for your Amazon ECS task execution role (taskRoleArn) and reference it with your task definition, which allows access to both KMS and the Parameter Store.
           Within your container definition,
         specify secrets with the name of the environment variable to set in the container and the full ARN of the Systems Manager Parameter Store parameter containing the sensitive data to present to the container.`,
      d: ` Store the database credentials in the ECS task definition file of the ECS Cluster and encrypt it with KMS.
           Store the task definition JSON file in a private S3 bucket and ensure that HTTPS is 
           enabled on the bucket to encrypt the data in-flight. Create an IAM role to the ECS task
            definition script that allows access to the specific S3 bucket 
            and then pass the --cli-input-json parameter when calling the ECS register-task-definition.
           Reference the task definition JSON file in the S3 bucket which contains the database credentials`,
    },
    correctAnswer: "c",
    explanation: `
Amazon ECS enables you to inject sensitive data into your containers by storing your sensitive data in either AWS Secrets Manager secrets or AWS Systems Manager Parameter Store parameters and then referencing them in your container definition. This feature is supported by tasks using both the EC2 and Fargate launch types.
Secrets can be exposed to a container in the following ways:
- To inject sensitive data into your containers as environment variables, use the secrets container definition parameter.
- To reference sensitive information in the log configuration of a container, use the secretOptions container definition parameter.
Within your container definition, specify secrets with the name of the environment variable to set in the container and the full ARN of either the Secrets Manager secret or Systems Manager Parameter Store parameter containing the sensitive data to present to the container. The parameter that you reference can be from a different Region than the container using it, but must be from within the same account.

Hence, the correct answer is the option that says: Use the AWS Systems Manager Parameter Store to keep the database credentials and then encrypt them using AWS KMS. Create an IAM Role for your Amazon ECS task execution role (taskRoleArn) and reference it with your task definition, which allows access to both KMS and the Parameter Store. Within your container definition, specify secrets with the name of the environment variable to set in the container and the full ARN of the Systems Manager Parameter Store parameter containing the sensitive data to present to the container.

The option that says: In the ECS task definition file of the ECS Cluster, store the database credentials using Docker Secrets to centrally manage these sensitive data and securely transmit it to only those containers that need access to it. Secrets are encrypted during transit and at rest. A given secret is only accessible to those services which have been granted explicit access to it via IAM Role, and only while those service tasks are running is incorrect because although you can use Docker Secrets to secure the sensitive database credentials, this feature is only applicable in Docker Swarm. In AWS, the recommended way to secure sensitive data is either through the use of Secrets Manager or Systems Manager Parameter Store.

The option that says: Store the database credentials in the ECS task definition file of the ECS Cluster and encrypt it with KMS. Store the task definition JSON file in a private S3 bucket and ensure that HTTPS is enabled on the bucket to encrypt the data in-flight. Create an IAM role to the ECS task definition script that allows access to the specific S3 bucket and then pass the --cli-input-json parameter when calling the ECS register-task-definition. Reference the task definition JSON file in the S3 bucket which contains the database credentials is incorrect because although the solution may work, it is not recommended to store sensitive credentials in S3. This entails a lot of overhead and manual configuration steps which can be simplified by simply using the Secrets Manager or Systems Manager Parameter Store.

The option that says: Use the AWS Secrets Manager to store the database credentials and then encrypt them using AWS KMS. Create a resource-based policy for your Amazon ECS task execution role (taskRoleArn) and reference it with your task definition which allows access to both KMS and AWS Secrets Manager. Within your container definition, specify secrets with the name of the environment variable to set in the container and the full ARN of the Secrets Manager secret which contains the sensitive data, to present to the container is incorrect because although the use of Secrets Manager in securing sensitive data in ECS is valid, using an IAM Role is a more suitable choice over a resource-based policy for the Amazon ECS task execution role.


References:

https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html

https://aws.amazon.com/blogs/mt/the-right-way-to-store-secrets-using-parameter-store/


Check out these Amazon ECS and AWS Systems Manager Cheat Sheets:

https://tutorialsdojo.com/aws-cheat-sheet-amazon-elastic-container-service-amazon-ecs/

https://tutorialsdojo.com/aws-cheat-sheet-aws-systems-manager/      

`,
  },
  {
    question: `A software development company is using serverless computing with AWS Lambda to build and run applications without having to set up or manage servers. 
        They have a Lambda function that connects to a MongoDB Atlas, which is a popular Database as a Service (DBaaS) platform and also uses a third party API to fetch certain data for their application. 
        One of the developers was instructed to create the environment variables for the MongoDB database hostname, username, and password as well as the API credentials that will be used by the Lambda function for DEV, SIT, UAT, and PROD environments.
 Considering that the Lambda function is storing sensitive database and API credentials,
  how can this information be secured to prevent other developers in the team, or anyone, 
  from seeing these credentials in plain text? Select the best option that provides maximum security.`,
    answers: {
      a:
        "There is no need to do anything because, by default, AWS Lambda already encrypts the environment variables using the AWS Key Management Service ",
      b:
        "Enable SSL encryption that leverages on AWS CloudHSM to store and encrypt the sensitive information",
      c:
        "AWS Lambda does not provide encryption for the environment variables. Deploy your code to an EC2 instance instead ",
      d:
        "Create new KMS keys and use it to enable encryption helpers that that leverage on aws key management service to store and encrypt the sensitive information",
    },
    correctAnswer: "d",
    explanation: `
 When you create or update Lambda functions that use environment variables,
  AWS Lambda encrypts them using the AWS Key Management Service. When your Lambda function is invoked, those values are decrypted and made available to the Lambda code.
The first time you create or update Lambda functions that use environment variables in a region, a default service key is created for you automatically within AWS KMS. This key is used to encrypt environment variables. 
However, if you wish to use encryption helpers and use KMS to encrypt environment variables after your Lambda function is created, you must create your own AWS KMS key and choose it instead of the default key. The default key will give errors when chosen. 
Creating your own key gives you more flexibility, including the ability to create, rotate, disable, and define access controls, and to audit the encryption keys used to protect your data.
The option that says:
<b> There is no need to do anything because, by default, AWS Lambda already encrypts the environment variables using the AWS Key Management Service </b>is incorrect. 
Although Lambda encrypts the environment variables in your function by default, the sensitive information would still be visible to other users who have access to the Lambda console. 
This is because Lambda uses a default KMS key to encrypt the variables, which is usually accessible by other users. 
The best option in this scenario is to use encryption helpers to secure your environment variables.

The option that says: 
<b>Enable SSL encryption that leverages on AWS CloudHSM to store and encrypt the sensitive information</b> is also incorrect since enabling SSL would encrypt data only when in-transit. Your other teams would still be able to view the plaintext at-rest. Use AWS KMS instead.

The option that says:
 <b>AWS Lambda does not provide encryption for the environment variables. Deploy your code to an EC2 instance instead</b> is incorrect since, as mentioned, Lambda does provide encryption functionality of environment variables.

References:

https://docs.aws.amazon.com/lambda/latest/dg/env_variables.html#env_encrypt

https://docs.aws.amazon.com/lambda/latest/dg/tutorial-env_console.html


Check out this AWS Lambda Cheat Sheet:

https://tutorialsdojo.com/aws-lambda/
     
`,
  },
  {
    question: `
        A company is using Amazon S3 to store frequently accessed data. 
        When an object is created or deleted, the S3 bucket will send an event notification to the Amazon SQS queue. 
        A solutions architect needs to create a solution that will notify the development and operations team about the created or deleted objects.
       Which of the following would satisfy this requirement?
        `,
    answers: {
      a:
        "Create a new Amazon SNS FIFO topic for the other team. Grant Amazon S3 permission to send the notification to the second SNS topic",
      b: `Create an Amazon SNS topic and configure two Amazon SQS queues to subscribe to the topic. 
          Grant Amazon S3 permission to send notifications to Amazon SNS and update the bucket to use the new SNS topic.`,
      c:
        " Set up another Amazon SQS queue for the other team. Grant Amazon S3 permission to send a notification to the second SQS queue",
      d:
        "Set up an Amazon SNS topic and configure two Amazon SQS queues to poll the SNS topic. Grant Amazon S3 permission to send notifications to Amazon SNS and update the bucket to use the new SNS topic",
    },
    correctAnswer: "b",
    explanation: `
The Amazon S3 notification feature enables you to receive notifications when certain events happen in your bucket. To enable notifications, you must first add a notification configuration that identifies the events you want Amazon S3 to publish and the destinations where you want Amazon S3 to send the notifications. You store this configuration in the notification subresource that is associated with a bucket.
Amazon S3 supports the following destinations where it can publish events:
- Amazon Simple Notification Service (Amazon SNS) topic
- Amazon Simple Queue Service (Amazon SQS) queue
- AWS Lambda
In Amazon SNS, the fanout scenario is when a message published to an SNS topic is replicated and pushed to multiple endpoints, such as Amazon SQS queues, HTTP(S) endpoints, and Lambda functions. This allows for parallel asynchronous processing     

For example, you can develop an application that publishes a message to an SNS topic whenever an order is placed for a product. Then, SQS queues that are subscribed to the SNS topic receive identical notifications for the new order. An Amazon Elastic Compute Cloud (Amazon EC2) server instance attached to one of the SQS queues can handle the processing or fulfillment of the order. And you can attach another Amazon EC2 server instance to a data warehouse for analysis of all orders received.

Based on the given scenario, the existing setup sends the event notification to an SQS queue. Since you need to send the notification to the development and operations team, you can use a combination of Amazon SNS and SQS. By using the message fanout pattern, you can create a topic and use two Amazon SQS queues to subscribe to the topic. If Amazon SNS receives an event notification, it will publish the message to both subscribers.

Take note that Amazon S3 event notifications are designed to be delivered at least once and to one destination only. You cannot attach two or more SNS topics or SQS queues for S3 event notification. Therefore, you must send the event notification to Amazon SNS.

Hence, the correct answer is: Create an Amazon SNS topic and configure two Amazon SQS queues to subscribe to the topic. Grant Amazon S3 permission to send notifications to Amazon SNS and update the bucket to use the new SNS topic.

The option that says: Set up another Amazon SQS queue for the other team. Grant Amazon S3 permission to send a notification to the second SQS queue is incorrect because you can only add 1 SQS or SNS at a time for Amazon S3 events notification. If you need to send the events to multiple subscribers, you should implement a message fanout pattern with Amazon SNS and Amazon SQS.

The option that says: Create a new Amazon SNS FIFO topic for the other team. Grant Amazon S3 permission to send the notification to the second SNS topic is incorrect because just as mentioned in the previous option, you can only add 1 SQS or SNS at a time for Amazon S3 events notification. In addition, neither Amazon SNS FIFO topic nor Amazon SQS FIFO queue is warranted in this scenario. Both of them can be used together to provide strict message ordering and message deduplication. The FIFO capabilities of each of these services work together to act as a fully managed service to integrate distributed applications that require data consistency in near-real-time.

The option that says: Set up an Amazon SNS topic and configure two Amazon SQS queues to poll the SNS topic. Grant Amazon S3 permission to send notifications to Amazon SNS and update the bucket to use the new SNS topic is incorrect because you can't poll Amazon SNS. Instead of configuring queues to poll Amazon SNS, you should configure each Amazon SQS queue to subscribe to the SNS topic.

 

References:

https://docs.aws.amazon.com/AmazonS3/latest/dev/ways-to-add-notification-config-to-bucket.html

https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html#notification-how-to-overview

https://docs.aws.amazon.com/sns/latest/dg/welcome.html

 

Check out this Amazon S3 Cheat Sheet:

https://tutorialsdojo.com/amazon-s3/
        `,
  },
  {
    question: `A company is designing a banking portal that uses Amazon ElastiCache for Redis as its distributed session management component. Since the other Cloud Engineers in your department have access to your ElastiCache cluster, you have to secure the session data in the portal by requiring them to enter a password before they are granted permission to execute Redis commands.
As the Solutions Architect, which of the following should you do to meet the above requirement?`,
    answers: {
      a:
        "Set up a Redis replication group and enabling the AtRestEncryptionEnabled parameter ",
      b: "Enabling the in-transit encryption for Redis replication groups",
      c:
        "Set up an IAM Policy and MFA which requires the Cloud Engineers to enter their IAM credentials and token before they can access the ElastiCache cluster",
      d:
        "Authenticate the users using Redis AUTH by creating a new Redis Cluster with both the --transit-encryption-enabled and --auth-token parameters enabled",
    },
    correctAnswer: "d",
    explanation: `
Using Redis AUTH command can improve data security by requiring the user to enter a password before they are granted permission to execute Redis commands on a password-protected Redis server. Hence, the correct answer is:
Authenticate the users using Redis AUTH by creating a new Redis Cluster with both the --transit-encryption-enabled and --auth-token parameters enabled.
To require that users enter a password on a password-protected Redis server, 
include the parameter --auth-token with the correct password when you create your replication group or cluster and on all subsequent commands to the replication group or cluster.
Setting up an IAM Policy and MFA which requires the Cloud Engineers to enter their IAM credentials and token before they can access the ElastiCache cluster is incorrect because this is not possible in IAM. You have to use the Redis AUTH option instead.
Setting up a Redis replication group and enabling the AtRestEncryptionEnabled parameter is incorrect because the Redis At-Rest Encryption feature only secures the data inside the in-memory data store. You have to use Redis AUTH option instead.
Enabling the in-transit encryption for Redis replication groups is incorrect. Although in-transit encryption is part of the solution, it is missing the most important thing which is the Redis AUTH option.
References:
https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html

https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/encryption.html

Check out this Amazon Elasticache Cheat Sheet:

https://tutorialsdojo.com/amazon-elasticache/


Redis (cluster mode enabled vs disabled) vs Memcached:

https://tutorialsdojo.com/redis-cluster-mode-enabled-vs-disabled-vs-memcached/        

`,
  },
  {
    question: `
A company plans to launch an Amazon EC2 instance in a private subnet for its internal corporate web portal.
 For security purposes, the EC2 instance must send data to Amazon DynamoDB and Amazon S3 via private endpoints that don't pass through the public Internet.
Which of the following can meet the above requirements?
        `,
    answers: {
      a:
        "Use AWS VPN CloudHub to route all access in S3 and DynamoDB to a private endpoint",
      b:
        "Use VPC endpoints to route all access to S3 and DynamoDB via private endpoints.",
      c:
        "Use AWS Direct Connect to route all access to S3 and DynamoDB via private endpoints",
      d:
        "Use AWS Transit Gateway to route all access in S3 and DynamoDB to a public endpoint",
    },
    correctAnswer: "b",
    explanation: `
A VPC endpoint allows you to privately connect your VPC to supported AWS and VPC endpoint services powered by AWS PrivateLink without needing an Internet gateway, NAT computer, VPN connection, or AWS Direct Connect connection.
Instances in your VPC do not require public IP addresses to communicate with resources in the service.
Traffic between your VPC and the other service does not leave the Amazon network.
In the scenario, you are asked to configure private endpoints to send data to Amazon DynamoDB and Amazon S3 without accessing the public Internet. Among the options given, VPC endpoint is the most suitable service that will allow you to use private IP addresses to access both DynamoDB and S3 without any exposure to the public internet.

Hence, the correct answer is the option that says: Use VPC endpoints to route all access to S3 and DynamoDB via private endpoints.

The option that says: Use AWS Transit Gateway to route all access in S3 and DynamoDB to a public endpoint is incorrect because a Transit Gateway simply connects your VPC and on-premises networks through a central hub. It acts as a cloud router that allows you to integrate multiple networks.

The option that says: Use AWS Direct Connect to route all access to S3 and DynamoDB via private endpoints is incorrect because AWS Direct Connect is primarily used to establish a dedicated network connection from your premises to AWS. The scenario didn't say that the company is using its on-premises server or has a hybrid cloud architecture.

The option that says: Use AWS VPN CloudHub to route all access in S3 and DynamoDB to a private endpoint is incorrect because AWS VPN CloudHub is mainly used to provide secure communication between remote sites and not for creating a private endpoint to access Amazon S3 and DynamoDB within the Amazon network.


References:

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html

https://docs.aws.amazon.com/glue/latest/dg/vpc-endpoints-s3.html


Check out this Amazon VPC Cheat Sheet:

https://tutorialsdojo.com/amazon-vpc/
        `,
  },
  {
    question: `
        A newly hired Solutions Architect is assigned to manage a set of CloudFormation templates that is used in the company's cloud architecture in AWS. 
        The Architect accessed the templates and tried to analyze the configured IAM policy for an S3 bucket.
{
     "Version": "2012-10-17",
     "Statement": [
     {
     "Effect": "Allow",
     "Action": [
     "s3:Get*",
     "s3:List*"
     ],
     "Resource": "*"
     },
     {
     "Effect": "Allow",
     "Action": "s3:PutObject",
     "Resource": "arn:aws:s3:::tutorialsdojo/*"
     }
     ]
    }

What does the above IAM policy allow? (Select THREE.)
        `,
    answers: {
      a:
        "An IAM user with this IAM policy is allowed to read objects from all S3 buckets owned by the account.",
      b:
        "An IAM user with this IAM policy is allowed to write objects into the 'tutorialsdojo' S3 bucket.",
      c:
        "An IAM user with this IAM policy is allowed to read objects from the 'tutorialsdojo' S3 bucket.",
      d:
        "An IAM user with this IAM policy is allowed to change access rights for the 'tutorialsdojo' S3 bucket",
      e:
        " An IAM user with this IAM policy is allowed to read objects in the 'tutorialsdojo' S3 bucket but not allowed to list the objects in the bucket",
      f:
        "An IAM user with this IAM policy is allowed to read and delete objects from the 'tutorialsdojo' S3 bucket",
    },
    correctAnswer: "a,b,c",
    explanation: `
You manage access in AWS by creating policies and attaching them to IAM identities (users, groups of users, or roles) or AWS resources.
A policy is an object in AWS that, when associated with an identity or resource, defines their permissions.
AWS evaluates these policies when an IAM principal (user or role) makes a request.
Permissions in the policies determine whether the request is allowed or denied.
Most policies are stored in AWS as JSON documents. AWS supports six types of policies: 
identity-based policies, resource-based policies, permissions boundaries, AWS Organizations SCPs, ACLs, and session policies.
IAM policies define permissions for action regardless of the method that you use to perform the operation. 
For example, if a policy allows the GetUser action, then a user with that policy can get user information from the AWS Management Console, the AWS CLI, or the AWS API.
 When you create an IAM user, you can choose to allow console or programmatic access. If console access is allowed, the IAM user 
 can sign in to the console using a user name and password. Or if programmatic access is allowed, the user can use access keys to work with the CLI or API.
 Based on the provided IAM policy, the user is only allowed to get, write, and list all of the objects for the 'tutorialsdojo' s3 bucket. The s3:PutObject basically means that you can submit a PUT object request to the S3 bucket to store data.

 Hence, the correct answers are:
 
 - An IAM user with this IAM policy is allowed to read objects from all S3 buckets owned by the account.
 
 - An IAM user with this IAM policy is allowed to write objects into the 'tutorialsdojo' S3 bucket.
 
 - An IAM user with this IAM policy is allowed to read objects from the 'tutorialsdojo' S3 bucket.
 
 The option that says: An IAM user with this IAM policy is allowed to change access rights for the 'tutorialsdojo' S3 bucket is incorrect because the template does not have any statements which allow the user to change access rights in the bucket.
 
 The option that says: An IAM user with this IAM policy is allowed to read objects in the 'tutorialsdojo' S3 bucket but not allowed to list the objects in the bucket is incorrect because it can clearly be seen in the template that there is a s3:List* which permits the user to list objects.
 
 The option that says: An IAM user with this IAM policy is allowed to read and delete objects from the 'tutorialsdojo' S3 bucket is incorrect. Although you can read objects from the bucket, you cannot delete any objects.
 
 
 References:
 
 https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectOps.html
 
 https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html
 
 
 Check out this Amazon S3 Cheat Sheet:
 
 https://tutorialsdojo.com/amazon-s3/     
 
 `,
  },
  {
    question: `
A company has a web application that uses Internet Information Services (IIS) for Windows Server.
A file share is used to store the application data on the network-attached storage of the company’s on-premises data center.
 To achieve a highly available system, they plan to migrate the application and file share to AWS.
Which of the following can be used to fulfill this requirement?
`,
    answers: {
      a: "Migrate the existing file share configuration to Amazon EBS",
      b: " Migrate the existing file share configuration to Amazon EFS ",
      c:
        "Migrate the existing file share configuration to Amazon FSx for Windows File Server",
      d:
        "Migrate the existing file share configuration to AWS Storage Gateway ",
    },
    correctAnswer: "c",
    explanation: `
Amazon FSx for Windows File Server provides fully managed Microsoft Windows file servers,
backed by a fully native Windows file system. Amazon FSx for Windows File Server has the features, performance, 
and compatibility to easily lift and shift enterprise applications to the AWS Cloud. It is accessible from Windows, Linux, and macOS compute instances and devices.
Thousands of compute instances and devices can access a file system concurrently.
In this scenario, you need to migrate your existing file share configuration to the cloud. Among the options given, the best possible answer is Amazon FSx. A file share is a specific folder in your file system, including the folder's subfolders, which you make accessible to your compute instances via the SMB protocol. To migrate file share configurations from your on-premises file system, you must migrate your files first to Amazon FSx before migrating your file share configuration.

Hence, the correct answer is: Migrate the existing file share configuration to Amazon FSx for Windows File Server.

The option that says: Migrate the existing file share configuration to AWS Storage Gateway is incorrect because AWS Storage Gateway is primarily used to integrate your on-premises network to AWS but not for migrating your applications. Using a file share in Storage Gateway implies that you will still keep your on-premises systems, and not entirely migrate it.

The option that says: Migrate the existing file share configuration to Amazon EFS is incorrect because it is stated in the scenario that the company is using a file share that runs on a Windows server. Remember that Amazon EFS only supports Linux workloads.

The option that says: Migrate the existing file share configuration to Amazon EBS is incorrect because EBS is primarily used as block storage for EC2 instances and not as a shared file system. A file share is a specific folder in a file system that you can access using a server message block (SMB) protocol. Amazon EBS does not support SMB protocol.


References:

https://aws.amazon.com/fsx/windows/faqs/

https://docs.aws.amazon.com/fsx/latest/WindowsGuide/migrate-file-share-config-to-fsx.html


Check out this Amazon FSx Cheat Sheet:

https://tutorialsdojo.com/amazon-fsx/
        `,
  },
  {
    question: `
A Solutions Architect is hosting a website in an Amazon S3 bucket named tutorialsdojo.
The users load the website using the following URL: http://tutorialsdojo.s3-website-us-east-1.amazonaws.com and there is a new requirement to 
add a JavaScript on the webpages in order to make authenticated HTTP GET requests against the same bucket by using the Amazon S3 API endpoint (tutorialsdojo.s3.amazonaws.com). 
Upon testing, you noticed that the web browser blocks JavaScript from allowing those requests.
Which of the following options is the MOST suitable solution that you should implement for this scenario?
        `,
    answers: {
      a:
        "enabling Cross-origin resource sharing (CORS) configuration in the bucket",
      b: "Enabling cross-account access",
      c: "Enabling Cross-Zone Load Balancing",
      d: "Enabling Cross-Region Replication (CRR)",
    },
    correctAnswer: "a",
    explanation: `
        Cross-origin resource sharing (CORS) defines a way for client web applications that are loaded in one domain to interact with resources in a different domain.
         With CORS support, you can build rich client-side web applications with Amazon S3 and selectively allow cross-origin access to your Amazon S3 resources.
         Suppose that you are hosting a website in an Amazon S3 bucket named your-website and your users load the website endpoint http://your-website.s3-website-us-east-1.amazonaws.com. Now you want to use JavaScript on the webpages that are stored in this bucket to be able to make authenticated GET and PUT requests against the same bucket by using the Amazon S3 API endpoint for the bucket, your-website.s3.amazonaws.com. A browser would normally block JavaScript from allowing those requests, but with CORS you can configure your bucket to explicitly enable cross-origin requests from your-website.s3-website-us-east-1.amazonaws.com.

         In this scenario, you can solve the issue by enabling the CORS in the S3 bucket. Hence, enabling Cross-origin resource sharing (CORS) configuration in the bucket is the correct answer.
         
         Enabling cross-account access is incorrect because cross-account access is a feature in IAM and not in Amazon S3.
         
         Enabling Cross-Zone Load Balancing is incorrect because Cross-Zone Load Balancing is only used in ELB and not in S3.
         
         Enabling Cross-Region Replication (CRR) is incorrect because CRR is a bucket-level configuration that enables automatic, asynchronous copying of objects across buckets in different AWS Regions.
         
         
         References:
         
         http://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html
         
         https://docs.aws.amazon.com/AmazonS3/latest/dev/ManageCorsUsing.html
`,
  },
  {
    question: `
An application that records weather data every minute is deployed in a fleet of Spot EC2 instances and uses a MySQL RDS database instance. Currently, there is only one RDS instance running in one Availability Zone.
 You plan to improve the database to ensure high availability by synchronous data replication to another RDS instance.
Which of the following performs synchronous data replication in RDS?
        `,
    answers: {
      a: "RDS Read Replica",
      b: "DynamoDB Read Replica ",
      c: "create or modify your DB instance to run as a Multi-AZ deployment",
      d: "CloudFront running as a Multi-AZ deployment ",
    },
    correctAnswer: "c",
    explanation: `
When you create or modify your DB instance to run as a Multi-AZ deployment,
Amazon RDS automatically provisions and maintains a synchronous 
standby replica in a different Availability Zone. Updates to your DB Instance 
are synchronously replicated across Availability Zones to the standby in order to keep both in 
sync and protect your latest database updates against DB instance failure.
Reference:

https://aws.amazon.com/rds/details/multi-az/


Check out this Amazon RDS Cheat Sheet:

https://tutorialsdojo.com/aws-cheat-sheet-amazon-relational-database-service-amazon-rds/


Here is a quick introduction to Amazon RDS:

https://youtu.be/eMzCI7S1P9M

 `,
  },

  {
    question: `
A web application is using CloudFront to distribute their images, videos, and other static contents stored in their S3 bucket to its users around the world. The company has recently
 introduced a new member-only access to some of its high quality media files. There is a requirement to provide access to multiple private media files only to their paying subscribers without having to change their current URLs.   
Which of the following is the most suitable solution that you should implement to satisfy this requirement?
        `,
    answers: {
      a:
        " Configure your CloudFront distribution to use Match Viewer as its Origin Protocol Policy which will automatically match the user request. This will allow access to the private content if the request is a paying member and deny it if it is not a member",
      b:
        "Create a Signed URL with a custom policy which only allows the members to see the private files",
      c:
        "Configure your CloudFront distribution to use Field-Level Encryption to protect your private data and only allow access to members",
      d: `
          Use Signed Cookies to control who can access the private files in your CloudFront distribution by
           modifying your application to determine whether a user should have access to your content. For members, 
          send the required Set-Cookie headers to the viewer which will unlock the content only to them.
          `,
    },
    correctAnswer: "d",
    explanation: `
        CloudFront signed URLs and signed cookies provide the same basic functionality: they allow you to control who can access your content. 
        If you want to serve private content through CloudFront and you're trying to decide whether to use signed URLs or signed cookies, consider the following:

Use signed URLs for the following cases:

- You want to use an RTMP distribution. Signed cookies aren't supported for RTMP distributions.

- You want to restrict access to individual files, for example, an installation download for your application.

- Your users are using a client (for example, a custom HTTP client) that doesn't support cookies.

Use signed cookies for the following cases:

- You want to provide access to multiple restricted files, for example, all of the files for a video in HLS format or all of the files in the subscribers' area of a website.

- You don't want to change your current URLs.

Hence, the correct answer for this scenario is the option that says: Use Signed Cookies to control who can access the private files in your CloudFront distribution by modifying your application to determine whether a user should have access to your content. For members, send the required Set-Cookie headers to the viewer which will unlock the content only to them.

The option that says: Configure your CloudFront distribution to use Match Viewer as its Origin Protocol Policy which will automatically match the user request. This will allow access to the private content if the request is a paying member and deny it if it is not a member is incorrect because a Match Viewer is an Origin Protocol Policy which configures CloudFront to communicate with your origin using HTTP or HTTPS, depending on the protocol of the viewer request. CloudFront caches the object only once even if viewers make requests using both HTTP and HTTPS protocols.

The option that says: Create a Signed URL with a custom policy which only allows the members to see the private files is incorrect because Signed URLs are primarily used for providing access to individual files, as shown on the above explanation. In addition, the scenario explicitly says that they don't want to change their current URLs which is why implementing Signed Cookies is more suitable than Signed URL.

The option that says: Configure your CloudFront distribution to use Field-Level Encryption to protect your private data and only allow access to members is incorrect because Field-Level Encryption only allows you to securely upload user-submitted sensitive information to your web servers. It does not provide access to download multiple private files.


Reference:

https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-choosing-signed-urls-cookies.html

https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-cookies.html


Check out this Amazon CloudFront Cheat Sheet:

https://tutorialsdojo.com/aws-cheat-sheet-amazon-cloudfront/

`,
  },
  {
    question: `
A tech company that you are working for has undertaken a Total Cost Of Ownership (TCO) analysis evaluating the use of Amazon S3 versus acquiring more storage hardware.
The result was that all 1200 employees would be granted access to use Amazon S3 for storage of their personal documents.
Which of the following will you need to consider so you can set up a solution that incorporates single sign-on feature from your 
corporate AD or LDAP directory and also restricts access for each individual user to a designated user folder in an S3 bucket? (Select TWO.)
        `,
    answers: {
      a: "Setup a Federation proxy or an Identity provider",
      b: "Setup an AWS Security Token Service to generate temporary tokens",
      c: "Configure an IAM role and an IAM Policy to access the bucket",
      d: "",
      e:
        "Using 3rd party Single Sign-On solutions such as Atlassian Crowd, OKTA, OneLogin and many others",
      f:
        "Mapping each individual user to a designated user folder in S3 using Amazon WorkDocs to access their personal documents",
      g:
        "Setting up a matching IAM user for each of the 1200 users in your corporate directory that needs access to a folder in the S3 bucket",
    },
    correctAnswer: "a,b,c",
    explanation: `
The question refers to one of the common scenarios for temporary credentials in AWS. Temporary credentials are useful in scenarios that involve identity federation, delegation, cross-account access, and IAM roles. In this example, it is called enterprise identity federation considering that you also need to set up a single sign-on (SSO) capability.

The correct answers are:

- Setup a Federation proxy or an Identity provider

- Setup an AWS Security Token Service to generate temporary tokens

- Configure an IAM role and an IAM Policy to access the bucket.
In an enterprise identity federation, you can authenticate users in your organization's network, and then provide those users access to AWS without creating new AWS identities for them and requiring them to sign in with a separate user name and password. This is known as the single sign-on (SSO) approach to temporary access. AWS STS supports open standards like Security Assertion Markup Language (SAML) 2.0, with which you can use Microsoft AD FS to leverage your Microsoft Active Directory. You can also use SAML 2.0 to manage your own solution for federating user identities.

Using 3rd party Single Sign-On solutions such as Atlassian Crowd, OKTA, OneLogin and many others is incorrect since you don't have to use 3rd party solutions to provide the access. AWS already provides the necessary tools that you can use in this situation.

Mapping each individual user to a designated user folder in S3 using Amazon WorkDocs to access their personal documents is incorrect as there is no direct way of integrating Amazon S3 with Amazon WorkDocs for this particular scenario. Amazon WorkDocs is simply a fully managed, secure content creation, storage, and collaboration service. With Amazon WorkDocs, you can easily create, edit, and share content. And because it’s stored centrally on AWS, you can access it from anywhere on any device.

Setting up a matching IAM user for each of the 1200 users in your corporate directory that needs access to a folder in the S3 bucket is incorrect since creating that many IAM users would be unnecessary. Also, you want the account to integrate with your AD or LDAP directory, hence, IAM Users does not fit these criteria.


References:

https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html

https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html

https://aws.amazon.com/blogs/security/writing-iam-policies-grant-access-to-user-specific-folders-in-an-amazon-s3-bucket/


Check out this AWS IAM Cheat Sheet:

https://tutorialsdojo.com/aws-cheat-sheet-aws-identity-and-access-management-iam/

`,
  },
  {
    question: `
  A Forex trading platform, which frequently processes and stores global financial data every minute, 
is hosted in your on-premises data center and uses an Oracle database. Due to a recent cooling problem in their data center,
 the company urgently needs to migrate their infrastructure to AWS to improve the performance of their applications. As the Solutions Architect,
you are responsible in ensuring that the database is properly migrated and should remain available in case of database server failure in the future. 
Which of the following is the most suitable solution to meet the requirement? 
        `,
    answers: {
      a:
        "Convert the database schema using the AWS Schema Conversion Tool and AWS Database Migration Service. Migrate the Oracle database to a non-cluster Amazon Aurora with a single instance",
      b:
        "Launching an Oracle database instance in RDS with Recovery Manager (RMAN) enabled",
      c: "creating an Oracle database in RDS with Multi-AZ deployments",
      d: "launching an Oracle Real Application Clusters (RAC) in RDS ",
    },
    correctAnswer: "c",
    explanation: `
Amazon RDS Multi-AZ deployments provide enhanced availability and durability for Database (DB) Instances, 
making them a natural fit for production database workloads. 
When you provision a Multi-AZ DB Instance, Amazon RDS automatically creates a primary DB Instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ). Each AZ runs on its own physically distinct,
         independent infrastructure, and is engineered to be highly reliable
In case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby (or to a read replica in the case of Amazon Aurora), so that you can resume database operations as soon as the failover is complete. Since the endpoint for your DB Instance remains the same after a failover, your application can resume database operation without the need for manual administrative intervention.

In this scenario, the best RDS configuration to use is an Oracle database in RDS with Multi-AZ deployments to ensure high availability even if the primary database instance goes down. Hence, creating an Oracle database in RDS with Multi-AZ deployments is the correct answer.

Launching an Oracle database instance in RDS with Recovery Manager (RMAN) enabled and launching an Oracle Real Application Clusters (RAC) in RDS are incorrect because Oracle RMAN and RAC are not supported in RDS.

The option that says: Convert the database schema using the AWS Schema Conversion Tool and AWS Database Migration Service. Migrate the Oracle database to a non-cluster Amazon Aurora with a single instance is incorrect because although this solution is feasible, it takes time to migrate your Oracle database to Aurora, which is not acceptable. Based on this option, the Aurora database is only using a single instance with no Read Replica and is not configured as an Amazon Aurora DB cluster, which could have improved the availability of the database.


References:

https://aws.amazon.com/rds/details/multi-az/

https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html


Check out this Amazon RDS Cheat Sheet:

https://tutorialsdojo.com/aws-cheat-sheet-amazon-relational-database-service-amazon-rds/
        `,
  },
  {
    question: `
        There are a lot of outages in the Availability Zone of your RDS database instance
         to the point that you have lost access to the database.
         What could you do to prevent losing access to your database in case that this event happens again?
        `,
    answers: {
      a: "enabling Multi-AZ failover ",
      b: "Making a snapshot of the database",
      c: "Increasing the database instance size",
      d: "Creating a read replica",
    },
    correctAnswer: "a",
    explanation: `
        Amazon RDS Multi-AZ deployments provide enhanced availability and durability for Database (DB) Instances,
         making them a natural fit for production database workloads. 
         For this scenario, enabling Multi-AZ failover is the correct answer. 
         When you provision a Multi-AZ DB Instance, 
         Amazon RDS automatically creates a primary DB Instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ). Each AZ runs on its own physically distinct,
         independent infrastructure, and is engineered to be highly reliable.
         In case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby (or to a read replica in the case of Amazon Aurora), so that you can resume database operations as soon as the failover is complete.

Making a snapshot of the database allows you to have a backup of your database, but it does not provide immediate availability in case of AZ failure. So this is incorrect.

Increasing the database instance size is not a solution for this problem. Doing this action addresses the need to upgrade your compute capacity but does not solve the requirement of providing access to your database even in the event of a loss of one of the Availability Zones.

Creating a read replica is incorrect because this simply provides enhanced performance for read-heavy database workloads. Although you can promote a read replica, its asynchronous replication might not provide you the latest version of your database.


Reference:

https://aws.amazon.com/rds/details/multi-az/


Check out this Amazon RDS Cheat Sheet:

https://tutorialsdojo.com/aws-cheat-sheet-amazon-relational-database-service-amazon-rds/


Tutorials Dojo's AWS Certified Solutions Architect Associate Exam Study Guide:

https://tutorialsdojo.com/aws-cheat-sheet-aws-certified-solutions-architect-associate/
        `,
  },
  {
    question: `
 A content management system (CMS) is hosted on a fleet of auto-scaled, 
On-Demand EC2 instances which use Amazon Aurora as its database. 
Currently, the system stores the file documents that the users uploaded in one of the attached EBS Volumes.
 Your manager noticed that the system performance is quite slow and he has instructed you to improve the architecture of the system.
In this scenario, what will you do to implement a scalable, high throughput POSIX-compliant file system?
        `,
    answers: {
      a: "Upgrading your existing EBS volumes to Provisioned IOPS SSD Volumes",
      b: "Using ElastiCache",
      c: "use EFS",
      d: "create an s3 bucket and use it as a storage for the CMS",
    },
    correctAnswer: "c",
    explanation: `
        Amazon Elastic File System (Amazon EFS) provides simple, scalable, 
        elastic file storage for use with AWS Cloud services and on-premises resources.
         When mounted on Amazon EC2 instances, an Amazon EFS file system provides 
         a standard file system interface and file system access semantics, 
         allowing you to seamlessly integrate Amazon EFS with your existing applications and tools.
          Multiple Amazon EC2 instances can access an Amazon EFS file system at the same time, 
          allowing Amazon EFS to provide a common data source for workloads and applications 
          running on more than one Amazon EC2 instance.

This particular scenario tests your understanding of EBS, EFS, and S3. 
In this scenario, there is a fleet of On-Demand EC2 instances that stores
 file documents from the users to one of the attached EBS Volumes. 
 The system performance is quite slow because the architecture doesn't provide 
 the EC2 instances a parallel shared access to the file documents.

Remember that an EBS Volume can be attached to one EC2 instance at a time, 
hence, no other EC2 instance can connect to that EBS Provisioned IOPS Volume. 
Take note as well that the type of storage needed here is a "file storage" 
which means that S3 is not the best service to use because it is mainly used for 
"object storage", and S3 does not provide the notion of "folders" too. 
This is why using EFS is the correct answer.
Upgrading your existing EBS volumes to Provisioned IOPS SSD Volumes is 
incorrect because the scenario requires you to set up a scalable, 
high throughput storage system that will allow concurrent access 
from multiple EC2 instances. This is clearly not possible in EBS, even with Provisioned IOPS SSD Volumes.
 You have to use EFS instead.

Using ElastiCache is incorrect because this is an in-memory 
data store that improves the performance of your applications,
 which is not what you need since it is not a file storage.


Reference:

https://aws.amazon.com/efs/


Check out this Amazon EFS Cheat Sheet:

https://tutorialsdojo.com/aws-cheat-sheet-amazon-efs/


Check out this Amazon S3 vs EBS vs EFS Cheat Sheet:

https://tutorialsdojo.com/aws-cheat-sheet-amazon-s3-vs-ebs-vs-efs/


Here's a short video tutorial on Amazon EFS:

https://youtu.be/AvgAozsfCrY
        `,
  },
  {
    question: `
A company hosted an e-commerce website on an Auto Scaling group of EC2 instances behind an Application Load Balancer. 
The Solutions Architect noticed that the website is receiving a large number of illegitimate external requests from multiple systems with IP addresses that constantly change.
 To resolve the performance issues, the Solutions Architect must implement a solution that would block the illegitimate requests with minimal impact on legitimate traffic.
Which of the following options fulfills this requirement?
        `,
    answers: {
      a:
        "Create a rate-based rule in AWS WAF and associate the web ACL to an Application Load Balancer.",
      b:
        "Create a regular rule in AWS WAF and associate the web ACL to an Application Load Balancer ",
      c:
        " Create a custom network ACL and associate it with the subnet of the Application Load Balancer to block the offending requests ",
      d:
        "Create a custom rule in the security group of the Application Load Balancer to block the offending requests",
    },
    correctAnswer: "a",
    explanation: `
        AWS WAF is tightly integrated with Amazon CloudFront, the Application Load Balancer (ALB),
         Amazon API Gateway, and AWS AppSync – 
         services that AWS customers commonly use to deliver content for their websites and applications. 
         When you use AWS WAF on Amazon CloudFront, your rules run in all AWS Edge Locations, located around the world close to your end-users. This means security doesn’t come at the expense of performance. Blocked requests are stopped before they reach your web servers. When you use AWS WAF on regional services, such as Application Load Balancer, Amazon API Gateway, and AWS AppSync, 
        your rules run in the region and can be used to protect Internet-facing resources as well as internal resources.
        A rate-based rule tracks the rate of requests for each originating IP address and triggers the rule action on IPs with rates that go over a limit. You set the limit as the number of requests per 5-minute time span. You can use this type of rule to put a temporary block on requests from an IP address that's sending excessive requests.

Based on the given scenario, the requirement is to limit the number of requests from the illegitimate requests without affecting the genuine requests. To accomplish this requirement, you can use AWS WAF web ACL. There are two types of rules in creating your own web ACL rule: regular and rate-based rules. You need to select the latter to add a rate limit to your web ACL. After creating the web ACL, you can associate it with ALB. When the rule action triggers, AWS WAF applies the action to additional requests from the IP address until the request rate falls below the limit.

Hence, the correct answer is: Create a rate-based rule in AWS WAF and associate the web ACL to an Application Load Balancer.

The option that says: Create a regular rule in AWS WAF and associate the web ACL to an Application Load Balancer is incorrect because a regular rule only matches the statement defined in the rule. If you need to add a rate limit to your rule, you should create a rate-based rule.

The option that says: Create a custom network ACL and associate it with the subnet of the Application Load Balancer to block the offending requests is incorrect. Although NACLs can help you block incoming traffic, this option wouldn't be able to limit the number of requests from a single IP address that is dynamically changing.

The option that says: Create a custom rule in the security group of the Application Load Balancer to block the offending requests is incorrect because the security group can only allow incoming traffic. Remember that you can't deny traffic using security groups. In addition, it is not capable of limiting the rate of traffic to your application unlike AWS WAF.


References:

https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based.html

https://aws.amazon.com/waf/faqs/


Check out this AWS WAF Cheat Sheet:

https://tutorialsdojo.com/aws-waf/
        `,
  },
  {
    question: `
        A company collects atmospheric data such as temperature, air pressure, 
        and humidity from different countries. 
        Each site location is equipped with various weather instruments and a high-speed Internet connection.
         The average collected data in each location is around 500 GB and will be analyzed by a weather forecasting application hosted in Northern Virginia. 
         As the Solutions Architect, you need to aggregate all the data in the fastest way.
         Which of the following options can satisfy the given requirement?
        `,
    answers: {
      a: "Use AWS Snowball Edge to transfer large amounts of data",
      b:
        "Enable Transfer Acceleration in the destination bucket and upload the collected data using Multipart Upload",
      c: "Set up a Site-to-Site VPN connection",
      d:
        "Upload the data to the closest S3 bucket. Set up a cross-region replication and copy the objects to the destination bucket",
    },
    correctAnswer: "b",
    explanation: `
        Amazon S3 is object storage built to store and retrieve any amount of data from anywhere on the Internet. 
        It’s a simple storage service that offers industry-leading durability, 
        availability, performance, security, and virtually unlimited scalability at very low costs. 
        Amazon S3 is also designed to be highly flexible. Store any type and amount of data that you want; 
        read the same piece of data a million times or only for emergency disaster recovery;
        build a simple FTP application or a sophisticated web application.

        Since the weather forecasting application is located in N.Virginia, you need to transfer all the data in the same AWS Region. With Amazon S3 Transfer Acceleration, you can speed up content transfers to and from Amazon S3 by as much as 50-500% for long-distance transfer of larger objects. Multipart upload allows you to upload a single object as a set of parts. After all the parts of your object are uploaded, Amazon S3 then presents the data as a single object. This approach is the fastest way to aggregate all the data.

Hence, the correct answer is: Enable Transfer Acceleration in the destination bucket and upload the collected data using Multipart Upload.

The option that says: Upload the data to the closest S3 bucket. Set up a cross-region replication and copy the objects to the destination bucket is incorrect because replicating the objects to the destination bucket takes about 15 minutes. Take note that the requirement in the scenario is to aggregate the data in the fastest way.

The option that says: Use AWS Snowball Edge to transfer large amounts of data is incorrect because the end-to-end time to transfer up to 80 TB of data into AWS Snowball Edge is approximately one week.

The option that says: Set up a Site-to-Site VPN connection is incorrect because setting up a VPN connection is not needed in this scenario. Site-to-Site VPN is just used for establishing secure connections between an on-premises network and Amazon VPC. Also, this approach is not the fastest way to transfer your data. You must use Amazon S3 Transfer Acceleration.


References:

https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html

https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html


Check out this Amazon S3 Cheat Sheet:

https://tutorialsdojo.com/amazon-s3/
        `,
  },
  {
    question: `
  A company plans to host a web application in an Auto Scaling group of Amazon EC2 instances. 
  The application will be used globally by users to upload and store several types of files. 
  Based on user trends, files that are older than 2 years must be stored in a different storage class. 
  The Solutions Architect of the company needs to create a cost-effective and scalable solution to store the old files yet still provide durability and high availability.
Which of the following approach can be used to fulfill this requirement? (Select TWO.)
        `,
    answers: {
      a:
        "Use Amazon S3 and create a lifecycle policy that will move the objects to Amazon S3 Glacier after 2 years.",
      b:
        "Use Amazon S3 and create a lifecycle policy that will move the objects to Amazon S3 Standard-IA after 2 years.",
      c:
        " Use Amazon EFS and create a lifecycle policy that will move the objects to Amazon EFS-IA after 2 years",
      d:
        "Use Amazon EBS volumes to store the files. Configure the Amazon Data Lifecycle Manager (DLM) to schedule snapshots of the volumes after 2 years",
      e:
        "Use a RAID 0 storage configuration that stripes multiple Amazon EBS volumes together to store the files. Configure the Amazon Data Lifecycle Manager (DLM) to schedule snapshots of the volumes after 2 years",
    },
    correctAnswer: "a,b",
    explanation: `
Amazon S3 stores data as objects within buckets. An object is a file and any optional metadata that describes the file. To store a file in Amazon S3, you upload it to a bucket. When you upload a file as an object, you can set permissions on the object and any metadata. Buckets are containers for objects. You can have one or more buckets. You can control access for each bucket, deciding who can create, delete, and list objects in it. You can also choose the geographical Region where Amazon S3 will store the bucket and its contents and view access logs for the bucket and its objects.

To move a file to a different storage class, you can use Amazon S3 or Amazon EFS. Both services have lifecycle configurations. Take note that Amazon EFS can only transition a file to the IA storage class after 90 days. Since you need to move the files that are older than 2 years to a more cost-effective and scalable solution, you should use the Amazon S3 lifecycle configuration. With S3 lifecycle rules, you can transition files to S3 Standard IA or S3 Glacier. Using S3 Glacier expedited retrieval, you can quickly access your files within 1-5 minutes.

Hence, the correct answers are:

- Use Amazon S3 and create a lifecycle policy that will move the objects to Amazon S3 Glacier after 2 years.

- Use Amazon S3 and create a lifecycle policy that will move the objects to Amazon S3 Standard-IA after 2 years.

The option that says: Use Amazon EFS and create a lifecycle policy that will move the objects to Amazon EFS-IA after 2 years is incorrect because the maximum days for the EFS lifecycle policy is only 90 days. The requirement is to move the files that are older than 2 years or 730 days.

The option that says: Use Amazon EBS volumes to store the files. Configure the Amazon Data Lifecycle Manager (DLM) to schedule snapshots of the volumes after 2 years is incorrect because Amazon EBS costs more and is not as scalable as Amazon S3. It has some limitations when accessed by multiple EC2 instances. There are also huge costs involved in using the multi-attach feature on a Provisioned IOPS EBS volume to allow multiple EC2 instances to access the volume.

The option that says: Use a RAID 0 storage configuration that stripes multiple Amazon EBS volumes together to store the files. Configure the Amazon Data Lifecycle Manager (DLM) to schedule snapshots of the volumes after 2 years is incorrect because RAID (Redundant Array of Independent Disks) is just a data storage virtualization technology that combines multiple storage devices to achieve higher performance or data durability. RAID 0 can stripe multiple volumes together for greater I/O performance than you can achieve with a single volume. On the other hand, RAID 1 can mirror two volumes together to achieve on-instance redundancy.


References:

https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html

https://docs.aws.amazon.com/efs/latest/ug/lifecycle-management-efs.html

https://aws.amazon.com/s3/faqs/


Check out this Amazon S3 Cheat Sheet:

https://tutorialsdojo.com/amazon-s3/
        `,
  },
  {
    question: `
  A travel photo sharing website is using Amazon S3 to serve high-quality photos to visitors of your website.
   After a few days, you found out that there are other travel websites linking and using your photos. 
  This resulted in financial losses for your business.
What is the MOST effective method to mitigate this issue?
        `,
    answers: {
      a:
        "configure your s3 to remove public read access and use pre-signed url with expiry date",
      b: "Using CloudFront distributions for your photos",
      c: "Blocking the IP addresses of the offending websites using NACL",
      d:
        "Storing and privately serving the high-quality photos on Amazon WorkDocs instead ",
    },
    correctAnswer: "a",
    explanation: `
In Amazon S3, all objects are private by default. Only the object owner has permission to access these objects. 
However, the object owner can optionally share objects with others by creating a pre-signed URL, 
using their own security credentials, to grant time-limited permission to download the objects.

When you create a pre-signed URL for your object, you must provide your security credentials, 
specify a bucket name, an object key, 
specify the HTTP method (GET to download the object) and expiration date and time.
 The pre-signed URLs are valid only for the specified duration.

Anyone who receives the pre-signed URL can then access the object. 
For example, if you have a video in your bucket and both the bucket and the object are private, 
you can share the video with others by generating a pre-signed URL.
In Amazon S3, all objects are private by default.
 Only the object owner has permission to access these objects.
  However, the object owner can optionally share objects with others by creating a pre-signed URL, 
  using their own security credentials, to grant time-limited permission to download the objects.

When you create a pre-signed URL for your object, you must provide your security credentials, 
specify a bucket name, an object key, specify the HTTP method (GET to download the object) 
and expiration date and time. The pre-signed URLs are valid only for the specified duration.

Anyone who receives the pre-signed URL can then access the object.
 For example, if you have a video in your bucket and both the bucket and the object are private, 
 you can share the video with others by generating a pre-signed URL.
        `,
  },
  {
    question: `
A company has a cloud architecture that is composed of Linux and Windows EC2 instances 
that process high volumes of financial data 24 hours a day, 7 days a week. 
To ensure high availability of the systems, the Solutions Architect needs to create a solution
 that allows them to monitor the memory and disk utilization metrics of all the instances.
Which of the following is the most suitable monitoring solution to implement?
        `,
    answers: {
      a:
        "Install the CloudWatch agent to all the EC2 instances that gathers the memory and disk utilization data. View the custom metrics in the Amazon CloudWatch console.",
      b:
        "Use the default CloudWatch configuration to EC2 instances where the memory and disk utilization metrics are already available. ",
      c: "Install the AWS Systems Manager (SSM) Agent to all the EC2 instances",
      d:
        "Enable the Enhanced Monitoring option in EC2 and install CloudWatch agent to all the EC2 instances to be able to view the memory and disk utilization in the CloudWatch dashboard",
    },
    correctAnswer: "a",
    explanation: `
        Amazon CloudWatch has available Amazon EC2 Metrics for you to use for monitoring CPU utilization, Network utilization, Disk performance, and Disk Reads/Writes. In case you need to monitor the below items, you need to prepare a custom metric using a Perl or other shell script, as there are no ready to use metrics for:

Memory utilization

Disk swap utilization

Disk space utilization

Page file utilization

Log collection
Take note that there is a multi-platform CloudWatch agent which can be installed on both Linux and Windows-based instances. You can use a single agent to collect both system metrics and log files from Amazon EC2 instances and on-premises servers. This agent supports both Windows Server and Linux and enables you to select the metrics to be collected, including sub-resource metrics such as per-CPU core. It is recommended that you use the new agent instead of the older monitoring scripts to collect metrics and logs.

Hence, the correct answer is: Install the CloudWatch agent to all the EC2 instances that gathers the memory and disk utilization data. View the custom metrics in the Amazon CloudWatch console.

The option that says: Use the default CloudWatch configuration to EC2 instances where the memory and disk utilization metrics are already available. Install the AWS Systems Manager (SSM) Agent to all the EC2 instances is incorrect because, by default, CloudWatch does not automatically provide memory and disk utilization metrics of your instances. You have to set up custom CloudWatch metrics to monitor the memory, disk swap, disk space, and page file utilization of your instances.

The option that says: Enable the Enhanced Monitoring option in EC2 and install CloudWatch agent to all the EC2 instances to be able to view the memory and disk utilization in the CloudWatch dashboard is incorrect because Enhanced Monitoring is a feature of Amazon RDS. By default, Enhanced Monitoring metrics are stored for 30 days in the CloudWatch Logs.

The option that says: Use Amazon Inspector and install the Inspector agent to all EC2 instances is incorrect because Amazon Inspector is an automated security assessment service that helps you test the network accessibility of your Amazon EC2 instances and the security state of your applications running on the instances. It does not provide a custom metric to track the memory and disk utilization of each and every EC2 instance in your VPC.


References:

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring_ec2.html

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/mon-scripts.html#using_put_script


Check out this Amazon CloudWatch Cheat Sheet:

https://tutorialsdojo.com/amazon-cloudwatch/


CloudWatch Agent vs SSM Agent vs Custom Daemon Scripts:

https://tutorialsdojo.com/cloudwatch-agent-vs-ssm-agent-vs-custom-daemon-scripts/


Comparison of AWS Services Cheat Sheets:

https://tutorialsdojo.com/comparison-of-aws-services/
        `,
  },
  {
    question: `
A Solutions Architect needs to set up a relational database and come up with a disaster recovery 
plan to mitigate multi-region failure. 
The solution requires a Recovery Point Objective (RPO) of 1 second and a Recovery Time Objective (RTO) of less than 1 minute.
Which of the following AWS services can fulfill this requirement?
        `,
    answers: {
      a: "Amazon DynamoDB global tables ",
      b: "Multi-AZ Amazon RDS database with cross-region read replicas",
      c: "AWS Global Accelerator ",
      d: "Amazon Aurora Global Database.",
    },
    correctAnswer: "d",
    explanation: `
        Amazon Aurora Global Database is designed for globally distributed applications,
         allowing a single Amazon Aurora database to span multiple AWS regions.
          It replicates your data with no impact on database performance, 
          enables fast local reads with low latency in each region, 
        and provides disaster recovery from region-wide outages.
        Aurora Global Database supports storage-based replication that has a latency of less than 1 second. If there is an unplanned outage, one of the secondary regions you assigned can be promoted to read and write capabilities in less than 1 minute. This feature is called Cross-Region Disaster Recovery. An RPO of 1 second and an RTO of less than 1 minute provides you a strong foundation for a global business continuity plan.

Hence, the correct answer is: Amazon Aurora Global Database.

Amazon DynamoDB global tables is incorrect because it is stated in the scenario that the Solutions Architect needs to create a relational database and not a NoSQL database. When you create a DynamoDB global table, it consists of multiple replica tables (one per AWS Region) that DynamoDB treats as a single unit.

Multi-AZ Amazon RDS database with cross-region read replicas is incorrect because a Multi-AZ deployment is only applicable inside a single region and not in a multi-region setup. This database setup is not capable of providing an RPO of 1 second and an RTO of less than 1 minute. Moreover, the replication of cross-region RDS Read Replica is not as fast compared with Amazon Aurora Global Databases.

AWS Global Accelerator is incorrect because this is a networking service that simplifies traffic management and improves application performance. AWS Global Accelerator is not a relational database service; therefore, this is not a suitable service to use in this scenario.


References:

https://aws.amazon.com/rds/aurora/global-database/

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html


Check out this Amazon Aurora Cheat Sheet:

https://tutorialsdojo.com/amazon-aurora/

        `,
  },
  {
    question: `
  An online shopping platform is hosted on an Auto Scaling group of Spot EC2 instances and uses Amazon Aurora PostgreSQL as its database.
  There is a requirement to optimize your database workloads in your cluster where you have 
  to direct the write operations of the production traffic to your high-capacity instances and point the reporting queries sent by your internal staff to the low-capacity instances.
Which is the most suitable configuration for your application as well as your Aurora database cluster to achieve this requirement?
        `,
    answers: {
      a:
        "Configuring your application to use the reader endpoint for both production traffic and reporting queries, which will enable your Aurora database to automatically perform load-balancing among all the Aurora Replicas",
      b:
        "In your application, use the instance endpoint of your Aurora database to handle the incoming production traffic and use the cluster endpoint to handle reporting queries",
      c:
        "Do nothing since by default, Aurora will automatically direct the production traffic to your high-capacity instances and the reporting queries to your low-capacity instances",
      d:
        "creating a custom endpoint in Aurora based on the specified criteria for the production traffic and another custom endpoint to handle the reporting queries",
    },
    correctAnswer: "d",
    explanation: `
    Amazon Aurora typically involves a cluster of DB instances instead of a single instance.
    Each connection is handled by a specific DB instance.
    When you connect to an Aurora cluster, 
    the host name and port that you specify point to an intermediate handler called an endpoint. 
    Aurora uses the endpoint mechanism to abstract these connections. 
    Thus, you don't have to hardcode all the hostnames or write your own logic for load-balancing and rerouting connections when some DB instances aren't available.
  For certain Aurora tasks, different instances or groups of instances perform different roles.
   For example, the primary instance handles all data definition language (DDL) and data manipulation language (DML) statements. Up to 15 Aurora Replicas handle read-only query traffic.

   Using endpoints, you can map each connection to the appropriate instance or group of instances based on your use case. For example, to perform DDL statements you can connect to whichever instance is the primary instance. To perform queries, you can connect to the reader endpoint, with Aurora automatically performing load-balancing among all the Aurora Replicas. For clusters with DB instances of different capacities or configurations, you can connect to custom endpoints associated with different subsets of DB instances. For diagnosis or tuning, you can connect to a specific instance endpoint to examine details about a specific DB instance.

The custom endpoint provides load-balanced database connections based on criteria other than the read-only or read-write capability of the DB instances. For example, you might define a custom endpoint to connect to instances that use a particular AWS instance class or a particular DB parameter group. Then you might tell particular groups of users about this custom endpoint. For example, you might direct internal users to low-capacity instances for report generation or ad hoc (one-time) querying, and direct production traffic to high-capacity instances. Hence, creating a custom endpoint in Aurora based on the specified criteria for the production traffic and another custom endpoint to handle the reporting queries is the correct answer.

Configuring your application to use the reader endpoint for both production traffic and reporting queries, which will enable your Aurora database to automatically perform load-balancing among all the Aurora Replicas is incorrect because although it is true that a reader endpoint enables your Aurora database to automatically perform load-balancing among all the Aurora Replicas, it is quite limited to doing read operations only. You still need to use a custom endpoint to load-balance the database connections based on the specified criteria.

The option that says: In your application, use the instance endpoint of your Aurora database to handle the incoming production traffic and use the cluster endpoint to handle reporting queries is incorrect because a cluster endpoint (also known as a writer endpoint) for an Aurora DB cluster simply connects to the current primary DB instance for that DB cluster. This endpoint can perform write operations in the database such as DDL statements, which is perfect for handling production traffic but not suitable for handling queries for reporting since there will be no write database operations that will be sent. Moreover, the endpoint does not point to lower-capacity or high-capacity instances as per the requirement. A better solution for this is to use a custom endpoint.

The option that says: Do nothing since by default, Aurora will automatically direct the production traffic to your high-capacity instances and the reporting queries to your low-capacity instances is incorrect because Aurora does not do this by default. You have to create custom endpoints in order to accomplish this requirement.


Reference:

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html


Check out this Amazon Aurora Cheat Sheet:

https://tutorialsdojo.com/amazon-aurora/


        `,
  },
  {
    question: `
  A global IT company with offices around the world has multiple AWS accounts. 
  To improve efficiency and drive costs down, the Chief Information Officer (CIO) wants to set up a solution that centrally manages their AWS resources. 
  This will allow them to procure AWS resources centrally and share resources such as AWS Transit Gateways, AWS License Manager configurations, or Amazon Route 53 Resolver rules across their various accounts.
 As the Solutions Architect, which combination of options should you implement in this scenario? (Select TWO.)
        `,
    answers: {
      a: "Consolidate all of the company's accounts using AWS Organizations.",
      b:
        "Use the AWS Resource Access Manager (RAM) service to easily and securely share your resources with your AWS accounts.",
      c:
        "Use the AWS Identity and Access Management service to set up cross-account access that will easily and securely share your resources with your AWS accounts",
      d:
        "Use AWS Control Tower to easily and securely share your resources with your AWS accounts",
      e: "Consolidate all of the company's accounts using AWS ParallelCluster ",
    },
    correctAnswer: "a,b",
    explanation: `
        AWS Resource Access Manager (RAM) is a service that enables you to easily and securely share AWS resources with any AWS account or within your AWS Organization. 
        You can share AWS Transit Gateways, Subnets, AWS License Manager configurations, and Amazon Route 53 Resolver rules resources with RAM.
Many organizations use multiple accounts to create administrative or billing isolation, 
and limit the impact of errors. RAM eliminates the need to create duplicate resources in 
multiple accounts, reducing the operational overhead of managing those resources in every single account you own. 
You can create resources centrally in a multi-account environment, 
and use RAM to share those resources across accounts in three simple steps: create a Resource Share, specify resources, and specify accounts. RAM is available to you at no additional charge.

You can procure AWS resources centrally, and use RAM to share resources such as subnets or License Manager configurations with other accounts. This eliminates the need to provision duplicate resources in every account in a multi-account environment, reducing the operational overhead of managing those resources in every account.

AWS Organizations is an account management service that lets you consolidate multiple AWS accounts into an organization that you create and centrally manage. With Organizations, you can create member accounts and invite existing accounts to join your organization. You can organize those accounts into groups and attach policy-based controls.

Hence, the correct combination of options in this scenario is:

- Consolidate all of the company's accounts using AWS Organizations.

- Use the AWS Resource Access Manager (RAM) service to easily and securely share your resources with your AWS accounts.

The option that says: Use the AWS Identity and Access Management service to set up cross-account access that will easily and securely share your resources with your AWS accounts is incorrect because although you can delegate access to resources that are in different AWS accounts using IAM, this process is extremely tedious and entails a lot of operational overhead since you have to manually set up cross-account access to each and every AWS account of the company. A better solution is to use AWS Resources Access Manager instead.

The option that says: Use AWS Control Tower to easily and securely share your resources with your AWS accounts is incorrect because AWS Control Tower simply offers the easiest way to set up and govern a new, secure, multi-account AWS environment. This is not the most suitable service to use to securely share your resources across AWS accounts or within your Organization. You have to use AWS Resources Access Manager (RAM) instead.

The option that says: Consolidate all of the company's accounts using AWS ParallelCluster is incorrect because AWS ParallelCluster is simply an AWS-supported open-source cluster management tool that makes it easy for you to deploy and manage High-Performance Computing (HPC) clusters on AWS. In this particular scenario, it is more appropriate to use AWS Organizations to consolidate all of your AWS accounts.


References:

https://aws.amazon.com/ram/

https://docs.aws.amazon.com/ram/latest/userguide/shareable.html
        `,
  },
  {
    question: `
An application hosted in EC2 consumes messages from an SQS queue and is integrated 
with SNS to send out an email to you once the process is complete. 
The Operations team received 5 orders but after a few hours, they saw 20 email notifications in their inbox.
Which of the following could be the possible culprit for this issue?


        `,
    answers: {
      a:
        "The web application is not deleting message from the queue after processing them",
      b:
        "The web application is set for long polling so the messages are being sent twice",
      c:
        "The web application is set to short polling so some messages are not being picked up",
      d:
        " The web application does not have permission to consume messages in the SQS queue",
    },
    correctAnswer: "a",
    explanation: `
Always remember that the messages in the SQS queue will continue to exist even after the EC2 instance has processed it, until you delete that message. You have to ensure that you delete the message after processing to prevent the message from being received and processed again once the visibility timeout expires.

There are three main parts in a distributed messaging system:

1. The components of your distributed system (EC2 instances)

2. Your queue (distributed on Amazon SQS servers)

3. Messages in the queue.
You can set up a system which has several components that send messages to the queue 
and receive messages from the queue. The queue redundantly stores the messages across multiple Amazon SQS servers.
Refer to the third step of the SQS Message Lifecycle:

Component 1 sends Message A to a queue, and the message is distributed across the Amazon SQS servers redundantly.

When Component 2 is ready to process a message, it consumes messages from the queue, and Message A is returned. While Message A is being processed, it remains in the queue and isn't returned to subsequent receive requests for the duration of the visibility timeout.

Component 2 deletes Message A from the queue to prevent the message from being received and processed again once the visibility timeout expires.

The option that says: The web application is set for long polling so the messages are being sent twice is incorrect because long polling helps reduce the cost of using SQS by eliminating the number of empty responses (when there are no messages available for a ReceiveMessage request) and false empty responses (when messages are available but aren't included in a response). Messages being sent twice in an SQS queue configured with long polling is quite unlikely.

The option that says: The web application is set to short polling so some messages are not being picked up is incorrect since you are receiving emails from SNS where messages are certainly being processed. Following the scenario, messages not being picked up won't result into 20 messages being sent to your inbox.

The option that says: The web application does not have permission to consume messages in the SQS queue is incorrect because not having the correct permissions would have resulted in a different response. The scenario says that messages were properly processed but there were over 20 messages that were sent, hence, there is no problem with the accessing the queue.


References:

https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-lifecycle.html

https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-basic-architecture.html


Check out this Amazon SQS Cheat Sheet:

https://tutorialsdojo.com/aws-cheat-sheet-amazon-sqs/
        
        `,
  },
  {
    question: `
        A company plans to migrate its on-premises workload to AWS. 
        The current architecture is composed of a Microsoft SharePoint server that uses a Windows shared file storage. 
        The Solutions Architect needs to use a cloud storage solution that is highly available and can be integrated with Active Directory for access control and authentication.
       Which of the following options can satisfy the given requirement?
`,
    answers: {
      a:
        "Create a Network File System (NFS) file share using AWS Storage Gateway",
      b:
        "Create a file system using Amazon FSx for Windows File Server and join it to an Active Directory domain in AWS",
      c:
        "Create a file system using Amazon EFS and join it to an Active Directory domain",
      d:
        "Launch an Amazon EC2 Windows Server to mount a new S3 bucket as a file volume",
    },
    correctAnswer: "b",
    explanation: `Amazon FSx for Windows File Server provides fully managed, highly reliable,
         and scalable file storage that is accessible over the industry-standard Service Message Block (SMB) protocol. 
         It is built on Windows Server, delivering a wide range of administrative features such as user quotas, end-user file restore, and Microsoft Active Directory (AD) integration.
          Amazon FSx is accessible from Windows, Linux, and MacOS compute instances and devices.
           Thousands of compute instances and devices can access a file system concurrently
           Amazon FSx works with Microsoft Active Directory to integrate with your existing Microsoft Windows environments. You have two options to provide user authentication and access control for your file system: AWS Managed Microsoft Active Directory and Self-managed Microsoft Active Directory.

Take note that after you create an Active Directory configuration for a file system, you can't change that configuration. However, you can create a new file system from a backup and change the Active Directory integration configuration for that file system. These configurations allow the users in your domain to use their existing identity to access the Amazon FSx file system and to control access to individual files and folders.

Hence, the correct answer is: Create a file system using Amazon FSx for Windows File Server and join it to an Active Directory domain in AWS.

The option that says: Create a file system using Amazon EFS and join it to an Active Directory domain is incorrect because Amazon EFS does not support Windows systems, only Linux OS. You should use Amazon FSx for Windows File Server instead to satisfy the requirement in the scenario.

The option that says: Launch an Amazon EC2 Windows Server to mount a new S3 bucket as a file volume is incorrect because you can't integrate Amazon S3 with your existing Active Directory to provide authentication and access control.

The option that says: Create a Network File System (NFS) file share using AWS Storage Gateway is incorrect because NFS file share is mainly used for Linux systems. Remember that the requirement in the scenario is to use a Windows shared file storage. Therefore, you must use an SMB file share instead, which supports Windows OS and Active Directory configuration. Alternatively, you can also use the Amazon FSx for Windows File Server file system.


References:

https://docs.aws.amazon.com/fsx/latest/WindowsGuide/aws-ad-integration-fsxW.html

https://aws.amazon.com/fsx/windows/faqs/

https://docs.aws.amazon.com/storagegateway/latest/userguide/CreatingAnSMBFileShare.html


Check out this Amazon FSx Cheat Sheet:

https://tutorialsdojo.com/amazon-fsx/
           `,
  },
  {
    question: `
        The company that you are working for has a highly available architecture consisting of an elastic load balancer and several EC2 instances configured with auto-scaling in three Availability Zones. 
        You want to monitor your EC2 instances based on a particular metric, which is not readily available in CloudWatch.   
        Which of the following is a custom metric in CloudWatch which you have to manually set up?
        `,
    answers: {
      a: " Memory utilization of an EC2 instance",
      b: "CPU Utilization of an EC2 instance",
      c: "Disk Reads activity of an EC2 instance",
      d: "Network packets out of an EC2 instance",
    },
    correctAnswer: "a",
    explanation: `
  CloudWatch has available Amazon EC2 Metrics for you to use for monitoring. CPU Utilization identifies the processing power required to run an application upon a selected instance. Network Utilization identifies the volume of incoming and outgoing network traffic to a single instance. Disk Reads metric is used to determine the volume of the data the application reads from the hard disk of the instance. This can be used to determine the speed of the application. However, there are certain metrics that are not readily available in CloudWatch such as memory utilization, disk space utilization, and many others which can be collected by setting up a custom metric.

You need to prepare a custom metric using CloudWatch Monitoring Scripts which is written in Perl. You can also install CloudWatch Agent to collect more system-level metrics from Amazon EC2 instances. Here's the list of custom metrics that you can set up:

- Memory utilization
- Disk swap utilization
- Disk space utilization
- Page file utilization
- Log collection

CPU Utilization of an EC2 instance, Disk Reads activity of an EC2 instance, and Network packets out of an EC2 instance are all incorrect because these metrics are readily available in CloudWatch by default.


References:

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring_ec2.html

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/mon-scripts.html#using_put_script


Check out this Amazon EC2 Cheat Sheet:

https://tutorialsdojo.com/amazon-elastic-compute-cloud-amazon-ec2/


Check out this Amazon CloudWatch Cheat Sheet:

https://tutorialsdojo.com/amazon-cloudwatch/

        `,
  },
  {
    question: `
        A Solutions Architect needs to make sure that the On-Demand EC2 instance can only be accessed from this IP address (110.238.98.71) via an SSH connection.
         Which configuration below will satisfy this requirement?
        
        `,
    answers: {
      a:
        "security group inbound-rule:Protocol – TCP, Port Range – 22, Source 110.238.98.71/0",
      b:
        "Security group inbound-rule:Protocol – UDP, Port Range – 22, Source 110.238.98.71/0",
      c:
        "Security group inbound-rule:Protocol – UDP, Port Range – 22, Source 110.238.98.71/32 ",
      d:
        "Security group inbound-rule: Protocol – TCP, Port Range – 22, Source 110.238.98.71/32",
    },
    correctAnswer: "d",
    explanation: `
        A security group acts as a virtual firewall for your instance to control inbound and outbound traffic. 
        When you launch an instance in a VPC, you can assign up to five security groups to the instance. 
        Security groups act at the instance level, not the subnet level. 
        Therefore, each instance in a subnet in your VPC can be assigned to a different set of security groups.
        The requirement is to only allow the individual IP of the client and not the entire network. Therefore, the proper CIDR notation should be used. The /32 denotes one IP address and the /0 refers to the entire network. Take note that the SSH protocol uses TCP and port 22.

Hence, the correct answer is: Protocol – TCP, Port Range – 22, Source 110.238.98.71/32

Protocol – UDP, Port Range – 22, Source 110.238.98.71/32 and Protocol – UDP, Port Range – 22, Source 110.238.98.71/0 are incorrect as they are using UDP.

Protocol – TCP, Port Range – 22, Source 110.238.98.71/0 is incorrect because it uses a /0 CIDR notation.

Protocol – TCP, Port Range – 22, Source 110.238.98.71/0 is incorrect because it allows the entire network instead of a single IP.


Reference:

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html#security-group-rules


Tutorials Dojo's AWS Certified Solutions Architect Associate Exam Study Guide:

https://tutorialsdojo.com/aws-certified-solutions-architect-associate/
        `,
  },
  {
    question: `
  A government entity is conducting a population and housing census in the city.
  Each household information uploaded on their online portal is stored in encrypted files in Amazon S3.
  The government assigned its Solutions Architect to set compliance policies that verify sensitive data in a manner that meets their compliance standards. 
  They should also be alerted if there are compromised files detected containing personally identifiable information (PII), protected health information (PHI) or intellectual properties (IP).
Which of the following should the Architect implement to satisfy this requirement?
        `,
    answers: {
      a:
        "Set up and configure Amazon Rekognition to monitor and recognize patterns on their Amazon S3 data",
      b:
        "Set up and configure Amazon Macie to monitor and detect usage patterns on their Amazon S3 data.",
      c:
        "Set up and configure Amazon Macie to monitor and detect usage patterns on their Amazon S3 data.",
      d:
        "Set up and configure Amazon Inspector to send out alert notifications whenever a security violation is detected on their Amazon S3 data",
    },
    correctAnswer: "b",
    explanation: `Amazon Macie is an ML-powered security service that helps you prevent data loss by automatically discovering, classifying, and protecting sensitive data stored in Amazon S3. Amazon Macie uses machine learning to 
        recognize sensitive data such as personally identifiable information (PII) or intellectual property, 
        assigns a business value, and provides visibility into where
        this data is stored and how it is being used in your organization.

        Amazon Macie continuously monitors data access activity for anomalies,
         and delivers alerts when it detects risk of unauthorized access or inadvertent data leaks. 
         Amazon Macie has ability to detect global access permissions inadvertently being set on sensitive data, 
         detect uploading of API keys inside source code, 
         and verify sensitive customer data is being stored and accessed in a manner
          that meets their compliance standards.
          Hence, the correct answer is: Set up and configure Amazon Macie to monitor and detect usage patterns on their Amazon S3 data.

The option that says: Set up and configure Amazon Rekognition to monitor and recognize patterns on their Amazon S3 data is incorrect because Rekognition is simply a service that can identify the objects, people, text, scenes, and activities, as well as detect any inappropriate content on your images or videos.

The option that says: Set up and configure Amazon GuardDuty to monitor malicious activity on their Amazon S3 data is incorrect because GuardDuty is just a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts and workloads.

The option that says: Set up and configure Amazon Inspector to send out alert notifications whenever a security violation is detected on their Amazon S3 data is incorrect because Inspector is basically an automated security assessment service that helps improve the security and compliance of applications deployed on AWS.


References:

https://docs.aws.amazon.com/macie/latest/userguide/what-is-macie.html

https://aws.amazon.com/macie/faq/

https://docs.aws.amazon.com/macie/index.html


Check out this Amazon Macie Cheat Sheet:

https://tutorialsdojo.com/amazon-macie/
          
          `,
  },
  {
    question: `
  A tech company has a CRM application hosted on an Auto Scaling group of On-Demand EC2 instances.
  The application is extensively used during office hours from 9 in the morning till 5 in the afternoon.
  Their users are complaining that the performance of the application is slow during the start of the day but then works normally after a couple of hours. 
Which of the following can be done to ensure that the application works properly at the beginning of the day?
        `,
    answers: {
      a:
        "configuring a Dynamic scaling policy for the Auto Scaling group to launch new instances based on the Memory utilization ",
      b:
        "Configuring a Dynamic scaling policy for the Auto Scaling group to launch new instances based on the CPU utilization",
      c:
        "configuring a Scheduled scaling policy for the Auto Scaling group to launch new instances before the start of the day",
      d:
        "Setting up an Application Load Balancer (ALB) to your architecture to ensure that the traffic is properly distributed on the instances",
    },
    correctAnswer: "c",
    explanation: `
        Scaling based on a schedule allows you to scale your application in response to predictable load changes.
         For example, every week the traffic to your web application starts to increase on Wednesday, 
         remains high on Thursday, and starts to decrease on Friday. 
         You can plan your scaling activities based on the predictable traffic patterns of your web application.
         To configure your Auto Scaling group to scale based on a schedule, you create a scheduled action. The scheduled action tells Amazon EC2 Auto Scaling to perform a scaling action at specified times. To create a scheduled scaling action, you specify the start time when the scaling action should take effect, and the new minimum, maximum, and desired sizes for the scaling action. At the specified time, Amazon EC2 Auto Scaling updates the group with the values for minimum, maximum, and desired size specified by the scaling action. You can create scheduled actions for scaling one time only or for scaling on a recurring schedule.

         Hence, configuring a Scheduled scaling policy for the Auto Scaling group to launch new instances before the start of the day is the correct answer. You need to configure a Scheduled scaling policy. This will ensure that the instances are already scaled up and ready before the start of the day since this is when the application is used the most.
         
         Configuring a Dynamic scaling policy for the Auto Scaling group to launch new instances based on the CPU utilization and configuring a Dynamic scaling policy for the Auto Scaling group to launch new instances based on the Memory utilization are both incorrect because although these are valid solutions, it is still better to configure a Scheduled scaling policy as you already know the exact peak hours of your application. By the time either the CPU or Memory hits a peak, the application already has performance issues, so you need to ensure the scaling is done beforehand using a Scheduled scaling policy.
         
         Setting up an Application Load Balancer (ALB) to your architecture to ensure that the traffic is properly distributed on the instances is incorrect. Although the Application load balancer can also balance the traffic, it cannot increase the instances based on demand.
         
         
         Reference:
         
         https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html
         
         
         Check out this AWS Auto Scaling Cheat Sheet:
         
         https://tutorialsdojo.com/aws-auto-scaling/
`,
  },
  {
    question: `
A financial application is composed of an Auto Scaling group of EC2 instances,
an Application Load Balancer, and a MySQL RDS instance in a Multi-AZ Deployments configuration.
To protect the confidential data of your customers,
 you have to ensure that your RDS database can only be accessed using the profile credentials specific to your EC2 instances via an authentication token.
As the Solutions Architect of the company, which of the following should you do to meet the above requirement?
`,
    answers: {
      a:
        "Configuring SSL in your application to encrypt the database connection to RDS",
      b:
        "Using a combination of IAM and STS to restrict access to your RDS instance via a temporary token",
      c:
        "Creating an IAM Role and assigning it to your EC2 instances which will grant exclusive access to your RDS instance ",
      d: "enabling IAM DB Authentication",
    },
    correctAnswer: "d",
    explanation: `
        You can authenticate to your DB instance using AWS Identity and Access Management (IAM) database authentication. IAM database authentication works with MySQL and PostgreSQL.
         With this authentication method, you don't need to use a password when you connect to a DB instance. 
         Instead, you use an authentication token.

An authentication token is a unique string of characters that Amazon RDS generates on request.
Authentication tokens are generated using AWS Signature Version 4. Each token has a lifetime of 15 minutes.
 You don't need to store user credentials in the database, because authentication is managed externally using IAM.
  You can also still use standard database authentication.
  IAM database authentication provides the following benefits:

Network traffic to and from the database is encrypted using Secure Sockets Layer (SSL).

You can use IAM to centrally manage access to your database resources, instead of managing access individually on each DB instance.

For applications running on Amazon EC2, you can use profile credentials specific to your EC2 instance to access your database instead of a password, for greater security

Hence, enabling IAM DB Authentication is the correct answer based on the above reference.

Configuring SSL in your application to encrypt the database connection to RDS is incorrect because an SSL connection is not using an authentication token from IAM. Although configuring SSL to your application can improve the security of your data in flight, it is still not a suitable option to use in this scenario.

Creating an IAM Role and assigning it to your EC2 instances which will grant exclusive access to your RDS instance is incorrect because although you can create and assign an IAM Role to your EC2 instances, you still need to configure your RDS to use IAM DB Authentication.

Using a combination of IAM and STS to restrict access to your RDS instance via a temporary token is incorrect because you have to use IAM DB Authentication for this scenario, and not a combination of an IAM and STS. Although STS is used to send temporary tokens for authentication, this is not a compatible use case for RDS.


Reference:

https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html


Check out this Amazon RDS Cheat Sheet:

https://tutorialsdojo.com/amazon-relational-database-service-amazon-rds/

`,
  },
  {
    question: ``,
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
    explanation: "",
  },
  {
    question: ``,
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
    explanation: "",
  },
  {
    question: ``,
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
    explanation: "",
  },
  {
    question: ``,
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
    explanation: "",
  },
  {
    question: ``,
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
    explanation: "",
  },
  {
    question: ``,
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
    explanation: "",
  },
  {
    question: ``,
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
    explanation: "",
  },
  {
    question: ``,
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
    explanation: "",
  },
];

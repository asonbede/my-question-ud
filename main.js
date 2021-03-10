const soluArch = [
  {

    // {
    //     question: `
    //  `,
    //     answers: {
    //       a: " ",
    //       b: "",
    //       c: "",
    //       d: "",
    //     },
    //     correctAnswer: "",
    //     explanation: `
    
    
    // `,
    //   },

    
        question: `
A developer in your team has set up a classic 3 tier architecture
composed of an Applicntion Load Balancer, 
an Auto Scaling group managing a fleet of EC2 instances,
and an Aurora database. As a Solutions Architect,
you would like to adhere to the security pillar of the well-architected framework.
How do you configure the security group of the Aurora database 
to only allow traffic coming from the EC2 instances?
     `,
        answers: {
          a: " Add a rule authorizing the EC2 security group",
          b: "Add a rule authorizing the Aurora security group",
          c: "Add a rule authorizing the ASG's subnets CIDR",
          d: "Add a rule authorizing the ELB security group",
        },
        correctAnswer: "a",
        explanation: `
        Correct option:
      Add a rule authorizing the EC2 security group
        A security group acts as a virtual firewall that controls the traffic for one or more instances.
         When you launch an instance, you can specify one or more security groups;
        otherwise, we use the default security group. 
        You can add rules to each security group that allow traffic to or from its associated instances.
         You can modify the rules for a security group at any time; 
         the new rules are automatically applied to all instances that are associated with the security group.
          When we decide whether to allow traffic to reach an instance,
          we evaluate all the rules from all the security groups that are associated with the instance. 
          The following are the characteristics of security group rules: 
          By default, security groups allow all outbound traffic. 
          Security group rules are always permissive; you can't create rules that deny access. 
          Security groups are stateful.
        
        In our scenario, the EC2 instances that are part of the ASG are the ones accessing the database layer. 
        The correct response is to add a rule to the security group attached to
         Aurora authorizing the EC2 instance's security group.
        
        Incorrect options:
        
        Add a rule authorizing the Aurora security group - Adding a rule, authorizing the Aurora security group, 
        is just a distractor. Since it has no bearing on traffic allowed from the EC2 instances.
        
        Add a rule authorizing the ASG's subnets CIDR - 
        Authorizing the entire CIDR of the ASG's subnets is overkill and would allow non-ASG instances,
         access Aurora if they were part of the same CIDR.
        
        Add a rule authorizing the ELB security group - 
        Adding a rule authorizing the ELB security group would dilute the security
         for the Aurora databases because only the EC2 instances that are 
         part of the ASG are the ones accessing the database layer. Therefore, it is not the correct option.
        
        Reference:
        
        https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html
        
    
    `,
      },

      
  
  {
        question: `
    Your company runs a website for evaluating coding skills. 
    As a Solutions Architect, you've designed the architecture of the website 
    to follow a serverless pattern on the AWS Cloud using API Gateway and AWS Lambda. 
    The backend is leveraging an RDS PostgreSQL database. 
    Caching is implemented using a Redis ElastiCache cluster. 
    You would like to increase the security of your authentication to Redis from the Lambda function, 
    leveraging a username and password combination.As a solutions architect,
     which of the following options would you recommend?
     `,
        answers: {
          a: "Use Redis Auth ",
          b: "Use IAM Auth and attach an IAM ro",
          c: "Enable KMS Encryption",
          d: "Create an inbound rule to restrict access to Redis Auth only from the Lambda security group ",
        },
        correctAnswer: "a",
        explanation: `
        Correct option:

        Use Redis Auth - Amazon ElastiCache for Redis is a blazing
         fast in-memory data store that provides sub-millisecond latency 
         to power internet-scale real-time applications.
        
        Amazon ElastiCache for Redis is a great choice for real-time transactional
         and analytical processing use cases such as caching, chat/messaging, 
         gaming leaderboards, geospatial, machine learning, media streaming, queues, 
         real-time analytics, and session store.
        
        ElastiCache for Redis supports replication, 
        high availability, and cluster sharding right out of the box. 
        IAM Auth is not supported by ElastiCache.
        
        Redis authentication tokens enable Redis to require 
        a token (password) before allowing clients to execute commands, thereby improving data security.
        
        Incorrect options:
        
        Use IAM Auth and attach an IAM role to Lambda - 
        As discussed above, IAM Auth is not supported by ElastiCache.
        
        Enable KMS Encryption - AWS Key Management Service (KMS) 
        makes it easy for you to create and manage cryptographic 
        keys and control their use across a wide range of AWS services and in your applications. 
        AWS KMS is a secure and resilient service that uses hardware security
         modules that have been validated under FIPS 140-2. 
         KMS does not support username and password for enabling encryption.
        
        Create an inbound rule to restrict access to Redis Auth only from the Lambda security group - 
        A security group acts as a virtual firewall that controls the traffic for one or more instances.
        You can add rules to each security group that allows traffic to or from its associated instances.
        You can modify the rules for a security group at any time; 
          the new rules are automatically applied to all instances that are associated with the security group.
        
        References:
        
        https://aws.amazon.com/elasticache/redis/
        
        https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.Overview.html
        
        https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html
        
    
    `,
      },


    
  
  {
    question:  `The data engineering team at an e-commerce company has set up a workflow to ingest 
    the clickstream data into the raw zone of the S3 data lake. 
    The team wants to run some SQL based data sanity checks on the raw zone of the data lake.
    What AWS services would you recommend for this use-case such that 
    the solution is cost-effective and easy to maintain?`,
    answers: {
        a:`Load the incremental raw zone data into RDS on an hourly basis and run the SQL based sanity checks`,
        b:`Use Athena to run SQL based analytics against S3 data`,
        c:`Load the incremental raw zone data into Redshift on an hourly basis and run the SQL based sanity checks `,
        d:`Load the incremental raw zone data into an EMR based Spark Cluster on an hourly basis and use SparkSQL to run the SQL based sanity checks ",
        `
    },
    correctAnswer:"b",
    explanation:`
    Correct option:

Use Athena to run SQL based analytics against S3 data

Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL.
 Athena is serverless, so there is no infrastructure to set up or manage, and customers pay only for the queries they run. 
 You can use Athena to process logs, perform ad-hoc analysis, and run interactive queries.

AWS Athena Benefits:
Incorrect options:

Load the incremental raw zone data into Redshift on an hourly basis and run the SQL based sanity checks - Amazon Redshift is a fully-managed petabyte-scale cloud-based data warehouse product designed for large scale data set storage and analysis. As the development team would have to maintain and monitor the Redshift cluster size and would require significant development time to set up the processes to consume the data periodically, so this option is ruled out.

Load the incremental raw zone data into an EMR based Spark Cluster on an hourly basis and use SparkSQL to run the SQL based sanity checks - Amazon EMR is the industry-leading cloud big data platform for processing vast amounts of data using open source tools such as Apache Spark, Apache Hive, Apache HBase, Apache Flink, Apache Hudi, and Presto. Amazon EMR uses Hadoop, an open-source framework, to distribute your data and processing across a resizable cluster of Amazon EC2 instances. Using an EMR cluster would imply managing the underlying infrastructure so it’s ruled out because the correct solution for the given use-case should require the least amount of development effort and ongoing maintenance.

Load the incremental raw zone data into RDS on an hourly basis and run the SQL based sanity checks - Loading the incremental data into RDS implies data migration jobs will have to be written via a Lambda function or an EC2 based process. This goes against the requirement that the solution should involve the least amount of development effort and ongoing maintenance. Hence this option is not correct.

Reference:

https://aws.amazon.com/athena/
    
    `
    
  },
  {
    question:  `A sports data company is delivering real-time data to media companies, 
    sports federations, and the betting industry using its IT infrastructure on AWS Cloud. 
    The company wants an urgent solution that provides a low-latency way to ingest live 
    sports results regardless of where in the world their sports journalists are sitting. 
    The live sports results are delivered via a proprietary application using UDP protocol.
    As a solutions architect, which of the following solutions would you recommend such that
     it offers the BEST performance for ingesting live sports results?`,
     answers:{
      a:"Use CloudFront to provide a low latency way to ingest live sports results",
      b:"Use Global Accelerator to provide a low latency way to ingest live sports results",
      c:"Use Elastic Load Balancer to provide a low latency way to ingest live sports results",
      d:"Use Auto Scaling group to provide a low latency way to ingest live sports results"


     },
     correctAnswer:"b",
     explanation:`
     Correct option:

Use Global Accelerator to provide a low latency way to ingest live sports results

AWS Global Accelerator is a networking service that helps you 
improve the availability and performance of the applications 
that you offer to your global users. 
AWS Global Accelerator is easy to set up, configure, and manage. 
It provides static IP addresses that provide a fixed entry point to your applications 
and eliminate the complexity of managing specific IP addresses for different AWS Regions and Availability Zones.
 AWS Global Accelerator always routes user traffic to the optimal endpoint based on performance,
reacting instantly to changes in application health, your user’s location, and policies that you configure.
Global Accelerator is a good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP. 
Therefore, this option is correct.

How AWS Global Accelerator Works via - https://aws.amazon.com/global-accelerator/

Incorrect options:

Use CloudFront to provide a low latency way to ingest live sports results - 
Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data,
 videos, applications, and APIs to customers globally with low latency, 
 high transfer speeds, all within a developer-friendly environment.

CloudFront points of presence (POPs) (edge locations) 
make sure that popular content can be served quickly to your viewers. 
CloudFront also has regional edge caches that bring more of your content closer to your viewers,
 even when the content is not popular enough to stay at a POP, to help improve performance for that content.
Regional edge caches help with all types of content,
particularly content that tends to become less popular over time.
Examples include user-generated content, such as video, photos, or artwork;
 e-commerce assets such as product photos and videos;
  and news and event-related content that might suddenly find new popularity.
CloudFront supports HTTP/RTMP protocol based requests, therefore this option is incorrect.

Use Elastic Load Balancer to provide a low latency way to ingest live sports results -
 Elastic Load Balancer automatically distributes incoming application traffic across multiple targets,
such as Amazon EC2 instances, containers, IP addresses, and Lambda functions.
It can handle the varying load of your application traffic in a single Availability Zone or across 
multiple Availability Zones. 
Elastic Load Balancer cannot help with decreasing latency of incoming traffic from the source.

Use Auto Scaling group to provide a low latency way to ingest live sports results -
 Amazon EC2 Auto Scaling helps you ensure that you have the correct number of Amazon EC2 instances available to 
 handle the load for your application. You create collections of EC2 instances, called Auto Scaling groups. 
 You can specify the minimum number of instances in each Auto Scaling group, 
 and Amazon EC2 Auto Scaling ensures that your group never goes below this size. 
 Auto Scaling group cannot help with decreasing latency of incoming traffic from the source.

Exam Alert:

Please note the differences between the capabilities of Global Accelerator and CloudFront -

AWS Global Accelerator and Amazon CloudFront are separate services that use the AWS global network
 and its edge locations around the world. 
CloudFront improves performance for both cacheable content (such as images and videos) 
and dynamic content (such as API acceleration and dynamic site delivery). 
Global Accelerator improves performance for a wide range of applications 
over TCP or UDP by proxying packets at the edge to applications running in one or more AWS Regions.

Global Accelerator is a good fit for non-HTTP use cases, 
such as gaming (UDP), IoT (MQTT), or Voice over IP, as well as for HTTP use cases that specifically
require static IP addresses or deterministic, fast regional failover. 
Both services integrate with AWS Shield for DDoS protection.

References:

https://aws.amazon.com/global-accelerator/

https://aws.amazon.com/cloudfront/faqs/

     
     `
    
  },
  {
      "Which of the following is true regarding cross-zone load balancing as seen in Application Load Balancer versus Network Load Balancer?":[
          "By default, cross-zone load balancing is enabled for Application Load Balancer and disabled for Network Load Balancer",
          "By default, cross-zone load balancing is disabled for both Application Load Balancer and Network Load Balancer",
          "By default, cross-zone load balancing is enabled for both Application Load Balancer and Network Load Balancer"]
  },
  {
      "A retail organization is moving some of its on-premises data to AWS Cloud. The DevOps team at the organization has set up an AWS Managed IPSec VPN Connection between their remote on-premises network and their Amazon VPC over the internet.Which of the following represents the correct configuration for the IPSec VPN Connection?":[
          "Create a Virtual Private Gateway on the AWS side of the VPN and a Customer Gateway on the on-premises side of the VPN",
          "Create a Virtual Private Gateway on the on-premises side of the VPN and a Customer Gateway on the AWS side of the VPN ",
          "Create a Customer Gateway on both the AWS side of the VPN as well as the on-premises side of the VPN"
      ]
  },
  {
      "The development team at an e-commerce startup has set up multiple microservices running on EC2 instances under an Elastic Load Balancer. The team wants to route traffic to multiple back-end services based on the content of the request.Which of the following types of load balancers would allow routing based on the content of the request?":[
          "Application Load Balancer","Network Load Balancer","Classic Load Balancer"
      ]
  },
  {
      "A media company wants to get out of the business of owning and maintaining its own IT infrastructure. As part of this digital transformation, the media company wants to archive about 5PB of data in its on-premises data center to durable long term storage.As a solutions architect, what is your recommendation to migrate this data in the MOST cost-optimal way?":[
          "Transfer the on-premises data into multiple Snowball Edge Storage Optimized devices. Copy the Snowball Edge data into Amazon S3 and create a lifecycle policy to transition the data into AWS Glacier",
          "Transfer the on-premises data into multiple Snowball Edge Storage Optimized devices. Copy the Snowball Edge data into AWS Glacier",
          "Setup Site-to-Site VPN connection between the on-premises data center and AWS Cloud. Use this connection to transfer the data into AWS Glacier"
      ]
  },
  {
      "A weather forecast agency collects key weather metrics across multiple cities in the US and sends this data in the form of key-value pairs to AWS Cloud at a one-minute frequency.As a solutions architect, which of the following AWS services would you use to build a solution for processing and reliably storing this data with high availability? (Select two)":[
          'Lambda  and DynamoDB',"ElastiCache","Redshift"
      ]
  },
  {
      "An e-commerce company is planning to migrate their two-tier application from on-premises infrastructure to AWS Cloud. As the engineering team at the company is new to the AWS Cloud, they are planning to use the Amazon VPC console wizard to set up the networking configuration for the two-tier application having public web servers and private database servers.Can you spot the configuration that is NOT supported by the Amazon VPC console wizard?":[
          "VPC with a public subnet only and AWS Site-to-Site VPN access",
          "VPC with a single public subnet",
          "VPC with public and private subnets (NAT)"]
  },
  {
      "A startup has recently moved their monolithic web application to AWS Cloud. The application runs on a single EC2 instance. Currently, the user base is small and the startup does not want to spend effort on elaborate disaster recovery strategies or Auto Scaling Group. The application can afford a maximum downtime of 10 minutes.In case of a failure, which of these options would you suggest as a cost-effective and automatic recovery procedure for the instance?":[
          "Configure an Amazon CloudWatch alarm that triggers the recovery of the EC2 instance, in case the instance fails. The instance, however, should only be configured with an EBS volume",
          "Configure Amazon CloudWatch events that can trigger the recovery of the EC2 instance, in case the instance or the application fails",
          "Configure an Amazon CloudWatch alarm that triggers the recovery of the EC2 instance, in case the instance fails. The instance can be configured with EBS volume or with instance store volumes",
          "Configure AWS Trusted Advisor to monitor the health check of EC2 instance and provide a remedial action in case an unhealthy flag is detected"
      ]
  },
  {
      "Researchers at a pharma company are working on developing a vaccine for the COVID-19 pandemic. They have identified multiple candidates as potential vaccines and they need to analyze healthcare data of individuals in the US to identify the first batch of recipients for the initial trials. For faster processing, the data processing application needs to parse through this healthcare data in an in-memory database that is highly available as well as HIPAA compliant.As a solutions architect, which of the following AWS services would you recommend for this task?":[
          "ElastiCache for Redis","ElastiCache for Memcached","DynamoDB","DocumentDB"
      ]
  },
  {
      "A leading hotel reviews business uses Amazon Web Services to store and process images for their website. The team uses Amazon EC2 and Amazon SQS in an integrated workflow to generate the sizes they need for each photo. SQS communicates the photos that need to be processed and the status of the jobs. Because of changes in the business processes, the engineering team is now migrating from SQS Standard queues to FIFO queues with batching.As a solutions architect, which of the following steps would you add to the migration checklist for the engineering team? (Select three)":[
          "Delete the existing standard queue and recreate it as a FIFO queue;Make sure that the name of the FIFO queue ends with the .fifo suffix;Make sure that the throughput for the target FIFO queue does not exceed 3,000 messages per second",
          "Convert the existing standard queue into a FIFO queue",
          "Make sure that the name of the FIFO queue is the same as the standard queue",
          "Make sure that the throughput for the target FIFO queue does not exceed 300 messages per second"
      ]
  },
  {
      "A social media analytics company uses a fleet of EC2 servers to manage its analytics workflow. These EC2 servers operate under an Auto Scaling group. The engineers at the company want to be able to download log files whenever an instance terminates because of a scale-in event from an auto-scaling policy.Which of the following features can be used to enable this custom action?":[
          "Auto Scaling group lifecycle hook","EC2 instance meta data","EC2 instance user data","Auto Scaling group scheduled action"
      ]
  },
  {
      "A cybersecurity company uses a fleet of EC2 instances to run a proprietary application. The infrastructure maintenance group at the company wants to be notified via an email whenever the CPU utilization for any of the EC2 instances breaches a certain threshold.Which of the following services would you use for building a solution with the LEAST amount of development effort? (Select two)":[
          "Amazon SNS and Amazon CloudWatch","AWS Lambda","Amazon SQS","AWS Step Functions"
      ]
  },
  {
      "An organization wants to delegate access to a set of users from the development environment so that they can access some resources in the production environment which is managed under another AWS account.As a solutions architect, which of the following steps would you recommend?":[
       "Create a new IAM role with the required permissions to access the resources in the production environment. The users can then assume this IAM role while accessing the resources from the production environment","Create new IAM user credentials for the production environment and share these credentials with the set of users from the development environment","It is not possible to access cross-account resources","Both IAM roles and IAM users can be used interchangeably for cross-account access",""
      ]
  },
  {
      "One of the largest Ed-tech platforms boasts of a learning-management system being used by more than 100 million users across the globe. Of late, the company has been finding it difficult to scale its business. That’s because the company’s most popular applications, including the learning-management system, are hosted on more than 30 on-premises data centers throughout the world. The engineering team at the company wants to migrate to AWS Cloud and is currently evaluating Amazon RDS as its main database. To ensure High Availability, the team wants to go for Multi-AZ deployment and they would like to understand what happens when the primary instance in Multi-AZ goes down.As a Solutions Architect, which of the following will you identify as the outcome of the scenario?":[
          "The CNAME record will be updated to point to the standby DB","The URL to access the database will change to the standby DB","The application will be down until the primary database has recovered itself"
      ]
      
      
  },
  {
      "A healthcare startup needs to enforce compliance and regulatory guidelines for objects stored in Amazon S3. One of the key requirements is to provide adequate protection against accidental deletion of objects. As a solutions architect, what are your recommendations to address these guidelines? (Select two)":[
          "Enable versioning on the bucket and Enable MFA delete on the bucket","Create an event trigger on deleting any S3 object. The event invokes an SNS notification via email to the IT manager","Establish a process to get managerial approval for deleting S3 objects","Change the configuration on AWS S3 console so that the user needs to provide additional confirmation while deleting any S3 object"
      ]
  },
  {
      "A Pharmaceuticals company has decided to move most of their IT infrastructure to AWS Cloud. Some of the applications, however, will remain on their on-premises data center to meet certain regulatory guidelines. The company is looking for a scalable solution to connect the on-premises applications to the ones on AWS Cloud.As a Solutions Architect, can you suggest the MOST optimal solution for this requirement?":[
          "Use AWS Transit Gateway to connect the Amazon VPCs to the on-premises networks","Use Transit VPC Solution to connect the Amazon VPCs to the on-premises networks","Partially meshed VPC peering can be used to connect the Amazon VPCs to the on-premises networks","Fully meshed VPC peering can be used to connect the Amazon VPCs to the on-premises networks"
      ]
  },
  {
      "A profitable small business has been running their IT systems using the on-premises infrastructure. With growing demand, the business is finding it difficult to manage the IT infrastructure, which is not their core competency. The business plans to move to AWS Cloud, in light of their plans of extending their operations to other countries.As a Solutions Architect, can you suggest a cost-effective, serverless solution for their flagship application that has both static and dynamic content as part of its core data model?":[
          "Host the static content on Amazon S3 and use Lambda with DynamoDB for the serverless web application that handles dynamic content. Amazon CloudFront will sit in front of Lambda for distribution across diverse regions","Host both the static and dynamic content of the web application on Amazon S3 and use Amazon CloudFront for distribution across diverse regions/countries","Host the static content on Amazon S3 and use Amazon EC2 with RDS for generating the dynamic content. Amazon CloudFront can be configured in front of EC2 instance, to make global distribution easy","Host both the static and dynamic content of the web application on Amazon EC2 with RDS as the database. Amazon CloudFront should be configured to distribute the content across geographically disperse regions"
      ]
  },
  {
      "An IT company has built a custom data warehousing solution for a retail organization by using Amazon Redshift. As part of the cost optimizations, the company wants to move any historical data (any data older than a year) into S3, as the daily analytical reports consume data for just the last one year. However the analysts want to retain the ability to cross-reference this historical data along with the daily reports. The company wants to develop a solution with the LEAST amount of effort and MINIMUM cost.As a solutions architect, which option would you recommend to facilitate this use-case?":[
          "Use Redshift Spectrum to create Redshift cluster tables pointing to the underlying historical data in S3. The analytics team can then query this historical data to cross-reference with the daily reports from Redshift","Setup access to the historical data via Athena. The analytics team can run historical data queries on Athena and continue the daily reporting on Redshift. In case the reports need to be cross-referenced, the analytics team need to export these in flat files and then do further analysis","Use Glue ETL job to load the S3 based historical data into Redshift. Once the ad-hoc queries are run for the historic data, it can be removed from Redshift",""
      ]
  },
  {
      "A social photo-sharing web application is hosted on EC2 instances behind an Elastic Load Balancer. The app gives the users the ability to upload their photos and also shows a leaderboard on the homepage of the app. The uploaded photos are stored in S3 and the leaderboard data is maintained in DynamoDB. The EC2 instances need to access both S3 and DynamoDB for these features.As a solutions architect, which of the following solutions would you recommend as the MOST secure option?":[
          "Attach the appropriate IAM role to the EC2 instance profile so that the instance can access S3 and DynamoDB",
          "Save the AWS credentials (access key Id and secret access token) in a configuration file within the application code on the EC2 instances. EC2 instances can use these credentials to access S3 and DynamoDB",
          "Configure AWS CLI on the EC2 instances using a valid IAM user's credentials. The application code can then invoke shell scripts to access S3 and DynamoDB via AWS CLI,",
          "Encrypt the AWS credentials via a custom encryption library and save it in a secret directory on the EC2 instances. The application code can then safely decrypt the AWS credentials to make the API calls to S3 and DynamoDB"


      ]
  },
  {
      "A leading social media analytics company is contemplating moving its dockerized application stack into AWS Cloud. The company is not sure about the pricing for using Elastic Container Service (ECS) with the EC2 launch type compared to the Elastic Container Service (ECS) with the Fargate launch type.Which of the following is correct regarding the pricing for these two services?":[
          "ECS with EC2 launch type is charged based on EC2 instances and EBS volumes used. ECS with Fargate launch type is charged based on vCPU and memory resources that the containerized application requests","Both ECS with EC2 launch type and ECS with Fargate launch type are charged based on vCPU and memory resources that the containerized application requests","Both ECS with EC2 launch type and ECS with Fargate launch type are charged based on EC2 instances and EBS volumes used","Both ECS with EC2 launch type and ECS with Fargate launch type are just charged based on Elastic Container Service used per hour"
      ]
  },
  {
      "A leading social media analytics company is contemplating moving its dockerized application stack into AWS Cloud. The company is not sure about the pricing for using Elastic Container Service (ECS) with the EC2 launch type compared to the Elastic Container Service (ECS) with the Fargate launch type. Which of the following is correct regarding the pricing for these two services?":[
          "ECS with EC2 launch type is charged based on EC2 instances and EBS volumes used. ECS with Fargate launch type is charged based on vCPU and memory resources that the containerized application requests","Both ECS with EC2 launch type and ECS with Fargate launch type are charged based on vCPU and memory resources that the containerized application requests","Both ECS with EC2 launch type and ECS with Fargate launch type are charged based on EC2 instances and EBS volumes used","Both ECS with EC2 launch type and ECS with Fargate launch type are just charged based on Elastic Container Service used per hour"
      ]
  },
  {
      "An e-commerce company is looking for a highly available architecture to migrate their flagship application which is planned to be hosted on a fleet of Amazon EC2 instances. The company is also looking at facilitating content-based routing in its architecture.As a Solutions Architect, which of the following will you suggest for the company?":[
          "Use an Application Load Balancer for distributing traffic to the EC2 instances spread across different Availability Zones. Configure Auto Scaling group to mask any failure of an instance",
          "Use a Network Load Balancer for distributing traffic to the EC2 instances spread across different Availability Zones. Configure a Private IP address to mask any failure of an instance",
          "Use an Auto Scaling group for distributing traffic to the EC2 instances spread across different Availability Zones. Configure an Elastic IP address to mask any failure of an instance",
          "Use an Auto Scaling group for distributing traffic to the EC2 instances spread across different Availability Zones. Configure a Public IP address to mask any failure of an instance"
      ]
  },
  {
      "A medium-sized business has a taxi dispatch application deployed on an EC2 instance. Because of an unknown bug, the application causes the instance to freeze regularly. Then, the instance has to be manually restarted via the AWS management console.Which of the following is the MOST cost-optimal and resource-efficient way to implement an automated solution until a permanent fix is delivered by the development team?":[
          "Setup a CloudWatch alarm to monitor the health status of the instance. In case of an Instance Health Check failure, an EC2 Reboot CloudWatch Alarm Action can be used to reboot the instance",
          "Use CloudWatch events to trigger a Lambda function to check the instance status every 5 minutes. In the case of Instance Health Check failure, the lambda function can use AWS EC2 API to reboot the instance",
          "Use CloudWatch events to trigger a Lambda function to reboot the instance status every 5 minutes",
      ]
  },
  {
      "A leading social media startup has developed a mobile app that allows users to create custom animated videos and share it with their friends. The app has grown at a rate of 150% new users on a month by month basis over the last 1 year. The startup is now moving to AWS Cloud to better manage the IT infrastructure and scale efficiently. The engineering team is evaluating various AWS services as part of the solution stack for the data store layer. The AWS service should be able to handle some complicated queries such as What are the number of likes on the videos that have been posted by friends of a user A?. As a solutions architect, which of the following services would you recommend?":[
          "Amazon Neptune",
          "Amazon ElasticSearch",
          "Amazon Redshift",
          "Amazon Aurora"
      ]
  },
  {
      "A social media company manages its flagship application on an EC2 server fleet running behind an Application Load Balancer and the traffic is fronted by a CloudFront distribution. The engineering team wants to decouple the user authentication process for the application so that the application servers can just focus on the business logic.As a Solutions Architect, which of the following solutions would you recommend to the development team so that it requires minimal development effort?":[
          "Use Cognito Authentication via Cognito User Pools for your Application Load Balancer",
          "Use Cognito Authentication via Cognito Identity Pools for your Application Load Balancer",
          "Use Cognito Authentication via Cognito User Pools for your CloudFront distribution",
          "Use Cognito Authentication via Cognito Identity Pools for your CloudFront distribution"
      ]
  },
  {
      "A chip design startup is running an Electronic Design Automation (EDA) application, which is a high-performance workflow used to simulate performance and failures during the design phase of silicon chip production. The application produces massive volumes of data that can be divided into two categories. The 'hot data' needs to be both processed and stored quickly in a parallel and distributed fashion. The 'cold data' needs to be kept for reference with quick access for reads and updates at a low cost.Which of the following AWS services is BEST suited to accelerate the aforementioned chip design process?":[
          "Amazon FSx for Lustre",
          "Amazon FSx for Windows File Server",
          "Amazon EMR",
          "AWS Glue"
      ]
  },
  {
      "The CTO at an IT company wants to move away from license-based, expensive, and legacy commercial database solutions deployed at the on-premises data center to more efficient, open-source, and cost-effective options on AWS Cloud. At the same time, the CTO is concerned about identifying areas for data-conversion that require special attention during migration since the on-premises databases have multiple active complex configurations such as secondary indexes, foreign keys, and stored procedures. As a solutions architect, which of the following AWS services would you recommend being used for this solution (Select two)?":[
          "AWS Schema Conversion Tool and AWS Database Migration Service",
          "AWS Snowball Edge",
          "AWS Glue",
          'Basic Schema Copy'
      ]
  },
  {
      "An IT company has an Access Control Management (ACM) application that uses Amazon RDS for MySQL but is running into performance issues despite using Read Replicas. The company has hired you as a solutions architect to address these performance-related challenges on an urgent basis without moving away from the underlying relational database schema. The company has branch offices across the world, and it needs the solution to work on a global scale.Which of the following will you recommend as the MOST cost-effective and high-performance solution?":[
          "Use Amazon Aurora Global Database to enable fast local reads with low latency in each region",
          "Use Amazon DynamoDB Global Tables to provide fast, local, read and write performance in each region",
          "Spin up a Redshift cluster in each AWS region. Migrate the existing data into Redshift clusters ",
          "Spin up EC2 instances in each AWS region, install MySQL databases and migrate the existing data into these new databases"
      ]
  },
  {
      "An IT company wants to review its security best-practices after an incident was reported where a new developer on the team was assigned full access to DynamoDB. The developer accidentally deleted a couple of tables from the production environment while building out a new feature.Which is the MOST effective way to address this issue so that such incidents do not recur?":[
          "Use permissions boundary to control the maximum permissions employees can grant to the IAM principals",
          "Remove full database access for all IAM users in the organization",
          "Only root user should have full database access in the organization",
          "The CTO should review the permissions for each new developer's IAM user so that such incidents don't recur"
      ]
  },
  {
      "The infrastructure team at a company maintains 5 different VPCs (let's call these VPCs A, B, C, D, E) for resource isolation. Due to the changed organizational structure, the team wants to interconnect all VPCs together. To facilitate this, the team has set up VPC peering connections between VPC A and all other VPCs in a hub and spoke model with VPC A at the center. However, the team has still failed to establish connectivity between all VPCs.As a solutions architect, which of the following would you recommend as the MOST resource-efficient and scalable solution?":[
          "Use a transit gateway to interconnect the VPCs",
          "Use an internet gateway to interconnect the VPCs",
          "Use a VPC endpoint to interconnect the VPCs",
          "Establish VPC peering connections between all VPCs"
      ]
  },
  {
    "A DevOps engineer at an IT company was recently added to the admin group of the company's AWS account. The AdministratorAccess managed policy is attached to this group.Can you identify the AWS tasks that the DevOps engineer CANNOT perform even though he has full Administrator privileges (Select two)?":[
        "Configure an Amazon S3 bucket to enable MFA (Multi Factor Authentication) delete and  the company's AWS account",
        "Delete the IAM user for his manager",
        "Delete an S3 bucket from the production environment",
        "Change the password for his own IAM user account"
    ]
},
{


    "The DevOps team at an IT company is provisioning a two-tier application in a VPC with a public subnet and a private subnet. The team wants to use either a NAT instance or a NAT gateway in the public subnet to enable instances in the private subnet to initiate outbound IPv4 traffic to the internet but needs some technical assistance in terms of the configuration options available for the NAT instance and the NAT gateway.As a solutions architect, which of the following options would you identify as CORRECT? (Select three)":[
        "NAT instance can be used as a bastion server and Security Groups can be associated with a NAT instance and  NAT instance supports port forwarding",
        "NAT gateway supports port forwarding",
        "Security Groups can be associated with a NAT gateway",
        "NAT gateway can be used as a bastion server"
    ]
},
{
    "For security purposes, a team has decided to put their instances in a private subnet. They plan to deploy a VPC endpoint to access these services. The members of the team would like to know about the only two AWS services that require a Gateway Endpoint instead of an Interface Endpoint.As a solutions architect, which of the following services would you suggest for this requirement? (Select two)":[
        "Amazon S3 and DynamoDB",
        "Amazon Simple Queue Service (SQS)",
        "Amazon Simple Notification Service (SNS)",
        "Amazon Kinesis"
    ]
},
{
    "A Big Data processing company has created a distributed data processing framework that performs best if the network performance between the processing machines is high. The application has to be deployed on AWS, and the company is only looking at performance as its key measure.As a Solutions Architect, which deployment do you recommend?":[
        "Use a Cluster placement group",
        "Use a Spread placement group",
        "Optimize the EC2 kernel using EC2 User Data",
        "Use Spot Instances"
    ]
},
{
    "One of the biggest global oil and gas companies has recently migrated to the AWS Cloud. To reap the benefits of speed of data collection, flexibility, and rapid experimentation via the Internet of Things (IoT) devices, the company is planning on distributing a sensor to install at individual residents to measure the temperature and make adjustments to the heating system. To provide adjustment commands, the company would like to have a streaming system that performs real-time analytics on the data. Once the analytics are done, the company would like to send notifications back to the mobile applications of the users. As a solutions architect, which of the following AWS technologies would you recommend to send these notifications to the mobile applications?":[
        "Amazon Kinesis with Amazon Simple Notification Service (SNS)",
        "Amazon Simple Queue Service (SQS) with Amazon Simple Notification Service (SNS)",
        "Amazon Kinesis with Simple Email Service (Amazon SES)",
        "Amazon Kinesis with Simple Queue Service (SQS)"
    ]
},
{
    "A media agency stores its re-creatable artifacts on Amazon S3 buckets. The artifacts are accessed by a large volume of users for the first few days and the frequency of access falls down drastically after a week. Although the artifacts would be accessed occasionally after the first week, but they must continue to be immediately accessible when required. The cost of maintaining all the artifacts on S3 storage is turning out to be very expensive and the agency is looking at reducing costs as much as possible.As a Solutions Architect, can you suggest a way to lower the storage costs while fulfilling the business requirements":[
        "Configure a lifecycle policy to transition the objects to Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) after 30 days",
        "Configure a lifecycle policy to transition the objects to Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) after 30 days",
        "Configure a lifecycle policy to transition the objects to Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) after 7 days",
        "Configure a lifecycle policy to transition the objects to Amazon S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days"
    ]
},
{
    "A leading online gaming company is migrating its flagship application to AWS Cloud for delivering its online games to users across the world. The company would like to use a Network Load Balancer (NLB) to handle millions of requests per second. The engineering team has provisioned multiple instances in a public subnet and specified these instance IDs as the targets for the NLB.As a solutions architect, can you help the engineering team understand the correct routing mechanism for these target instances?":[
        "Traffic is routed to instances using the primary private IP address specified in the primary network interface for the instance",
        "Traffic is routed to instances using the primary public IP address specified in the primary network interface for the instance",
        "Traffic is routed to instances using the primary elastic IP address specified in the primary network interface for the instance",
        "Traffic is routed to instances using the instance ID specified in the primary network interface for the instance "
    ]
},
{
    "A leading online gaming company is migrating its flagship application to AWS Cloud for delivering its online games to users across the world. The company would like to use a Network Load Balancer (NLB) to handle millions of requests per second. The engineering team has provisioned multiple instances in a public subnet and specified these instance IDs as the targets for the NLB.As a solutions architect, can you help the engineering team understand the correct routing mechanism for these target instances?":[
        "Traffic is routed to instances using the primary private IP address specified in the primary network interface for the instance",
        "Traffic is routed to instances using the primary public IP address specified in the primary network interface for the instance",
        "Traffic is routed to instances using the primary elastic IP address specified in the primary network interface for the instance ",
        "Traffic is routed to instances using the instance ID specified in the primary network interface for the instance"
    ]
},
{
    "The business analytics team at a company has been running ad-hoc queries on Oracle and PostgreSQL services on Amazon RDS to prepare daily reports for senior management. To facilitate the business analytics reporting, the engineering team now wants to replicate this data with high availability and consolidate these databases into a petabyte-scale data warehouse by streaming data to Amazon Redshift.As a solutions architect, which of the following would you recommend as the MOST resource-efficient solution that requires the LEAST amount of development time without the need to manage the underlying infrastructure?":[
        "Use AWS Database Migration Service to replicate the data from the databases into Amazon Redshift",
        "Use AWS Glue to replicate the data from the databases into Amazon Redshift",
        "Use AWS EMR to replicate the data from the databases into Amazon Redshift",
        "Use Amazon Kinesis Data Streams to replicate the data from the databases into Amazon Redshift"
    ]
},
{
    "A telecommunications company is looking at moving its real-time traffic analytics infrastructure to AWS Cloud. The company owns thousands of hardware devices like switches, routers, cables, and so on. The status of all these devices has to be fed into an analytics system for real-time processing. If a malfunction is detected, communication has to be initiated to the responsible team, to fix the hardware. Also, another application needs to read this same incoming data in parallel and analyze all the connecting lines that may go down because of the hardware failure.As a Solutions Architect, can you suggest the right solution to be used for this requirement?":[
        "Amazon Kinesis Data Streams",
        "Amazon Simple Notification Service (SNS)",
        "Amazon Simple Queue Service (SQS) with Amazon Simple Notification Service (SNS)",
        "Amazon Simple Queue Service (SQS) with Amazon Simple Email Service (Amazon SES)"
    ]
},
{
    "A media publishing company is looking at moving their on-premises infrastructure to AWS Cloud. Their flagship application uses a massive PostgreSQL database and the engineering team would like to retain control over managing the patches, version upgrades for the database, and consistent performance with high IOPS. The team wants to install the database on an EC2 instance with the optimal storage type on the attached EBS volume.As a solutions architect, which of the following configurations would you suggest to the engineering team?":[
        "Amazon EC2 with EBS volume of Provisioned IOPS SSD (io1) type",
        "Amazon EC2 with EBS volume of General Purpose SSD (gp2) type",
        "Amazon EC2 with EBS volume of Throughput Optimized HDD (st1) type",
        "Amazon EC2 with EBS volume of cold HDD (sc1) type"
    ]
},
{
    "A company hosting a Network File System on-premise, has managed it well till date. However, the teams have realized that it is getting challenging to manage the entire process and the company is looking to adopt an hybrid cloud strategy to connect their on-premise applications to an AWS NFS that is backed by Amazon S3.Which service do you recommend?":[
        "Storage Gateway File",
        "Storage Gateway Volume",
        "Storage Gateway Tape",
        "Amazon Elastic File System (Amazon EFS)"
    ]
},
{
    "A streaming solutions company is building a video streaming product by using an Application Load Balancer (ALB) that routes the requests to the underlying EC2 instances. The engineering team has noticed a peculiar pattern. The ALB removes an instance whenever it is detected as unhealthy but the Auto Scaling group fails to kick-in and provision the replacement instance.What could explain this anomaly?":[
        "The Auto Scaling group is using EC2 based health check and the Application Load Balancer is using ALB based health check",
        "The Auto Scaling group is using ALB based health check and the Application Load Balancer is using EC2 based health check ",
        "Both the Auto Scaling group and Application Load Balancer are using ALB based health check",
        "Both the Auto Scaling group and Application Load Balancer are using EC2 based health check"
    ]
},
{
    "A media company has its corporate headquarters in Los Angeles with an on-premises data center using an AWS Direct Connect connection to the AWS VPC. The branch offices in San Francisco and Miami use Site-to-Site VPN connections to connect to the AWS VPC. The company is looking for a solution to have the branch offices send and receive data with each other as well as with their corporate headquarters.a solutions architect, which of the following AWS services would you recommend addressing this use-ce?":[
        "VPN CloudHub",
        "VPC Endpoint ",
        "VPC Peering",
        "Software VPN"
    ]
},
{
    "A global media company uses a fleet of EC2 instances (behind an Application Load Balancer) to power its video streaming application. To improve the performance of the application, the engineering team has also created a CloudFront distribution with the Application Load Balancer as the custom origin. The security team at the company has noticed a spike in the number and types of SQL injection and cross-site scripting attack vectors on the application.As a solutions architect, which of the following solutions would you recommend as the MOST effective in countering these malicious attacks?":[
        "Use Web Application Firewall (WAF) with CloudFront distribution",
        "Use Route 53 with CloudFront distribution",
        "Use Security Hub with CloudFront distribution",
        "Use AWS Firewall Manager with CloudFront distribution"
    ]
},
{
    "Your firm has implemented a multi-tiered networking structure within the VPC - two public and two private subnets. The public subnets are used to deploy the Application Load Balancers, while the two private subnets are used to deploy the application on Amazon EC2 instances. As part of the firm's security and compliance needs, they need the Amazon EC2 instances to have access to the internet.As a Solutions Architect, what will you recommend, the solution has to be fully managed by AWS and working over IPv4?":[
        "NAT Gateways deployed in your public subnet",
        "NAT Instances deployed in your public subnet",
        "Internet Gateways deployed in your private subnet",
        "Egress-Only Internet Gateways deployed in your private subnet"
    ]
},
{
    "A financial services firm runs its technology operations on a fleet of Amazon EC2 instances. The firm needs a certain software to be available on the instances to support their daily workflows. The engineering team has been told to use the user data feature of EC2 instances to ensure new instances are ready for operations.Which of the following are true about the EC2 user data configuration? (Select two)":[
        "By default, scripts entered as user data are executed with root user privileges  and By default, user data runs only during the boot cycle when you first launch an instance",
        "By default, user data is executed every time an EC2 instance is re-started",
        "When an instance is running, you can update user data by using root user credentials",
        "By default, scripts entered as user data do not have root user privileges for executing"
    ]
},
{
    "A financial services company is looking to move its on-premises IT infrastructure to AWS Cloud. The company has multiple long-term server bound licenses across the application stack and the CTO wants to continue to utilize those licenses while moving to AWS.As a solutions architect, which of the following would you recommend as the MOST cost-effective solution?":[
        "Use EC2 dedicated hosts",
        "Use EC2 dedicated instances",
        "Use EC2 on-demand instances",
        "Use EC2 reserved instances"
    ]
},
{
    "A company has grown from a small startup to an enterprise employing over 1000 people. As part of the scaling up of the AWS Cloud teams, the company has observed some strange behavior with S3 buckets settings being changed regularly.How can you figure out what's happening without restricting the rights of the users?":[
        "Use CloudTrail to analyze API calls",
        "Implement an IAM policy to forbid users to change S3 bucket settings ",
        "Use S3 access logs to analyze user access using Athena",
        "Implement a bucket policy requiring MFA for all operations"
    ]
},
{
    "A retail company has built their AWS solution using serverless architecture by leveraging AWS Lambda and Amazon S3. The development team has a requirement to implement AWS Lambda across AWS accounts. The requirement entails using a Lambda function with an IAM role from an AWS account A to access an Amazon S3 bucket in AWS account B. As a Solutions Architect, which of the following will you recommend as the BEST solution to meet this requirement?":[
        "Create an AWS Identity and Access Management (IAM) role for the Lambda function that also grants access to the S3 bucket. Set the IAM role as the Lambda function's execution role. Verify that the bucket policy grants access to the Lambda function's execution role",
        "AWS Lambda cannot access resources across AWS accounts. Use Identity federation to work around this limitation of Lambda ",
        "Create an AWS Identity and Access Management (IAM) role for the Lambda function that also grants access to the S3 bucket. Set the IAM role as the Lambda function's execution role",
        "The S3 bucket owner can delegate permissions to users in the other AWS account "
    ]
},
{
    "As part of the design of a mobile application, a firm has decided to use a traditional serverless architecture using AWS Lambda, API Gateway & DynamoDB. The firm is looking for a technology that allows the users to connect through a Google login and have the capability to turn on MFA (Multi-Factor Authentication) to have maximum security. Ideally, the solution should be fully managed by AWS. Which technology do you recommend for managing the users' accounts?":[
        "Amazon Cognito",
        "Write a Lambda function with Auth0 3rd party integration",
        "AWS Identity and Access Management (IAM)",
        "Enable the AWS Google Login Service"
    ]
},
{
    "A health-care solutions company wants to run their applications on single-tenant hardware to meet regulatory guidelines. Which of the following is the MOST cost-effective way of isolating their Amazon EC2 instances to a single tenant?":[
        "Dedicated Instances",
        "Spot Instances",
        "Dedicated Hosts",
        "On-Demand Instances"
    ]
},
{
    "A media company runs a photo-sharing web application that is currently accessed across three different countries. The application is deployed on several Amazon EC2 instances running behind an Application Load Balancer. With new government regulations, the company has been asked to block access from two countries and allow access only from the home country of the company. Which configuration should be used to meet this changed requirement?":[
        "Configure AWS WAF on the Application Load Balancer in a VPC",
        "Use Geo Restriction feature of Amazon CloudFront in a VPC",
        "Configure the security group on the Application Load Balancer",
        "Configure the security group for the EC2 instances"
    ]
},
{
    "A leading Software as a Service (SaaS) TeleHealth services company has deployed its IT infrastructure on the AWS Cloud. The flagship application is hosted on multiple EC2 instances within a single VPC in the us-east-1 region. The engineering team at the company wants to use Amazon SQS to decouple some of the underlying processes but the team is concerned about accessing SQS over the public internet. As a solutions architect, which of the following solutions would you recommend to address this use-case?":[
        "Use VPC endpoint to access Amazon SQS",
        "Use Internet Gateway to access Amazon SQS",
        "Use VPN connection to access Amazon SQS",
        "Use VPN connection to access Amazon SQS",
        "Use Network Address Translation (NAT) instance to access Amazon SQS"
    ]
},
{
    "A financial services company has to retain the activity logs for each of their customers to meet regulatory and compliance guidelines. Depending on the business line, the company wants to retain the logs for 5-10 years in highly available and durable storage on AWS. The overall data size is expected to be in PetaBytes. In case of an audit, the data would need to be accessible within a timeframe of up to 48 hours. Which AWS storage option is the MOST cost-effective for the given compliance requirements?":[
        "Amazon S3 Glacier Deep Archive",
        "Third-party tape storage",
        "Amazon S3 Standard storage",
        "Amazon S3 Glacier"
    ]
},
{
    "A retail company uses AWS Cloud to manage its IT infrastructure. The company has set up 'AWS Organizations' to manage several departments running their AWS accounts and using resources such as EC2 instances and RDS databases. The company wants to provide shared and centrally-managed VPCs to all departments using applications that need a high degree of interconnectivity. As a solutions architect, which of the following options would you choose to facilitate this use-case?":[
        "Use VPC sharing to share one or more subnets with other AWS accounts belonging to the same parent organization from AWS Organizations",
        "Use VPC sharing to share a VPC with other AWS accounts belonging to the same parent organization from AWS Organizations",
        "Use VPC peering to share one or more subnets with other AWS accounts belonging to the same parent organization from AWS Organizations ",
        "Use VPC peering to share a VPC with other AWS accounts belonging to the same parent organization from AWS Organizations "
    ]
},
{
    "A news network uses Amazon S3 to aggregate the raw video footage from its reporting teams across the US. The news network has recently expanded into new geographies in Europe and Asia. The technical teams at the overseas branch offices have reported huge delays in uploading large video files to the destination S3 bucket.Which of the following are the MOST cost-effective options to improve the file upload speed into S3? (Select two)":[
        "Use Amazon S3 Transfer Acceleration to enable faster file uploads into the destination S3 bucket and Use multipart uploads for faster file uploads into the destination S3 bucket ",
        "Create multiple AWS direct connect connections between the AWS Cloud and branch offices in Europe and Asia. Use the direct connect connections for faster file uploads into S3",
        "Create multiple site-to-site VPN connections between the AWS Cloud and branch offices in Europe and Asia. Use these VPN connections for faster file uploads into S3",
        "Use AWS Global Accelerator for faster file uploads into the destination S3 bucket"
    ]
},
{
    "A leading global measurement and data analytics company measures what the consumers watch and what advertising they’re exposed to. This real-time data is ingested into its on-premises data center and subsequently the daily data feed is compressed into a single file and uploaded on Amazon S3 for backup. The typical compressed file size is around 2 GB. Which of the following is the fastest way to upload the daily compressed file into S3?":[
        "Upload the compressed file using multipart upload with S3 transfer acceleration",
        "Upload the compressed file in a single operation",
        "Upload the compressed file using multipart upload",
        "FTP the compressed file into an EC2 instance that runs in the same region as the S3 bucket. Then transfer the file from EC2 instance into the S3 bucket "
    ]
},
{
    "Your company is evolving towards a microservice approach for their website. The company plans to expose the website from the same load balancer, linked to different target groups with different URLs, that are similar to these - checkout.mycorp.com, www.mycorp.com, mycorp.com/profile, and mycorp.com/search.As a Solutions Architect, which Load Balancer type do you recommend to achieve this routing feature with MINIMUM configuration and development effort?":[
        "Create an Application Load Balancer",
        "Create an NGINX based load balancer on an EC2 instance to have advanced routing capabilities",
        "Create a Network Load Balancer",
        "Create a Classic Load Balancer"
    ]
},
{
    "Your company is deploying a website running on Elastic Beanstalk. The website takes over 45 minutes for the installation and contains both static as well as dynamic files that must be generated during the installation process. As a Solutions Architect, you would like to bring the time to create a new Instance in your Elastic Beanstalk deployment to be less than 2 minutes. What do you recommend? (Select two)":[
        "Create a Golden AMI with the static installation components already setup  and Use EC2 user data to customize the dynamic installation parts at boot time",
        "Store the installation files in S3 so they can be quickly retrieved",
        "Use EC2 user data to install the application at boot time",
        "Use Elastic Beanstalk deployment caching feature"
    ]
},

{
    "The DevOps team at a leading social media company uses AWS OpsWorks, which is a fully managed configuration management service. OpsWorks eliminates the need to operate your configuration management systems or worry about maintaining its infrastructure. Can you identify the configuration management tools for which OpsWorks provides managed instances? (Select two)":[
        "Chef and Puppet",
        "Ansible",
        "CFEngine",
        "Salt"
    ]
},

{
    "A media company uses Amazon S3 buckets for storing their business-critical files. Initially, the development team used to provide bucket access to specific users within the same account. With changing business requirements, cross-account S3 access requirements are also growing. The company is looking for a granular solution that can offer user level as well as account-level access permissions for the data stored in S3 buckets. As a Solutions Architect, which of the following would you suggest as the MOST optimized way of controlling access for this use-case?":[
        "Use Amazon S3 Bucket Policies",
        "Use Identity and Access Management (IAM) policies",
        "Use Access Control Lists (ACLs) -",
        "Use Security Groups"
    ]
},

{
    "The engineering team at an e-commerce company is working on cost optimizations for EC2 instances. The team wants to manage the workload using a mix of on-demand and spot instances across multiple instance types. They would like to create an Auto Scaling group with a mix of these instances. Which of the following options would allow the engineering team to provision the instances for this use-case?":[
        "You can only use a launch template to provision capacity across multiple instance types using both On-Demand Instances and Spot Instances to achieve the desired scale, performance, and cost",
        "You can only use a launch configuration to provision capacity across multiple instance types using both On-Demand Instances and Spot Instances to achieve the desired scale, performance, and cost",
        "You can use a launch configuration or a launch template to provision capacity across multiple instance types using both On-Demand Instances and Spot Instances to achieve the desired scale, performance, and cost",
        "You can neither use a launch configuration nor a launch template to provision capacity across multiple instance types using both On-Demand Instances and Spot Instances to achieve the desired scale, performance, and cost"
    ]
},

{
    "A Big Data analytics company wants to set up an AWS cloud architecture that throttles requests in case of sudden traffic spikes. To augment its custom technology stack, the company is looking for AWS services that can be used for buffering or throttling to handle traffic variations.Which of the following services can be used to support this requirement?":[
        "Amazon API Gateway, Amazon SQS and Amazon Kinesis",
        "Amazon SQS, Amazon SNS and AWS Lambda",
        "Amazon Gateway Endpoints, Amazon SQS and Amazon Kinesis",
        "Elastic Load Balancer, Amazon SQS, AWS Lambda "
    ]
},

// {
//     "":[
//         "",
//         "",
//         "",
//         ""
//     ]
// },



];

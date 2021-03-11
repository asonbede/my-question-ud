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
    question:  `Which of the following is true regarding cross-zone load 
    balancing as seen in Application Load Balancer versus Network Load Balancer?`,
    answers:{
        a:"By default, cross-zone load balancing is disabled for Application Load Balancer and enabled for Network Load Balancer",
        b:"By default, cross-zone load balancing is enabled for both Application Load Balancer and Network Load Balancer",
        
        c:"By default, cross-zone load balancing is enabled for Application Load Balancer and disabled for Network Load Balancer",
        
        d:"By default, cross-zone load balancing is disabled for both Application Load Balancer and Network Load Balancer",
        
    },
    correctAnswer:"c",
    explanation:`
By default, cross-zone load balancing is enabled for Application Load Balancer and disabled for Network Load Balancer
By default, cross-zone load balancing is enabled for Application Load Balancer and disabled for Network Load Balancer.
When cross-zone load balancing is enabled,
each load balancer node distributes traffic across the registered targets in all the enabled Availability Zones. 
When cross-zone load balancing is disabled, 
each load balancer node distributes traffic only across the registered targets in its Availability Zone.

via - https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html

Incorrect Options:

By default, cross-zone load balancing is disabled for both Application Load Balancer and Network Load Balancer

By default, cross-zone load balancing is enabled for both Application Load Balancer and Network Load Balancer

By default, cross-zone load balancing is disabled for Application Load Balancer and enabled for Network Load Balancer

Per the default cross-zone load balancing settings described earlier in the explanation, these three options are incorrect.

Reference:

https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html
    `
      },
  {
     question: `A retail organization is moving some of its on-premises data to AWS Cloud. 
The DevOps team at the organization has set up an 
AWS Managed IPSec VPN Connection between their remote on-premises network and
their Amazon VPC over the internet.Which of the following represents
the correct configuration for the IPSec VPN Connection?`,
  answers:   { 
        a:  "Create a Virtual Private Gateway on the AWS side of the VPN and a Customer Gateway on the on-premises side of the VPN",
         b: "Create a Virtual Private Gateway on the on-premises side of the VPN and a Customer Gateway on the AWS side of the VPN ",
         c: "Create a Customer Gateway on both the AWS side of the VPN as well as the on-premises side of the VPN",
         d:"Create a Virtual Private Gateway on both the AWS side of the VPN as well as the on-premises side of the VPN "
  },
  correctAnswer:"a",
  explanation:`
  Correct option:

Create a Virtual Private Gateway on the AWS side of the VPN and a 
Customer Gateway on the on-premises side of the VPN

Amazon VPC provides the facility to create an IPsec VPN connection (also known as site-to-site VPN) 
between remote customer networks and their Amazon VPC over the internet.
 The following are the key concepts for a site-to-site VPN:

Virtual private gateway:
 A Virtual Private Gateway (also known as a VPN Gateway) 
 is the endpoint on the AWS VPC side of your VPN connection.

VPN connection: A secure connection between your on-premises equipment and your VPCs.

VPN tunnel: An encrypted link where data can pass from the customer network to or from AWS.

Customer Gateway: An AWS resource that provides information to AWS about your Customer Gateway device.

Customer Gateway device: 
A physical device or software application on the customer side of the Site-to-Site VPN connection.

AWS Managed IPSec VPN via - https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-managed-vpn-network-to-amazon.html

Incorrect options:

Create a Virtual Private Gateway on the on-premises side of the VPN
 and a Customer Gateway on the AWS side of the VPN - 
 You need to create a Virtual Private Gateway on the AWS side of
  the VPN and a Customer Gateway on the on-premises side of the VPN. Therefore, this option is wrong.

Create a Customer Gateway on both the AWS side of the VPN as well as the on-premises side of the VPN 
- You need to create a Virtual Private Gateway on the AWS side of the VPN and a Customer Gateway 
on the on-premises side of the VPN. Therefore, this option is wrong.

Create a Virtual Private Gateway on both the AWS side of the VPN as well as the on-premises side of the VPN - 
You need to create a Virtual Private Gateway
 on the AWS side of the VPN and a Customer Gateway on the on-premises side of the VPN. 
 Therefore, this option is wrong.

References:

https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-managed-vpn-network-to-amazon.html

https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html

  `
  },
  {
    question:  `The development team at an e-commerce startup has set up multiple microservices
     running on EC2 instances under an Elastic Load Balancer. 
    The team wants to route traffic to multiple back-end services based on the content of the request.
    Which of the following types of load balancers would allow routing based on the content of the request?`,
    answers:{ 
         a: "Application Load Balancer",
         b:"Network Load Balancer",
         c:"Classic Load Balancer",
         d:"Both Application Load Balancer and Network Load Balancer"
    },
    correctAnswer:"a",
    explanation:`
    Correct option:

Application Load Balancer

An Application Load Balancer functions at the application layer,
the seventh layer of the Open Systems Interconnection (OSI) model.
After the load balancer receives a request, it evaluates the listener rules in priority order
to determine which rule to apply and then selects a target from the target group for the rule action.
You can configure listener rules to route requests to different target
groups based on the content of the application traffic. 
Each target group can be an independent microservice, therefore this option is correct.

Please review this to understand the various rule condition types for Elastic Load Balancer: 
via - https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html

Incorrect options:

Network Load Balancer - Network Load Balancer operates at the connection level (Layer 4), 
routing connections to targets - Amazon EC2 instances, microservices, 
and containers – within Amazon Virtual Private Cloud (Amazon VPC) based on IP protocol data.

Classic Load Balancer - Classic Load Balancer provides basic load balancing 
across multiple Amazon EC2 instances and operates at both the request level and connection level.
Classic Load Balancer is intended for applications that were built within the EC2-Classic network.

Network Load Balancer or Classic Load Balancer cannot be used to route traffic based on the content of the request.
 So both these options are incorrect.

Both Application Load Balancer and Network Load Balancer -
 Network Load Balancer cannot be used to route traffic based on the content of the request. 
 So this option is also incorrect.

References:

https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html

https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html

    
    `
  },
  {
    question:  `A media company wants to get out of the business of owning
     and maintaining its own IT infrastructure.
     As part of this digital transformation, 
     the media company wants to archive about 5PB of data in its on-premises data center to durable long term storage.
     As a solutions architect, what is your recommendation to migrate this data in the MOST cost-optimal way?`,
   answers: { 
        b: "Transfer the on-premises data into multiple Snowball Edge Storage Optimized devices. Copy the Snowball Edge data into Amazon S3 and create a lifecycle policy to transition the data into AWS Glacier",
         a: "Transfer the on-premises data into multiple Snowball Edge Storage Optimized devices. Copy the Snowball Edge data into AWS Glacier",
        c: "Setup Site-to-Site VPN connection between the on-premises data center and AWS Cloud. Use this connection to transfer the data into AWS Glacier"
   },
   correctAnswer:"b",
   explanation:`
   Correct option:

Transfer the on-premises data into multiple Snowball Edge Storage Optimized devices.
 Copy the Snowball Edge data into Amazon S3 and create a lifecycle policy to transition the data into AWS Glacier

Snowball Edge Storage Optimized is the optimal choice if you need to securely and quickly 
transfer dozens of terabytes to petabytes of data to AWS. 
It provides up to 80 TB of usable HDD storage, 40 vCPUs, 1 TB of SATA SSD storage, 
and up to 40 Gb network connectivity to address large scale data transfer and pre-processing use cases. 
The data stored on the Snowball Edge device can be copied into the S3 bucket and later transitioned into 
AWS Glacier via a lifecycle policy. You can't directly copy data from Snowball Edge devices into AWS Glacier.

Incorrect options:

Transfer the on-premises data into multiple Snowball Edge Storage Optimized devices. 
Copy the Snowball Edge data into AWS Glacier - 
As mentioned earlier, you can't directly copy data from Snowball Edge devices into AWS Glacier. 
Hence, this option is incorrect.

Setup AWS direct connect between the on-premises data center and AWS Cloud. 
Use this connection to transfer the data into AWS Glacier - 
AWS Direct Connect lets you establish a dedicated network connection between
 your network and one of the AWS Direct Connect locations. 
 Using industry-standard 802.1q VLANs, 
 this dedicated connection can be partitioned into multiple virtual interfaces.
Direct Connect involves significant monetary investment and takes more than a month to set up, 
therefore it's not the correct fit for this use-case where just a one-time data transfer has to be done.

Setup Site-to-Site VPN connection between the on-premises data center and AWS Cloud. 
Use this connection to transfer the data into AWS Glacier -
 AWS Site-to-Site VPN enables you to securely connect your on-premises 
 network or branch office site to your Amazon Virtual Private Cloud (Amazon VPC). 
 VPN Connections are a good solution if you have an immediate need, and have low to modest bandwidth requirements. 
 Because of the high data volume for the given use-case, Site-to-Site VPN is not the correct choice.

Reference:

https://aws.amazon.com/snowball/

   `
  },
  {
      question:`A weather forecast agency collects key weather metrics across 
      multiple cities in the US and sends this data in the form of key-value pairs 
      to AWS Cloud at a one-minute frequency.
      As a solutions architect, which of the following AWS services would you use to build a solution 
      for processing and reliably storing this data with high availability? (Select two)`,
     answers: { 
          c:'Lambda  and DynamoDB',
          b:"ElastiCache",
          a:"Redshift"
      },
      answers:"c",
      explanation:`
      Explanation

Correct options:

Lambda - With AWS Lambda, you can run code without provisioning or managing servers.
You pay only for the compute time that you consume—there’s no charge when your code isn’t running.
You can run code for virtually any type of application or backend service—all with zero administration.

DynamoDB - Amazon DynamoDB is a key-value and document database 
that delivers single-digit millisecond performance at any scale. 
It's a fully managed, multi-region, multi-master, durable database with built-in security,
 backup and restore, and in-memory caching for internet-scale applications. 
 DynamoDB is a NoSQL database and it's best suited to store data in key-value pairs.

AWS Lambda can be combined with DynamoDB to process and capture 
the key-value data from the IoT sources described in the use-case. So both these options are correct.

Incorrect options:

Redshift - Amazon Redshift is a fully-managed petabyte-scale cloud-based data warehouse 
product designed for large scale data set storage and analysis. 
You cannot use Redshift to capture data in key-value pairs from the IoT sources, so this option is not correct.

ElastiCache - Amazon ElastiCache allows you to seamlessly set up, run, 
and scale popular open-Source compatible in-memory data stores in the cloud. 
Build data-intensive apps or boost the performance of your
 existing databases by retrieving data from high throughput and low latency in-memory data stores.
Amazon ElastiCache is a popular choice for real-time use cases like Caching,
Session Stores, Gaming, Geospatial Services, Real-Time Analytics, and Queuing.
 Elasticache is used as a caching layer in front of relational databases. 
 It is not a good fit to store data in key-value pairs from the IoT sources, so this option is not correct.

RDS - Amazon Relational Database Service (Amazon RDS) makes it easy to set up, 
operate, and scale a relational database in the cloud. 
It provides cost-efficient and resizable capacity while automating time-consuming
 administration tasks such as hardware provisioning, database setup, patching, and backups.
  Relational databases are not a good fit to store data in key-value pairs, so this option is not correct.

References:

https://aws.amazon.com/dynamodb/

https://aws.amazon.com/lambda/faqs/

      `
  },
  {
    question:  `An e-commerce company is planning to migrate their two-tier application 
    from on-premises infrastructure to AWS Cloud. 
    As the engineering team at the company is new to the AWS Cloud, 
    they are planning to use the Amazon VPC console wizard to set up the networking configuration
     for the two-tier application having public web servers and private database servers.
     Can you spot the configuration that is NOT supported by the Amazon VPC console wizard?`,
   answers: { 
         a: "VPC with a public subnet only and AWS Site-to-Site VPN access",
        b:  "VPC with a single public subnet",
        c:  "VPC with public and private subnets (NAT)"
        },
        correctAnswer:"a",
        explanation:`
        Correct option:

VPC with a public subnet only and AWS Site-to-Site VPN access

The Amazon VPC console wizard provides the following four configurations:

VPC with a single public subnet - 
The configuration for this scenario includes a virtual private cloud (VPC) with a single public subnet,
 and an internet gateway to enable communication over the internet.
 We recommend this configuration if you need to run a single-tier,
  public-facing web application, such as a blog or a simple website.

  via - https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Scenario1.html

  VPC with public and private subnets (NAT) -
The configuration for this scenario includes a virtual private cloud (VPC) with a public subnet and a private subnet.
We recommend this scenario if you want to run a public-facing web application 
while maintaining back-end servers that aren't publicly accessible. 
A common example is a multi-tier website, with the web servers in a public subnet and 
the database servers in a private subnet. 
You can set up security and routing so that the web servers can communicate with the database servers.
via - https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Scenario2.html

VPC with public and private subnets and AWS Site-to-Site VPN access - 
The configuration for this scenario includes a virtual private cloud (VPC)
 with a public subnet and a private subnet, and a virtual private gateway 
 to enable communication with your network over an IPsec VPN tunnel. 
 We recommend this scenario if you want to extend your network into the cloud and also 
 directly access the Internet from your VPC. 
 This scenario enables you to run a multi-tiered application with a scalable
  web front end in a public subnet and to house your data in a private subnet 
  that is connected to your network by an IPsec AWS Site-to-Site VPN connection.
via - https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Scenario3.html

VPC with a private subnet only and AWS Site-to-Site VPN access - 
The configuration for this scenario includes a virtual private cloud (VPC) with a single private subnet,
 and a virtual private gateway to enable communication with your network over an IPsec VPN tunnel. 
 There is no Internet gateway to enable communication over the Internet. 
 We recommend this scenario if you want to extend your network into the cloud 
 using Amazon's infrastructure without exposing your network to the Internet.
 via - https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Scenario4.html

 Therefore, the option "VPC with a public subnet only and AWS Site-to-Site VPN access"
  is NOT supported by the Amazon VPC console wizard.
 
 Incorrect options:
 
 VPC with a single public subnet
 
 VPC with public and private subnets (NAT)
 
 VPC with public and private subnets and AWS Site-to-Site VPN access
 
 These three options are valid configurations supported by the Amazon VPC console wizard.
 
 References:
 
 https://docs.aws.amazon.com/vpc/latest/userguide/VPC_wizard.html
        `
  },
  {
    question:  `A startup has recently moved their monolithic web application to AWS Cloud. 
    The application runs on a single EC2 instance. 
    Currently, the user base is small and the startup does not want to spend effort on 
    elaborate disaster recovery strategies or Auto Scaling Group.
    The application can afford a maximum downtime of 10 minutes.
    In case of a failure, which of these options would you suggest as a cost-effective and
     automatic recovery procedure for the instance?`,
    answers:{ 
       c:   "Configure an Amazon CloudWatch alarm that triggers the recovery of the EC2 instance, in case the instance fails. The instance, however, should only be configured with an EBS volume",
        a:  "Configure Amazon CloudWatch events that can trigger the recovery of the EC2 instance, in case the instance or the application fails",
         b: "Configure an Amazon CloudWatch alarm that triggers the recovery of the EC2 instance, in case the instance fails. The instance can be configured with EBS volume or with instance store volumes",
         d: "Configure AWS Trusted Advisor to monitor the health check of EC2 instance and provide a remedial action in case an unhealthy flag is detected"
       },
       correctAnswer:"c",
       explanation:`
       Explanation

Correct option:

Configure an Amazon CloudWatch alarm that triggers the recovery of the EC2 instance, 
in case the instance fails. 
The instance, however, should only be configured with an EBS volume -
 If your instance fails a system status check, you can use CloudWatch alarm actions to automatically recover it. 
 The recover option is available for over 90% of deployed customer EC2 instances.
 The CloudWatch recovery option works only for system check failures, not for instance status check failures. 
 Also, if you terminate your instance, then it can't be recovered.

You can create an Amazon CloudWatch alarm that monitors an
 Amazon EC2 instance and automatically recovers the instance if it
  becomes impaired due to an underlying hardware failure or a problem that requires AWS involvement to repair. 
  Terminated instances cannot be recovered. A recovered instance is identical to the original instance,
   including the instance ID, private IP addresses, Elastic IP addresses, and all instance metadata. 
   If the impaired instance is in a placement group, the recovered instance runs in the placement group.

The automatic recovery process attempts to recover your instance for up to three separate failures per day.
 Your instance may subsequently be retired if automatic recovery fails and a hardware degradation 
 is determined to be the root cause for the original system status check failure.

Incorrect options:

Configure Amazon CloudWatch events that can trigger the recovery of the EC2 instance, 
in case the instance or the application fails - 
You cannot use CloudWatch events to directly trigger the recovery of the EC2 instance.

Configure an Amazon CloudWatch alarm that triggers the recovery of the EC2 instance,
 in case the instance fails. The instance can be configured with EBS volume or with instance store volumes - 
 The recover action is supported only on instances that have EBS volumes configured on them, 
 instance store volumes are not supported for automatic recovery by CloudWatch alarms.

Configure AWS Trusted Advisor to monitor the health check of EC2 instance and provide
 a remedial action in case an unhealthy flag is detected - 
 You can use Amazon CloudWatch Events to detect and react to changes in the status of Trusted Advisor checks.
 This support is only available with AWS Business Support and AWS Enterprise Support.
  Trusted Advisor by itself does not support health checks of EC2 instances or their recovery.

Reference:

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html

       `
  },
  {
    question:  `Researchers at a pharma company are working on developing a vaccine for the COVID-19 pandemic.
     They have identified multiple candidates as potential vaccines and they need to analyze 
     healthcare data of individuals in the US to identify the first batch of recipients for the initial trials.
      For faster processing, the data processing application needs to parse through this healthcare 
      data in an in-memory database that is highly available as well as HIPAA compliant.
      As a solutions architect, which of the following AWS services would you recommend for this task?`,
  answers:  { 
         d: "ElastiCache for Redis",
         a:"ElastiCache for Memcached",
         c:"DynamoDB",
         b:"DocumentDB"
    },
    correctAnswer:"d",
    explanation:`
    Correct option:

ElastiCache for Redis

ElastiCache Overview: via - https://aws.amazon.com/elasticache/redis-vs-memcached/

Amazon ElastiCache for Redis is a blazing fast in-memory data store that provides 
sub-millisecond latency to power internet-scale real-time applications. 
Amazon ElastiCache for Redis is a great choice for real-time transactional and
 analytical processing use cases such as caching, chat/messaging, gaming leaderboards, 
 geospatial, machine learning, media streaming, queues, real-time analytics, and session store.
  ElastiCache for Redis supports replication, high availability, and cluster sharding right out of the box.
   Amazon ElastiCache for Redis is also HIPAA Eligible Service. Therefore, this is the correct option.

ElastiCache for Redis Overview: via - https://aws.amazon.com/elasticache/redis/

Exam Alert:

Please review this comparison sheet for Redis vs Memcached features: 
via - https://aws.amazon.com/elasticache/redis-vs-memcached/

Incorrect Options:

ElastiCache for Memcached -
Amazon ElastiCache for Memcached is a Memcached-compatible in-memory key-value store service
that can be used as a cache or a data store. 
Amazon ElastiCache for Memcached is a great choice for implementing
an in-memory cache to decrease access latency, increase throughput, 
and ease the load off your relational or NoSQL database. 
Session stores are easy to create with Amazon ElastiCache for Memcached.
 Elasticache for Memcached is not HIPAA eligible, so this option is incorrect.

DynamoDB - Amazon DynamoDB is a key-value and document database 
that delivers single-digit millisecond performance at any scale. 
It's a fully managed, multi-region, multi-master, durable database with built-in security,
 backup and restore, and in-memory caching (via DAX) for internet-scale applications. 
 DynamoDB is not an in-memory database, so this option is incorrect.

DocumentDB - Amazon DocumentDB is a fast, scalable,
 highly available, and fully managed document database service that supports MongoDB workloads.
  As a document database, Amazon DocumentDB makes it easy to store, query, and index JSON data.
   DocumentDB is not an in-memory database, so this option is incorrect.

References:

https://aws.amazon.com/about-aws/whats-new/2017/11/amazon-elasticache-for-redis-is-now-hipaa-eligible-to-help-you-power-secure-healthcare-applications-with-sub-millisecond-latency/

https://aws.amazon.com/elasticache/redis/

    `
  },
  {
     question: `A leading hotel reviews business uses Amazon Web Services 
     to store and process images for their website. 
     The team uses Amazon EC2 and Amazon SQS in an integrated workflow 
     to generate the sizes they need for each photo. 
     SQS communicates the photos that need to be processed and the status of the jobs.
      Because of changes in the business processes, the engineering team is now migrating 
      from SQS Standard queues to FIFO queues with batching.
      As a solutions architect, which of the following steps would you add to the migration 
      checklist for the engineering team? (Select three)`,

   answers: { 
         a: "Delete the existing standard queue and recreate it as a FIFO queue;Make sure that the name of the FIFO queue ends with the .fifo suffix;Make sure that the throughput for the target FIFO queue does not exceed 3,000 messages per second",
        b:  "Convert the existing standard queue into a FIFO queue",
         c: "Make sure that the name of the FIFO queue is the same as the standard queue",
        d:  "Make sure that the throughput for the target FIFO queue does not exceed 300 messages per second",
        e:"a and b"
   },
   correctAnswer:"e",
   explanation:`
   Correct options:

Delete the existing standard queue and recreate it as a FIFO queue

Make sure that the name of the FIFO queue ends with the .fifo suffix

Make sure that the throughput for the target FIFO queue does not exceed 3,000 messages per second

Amazon Simple Queue Service (SQS) is a fully managed message queuing service 
that enables you to decouple and scale microservices, distributed systems, and serverless applications.
SQS eliminates the complexity and overhead associated with managing and operating message oriented middleware,
and empowers developers to focus on differentiating work.
Using SQS, you can send, store, and receive messages between software components at any volume, 
without losing messages or requiring other services to be available.

SQS offers two types of message queues. 
Standard queues offer maximum throughput, best-effort ordering, and at-least-once delivery. 
SQS FIFO queues are designed to guarantee that messages are processed exactly once,
 in the exact order that they are sent.

By default, FIFO queues support up to 3,000 messages per second with batching, 
or up to 300 messages per second (300 send, receive, or delete operations per second) without batching. 
Therefore, using batching you can meet a throughput requirement of upto 3,000 messages per second.

The name of a FIFO queue must end with the .fifo suffix. 
The suffix counts towards the 80-character queue name limit.
To determine whether a queue is FIFO, you can check whether the queue name ends with the suffix.

If you have an existing application that uses standard queues and 
you want to take advantage of the ordering or exactly-once processing features of FIFO queues,
 you need to configure the queue and your application correctly.
You can't convert an existing standard queue into a FIFO queue.
 To make the move, you must either create a new FIFO queue for your application
  or delete your existing standard queue and recreate it as a FIFO queue.

Incorrect options:

Convert the existing standard queue into a FIFO queue - 
You can't convert an existing standard queue into a FIFO queue.

Make sure that the name of the FIFO queue is the same as the standard queue -
 The name of a FIFO queue must end with the .fifo suffix.

Make sure that the throughput for the target FIFO queue does not exceed 300 messages per second - 
By default, FIFO queues support up to 3,000 messages per second with batching.

References:

https://aws.amazon.com/sqs/faqs/

https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html

   `
  },
  {
    question: `A social media analytics company uses a fleet of EC2 servers to manage its analytics workflow. 
    These EC2 servers operate under an Auto Scaling group. 
    The engineers at the company want to be able to download log files 
    whenever an instance terminates because of a scale-in event from an auto-scaling policy.
    Which of the following features can be used to enable this custom action?`,
  answers:  { 
         a: "Auto Scaling group lifecycle hook",
         b:"EC2 instance meta data",
         c:"EC2 instance user data",
         d:"Auto Scaling group scheduled action"
  },
  correctAnswer:"a",
  explanation:`
  Auto Scaling group lifecycle hook

An Auto Scaling group contains a collection of Amazon EC2 
instances that are treated as a logical grouping for automatic scaling and management.

Auto Scaling group lifecycle hooks enable you to perform custom actions as 
the Auto Scaling group launches or terminates instances.
 Lifecycle hooks enable you to perform custom actions by 
 pausing instances as an Auto Scaling group launches or terminates them.
  For example, you could install or configure software on newly launched instances,
  or download log files from an instance before it terminates.

How lifecycle hooks work: via - https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html

Incorrect options:

EC2 instance meta data - 
EC2 instance metadata is data about your instance that you can use to configure or manage the running instance. 
You cannot use EC2 instance metadata to download log files whenever 
an instance terminates because of a scale-in event from an auto-scaling policy.

EC2 instance user data - 
EC2 instance user data is the data that you specified in the form of a 
configuration script while launching your instance. You cannot use EC2 instance 
user data to download log files whenever an instance terminates 
because of a scale-in event from an auto-scaling policy.

Auto Scaling group scheduled action - 
To configure your Auto Scaling group to scale based on a schedule, you create a scheduled action. 
The scheduled action tells Amazon EC2 Auto Scaling to perform a scaling action at specified times.
You cannot use scheduled action to download log files whenever an instance terminates 
because of a scale-in event from an auto-scaling policy.

Reference:

https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html

  `
  },
  {
     question: `A cybersecurity company uses a fleet of EC2 instances to run a proprietary application.
      The infrastructure maintenance group at the company wants to be notified 
      via an email whenever the CPU utilization for any of the EC2 instances breaches a certain threshold.
      Which of the following services would you use for building a 
      solution with the LEAST amount of development effort? (Select two)`,
  answers:  { 
        d:  "Amazon SNS and Amazon CloudWatch",
        a:"AWS Lambda",
        b:"Amazon SQS",
        c:"AWS Step Functions"
     },
     correctAnswer:"d",
     explanation:`
     Correct options:

Amazon SNS - Amazon Simple Notification Service (SNS) is a highly available,
 durable, secure, fully managed pub/sub messaging service that enables you to decouple microservices,
  distributed systems, and serverless applications.
   Amazon SNS provides topics for high-throughput, push-based, many-to-many messaging.

Amazon CloudWatch - 
Amazon CloudWatch is a monitoring and observability service built for DevOps engineers, 
developers, site reliability engineers (SREs), and IT managers. 
CloudWatch provides you with data and actionable insights to monitor 
your applications, respond to system-wide performance changes, optimize resource utilization,
 and get a unified view of operational health. 
 Amazon CloudWatch allows you to monitor AWS cloud resources and the applications you run on AWS.

You can use CloudWatch Alarms to send an email via SNS whenever any of
 the EC2 instances breaches a certain threshold. Hence both these options are correct.

Incorrect options:

AWS Lambda - With AWS Lambda, you can run code without provisioning or managing servers.
 You pay only for the compute time that you consume—there’s no charge when your code isn’t running. 
 You can run code for virtually any type of application or backend service—all with zero administration. 
 You cannot use AWS Lambda to monitor CPU utilization of EC2 instances or send notification emails,
  hence this option is incorrect.

Amazon SQS - Amazon SQS Standard offers a reliable,
 highly scalable hosted queue for storing messages as they travel between computers.
  Amazon SQS lets you easily move data between distributed application components
   and helps you build applications in which messages are
   processed independently (with message-level ack/fail semantics), such as automated workflows. 
   You cannot use SQS to monitor CPU utilization of EC2 instances or send notification emails, 
   hence this option is incorrect.

AWS Step Functions - 
AWS Step Functions lets you coordinate multiple AWS services into serverless workflows
 so you can build and update apps quickly. Using Step Functions, 
 you can design and run workflows that stitch together services, 
 such as AWS Lambda, AWS Fargate, and Amazon SageMaker, into feature-rich applications.
 You cannot use Step Functions to monitor CPU utilization of EC2 instances or 
 send notification emails, hence this option is incorrect.

References:

https://aws.amazon.com/cloudwatch/faqs/

https://aws.amazon.com/sns/

     `
  },
  {
     question: `An organization wants to delegate access to a set of users from the development environment 
     so that they can access some resources in the production environment which is managed under another AWS account.
     As a solutions architect, which of the following steps would you recommend?`,
    answers: { 
       c:"Create a new IAM role with the required permissions to access the resources in the production environment. The users can then assume this IAM role while accessing the resources from the production environment",
       b:"Create new IAM user credentials for the production environment and share these credentials with the set of users from the development environment",
       a:"It is not possible to access cross-account resources",
       d:"Both IAM roles and IAM users can be used interchangeably for cross-account access",
    },
    correctAnswer:"c",
    explanation:`
    Correct option:

Create a new IAM role with the required permissions to access the resources in the production environment. 
The users can then assume this IAM role while accessing the resources from the production environment

IAM roles allow you to delegate access to users or services that normally don't have access
to your organization's AWS resources.
IAM users or AWS services can assume a role to obtain temporary security credentials
that can be used to make AWS API calls.
Consequently, you don't have to share long-term credentials for access to a resource. 
Using IAM roles, it is possible to access cross-account resources.

Incorrect options:

Create new IAM user credentials for the production environment and 
share these credentials with the set of users from the development environment - 
There is no need to create new IAM user credentials for the production environment, 
as you can use IAM roles to access cross-account resources.

It is not possible to access cross-account resources - 
You can use IAM roles to access cross-account resources.

Both IAM roles and IAM users can be used interchangeably for cross-account access - 
IAM roles and IAM users are separate IAM entities and should not be mixed. 
Only IAM roles can be used to access cross-account resources.

Reference:

https://aws.amazon.com/iam/features/manage-roles/

    `
  },
  {
      question:`One of the largest Ed-tech platforms boasts of a 
learning-management system being used by more than 100 million users across the globe. 
Of late, the company has been finding it difficult to scale its business. 
That’s because the company’s most popular applications, including the learning-management system,
are hosted on more than 30 on-premises data centers throughout the world. 
The engineering team at the company wants to migrate to AWS Cloud and is currently
evaluating Amazon RDS as its main database. 
To ensure High Availability, the team wants to go for Multi-AZ deployment 
and they would like to understand what happens when the primary instance in Multi-AZ goes down.
As a Solutions Architect, which of the following will you identify as the outcome of the scenario?`,
   answers:   { 
         d: "The CNAME record will be updated to point to the standby DB",
         a:"The URL to access the database will change to the standby DB",
         b:"The application will be down until the primary database has recovered itself",
         c:"The application will be down until the primary database has recovered itself"
      },
      correctAnswer:"d",
      explanation:`
      Correct option:

The CNAME record will be updated to point to the standby DB -
 Amazon RDS provides high availability and failover support for DB instances using Multi-AZ deployments.
  Amazon RDS uses several different technologies to provide failover support. 
  Multi-AZ deployments for MariaDB, MySQL, Oracle, and PostgreSQL DB instances use Amazon's failover technology. 
  SQL Server DB instances use SQL Server Database Mirroring (DBM) or Always On Availability Groups (AGs).

In a Multi-AZ deployment, 
Amazon RDS automatically provisions and maintains a synchronous standby replica in a different Availability Zone.
 The primary DB instance is synchronously replicated across Availability Zones to
  a standby replica to provide data redundancy, eliminate I/O freezes, 
  and minimize latency spikes during system backups. Running a DB instance 
  with high availability can enhance availability during planned system maintenance, 
  and help protect your databases against DB instance failure and Availability Zone disruption.

Failover is automatically handled by Amazon RDS so that you
 can resume database operations as quickly as possible without administrative intervention. 
 When failing over, Amazon RDS simply flips the canonical name record (CNAME)
  for your DB instance to point at the standby, which is in turn promoted to become the new primary.
   Multi-AZ means the URL is the same, the failover is automated, 
   and the CNAME will automatically be updated to point to the standby database.

Incorrect options:

The URL to access the database will change to the standby DB - As discussed above, URL remains the same.

An email will be sent to the System Administrator asking for manual intervention - 
This option is incorrect and it has been added as a distractor.

The application will be down until the primary database has recovered itself - 
This option is incorrect and it has been added as a distractor.

References:

https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html

https://aws.amazon.com/rds/faqs/
`
      
      
  },
  {
     question: `A healthcare startup needs to enforce compliance 
     and regulatory guidelines for objects stored in Amazon S3. 
     One of the key requirements is to provide adequate protection against accidental deletion of objects. 
     As a solutions architect, what are your recommendations to address these guidelines? (Select two)`,
  answers:  { 
         c:"Enable versioning on the bucket and Enable MFA delete on the bucket",
         a:"Create an event trigger on deleting any S3 object. The event invokes an SNS notification via email to the IT manager",
         b:"Establish a process to get managerial approval for deleting S3 objects",
         d:"Change the configuration on AWS S3 console so that the user needs to provide additional confirmation while deleting any S3 object"
     },
     correctAnswer:"c",
     explanation:`
     Correct options:

Enable versioning on the bucket - 
Versioning is a means of keeping multiple variants of an object in the same bucket. 
You can use versioning to preserve, retrieve, and restore every 
version of every object stored in your Amazon S3 bucket. 
Versioning-enabled buckets enable you to recover objects from accidental deletion or overwrite.

For example:

If you overwrite an object, 
it results in a new object version in the bucket. 
You can always restore the previous version. 
If you delete an object, instead of removing it permanently, 
Amazon S3 inserts a delete marker, which becomes the current object version. 
You can always restore the previous version. Hence, this is the correct option.

Versioning Overview: via - https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html

Enable MFA delete on the bucket - 
To provide additional protection, multi-factor authentication (MFA) delete can be enabled. 
MFA delete requires secondary authentication to take place before objects can be
 permanently deleted from an Amazon S3 bucket. Hence, this is the correct option.

Incorrect options:

Create an event trigger on deleting any S3 object. 
The event invokes an SNS notification via email to the IT manager - 
Sending an event trigger after object deletion does not meet the objective 
of preventing object deletion by mistake because the object has already been deleted. 
So, this option is incorrect.

Establish a process to get managerial approval for deleting S3 objects - 
This option for getting managerial approval is just a distractor.

Change the configuration on AWS S3 console so that the user needs to provide 
additional confirmation while deleting any S3 object - 
There is no provision to set up S3 configuration to ask for additional confirmation before deleting an object. 
This option is incorrect.

References:

https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html

https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMFADelete.html

`
  },
  {
     question: `A Pharmaceuticals company has decided to move most of their IT infrastructure to AWS Cloud. 
     Some of the applications, however, will remain on their on-premises 
     data center to meet certain regulatory guidelines. 
     The company is looking for a scalable solution to 
     connect the on-premises applications to the ones on AWS Cloud.
     As a Solutions Architect, can you suggest the MOST optimal solution for this requirement?`,
   answers: { 
       a:   "Use AWS Transit Gateway to connect the Amazon VPCs to the on-premises networks",
       b:"Use Transit VPC Solution to connect the Amazon VPCs to the on-premises networks",
       c:"Partially meshed VPC peering can be used to connect the Amazon VPCs to the on-premises networks",
       d:"Fully meshed VPC peering can be used to connect the Amazon VPCs to the on-premises networks"
     },
     correctAnswer:"a",
     explanation:`
Use AWS Transit Gateway to connect the Amazon VPCs to the on-premises networks -
 The AWS Transit Gateway allows customers to connect their Amazon VPCs and their on-premises 
 networks to a single gateway.
 As your number of workloads running on AWS increases,
  you need to be able to scale your networks across multiple accounts and Amazon VPCs to keep up with the growth.
With AWS Transit Gateway, 
you only have to create and manage a single connection from the central gateway into each Amazon VPC,
 on-premises data center, or remote office across your network. 
 AWS Transit Gateway acts as a hub that controls how traffic is routed among all the connected networks, 
 which act like spokes. This hub and spoke model simplifies management and reduces
  operational costs because each network only has to connect to the Transit Gateway
 and not to every other network.

AWS Transit Gateway: via - https://aws.amazon.com/transit-gateway/

Incorrect options:

Use Transit VPC Solution to connect the Amazon VPCs to the on-premises networks - 
The Transit VPC can be used to enable connectivity between various VPC’s 
in different regions and customer data centers. 
You can use this to connect multiple VPCs that are geographically disparate 
and/or running in separate AWS accounts, to a common VPC that serves as a global network transit center. 
This network topology simplifies network management and minimizes the number of connections that you need to set up.

Transit VPC: via - https://aws.amazon.com/transit-gateway/

Transit VPC is not the right solution for this use-case as Transit Gateway
 provides several advantages over Transit VPC:
1. Transit Gateway abstracts away the complexity of maintaining VPN connections with hundreds of VPCs.
2. Transit Gateway removes the need to manage and scale EC2 based software appliances. 
   AWS is responsible for managing all resources needed to route traffic.
3. Transit Gateway removes the need to manage high availability by providing a highly
available and redundant Multi-AZ infrastructure.
 4. Transit Gateway improves bandwidth for inter-VPC communication to burst speeds of 50 Gbps per AZ. 
 5. Transit Gateway streamlines user costs to a simple per hour per/GB transferred model. 
 6. Transit Gateway decreases latency by removing EC2 proxies and the need for VPN encapsulation.

Partially meshed VPC peering can be used to connect the Amazon VPCs to the on-premises networks

Fully meshed VPC peering can be used to connect the Amazon VPCs to the on-premises networks

The simplest way to connect two VPCs is to use VPC Peering. 
In this setup, a connection enables full bidirectional connectivity between the VPCs. 
This peering connection is used to route traffic between the VPCs. 
VPCs across accounts and AWS Regions can also be peered together.
 VPC peering only incurs costs for traffic traveling over the connection (there is no hourly infrastructure fee).

VPC peering is point-to-point connectivity,
 and it does not support transitive routing.
If you are using VPC peering, on-premises connectivity (VPN and/or Direct Connect) must be made to each VPC. 
Resources in a VPC cannot reach on-premises using the hybrid connectivity of a peered VPC. 
VPC peering is best used when resources in one VPC must communicate with resources in another VPC,
the environment of both VPCs is controlled and secured,
and the number of VPCs to be connected is less than 10 
(to allow for the individual management of each connection). 
VPC peering offers the lowest overall cost when compared to other options for inter-VPC connectivity.

Network setup using VPC Peering: 
via - https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/vpc-peering.html

You cannot use VPC Peering to establish on-premises connectivity with AWS Cloud, 
so both these options are incorrect.

References:

https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/transit-gateway-vs-transit-vpc.html

https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/vpc-peering.html

     `
  },
  {
     question: `A profitable small business has been running their IT systems using the on-premises infrastructure. 
     With growing demand, the business is finding it difficult to manage the IT infrastructure,
      which is not their core competency. 
      The business plans to move to AWS Cloud, in light of their plans of extending 
      their operations to other countries.
      As a Solutions Architect, can you suggest a cost-effective, serverless solution for
       their flagship application that has both static and dynamic content as part of its core data model?`,
    answers: { 
         b: "Host the static content on Amazon S3 and use Lambda with DynamoDB for the serverless web application that handles dynamic content. Amazon CloudFront will sit in front of Lambda for distribution across diverse regions",
         c:"Host both the static and dynamic content of the web application on Amazon S3 and use Amazon CloudFront for distribution across diverse regions/countries",
         d:"Host the static content on Amazon S3 and use Amazon EC2 with RDS for generating the dynamic content. Amazon CloudFront can be configured in front of EC2 instance, to make global distribution easy",
         a:"Host both the static and dynamic content of the web application on Amazon EC2 with RDS as the database. Amazon CloudFront should be configured to distribute the content across geographically disperse regions"
     },
     correctAnswer:"b",
     explanation:`
     Correct option:

Host the static content on Amazon S3 and use Lambda with DynamoDB for the serverless web application 
that handles dynamic content. 
Amazon CloudFront will sit in front of Lambda for distribution across diverse regions - 
Lambda with DynamoDB is the right answer for a serverless solution. 
CloudFront will help in enhancing user experience by delivering content, 
across different geographic locations with low latency. 
Amazon S3 is a cost-effective and faster way of distributing static content for web applications.

Incorrect options:

Host both the static and dynamic content of the web application on Amazon S3 and 
use Amazon CloudFront for distribution across diverse regions/countries - 
S3 is not the right fit for hosting Dynamic content, so this option is incorrect.

Host the static content on Amazon S3 and use Amazon EC2 with RDS for generating the dynamic content. 
Amazon CloudFront can be configured in front of EC2 instance, 
to make global distribution easy - 
The company is looking for a serverless solution, 
and Amazon EC2 is not a serverless service as the EC2 instances have to be managed by AWS customers.

Host both the static and dynamic content of the web application on Amazon EC2 with RDS as the database. 
Amazon CloudFront should be configured to distribute the content across geographically disperse regions - 
This is a possible solution, but not a cost-effective or optimal one. 
Since static content can be cost-effectively managed on Amazon S3 and can be accessed 
and distributed faster when compared to fetching the content from the EC2 server.

Reference:

https://aws.amazon.com/blogs/networking-and-content-delivery/deliver-your-apps-dynamic-content-using-amazon-cloudfront-getting-started-template/

     `
  },
  {
     question: `An IT company has built a custom data warehousing solution for a retail organization
      by using Amazon Redshift. 
      As part of the cost optimizations, the company wants to move any historical data (any data older than a year)
       into S3, as the daily analytical reports consume data for just the last one year. 
       However the analysts want to retain the ability to cross-reference this historical 
       data along with the daily reports. 
       The company wants to develop a solution with the LEAST amount of effort and MINIMUM cost.
       As a solutions architect, which option would you recommend to facilitate this use-case?`,
  answers:  { 
         a: "Use Redshift Spectrum to create Redshift cluster tables pointing to the underlying historical data in S3. The analytics team can then query this historical data to cross-reference with the daily reports from Redshift",
         b:"Setup access to the historical data via Athena. The analytics team can run historical data queries on Athena and continue the daily reporting on Redshift. In case the reports need to be cross-referenced, the analytics team need to export these in flat files and then do further analysis",
         c:"Use Glue ETL job to load the S3 based historical data into Redshift. Once the ad-hoc queries are run for the historic data, it can be removed from Redshift",
         d:`
         Use the Redshift COPY command to load the S3 based historical data into Redshift. 
         Once the ad-hoc queries are run for the historic data, it can be removed from Redshift
         `
  },
  correctAnswer:"a",
  explanation:`
  Correct option:

Use Redshift Spectrum to create Redshift cluster tables pointing to the underlying historical data in S3. 
The analytics team can then query this historical data to cross-reference with the daily reports from Redshift

Amazon Redshift is a fully-managed petabyte-scale cloud-based data warehouse product 
designed for large scale data set storage and analysis.

Using Amazon Redshift Spectrum, you can efficiently query and retrieve structured and semistructured data 
from files in Amazon S3 without having to load the data into Amazon Redshift tables.
 Amazon Redshift Spectrum resides on dedicated Amazon Redshift servers that are independent of your cluster. 
 Redshift Spectrum pushes many compute-intensive tasks, such as predicate filtering and aggregation, 
 down to the Redshift Spectrum layer. 
 Thus, Redshift Spectrum queries use much less of your cluster's processing capacity than other queries.

Redshift Spectrum Overview via - https://aws.amazon.com/blogs/big-data/amazon-redshift-spectrum-extends-data-warehousing-out-to-exabytes-no-loading-required/

Incorrect options:

Setup access to the historical data via Athena. 
The analytics team can run historical data queries on Athena and continue the daily reporting on Redshift. 
In case the reports need to be cross-referenced, the analytics team need to export these 
in flat files and then do further analysis Amazon Athena is an interactive query 
service that makes it easy to analyze data directly in Amazon S3 using standard SQL.
 Athena is serverless, so there is no infrastructure to set up or manage, 
 and customers pay only for the queries they run. 
 You can use Athena to process logs, perform ad-hoc analysis, and run interactive queries. 
 Providing access to historical data via Athena would mean that historical 
 data reconciliation would become difficult as the daily report would still be produced via Redshift. 
 Such a setup is cumbersome to maintain on a day to day basis. Hence the option to use Athena is ruled out.

Use the Redshift COPY command to load the S3 based historical data into Redshift. 
Once the ad-hoc queries are run for the historic data, it can be removed from Redshift

Use Glue ETL job to load the S3 based historical data into Redshift. 
Once the ad-hoc queries are run for the historic data, it can be removed from Redshift

Loading historical data into Redshift via COPY command or Glue ETL job would cost
 heavy for a one-time ad-hoc process. The same result can be achieved 
 more cost-efficiently by using Redshift Spectrum. 
 Therefore both these options to load historical data into Redshift are also incorrect for the given use-case.

References:

https://docs.aws.amazon.com/redshift/latest/dg/c-using-spectrum.html#c-spectrum-overview https://aws.amazon.com/blogs/big-data/

amazon-redshift-spectrum-extends-data-warehousing-out-to-exabytes-no-loading-required/

  
  `
  },
  {
    question:  `A social photo-sharing web application is hosted on EC2 instances behind an Elastic Load Balancer. 
    The app gives the users the ability to upload their photos and also shows a leaderboard on the homepage of 
    the app. The uploaded photos are stored in S3 and the leaderboard data is maintained in DynamoDB. 
    The EC2 instances need to access both S3 and DynamoDB for these features.As a solutions architect,
     which of the following solutions would you recommend as the MOST secure option?`,
   answers: { 
         c: "Attach the appropriate IAM role to the EC2 instance profile so that the instance can access S3 and DynamoDB",
         a: "Save the AWS credentials (access key Id and secret access token) in a configuration file within the application code on the EC2 instances. EC2 instances can use these credentials to access S3 and DynamoDB",
         b: "Configure AWS CLI on the EC2 instances using a valid IAM user's credentials. The application code can then invoke shell scripts to access S3 and DynamoDB via AWS CLI,",
         d: "Encrypt the AWS credentials via a custom encryption library and save it in a secret directory on the EC2 instances. The application code can then safely decrypt the AWS credentials to make the API calls to S3 and DynamoDB"
 },
 correctAnswer:"c",
 explanation:`
 Correct option:

Attach the appropriate IAM role to the EC2 instance profile so that the instance can access S3 and DynamoDB

Applications that run on an EC2 instance must include AWS credentials in their AWS API requests. 
You could have your developers store AWS credentials directly within the EC2 instance and 
allow applications in that instance to use those credentials. 
But developers would then have to manage the credentials and
 ensure that they securely pass the credentials to each instance
  and update each EC2 instance when it's time to rotate the credentials.

Instead, you should use an IAM role to manage temporary credentials for applications that run on an EC2 instance.
 When you use a role, you don't have 
 to distribute long-term credentials (such as a username and password or access keys) to an EC2 instance. 
 The role supplies temporary permissions that applications can use when they make calls to other AWS resources. When you launch an EC2 instance, you specify an IAM role to associate with the instance. Applications that run on the instance can then use the role-supplied temporary credentials to sign API requests. Therefore, this option is correct.

via - https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html

Incorrect options:

Save the AWS credentials (access key Id and secret access token) 
in a configuration file within the application code on the EC2 instances. 
EC2 instances can use these credentials to access S3 and DynamoDB

Configure AWS CLI on the EC2 instances using a valid IAM user's credentials. 
The application code can then invoke shell scripts to access S3 and DynamoDB via AWS CLI

Encrypt the AWS credentials via a custom encryption library and save it in a secret directory on the EC2 instances.
 The application code can then safely decrypt the AWS credentials to make the API calls to S3 and DynamoDB

Keeping the AWS credentials (encrypted or plain text) on the EC2 instance is a bad security practice,
 therefore these three options using the AWS credentials are incorrect.

Reference:

https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html

 `

  },
  {
     question: `A leading social media analytics company is contemplating 
     moving its dockerized application stack into AWS Cloud. 
     The company is not sure about the pricing for using Elastic Container Service (ECS) 
     with the EC2 launch type compared to the Elastic Container Service (ECS) with the Fargate launch type.
     Which of the following is correct regarding the pricing for these two services?`,
  answers:   { 
        d:  "ECS with EC2 launch type is charged based on EC2 instances and EBS volumes used. ECS with Fargate launch type is charged based on vCPU and memory resources that the containerized application requests",
        a:"Both ECS with EC2 launch type and ECS with Fargate launch type are charged based on vCPU and memory resources that the containerized application requests",
        b:"Both ECS with EC2 launch type and ECS with Fargate launch type are charged based on EC2 instances and EBS volumes used",
        c:"Both ECS with EC2 launch type and ECS with Fargate launch type are just charged based on Elastic Container Service used per hour"
     },
     correctAnswer:"d",
     explanation:`
     Correct option:

ECS with EC2 launch type is charged based on EC2 instances and EBS volumes used. 
ECS with Fargate launch type is charged based on vCPU and memory resources that the
containerized application requests

Amazon Elastic Container Service (Amazon ECS) is a fully managed container orchestration service.
ECS allows you to easily run, scale, and secure Docker container applications on AWS.

ECS Overview: via - https://aws.amazon.com/ecs/

With the Fargate launch type, 
you pay for the amount of vCPU and memory resources that your containerized application requests. 
vCPU and memory resources are calculated from the time your container images are pulled 
until the Amazon ECS Task* terminates, rounded up to the nearest second.
 With the EC2 launch type, there is no additional charge for the EC2 launch type.
  You pay for AWS resources (e.g. EC2 instances or EBS volumes) you create to store and run your application.

Incorrect options:

Both ECS with EC2 launch type and ECS with Fargate launch type are charged 
based on vCPU and memory resources that the containerized application requests

Both ECS with EC2 launch type and ECS with Fargate launch type are charged based
 on EC2 instances and EBS volumes used

As mentioned above - with the Fargate launch type, 
you pay for the amount of vCPU and memory resources. 
With EC2 launch type, you pay for AWS resources (e.g. EC2 instances or EBS volumes). 
Hence both these options are incorrect.

Both ECS with EC2 launch type and ECS with Fargate launch type are just 
charged based on Elastic Container Service used per hour

This is a made-up option and has been added as a distractor.

References:

https://aws.amazon.com/ecs/pricing/

     `

  },
//   {
//       "A leading social media analytics company is contemplating moving its dockerized application stack into AWS Cloud. The company is not sure about the pricing for using Elastic Container Service (ECS) with the EC2 launch type compared to the Elastic Container Service (ECS) with the Fargate launch type. Which of the following is correct regarding the pricing for these two services?":[
//           "ECS with EC2 launch type is charged based on EC2 instances and EBS volumes used. ECS with Fargate launch type is charged based on vCPU and memory resources that the containerized application requests","Both ECS with EC2 launch type and ECS with Fargate launch type are charged based on vCPU and memory resources that the containerized application requests","Both ECS with EC2 launch type and ECS with Fargate launch type are charged based on EC2 instances and EBS volumes used","Both ECS with EC2 launch type and ECS with Fargate launch type are just charged based on Elastic Container Service used per hour"
//       ]
//   },
  {
     question: `An e-commerce company is looking for a highly available architecture
      to migrate their flagship application which is planned to be hosted on a fleet of Amazon EC2 instances. 
      The company is also looking at facilitating content-based routing in its architecture.
      As a Solutions Architect, which of the following will you suggest for the company?`,
  answers:  { 
         a: "Use an Application Load Balancer for distributing traffic to the EC2 instances spread across different Availability Zones. Configure Auto Scaling group to mask any failure of an instance",
         b: "Use a Network Load Balancer for distributing traffic to the EC2 instances spread across different Availability Zones. Configure a Private IP address to mask any failure of an instance",
         c: "Use an Auto Scaling group for distributing traffic to the EC2 instances spread across different Availability Zones. Configure an Elastic IP address to mask any failure of an instance",
         d: "Use an Auto Scaling group for distributing traffic to the EC2 instances spread across different Availability Zones. Configure a Public IP address to mask any failure of an instance"
  },
  correctAnswer:"a",
  explanation:`
  Correct option:

Use an Application Load Balancer for distributing traffic to the EC2 instances spread 
across different Availability Zones. 
Configure Auto Scaling group to mask any failure of an instance

The Application Load Balancer (ALB) is best suited for 
load balancing HTTP and HTTPS traffic and provides advanced
 request routing targeted at the delivery of modern application architectures,
  including microservices and containers. 
  Operating at the individual request level (Layer 7), 
  the Application Load Balancer routes traffic to targets within 
  Amazon Virtual Private Cloud (Amazon VPC) based on the content of the request.

This is the correct option since the question has a specific requirement 
for content-based routing which can be configured via the Application Load Balancer. 
Different AZs provide high availability to the overall architecture 
and Auto Scaling group will help mask any instance failures.

More info on Application Load Balancer: via - https://aws.amazon.com/blogs/aws/new-aws-application-load-balancer/

Incorrect options:

Use a Network Load Balancer for distributing traffic to the EC2 
instances spread across different Availability Zones.
 Configure a Private IP address to mask any failure of an instance -
 Network Load Balancer cannot facilitate content-based routing so this option is incorrect.

Use an Auto Scaling group for distributing traffic to the EC2 instances spread across different Availability Zones.
 Configure an Elastic IP address to mask any failure of an instance

Use an Auto Scaling group for distributing traffic to the EC2 instances spread across different Availability Zones.
 Configure a Public IP address to mask any failure of an instance

Both these options are incorrect as you cannot use
 the Auto Scaling group to distribute traffic to the EC2 instances.

An Elastic IP address is a static, public, IPv4 address allocated to your AWS account. With an Elastic IP address, you can mask the failure of an instance or software by rapidly remapping the address to another instance in your account. Elastic IPs do not change and remain allocated to your account until you delete them.

More info on Elastic Load Balancer: 
via - https://docs.aws.amazon.com/whitepapers/latest/fault-tolerant-components/fault-tolerant-components.pdf

You can span your Auto Scaling group across multiple Availability Zones 
within a Region and then attaching a load balancer to distribute incoming traffic across those zones.

via - https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-availability-zone.html

References:

https://aws.amazon.com/blogs/aws/new-aws-application-load-balancer/

https://docs.aws.amazon.com/whitepapers/latest/fault-tolerant-components/fault-tolerant-components.pdf

https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-availability-zone.html

`
  },
  {
     question: `A medium-sized business has a taxi dispatch application deployed on an EC2 instance. 
     Because of an unknown bug, the application causes the instance to freeze regularly.
      Then, the instance has to be manually restarted via the AWS management console.
      Which of the following is the MOST cost-optimal and resource-efficient way 
      to implement an automated solution until a permanent fix is delivered by the development team?`,
   answers:  { 
        b:  "Setup a CloudWatch alarm to monitor the health status of the instance. In case of an Instance Health Check failure, an EC2 Reboot CloudWatch Alarm Action can be used to reboot the instance",
        a:  "Use CloudWatch events to trigger a Lambda function to check the instance status every 5 minutes. In the case of Instance Health Check failure, the lambda function can use AWS EC2 API to reboot the instance",
        c:  "Use CloudWatch events to trigger a Lambda function to reboot the instance status every 5 minutes",
        d: "Use CloudWatch events to trigger a Lambda function to reboot the instance status every 5 minutes"
     },
     correctAnswer:"b",
     explanation:`
     Correct option:

Setup a CloudWatch alarm to monitor the health status of the instance.
 In case of an Instance Health Check failure, 
 an EC2 Reboot CloudWatch Alarm Action can be used to reboot the instance

Using Amazon CloudWatch alarm actions,
 you can create alarms that automatically stop,
  terminate, reboot, or recover your EC2 instances. 
  You can use the stop or terminate actions to help you save money when you no longer need an instance to be running. 
  You can use the reboot and recover actions to automatically reboot those instances or recover them onto new hardware if a system impairment occurs.

You can create an Amazon CloudWatch alarm that monitors 
an Amazon EC2 instance and automatically reboots the instance. 
The reboot alarm action is recommended for Instance Health Check failures (as opposed to the recover alarm action,
 which is suited for System Health Check failures).

Incorrect options:

Setup a CloudWatch alarm to monitor the health status of the instance.
 In case of an Instance Health Check failure, 
 CloudWatch Alarm can publish to an SNS event which can then trigger a lambda function. 
 The lambda function can use AWS EC2 API to reboot the instance

Use CloudWatch events to trigger a Lambda function to check the instance status every 5 minutes.
 In the case of Instance Health Check failure, the lambda function can use AWS EC2 API to reboot the instance

Use CloudWatch events to trigger a Lambda function to reboot the instance status every 5 minutes

Using CloudWatch event or CloudWatch alarm to trigger a lambda function, 
directly or indirectly, is wasteful of resources. 
You should just use the EC2 Reboot CloudWatch Alarm Action to reboot the instance. 
So all the options that trigger the lambda function are incorrect.

Reference:

https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/UsingAlarmActions.html

`

  },
  {
     question: `A leading social media startup has developed a 
mobile app that allows users to create custom animated videos and share it with their friends.
The app has grown at a rate of 150% new users on a month by month basis over the last 1 year.
The startup is now moving to AWS Cloud to better manage the IT infrastructure and scale efficiently. 
The engineering team is evaluating various AWS services as part of the solution stack for the data store layer. 
The AWS service should be able to handle some complicated queries such as What are the number of likes on the videos that have been posted by friends of a user A?.
As a solutions architect, which of the following services would you recommend?`,
  answers:   { 
         c: "Amazon Neptune",
         a: "Amazon ElasticSearch",
         b: "Amazon Redshift",
         d: "Amazon Aurora"
  },
  correctAnswer:"c",
  explanation:`
  Correct option:

Amazon Neptune - Amazon Neptune is a fast, reliable, fully managed graph database service 
that makes it easy to build and run applications that work with highly connected datasets. 
The core of Amazon Neptune is a purpose-built, 
high-performance graph database engine optimized for storing billions of relationships 
and querying the graph with milliseconds latency. Neptune powers graph use cases such as recommendation engines, 
fraud detection, knowledge graphs, drug discovery, and network security.

Amazon Neptune is highly available, with read replicas, point-in-time recovery,
 continuous backup to Amazon S3, and replication across Availability Zones. 
 Neptune is secure with support for HTTPS encrypted client connections and encryption at rest.
  Neptune is fully managed, so you no longer need to worry about database management 
  tasks such as hardware provisioning, software patching, setup, configuration, or backups.

Amazon Neptune can quickly and easily process 
large sets of user-profiles and interactions to build social networking applications.
 Neptune enables highly interactive graph queries with high throughput 
 to bring social features into your applications. For example, 
 if you are building a social feed into your application, you can use 
 Neptune to provide results that prioritize showing your users the latest updates from their family,
  from friends whose updates they ‘Like,’ and from friends who live close to them.

Social Networking example with Neptune: via - https://aws.amazon.com/neptune/

Identity graphs example with Neptune: via - https://aws.amazon.com/neptune/

Incorrect options:

Amazon ElasticSearch -
 Elasticsearch is a search engine based on the Lucene library.
  Amazon Elasticsearch Service is a fully managed service that makes it easy for you to deploy,
   secure, and run Elasticsearch cost-effectively at scale. 
   You can build, monitor, and troubleshoot your applications using the tools you love, at the scale you need. 
   The service provides support for open-source Elasticsearch APIs, 
   managed Kibana, integration with Logstash and other AWS services, and built-in alerting and SQL querying.

Amazon Redshift - Amazon Redshift is a fully-managed petabyte-scale cloud-based data 
warehouse product designed for large scale data set storage and analysis. 
The given use-case is not about data warehousing, so this is not a correct option.

Amazon Aurora - Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud,
 that combines the performance and availability of traditional enterprise databases
  with the simplicity and cost-effectiveness of open source databases. 
  Amazon Aurora features a distributed, fault-tolerant, 
  self-healing storage system that auto-scales up to 64TB per database instance. 
  Aurora is not an in-memory database. Here, we need a graph database 
  due to the highly connected datasets and queries, therefore Neptune is the best answer

Reference:

https://aws.amazon.com/neptune/

  `
  },
  {
     question: `A social media company manages its flagship application on an EC2 
     server fleet running behind an Application Load Balancer and the traffic is fronted 
     by a CloudFront distribution. 
     The engineering team wants to decouple the user authentication process 
     for the application so that the application servers can just focus on the business logic.
     As a Solutions Architect, which of the following solutions would you recommend 
     to the development team so that it requires minimal development effort?`,
  answers:  { 
          a:"Use Cognito Authentication via Cognito User Pools for your Application Load Balancer",
         b: "Use Cognito Authentication via Cognito Identity Pools for your Application Load Balancer",
         c: "Use Cognito Authentication via Cognito User Pools for your CloudFront distribution",
         d: "Use Cognito Authentication via Cognito Identity Pools for your CloudFront distribution"
     },
     correctAnswer:"a",
     explanation:`
     Correct option:

Use Cognito Authentication via Cognito User Pools for your Application Load Balancer

Application Load Balancer can be used to securely authenticate users for accessing your applications. 
This enables you to offload the work of authenticating users to your load balancer 
so that your applications can focus on their business logic. 
You can use Cognito User Pools to authenticate users through well-known social IdPs, such as Amazon, Facebook,
 or Google, through the user pools supported by Amazon Cognito or through corporate identities, 
 using SAML, LDAP, or Microsoft AD, through the user pools supported by Amazon Cognito. 
 You configure user authentication by creating an authenticate action for one or more listener rules.

via - https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.html

Exam Alert:

Please review the following note to understand the differences between Cognito User Pools 
and Cognito Identity Pools: 
via - https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html

Incorrect options:

Use Cognito Authentication via Cognito Identity Pools for your Application Load Balancer -
 There is no such thing as using Cognito Authentication via 
 Cognito Identity Pools for managing user authentication for the application. 
 Application-specific user authentication can be provided via Cognito User Pools. 
 Amazon Cognito identity pools provide temporary AWS credentials for users who are 
 guests (unauthenticated) and for users who have been authenticated and received a token.

Use Cognito Authentication via Cognito User Pools for your CloudFront distribution - You cannot directly integrate Cognito User Pools with CloudFront distribution as you have to create a separate Lambda@Edge function to accomplish the authentication via Cognito User Pools. This involves additional development effort, so this option is not the best fit for the given use-case.

Use Cognito Authentication via Cognito Identity Pools for your CloudFront distribution -
 You cannot use Cognito Identity Pools for managing user authentication, so this option is not correct.

References:

https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.html

https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html

https://aws.amazon.com/blogs/networking-and-content-delivery/authorizationedge-using-cookies-protect-your-amazon-cloudfront-content-from-being-downloaded-by-unauthenticated-users/

     `
  },
  {
     question: `A chip design startup is running an Electronic Design Automation (EDA) application,
      which is a high-performance workflow used to simulate performance and
       failures during the design phase of silicon chip production. 
       The application produces massive volumes of data that can be divided into two categories. 
       The 'hot data' needs to be both processed and stored quickly in a parallel and distributed fashion. 
       The 'cold data' needs to be kept for reference with quick access for reads and updates at a low cost.
       Which of the following AWS services is BEST suited to accelerate the aforementioned chip design process?`,
  answers:  { 
         a: "Amazon FSx for Lustre",
         b: "Amazon FSx for Windows File Server",
         c: "Amazon EMR",
          d:"AWS Glue"
     },
     correctAnswer:"a",
     explanation:`
     Correct option:

Amazon FSx for Lustre

Amazon FSx for Lustre makes it easy and cost-effective to
 launch and run the world’s most popular high-performance file system. 
 It is used for workloads such as machine learning, high-performance computing (HPC),
  video processing, and financial modeling. 
  The open-source Lustre file system is designed for applications that require fast storage – 
  where you want your storage to keep up with your compute.
   FSx for Lustre integrates with Amazon S3, making it easy to process data sets with the Lustre file system.
    When linked to an S3 bucket, an FSx for Lustre file system
    transparently presents S3 objects as files and allows you to write changed data back to S3.

FSx for Lustre provides the ability to both process
 the 'hot data' in a parallel and distributed fashion as well as easily store the 'cold data' on Amazon S3. 
 Therefore this option is the BEST fit for the given problem statement.

Incorrect options:

Amazon FSx for Windows File Server - 
Amazon FSx for Windows File Server provides fully managed, 
highly reliable file storage that is accessible over the industry-standard Service Message Block (SMB) protocol.
 It is built on Windows Server, delivering a wide range of administrative features such as user quotas, 
 end-user file restore, and Microsoft Active Directory (AD) integration. 
 FSx for Windows does not allow you to present S3 objects as files and 
 does not allow you to write changed data back to S3. 
 Therefore you cannot reference the "cold data" with quick access for reads and updates at low cost. 
 Hence this option is not correct.

Amazon EMR - Amazon EMR is the industry-leading cloud big data platform for 
processing vast amounts of data using open source tools such as Apache Spark,
 Apache Hive, Apache HBase, Apache Flink, Apache Hudi, and Presto.
  Amazon EMR uses Hadoop, an open-source framework,
   to distribute your data and processing across a resizable cluster of Amazon EC2 instances.
    EMR does not offer the same storage and processing speed as FSx for Lustre. 
    So it is not the right fit for the given high-performance workflow scenario.

AWS Glue - AWS Glue is a fully managed extract, transform,
and load (ETL) service that makes it easy for customers to prepare and load their data for analytics. 
AWS Glue job is meant to be used for batch ETL data processing. 
AWS Glue does not offer the same storage and processing speed as FSx for Lustre. 
So it is not the right fit for the given high-performance workflow scenario.

References:

https://aws.amazon.com/fsx/lustre/

https://aws.amazon.com/fsx/windows/faqs/

     `
  },
  {
     question: `The CTO at an IT company wants to move away from license-based, expensive,
      and legacy commercial database solutions deployed at the on-premises data center to more efficient, 
      open-source, and cost-effective options on AWS Cloud. 
      At the same time, the CTO is concerned about identifying 
      areas for data-conversion that require special attention during 
      migration since the on-premises databases have multiple active complex 
      configurations such as secondary indexes, foreign keys, and stored procedures.
      As a solutions architect, which of the following AWS services would you recommend 
      being used for this solution (Select two)?`,
   answers:  { 
        a:  "AWS Schema Conversion Tool and AWS Database Migration Service",
         b: "AWS Snowball Edge",
         c: "AWS Glue",
          d:   'Basic Schema Copy'
     }, 
     correctAnswer:"a",
     explanation:`

     Correct options:

AWS Schema Conversion Tool

AWS Database Migration Service

AWS Database Migration Service helps you migrate databases to AWS quickly and securely. 
The source database remains fully operational during the migration,
 minimizing downtime to applications that rely on the database.
  AWS Database Migration Service supports homogeneous migrations such as Oracle to Oracle, 
  as well as heterogeneous migrations between different database platforms,
  such as Oracle or Microsoft SQL Server to Amazon Aurora.

Given the use-case where the CTO at the company wants to move away from license-based expensive, 
legacy commercial database solutions deployed at the on-premises data center to more efficient, 
open-source, and cost-effective options on AWS Cloud, this is an example of heterogeneous database migrations.

For such a scenario, the source and target databases engines are different, 
like in the case of Oracle to Amazon Aurora, Oracle to PostgreSQL, 
or Microsoft SQL Server to MySQL migrations. 
In this case, the schema structure, data types, and database code of source 
and target databases can be quite different, 
requiring a schema and code transformation before the data migration starts.

That makes heterogeneous migrations a two-step process.
 First use the AWS Schema Conversion Tool to convert the source
  schema and code to match that of the target database, 
  and then use the AWS Database Migration Service to migrate
   data from the source database to the target database. 
   All the required data type conversions will automatically 
   be done by the AWS Database Migration Service during the migration. 
   The source database can be located on your on-premises environment outside of AWS,
    running on an Amazon EC2 instance, or it can be an Amazon RDS database. 
    The target can be a database in Amazon EC2 or Amazon RDS.

Heterogeneous Database Migrations via - https://aws.amazon.com/dms/

Incorrect options:

AWS Snowball Edge - 
Snowball Edge Storage Optimized is the optimal choice 
if you need to securely and quickly transfer dozens of terabytes to petabytes of data to AWS. 
It provides up to 80 TB of usable HDD storage, 40 vCPUs, 1 TB of SATA SSD storage, 
and up to 40 Gb network connectivity to address large scale data transfer and pre-processing use cases.
As each Snowball Edge Storage Optimized device can handle 80TB of data, 
you can order 10 such devices to take care of the data transfer for all applications. 
The original Snowball devices were transitioned out of service and Snowball Edge Storage Optimized are
 now the primary devices used for data transfer. You may see the Snowball device on the exam, 
 just remember that the original Snowball device had 80TB of storage space.

AWS Snowball Edge is suitable for offline data transfers, for customers who
 are bandwidth constrained or transferring data from remote, disconnected, or austere environments. 
 Therefore, it cannot be used for database migrations.

AWS Glue - AWS Glue is a fully managed extract, transform,
 and load (ETL) service that makes it easy for customers
  to prepare and load their data for analytics. AWS Glue job is meant to be used for batch ETL data processing. 
  Therefore, it cannot be used for database migrations.

Basic Schema Copy - To quickly migrate a database schema to your target instance
 you can rely on the Basic Schema Copy feature of AWS Database Migration Service.
  Basic Schema Copy will automatically create tables and primary keys 
  in the target instance if the target does not already contain tables with the same names. 
  Basic Schema Copy is great for doing a test migration, 
  or when you are migrating databases heterogeneously e.g. 
  Oracle to MySQL or SQL Server to Oracle. Basic Schema Copy 
  will not migrate secondary indexes, foreign keys or stored procedures. 
  When you need to use a more customizable schema 
  migration process (e.g. when you are migrating your
     production database and need to move your stored procedures and secondary database objects),
      you must use the AWS Schema Conversion Tool.

References:

https://aws.amazon.com/dms/

https://aws.amazon.com/dms/faqs/

https://aws.amazon.com/dms/schema-conversion-tool/

     
     `    
     
  },
  {
   question:   `An IT company has an Access Control Management (ACM) application 
   that uses Amazon RDS for MySQL but is running into performance issues despite using Read Replicas.
    The company has hired you as a solutions architect to address these performance-related challenges 
    on an urgent basis without moving away from the underlying relational database schema.
     The company has branch offices across the world, and it needs the solution to work on a global scale.
     Which of the following will you recommend as the MOST cost-effective and high-performance solution?`,
 answers:  { 
         d: "Use Amazon Aurora Global Database to enable fast local reads with low latency in each region",
         a: "Use Amazon DynamoDB Global Tables to provide fast, local, read and write performance in each region",
         b: "Spin up a Redshift cluster in each AWS region. Migrate the existing data into Redshift clusters ",
         c: "Spin up EC2 instances in each AWS region, install MySQL databases and migrate the existing data into these new databases"
   },
   correctAnswer:"d",
   explanation:`
   Correct option:

Use Amazon Aurora Global Database to enable fast local reads with low latency in each region

Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud, 
that combines the performance and availability of traditional 
enterprise databases with the simplicity and cost-effectiveness of open source databases. 
Amazon Aurora features a distributed, fault-tolerant, 
self-healing storage system that auto-scales up to 64TB per database instance. 
Aurora is not an in-memory database.

Amazon Aurora Global Database is designed for globally distributed applications, 
allowing a single Amazon Aurora database to span multiple AWS regions. 
It replicates your data with no impact on database performance, 
enables fast local reads with low latency in each region, and provides disaster recovery from region-wide outages. 
Amazon Aurora Global Database is the correct choice for the given use-case.

Amazon Aurora Global Database Features: via - https://aws.amazon.com/rds/aurora/global-database/

Incorrect options:

Use Amazon DynamoDB Global Tables to provide fast, local, read and write performance in each region -
 Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond 
 performance at any scale. 
 It's a fully managed, multi-region, multi-master, durable database with built-in security,
  backup and restore, and in-memory caching for internet-scale applications.

Global Tables builds upon DynamoDB’s global footprint to provide you with a fully managed,
 multi-region, and multi-master database that provides fast, local, read, and write performance for massively scaled, global applications. Global Tables replicates your Amazon DynamoDB tables automatically across your choice of AWS regions. Given that the use-case wants you to continue with the underlying schema of the relational database, DynamoDB is not the right choice as it's a NoSQL database.

DynamoDB Global Tables Overview: via - https://aws.amazon.com/dynamodb/global-tables/

Spin up a Redshift cluster in each AWS region. 
Migrate the existing data into Redshift clusters -
 Amazon Redshift is a fully-managed petabyte-scale cloud-based data warehouse 
 product designed for large scale data set storage and analysis. 
 Redshift is not suited to be used as a transactional relational database, so this option is not correct.

Spin up EC2 instances in each AWS region, 
install MySQL databases and migrate the existing data into these new databases - 
Setting up EC2 instances in multiple regions with manually managed MySQL databases 
represents a maintenance nightmare and is not the correct choice for this use-case.

References:

https://aws.amazon.com/rds/aurora/global-database/

https://aws.amazon.com/dynamodb/global-tables/
`
  },
  {
     question: `An IT company wants to review its security best-practices after 
     an incident was reported where a new developer on the team was assigned full access to DynamoDB.
      The developer accidentally deleted a couple of tables from the production environment
       while building out a new feature.Which is the MOST effective way to address
        this issue so that such incidents do not recur?`,
   answers:  { 
         c: "Use permissions boundary to control the maximum permissions employees can grant to the IAM principals",
         a: "Remove full database access for all IAM users in the organization",
         b: "Only root user should have full database access in the organization",
         d: "The CTO should review the permissions for each new developer's IAM user so that such incidents don't recur"
   },
   correctAnswer:"c",
   explanation:`
   Correct option:

Use permissions boundary to control the maximum permissions employees can grant to the IAM principals

A permissions boundary can be used to control the maximum permissions employees 
can grant to the IAM principals (that is, users and roles) that they create and manage.
 As the IAM administrator, you can define one or more permissions boundaries using 
 managed policies and allow your employee to create a principal with this boundary. 
 The employee can then attach a permissions policy to this principal. 
 However, the effective permissions of the principal are the intersection of 
 the permissions boundary and permissions policy. 
 As a result, the new principal cannot exceed the boundary that you defined. 
 Therefore, using the permissions boundary offers the right solution for this use-case.

Permission Boundary Example: via - https://aws.amazon.com/blogs/security/delegate-permission-management-to-developers-using-iam-permissions-boundaries/

Incorrect options:

Remove full database access for all IAM users in the organization -
 It is not practical to remove full access for all IAM users in the organization 
 because a select set of users need this access for database administration. So this option is not correct.

The CTO should review the permissions for each new developer's IAM user so that such incidents don't recur - 
Likewise the CTO is not expected to review the permissions for each new developer's IAM user, 
as this is best done via an automated procedure. This option has been added as a distractor.

Only root user should have full database access in the organization - 
As a best practice, the root user should not access the AWS account to carry out any administrative procedures. 
So this option is not correct.

Reference:

https://aws.amazon.com/blogs/security/delegate-permission-management-to-developers-using-iam-permissions-boundaries/

   `

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

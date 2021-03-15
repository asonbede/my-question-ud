[  
 
 {
        question: `
A DevOps Engineer is required to design a cloud architecture in AWS.
 The Engineer is planning to develop a highly available and fault-tolerant 
 architecture that is composed of an Elastic Load Balancer and an Auto Scaling group
  of EC2 instances deployed across multiple Availability Zones. 
This will be used by an online accounting application that requires path-based routing, 
host-based routing, and bi-directional communication channels using WebSockets.
Which is the most suitable type of Elastic Load Balancer that will satisfy the given requirement?
     `,
        answers: {
          a: " ",
          b: "",
          c: "",
          d: "Application Load Balancer",
        },
        correctAnswer: "d",
        explanation: `
        Elastic Load Balancing supports three types of load balancers. 
        You can select the appropriate load balancer based on your application needs.

        If you need flexible application management and TLS termination 
        then it is recommended to use Application Load Balancer. 
        If extreme performance and static IP is needed for your application then 
        it is recommend that you use Network Load Balancer. 
        If your application is built within the EC2 Classic network then
         you should use Classic Load Balancer.
        
        An Application Load Balancer functions at the application layer,
         the seventh layer of the Open Systems Interconnection (OSI) model.
          After the load balancer receives a request, 
          it evaluates the listener rules in priority order to determine which rule to apply, 
          and then selects a target from the target group for the rule action. 
          You can configure listener rules to route requests to different target groups
           based on the content of the application traffic. 
           Routing is performed independently for each target group,
            even when a target is registered with multiple target groups.
        
        Application Load Balancers support path-based routing, 
        host-based routing, and support for containerized applications hence, 
        Application Load Balancer is the correct answer.
        
        Network Load Balancer, Classic Load Balancer,
         and either a Classic Load Balancer or a Network Load Balancer 
         are all incorrect as none of these support path-based routing and host-based routing, 
         unlike an Application Load Balancer.
        
        
        References:
        
        https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html#application-load-balancer-benefits
        
        https://aws.amazon.com/elasticloadbalancing/faqs/
        
        
        Check out this AWS Elastic Load Balancing (ELB) Cheat Sheet:
        
        https://tutorialsdojo.com/aws-elastic-load-balancing-elb/
        
        
        Here is a deep dive on Elastic Load Balancing and Best Practices:
        
        https://youtu.be/VIgAT7vjol8
        
        
        Application Load Balancer vs Network Load Balancer vs Classic Load Balancer:
        
        https://tutorialsdojo.com/application-load-balancer-vs-network-load-balancer-vs-classic-load-balancer/
        
    
    `,
      },
      {
        question: `
A Data Engineer is working for a litigation firm for their case history application.
 The engineer needs to keep track of all the cases that the firm has handled. 
 The static assets like .jpg, .png, and .pdf files are stored in S3 for cost efficiency
  and high durability. As these files are critical to the business, 
  the engineer wants to keep track of what's happening in the S3 bucket. 
  The engineer found out that S3 has an event notification whenever
   a delete or write operation happens within the S3 bucket.

What are the possible Event Notification destinations available for S3 buckets? (Select TWO.)
     `,
        answers: {
          a: "Amazon Simple Notification Service (Amazon SNS) topic and AWS Lambda",
          b: "SES",
          c: "SWF",
          d: "Kinesis",
        },
        correctAnswer: "a",
        explanation: `
        The Amazon S3 notification feature enables you to receive notifications 
        when certain events happen in your bucket. 
        To enable notifications, you must first add a notification configuration 
        identifying the events you want Amazon S3 to publish, 
        and the destinations where you want Amazon S3 to send the event notifications.

        Amazon S3 supports the following destinations where it can publish events:
        
        Amazon Simple Notification Service (Amazon SNS) topic - 
        A web service that coordinates and manages the delivery or 
        sending of messages to subscribing endpoints or clients.
        
        Amazon Simple Queue Service (Amazon SQS) queue - 
        Offers reliable and scalable hosted queues for storing messages as they travel between computer.
        
        AWS Lambda - AWS Lambda is a compute service where 
        you can upload your code and the service can run the code on your behalf using the AWS infrastructure.
        You package up and upload your custom code to AWS Lambda when you create a Lambda function
        
        Kinesis is incorrect because this is used to collect, process, and analyze real-time, 
        streaming data so you can get timely insights and react quickly to new information, 
        and not used for event notifications. You have to use SNS, SQS or Lambda.
        
        SES is incorrect because this is mainly used for sending emails
         designed to help digital marketers and application developers send marketing, 
         notification, and transactional emails, and not for sending event notifications from S3.
          You have to use SNS, SQS or Lambda.
        
        SWF is incorrect because this is mainly used to build applications 
        that use Amazon's cloud to coordinate work across distributed components
         and not used as a way to trigger event notifications from S3. You have to use SNS, SQS or Lambda.
        
        Here’s what you need to do in order to start using this new feature with your application:
        
        Create the queue, topic, or Lambda function (which I’ll call the target for brevity) if necessary.
        
        Grant S3 permission to publish to the target or invoke the Lambda function.
         For SNS or SQS, you do this by applying an appropriate policy to the topic or the queue. 
         For Lambda, you must create and supply an IAM role, then associate it with the Lambda function.
        
        Arrange for your application to be invoked in response to activity on the target. 
        As you will see in a moment, you have several options here.
        
        Set the bucket’s Notification Configuration to point to the target.
        
        
        Reference:
        
        https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html
        
        
        Check out this Amazon S3 Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-s3/
        
        
        Tutorials Dojo's AWS Certified Solutions Architect Associate Exam Study Guide:
        
        https://tutorialsdojo.com/aws-certified-solutions-architect-associate/
        
        `,
      },
      
      {
        question: `
A company is running a custom application in an Auto Scaling group of Amazon EC2 instances.
Several instances are failing due to insufficient swap space.
The Solutions Architect has been instructed to troubleshoot the issue 
and effectively monitor the available swap space of each EC2 instance.
Which of the following options fulfills this requirement?
     `,
        answers: {
          a: "Install the CloudWatch agent on each instance and monitor the SwapUtilization metric",
          b: "Create a CloudWatch dashboard and monitor the SwapUsed metric",
          c: "Enable detailed monitoring on each instance and monitor the SwapUtilization metric",
          d: "Enable detailed monitoring on each instance and monitor the SwapUtilization metric",
        },
        correctAnswer: "a",
        explanation: `
        Amazon CloudWatch is a monitoring service for AWS cloud resources and the applications you run on AWS.
         You can use Amazon CloudWatch to collect and track metrics, collect and monitor log files, and set alarms. 
         Amazon CloudWatch can monitor AWS resources such as Amazon EC2 instances, 
         Amazon DynamoDB tables, and Amazon RDS DB instances, 
         as well as custom metrics generated by your applications and services,
          and any log files your applications generate. 
          You can use Amazon CloudWatch to gain system-wide visibility into resource utilization,
           application performance, and operational health.

        The main requirement in the scenario is to monitor the SwapUtilization metric.
         Take note that you can't use the default metrics of CloudWatch to monitor the SwapUtilization metric. 
         To monitor custom metrics, you must install the CloudWatch agent on the EC2 instance. 
         After installing the CloudWatch agent, you can now collect system metrics and log files of an EC2 instance.
        
        Hence, the correct answer is: 
        Install the CloudWatch agent on each instance and monitor the SwapUtilization metric.
        
        The option that says: 
        Enable detailed monitoring on each instance and monitor the SwapUtilization metric is
         incorrect because you can't monitor the SwapUtilization metric 
         by just enabling the detailed monitoring option.
          You must install the CloudWatch agent on the instance.
        
        The option that says: Create a CloudWatch dashboard and monitor the SwapUsed metric is incorrect 
        because you must install the CloudWatch agent first to add the custom metric in the dashboard.
        
        The option that says: Create a new trail in AWS CloudTrail and configure
         Amazon CloudWatch Logs to monitor your trail logs is incorrect 
         because CloudTrail won't help you monitor custom metrics. 
         CloudTrail is specifically used for monitoring API activities in an AWS account.
        
        
        References:
        
        https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/mon-scripts.html
        
        https://aws.amazon.com/cloudwatch/faqs/
        
        
        Check out this Amazon CloudWatch Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-cloudwatch/
    
    `,
      },
      
      {
        question: `
        An organization is currently using a tape backup solution to store its application data on-premises. 
        They plan to use a cloud storage service to preserve the backup data for up to 10 years that may be 
        accessed about once or twice a year.
        Which of the following is the most cost-effective option to implement this solution
     `,
        answers: {
          a: "Use AWS Storage Gateway to backup the data directly to Amazon S3 Glacier  ",
          b: "Use AWS Storage Gateway to backup the data directly to Amazon S3 Glacier Deep Archive.",
          c: "Order an AWS Snowball Edge appliance to import the backup directly to Amazon S3 Glacier",
          d: "Use Amazon S3 to store the backup data and add a lifecycle rule to transition the current version to Amazon S3 Glacier",
        },
        correctAnswer: "b",
        explanation: `
        Tape Gateway enables you to replace using physical tapes on-premises with virtual tapes 
        in AWS without changing existing backup workflows. 
        Tape Gateway supports all leading backup applications and caches
         virtual tapes on-premises for low-latency data access. 
         Tape Gateway encrypts data between the gateway and AWS for
          secure data transfer and compresses data and transitions virtual
           tapes between Amazon S3 and Amazon S3 Glacier, 
           or Amazon S3 Glacier Deep Archive, to minimize storage costs.

        The scenario requires you to backup your application data 
        to a cloud storage service for long-term retention of data that will be retained for 10 years. 
        Since it uses a tape backup solution, an option that uses AWS Storage Gateway must be the possible answer.
         Tape Gateway can move your virtual tapes archived in Amazon S3 Glacier or 
         Amazon S3 Glacier Deep Archive storage class, 
         enabling you to further reduce the monthly cost to store long-term data in the cloud by up to 75%.
        
        Hence, the correct answer is: 
        Use AWS Storage Gateway to backup the data directly to Amazon S3 Glacier Deep Archive.
        
        The option that says: 
        Use AWS Storage Gateway to backup the data directly to Amazon S3 Glacier is incorrect.
         Although this is a valid solution, moving to S3 Glacier
          is more expensive than directly backing it up to Glacier Deep Archive.
        
        The option that says: Order an AWS Snowball Edge appliance
         to import the backup directly to Amazon S3 Glacier is incorrect 
         because Snowball Edge can't directly integrate backups to S3 Glacier.
          Moreover, you have to use the Amazon S3 Glacier Deep Archive storage 
          class as it is more cost-effective than the regular Glacier class.
        
        The option that says: Use Amazon S3 to store the backup data and add a 
        lifecycle rule to transition the current version to Amazon S3 Glacier is incorrect.
         Although this is a possible solution, 
         it is difficult to directly integrate a tape backup solution to S3 without using Storage Gateway.
        
        
        References:
        
        https://aws.amazon.com/storagegateway/faqs/
        
        https://aws.amazon.com/s3/storage-classes/
        
        
        Check out this AWS Storage Gateway Cheat Sheet:
        
        https://tutorialsdojo.com/aws-storage-gateway/
        
    
    `,
      },
      
      {
        question: `
One member of your DevOps team consulted you about a connectivity problem in one of your Amazon EC2 instances. 
The application architecture is initially set up with four EC2 instances, 
each with an EIP address that all belong to a public non-default subnet. 
You launched another instance to handle the increasing workload of your application. 
The EC2 instances also belong to the same security group. 
Everything works well as expected except for one of the EC2 instances 
which is not able to send nor receive traffic over the Internet.

Which of the following is the MOST likely reason for this issue?


     `,
        answers: {
          a: "The route table is not properly configured to allow traffic to and from the Internet through the Internet gateway",
          b: "The EC2 instance is running in an Availability Zone that is not connected to an Internet gateway",
          c: " The route table is not properly configured to allow traffic to and from the Internet through the Internet gateway",
          d: "The EC2 instance does not have a public IP address associated with it.",
        },
        correctAnswer: "d",
        explanation: `
        IP addresses enable resources in your VPC to communicate with each other, 
        and with resources over the Internet. 
        Amazon EC2 and Amazon VPC support the IPv4 and IPv6 addressing protocols.

        By default, Amazon EC2 and Amazon VPC use the IPv4 addressing protocol.
         When you create a VPC, you must assign it an IPv4 CIDR block (a range of private IPv4 addresses).
          Private IPv4 addresses are not reachable over the Internet. 
          To connect to your instance over the Internet, 
          or to enable communication between your instances and other AWS services that have public endpoints,
           you can assign a globally-unique public IPv4 address to your instance.
        
        You can optionally associate an IPv6 CIDR block with your VPC and subnets, 
        and assign IPv6 addresses from that block to the resources in your VPC. 
        IPv6 addresses are public and reachable over the Internet.
        
        
        
        All subnets have a modifiable attribute that determines whether 
        a network interface created in that subnet is assigned a public IPv4 address and,
         if applicable, an IPv6 address. 
         This includes the primary network interface (eth0) that's created for
          an instance when you launch an instance in that subnet. 
          Regardless of the subnet attribute, you can still override this setting 
          for a specific instance during launch.
        
        By default, nondefault subnets have the IPv4 public addressing attribute set to false,
        and default subnets have this attribute set to true. 
        An exception is a nondefault subnet created by the Amazon EC2 launch instance wizard — 
        the wizard sets the attribute to true. You can modify this attribute using the Amazon VPC console.
        
        In this scenario, there are 5 EC2 instances that belong to 
        the same security group that should be able to connect to the Internet. 
        The main route table is properly configured but there is a problem connecting to one instance. 
        Since the other four instances are working fine,
         we can assume that the security group and the route table are correctly configured. 
         One possible reason for this issue is that the problematic instance does not have a public 
         or an EIP address.
        
        Take note as well that the four EC2 instances all belong to a public non-default subnet. 
        Which means that a new EC2 instance will not have a public IP address
         by default since the since IPv4 public addressing attribute is initially set to false.
        
        Hence, the correct answer is the option that says:
         The EC2 instance does not have a public IP address associated with it.
        
        The option that says: The route table is not properly configured to allow traffic
         to and from the Internet through the Internet gateway is incorrect because 
         the other three instances, which are associated with the same route table and security group, 
         do not have any issues.
        
        The option that says: The EC2 instance is running in an Availability Zone 
        that is not connected to an Internet gateway is incorrect because there is no
         relationship between the Availability Zone and the Internet Gateway (IGW) that may have caused the issue.
        
        
        References:
        
        http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario1.html
        
        https://docs.aws.amazon.com/vpc/latest/userguide/vpc-ip-addressing.html#vpc-ip-addressing-subnet
        
        
        Check out this Amazon VPC Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-vpc/
    
    `,
      },
      
      {
        question: `
A Solutions Architect is working for an online hotel booking firm with terabytes of 
customer data coming from the websites and applications. 
There is an annual corporate meeting where the Architect 
needs to present the booking behavior and acquire new insights from the customers’ data. 
The Architect is looking for a service to perform super-fast
analytics on massive data sets in near real-time.
Which of the following services gives the Architect the ability to store huge amounts 
of data and perform quick and flexible queries on it?
     `,
        answers: {
          a: "Amazon DynamoDB ",
          b: "Amazon ElastiCache ",
          c: "Amazon Redshift",
          d: "Amazon RDS",
        },
        correctAnswer: "c",
        explanation: `
        Amazon Redshift is a fast, scalable data warehouse that makes it simple and 
        cost-effective to analyze all your data across your data warehouse and data lake. 
        Redshift delivers ten times faster performance than other data warehouses by using machine learning,
         massively parallel query execution, and columnar storage on high-performance disk.

        You can use Redshift to analyze all your data using standard SQL and 
        your existing Business Intelligence (BI) tools. 
        It also allows you to run complex analytic queries against 
        terabytes to petabytes of structured and semi-structured data,
         using sophisticated query optimization, columnar storage on high-performance storage,
          and massively parallel query execution.
        
        Hence, the correct answer is: Amazon Redshift.
        
        Amazon DynamoDB is incorrect.
         DynamoDB is a NoSQL database which is based on key-value pairs used for fast processing of
          small data that dynamically grows and changes. 
          But if you need to scan large amounts of data (ie a lot of keys all in one query), 
          the performance will not be optimal.
        
        Amazon ElastiCache is incorrect because this is used to increase the performance,
         speed, and redundancy with which applications can retrieve data by providing 
         an in-memory database caching system, and not for database analytical processes.
        
        Amazon RDS is incorrect because this is mainly used for On-Line Transaction 
        Processing (OLTP) applications and not for Online Analytics Processing (OLAP).
        
        
        References:
        
        https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html
        
        https://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html
        
        
        Check out this Amazon Redshift Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-redshift/
    
    `,
      },
      
      {
        question: `
A company has two On-Demand EC2 instances inside the Virtual Private Cloud in 
the same Availability Zone but are deployed to different subnets. 
One EC2 instance is running a database and the other EC2 instance a web application that connects with the database.
 You need to ensure that these two instances can communicate with each other for the system to work properly.
What are the things you have to check so that these EC2 instances can communicate inside the VPC? (Select TWO.)
     `,
        answers: {
          a: `
Check if all security groups are set to allow the application host to communicate to
 the database on the right port and protocol.
AND
Check the Network ACL if it allows communication between the two subnets.
          `,
          b: "Check if both instances are the same instance class",
          c: "Check if the default route is set to a NAT instance or Internet Gateway (IGW) for them to communicate",
          d: "Ensure that the EC2 instances are in the same Placement Group",
        },
        correctAnswer: "a",
        explanation: `
        First, the Network ACL should be properly set to allow communication between the two subnets.
         The security group should also be properly configured so that your web 
         server can communicate with the database server.

        Hence, these are the correct answers:
        
        Check if all security groups are set to allow the application 
        host to communicate to the database on the right port and protocol.
        
        Check the Network ACL if it allows communication between the two subnets.
        
        The option that says: Check if both instances are the same instance class is incorrect 
        because the EC2 instances do not need to be of the same class in order to communicate with each other.
        
        The option that says: Check if the default route is set to a NAT instance or Internet Gateway (IGW)
         for them to communicate is incorrect because an Internet gateway 
         is primarily used to communicate to the Internet.
        
        The option that says: Ensure that the EC2 instances are in the same Placement Group is incorrect 
        because Placement Group is mainly used to provide low-latency network performance
         necessary for tightly-coupled node-to-node communication.
        
        
        Reference:
        
        http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html
        
        
        Check out this Amazon VPC Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-vpc/
        
        
        Tutorials Dojo's AWS Certified Solutions Architect Associate Exam Study Guide:
        
        https://tutorialsdojo.com/aws-certified-solutions-architect-associate/
        
`,
      },
      
      {
        question: `
An Intelligence Agency developed a missile tracking application that is hosted 
on both development and production AWS accounts. 
The Intelligence agency’s junior developer only has access to the development account. 
She has received security clearance to access the agency’s production account 
but the access is only temporary and only write access to EC2 and S3 is allowed.
Which of the following allows you to issue short-lived access tokens 
that act as temporary security credentials to allow access to your AWS resources?
     `,
        answers: {
          a: "AWS Security Token Service (AWS STS)",
          b: "Using AWS Cognito to issue JSON Web Tokens (JWT) ",
          c: "Using AWS SSO",
          d: "All of the above",
        },
        correctAnswer: "a",
        explanation: `
AWS Security Token Service (AWS STS) is the service that you can use
 to create and provide trusted users with temporary security credentials
  that can control access to your AWS resources. 
  Temporary security credentials work almost identically to 
  the long-term access key credentials that your IAM users can use.

In this diagram, IAM user Alice in the Dev account 
(the role-assuming account) needs to access the Prod account (the role-owning account). Here’s how it works:

Alice in the Dev account assumes an IAM role (WriteAccess) in the Prod account by calling AssumeRole.

STS returns a set of temporary security credentials.

Alice uses the temporary security credentials to access services and resources in the Prod account. 
Alice could, for example, make calls to Amazon S3 and Amazon EC2, which are granted by the WriteAccess role.

Using AWS Cognito to issue JSON Web Tokens (JWT) is incorrect because the
 Amazon Cognito service is primarily used for user authentication and 
 not for providing access to your AWS resources. A JSON Web Token (JWT) 
 is meant to be used for user authentication and session management.

Using AWS SSO is incorrect. Although the AWS SSO service uses STS, 
it does not issue short-lived credentials by itself. AWS Single Sign-On (SSO) 
is a cloud SSO service that makes it easy to centrally manage SSO access 
to multiple AWS accounts and business applications.

The option that says All of the above is incorrect as only STS has
 the ability to provide temporary security credentials.


Reference:

https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html


Check out this AWS IAM Cheat Sheet:

https://tutorialsdojo.com/aws-identity-and-access-management-iam/


Tutorials Dojo's AWS Certified Solutions Architect Associate Exam Study Guide:

https://tutorialsdojo.com/aws-certified-solutions-architect-associate/

`,
      },
      
      {
        question: `
A digital media company shares static content to its premium users 
around the world and also to their partners who syndicate their media files. 
The company is looking for ways to reduce its server costs and securely 
deliver their data to their customers globally with low latency.
Which combination of services should be used to provide 
the MOST suitable and cost-effective architecture? (Select TWO.)
     `,
        answers: {
          a: "AWS Fargate",
          b: "Amazon CloudFront and Amazon S3",
          c: "AWS Global Accelerator",
          d: "AWS Lambda",
        },
        correctAnswer: "b",
        explanation: `
        Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, 
        videos, applications, and APIs to customers globally with low latency,
         high transfer speeds, all within a developer-friendly environment.

        CloudFront is integrated with AWS – both physical locations that are directly
         connected to the AWS global infrastructure, as well as other AWS services. 
         CloudFront works seamlessly with services including AWS Shield for DDoS mitigation,
          Amazon S3, Elastic Load Balancing or Amazon EC2 as origins for your applications, 
          and Lambda@Edge to run custom code closer to customers’ users and to customize the user experience.
           Lastly, if you use AWS origins such as Amazon S3,
            Amazon EC2 or Elastic Load Balancing, you don’t pay for any data 
            transferred between these services and CloudFront.
        
        Amazon S3 is object storage built to store and retrieve any amount 
        of data from anywhere on the Internet. It’s a simple storage service that offers 
        an extremely durable, highly available, and infinitely scalable data 
        storage infrastructure at very low costs.
        
        AWS Global Accelerator and Amazon CloudFront are separate services
         that use the AWS global network and its edge locations around the world. 
         CloudFront improves performance for both cacheable content (such as images and videos) 
         and dynamic content (such as API acceleration and dynamic site delivery). 
         Global Accelerator improves performance for a 
         wide range of applications over TCP or UDP by proxying packets at 
         the edge to applications running in one or more AWS Regions. 
         Global Accelerator is a good fit for non-HTTP use cases, 
         such as gaming (UDP), IoT (MQTT), or Voice over IP, 
         as well as for HTTP use cases that specifically 
         require static IP addresses or deterministic, fast regional failover. 
         Both services integrate with AWS Shield for DDoS protection.
        
        Hence, the correct options are Amazon CloudFront and Amazon S3.
        
        AWS Fargate is incorrect because this service is just a serverless 
        compute engine for containers that work with both Amazon Elastic Container Service (ECS) 
        and Amazon Elastic Kubernetes Service (EKS).
         Although this service is more cost-effective than its server-based counterpart,
          Amazon S3 still costs way less than Fargate, especially for storing static content.
        
        AWS Lambda is incorrect because this simply lets you run your code serverless,
         without provisioning or managing servers. Although this is 
         also a cost-effective service since you have to pay only for the compute time you consume, 
         you can't use this to store static content or as a Content Delivery Network (CDN). 
         A better combination is Amazon CloudFront and Amazon S3.
        
        AWS Global Accelerator is incorrect because 
        this service is more suitable for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), 
        or Voice over IP, as well as for HTTP use cases that specifically 
        require static IP addresses or deterministic, fast regional failover. 
        Moreover, there is no direct way that you can integrate AWS Global Accelerator with Amazon S3. 
        It's more suitable to use Amazon CloudFront instead in this scenario.
        
        
        References:
        
        https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/
        
        https://aws.amazon.com/blogs/networking-and-content-delivery/amazon-s3-amazon-cloudfront-a-match-made-in-the-cloud/
        
        https://aws.amazon.com/global-accelerator/faqs/
        
    
    `,
      },
      
      {
        question: `
     `,
        answers: {
          a: "Granting all permissions to any EC2 user",
          b: `Using the principle of least privilege which means granting only 
          the least number of people with full root access`,
          c: `
          Determining what users need to do and then craft policies for them that let the users perform 
          those tasks including additional administrative operations is 
          `,
          d: `using the principle of least privilege which 
          means granting only the permissions required to perform a task `,
        },
        correctAnswer: "d",
        explanation: `
        One of the best practices in AWS IAM is to grant least privilege.

        When you create IAM policies, follow the standard security advice of granting least privilege—that is,
         granting only the permissions required to perform a task.
          Determine what users need to do and then craft policies 
          for them that let the users perform only those tasks.
        
        Therefore, using the principle of least privilege which means 
        granting only the permissions required to perform a task is the correct answer.
        
        Start with a minimum set of permissions and grant additional permissions as necessary. 
        Defining the right set of permissions requires some understanding of the user's objectives. 
        Determine what is required for the specific task, 
        what actions a particular service supports, 
        and what permissions are required in order to perform those actions.
        
        Granting all permissions to any EC2 user is incorrect since
         you don't want your users to gain access to everything and perform unnecessary actions.
          Doing so is not a good security practice.
        
        Using the principle of least privilege which means granting only 
        the least number of people with full root access is incorrect 
        because this is not the correct definition of what the principle of least privilege is.
        
        Determining what users need to do and then craft policies
         for them that let the users perform those tasks including additional
          administrative operations is incorrect since there are some users
           who you should not give administrative access to. 
           You should follow the principle of least privilege
            when providing permissions and accesses to your resources.
        
        
        Reference:
        
        https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#use-groups-for-permissions
        
        
        Check out this AWS IAM Cheat Sheet:
        
        https://tutorialsdojo.com/aws-identity-and-access-management-iam/
        
        
        Service Control Policies (SCP) vs IAM Policies:
        
        https://tutorialsdojo.com/service-control-policies-scp-vs-iam-policies/
        
        
        Comparison of AWS Services Cheat Sheets:
        
        https://tutorialsdojo.com/comparison-of-aws-services/
        
    
    `,
      },
      
      {
        question: `
For data privacy, a healthcare company has been asked to comply 
with the Health Insurance Portability and Accountability Act (HIPAA). 
The company stores all its backups on an Amazon S3 bucket. 
It is required that data stored on the S3 bucket must be encrypted.
What is the best option to do this? (Select TWO.)
     `,
        answers: {
          a: "Enabling Server-Side Encryption on an S3 bucket to make use of AES-128 encryption",
          b: `Before sending the data to Amazon S3 over HTTPS, encrypt the data locally first using your own encryption keys and 
          Enable Server-Side Encryption on an S3 bucket to make use of AES-256 encryption`,
          c: "Storing the data on EBS volumes with encryption enabled instead of using Amazon S3",
          d: "storing the data in encrypted EBS snapshots",
        },
        correctAnswer: "b",
        explanation: `
        Server-side encryption is about data encryption at rest—that is,
         Amazon S3 encrypts your data at the object level as it writes it to disks 
         in its data centers and decrypts it for you when you access it. 
         As long as you authenticate your request and you have access permissions,
          there is no difference in the way you access encrypted or unencrypted objects. 
          For example, if you share your objects using a pre-signed URL, 
          that URL works the same way for both encrypted and unencrypted objects.



        You have three mutually exclusive options depending on how you choose to manage the encryption keys:
        
        Use Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3)
        
        Use Server-Side Encryption with AWS KMS-Managed Keys (SSE-KMS)
        
        Use Server-Side Encryption with Customer-Provided Keys (SSE-C)
        
        
        The options that say: Before sending the data to Amazon S3 over HTTPS,
         encrypt the data locally first using your own encryption keys 
         and Enable Server-Side Encryption 
         on an S3 bucket to make use of AES-256 encryption are correct because 
         these options are using client-side encryption and Amazon S3-Managed Keys (SSE-S3) respectively.
          Client-side encryption is the act of encrypting data before sending it to Amazon S3 while
           SSE-S3 uses AES-256 encryption.
        
        Storing the data on EBS volumes with encryption enabled instead of using Amazon S3
         and storing the data in encrypted EBS snapshots are incorrect because 
         both options use EBS encryption and not S3.
        
        Enabling Server-Side Encryption on an S3 bucket to make use of AES-128 encryption is incorrect 
        as S3 doesn't provide AES-128 encryption, only AES-256.
        
        
        References:
        
        http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingEncryption.html
        
        https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html
        
        
        Check out this Amazon S3 Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-s3/
        
        
        Tutorials Dojo's AWS Certified Solutions Architect Associate Exam Study Guide:
        
        https://tutorialsdojo.com/aws-certified-solutions-architect-associate/
          
    
    `,
      },
      
      {
        question: `
A company is planning to launch an application which requires a data warehouse 
that will be used for their infrequently accessed data. 
You need to use an EBS Volume that can handle large, sequential I/O operations.
Which of the following is the most cost-effective storage type that you should use to meet the requirement?

     `,
        answers: {
          a: "EBS General Purpose SSD (gp2)",
          b: "Provisioned IOPS SSD (io1)",
          c: "Throughput Optimized HDD (st1) ",
          d: "Cold HDD (sc1)",
        },
        correctAnswer: "d",
        explanation: `
Cold HDD volumes provide low-cost magnetic storage that defines
 performance in terms of throughput rather than IOPS. 
 With a lower throughput limit than Throughput Optimized HDD, 
 this is a good fit ideal for large, sequential cold-data workloads. 
 If you require infrequent access to your data and are looking to save costs, 
 Cold HDD provides inexpensive block storage. Take note that bootable Cold HDD volumes are not supported.

Cold HDD provides the lowest cost HDD volume and is designed for 
less frequently accessed workloads. Hence, Cold HDD (sc1) is the correct answer.

In the exam, always consider the difference between SSD and HDD as shown on the table below. 
This will allow you to easily eliminate specific EBS-types in the options which 
are not SSD or not HDD, depending on whether the question asks for a storage type which has small, 
random I/O operations or large, sequential I/O operations.



EBS General Purpose SSD (gp2) is incorrect because a 
General purpose SSD volume costs more and it is mainly used for a wide variety of workloads. 
It is recommended to be used as system boot volumes, virtual desktops, low-latency interactive apps, and many more.

Provisioned IOPS SSD (io1) is incorrect because this costs more than Cold HDD and thus,
 not cost-effective for this scenario. It provides 
 the highest performance SSD volume for mission-critical low-latency or high-throughput workloads,
  which is not needed in the scenario.

Throughput Optimized HDD (st1) is incorrect because this 
is primarily used for frequently accessed, throughput-intensive workloads. 
In this scenario, Cold HDD perfectly fits the requirement as it is used for 
their infrequently accessed data and provides the lowest cost, unlike Throughput Optimized HDD.


References:

https://aws.amazon.com/ebs/details/

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html


Check out this Amazon EBS Cheat Sheet:

https://tutorialsdojo.com/amazon-ebs/

`,
      },
      
      {
        question: `
A commercial bank has a forex trading application.
 They created an Auto Scaling group of EC2 instances that allow the bank 
 to cope up with the current traffic and achieve cost-efficiency. 
 They want the Auto Scaling group to behave in such a way
  that it will follow a predefined set of parameters before it scales down the number of EC2 instances,
  which protects the system from unintended slowdown or unavailability.
Which of the following statements are true regarding the cooldown period? (Select TWO.)
     `,
        answers: {
          a: `
          It ensures that the Auto Scaling group does not launch or terminate 
          additional EC2 instances before the previous scaling activity takes effect.And Its default value is 300 seconds
          `,
          b: "It ensures that before the Auto Scaling group scales out, the EC2 instances have ample time to cooldown.",
          c: "It ensures that the Auto Scaling group launches or terminates additional EC2 instances without any downtime.",
          d: "Its default value is 600 seconds.",
        },
        correctAnswer: "a",
        explanation: `
        In Auto Scaling, the following statements are correct regarding the cooldown period:

        It ensures that the Auto Scaling group does not launch or
         terminate additional EC2 instances before the previous scaling activity takes effect.
        
        Its default value is 300 seconds.
        
        It is a configurable setting for your Auto Scaling group.
        
        The following options are incorrect:
        
        - It ensures that before the Auto Scaling group scales out, the EC2 instances have ample time to cooldown.
        
        - It ensures that the Auto Scaling group launches or 
        terminates additional EC2 instances without any downtime.
        
        - Its default value is 600 seconds.
        
        These statements are inaccurate and don't depict what the word "cooldown" 
        actually means for Auto Scaling. 
        The cooldown period is a configurable setting for your 
        Auto Scaling group that helps to ensure that it doesn't launch or
         terminate additional instances before the previous scaling activity takes effect. 
         After the Auto Scaling group dynamically scales using a simple scaling policy,
          it waits for the cooldown period to complete before resuming scaling activities.
        
        The figure below demonstrates the scaling cooldown:
        
        
        Reference:
        
        http://docs.aws.amazon.com/autoscaling/latest/userguide/as-instance-termination.html
        
        
        Check out this AWS Auto Scaling Cheat Sheet:
        
        https://tutorialsdojo.com/aws-auto-scaling/
        
        
        Tutorials Dojo's AWS Certified Solutions Architect Associate Exam Study Guide:
        
        https://tutorialsdojo.com/aws-certified-solutions-architect-associate/
        
    
    `,
      },
      
      {
        question: `
A company has a cryptocurrency exchange portal that is hosted in an Auto Scaling group
 of EC2 instances behind an Application Load Balancer and is deployed across multiple AWS regions. 
 The users can be found all around the globe, but the majority are from Japan and Sweden.
  Because of the compliance requirements in these two locations, 
  you want the Japanese users to connect to the servers in the ap-northeast-1 Asia Pacific (Tokyo) region,
while the Swedish users should be connected to the servers in the eu-west-1 EU (Ireland) region.
Which of the following services would allow you to easily fulfill this requirement?
     `,
        answers: {
          a: "Setting up an Application Load Balancers that will automatically route the traffic to the proper AWS region",
          b: "Setting up an Application Load Balancers that will automatically route the traffic to the proper AWS region",
          c: "Geolocation routing",
          d: "Setting up a new CloudFront web distribution with the geo-restriction feature enabled",
        },
        correctAnswer: "c",
        explanation: `
        Geolocation routing lets you choose the resources that serve your
         traffic based on the geographic location of your users,
         meaning the location that DNS queries originate from. 
         For example, you might want all queries from Europe 
         to be routed to an ELB load balancer in the Frankfurt region.

        When you use geolocation routing, you can localize your 
        content and present some or all of your website in the language of your users.
         You can also use geolocation routing to restrict distribution 
         of content to only the locations in which you have distribution rights.
          Another possible use is for balancing load across endpoints 
          in a predictable, easy-to-manage way, 
          so that each user location is consistently routed to the same endpoint.
        
        Setting up an Application Load Balancers that 
        will automatically route the traffic to the proper AWS 
        region is incorrect because Elastic Load Balancers distribute traffic
         among EC2 instances across multiple Availability Zones but not across AWS regions.
        
        Setting up a new CloudFront web distribution with the geo-restriction 
        feature enabled is incorrect because the CloudFront geo-restriction 
        feature is primarily used to prevent users in specific geographic 
        locations from accessing content that you're distributing through a CloudFront web distribution. 
        It does not let you choose the resources that serve your traffic
         based on the geographic location of your users, unlike the Geolocation routing policy in Route 53.
        
        Using Route 53 Weighted Routing policy is incorrect because this is 
        not a suitable solution to meet the requirements of this scenario.
         It just lets you associate multiple resources with a 
         single domain name (tutorialsdojo.com) or subdomain name (forums.tutorialsdojo.com) 
         and choose how much traffic is routed to each resource.
          You have to use a Geolocation routing policy instead.
        
        
        References:
        
        https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html
        
        https://aws.amazon.com/premiumsupport/knowledge-center/geolocation-routing-policy
        
        
        Check out this Amazon Route 53 Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-route-53/
        
        
        Latency Routing vs Geoproximity Routing vs Geolocation Routing:
        
        https://tutorialsdojo.com/latency-routing-vs-geoproximity-routing-vs-geolocation-routing/
        
        
        Comparison of AWS Services Cheat Sheets:
        
        https://tutorialsdojo.com/comparison-of-aws-services/
        
    
    `,
      },
      
      {
        question: `
A company is building an internal application that serves as a repository for images uploaded by a couple of users.
 Whenever a user uploads an image, it would be sent to Kinesis Data Streams 
 for processing before it is stored in an S3 bucket. 
 If the upload was successful, the application will return a prompt 
 informing the user that the operation was successful. 
 The entire processing typically takes about 5 minutes to finish.
Which of the following options will allow you to asynchronously process 
the request to the application from upload request to Kinesis, S3, 
and return a reply in the most cost-effective manner?
     `,
        answers: {
          a: `
          Using a combination of Lambda and Step Functions 
          to orchestrate service components and asynchronously process the requests
          `,
          b: `
          Using a combination of SQS to queue the 
          requests and then asynchronously processing them using On-Demand EC2 Instances 
          `,
          c: `
          Using a combination of
           SNS to buffer the requests and then asynchronously processing them using On-Demand EC2 Instances
          `,
          d: `Replace the Kinesis stream with an Amazon SQS queue.
           Create a Lambda function that will asynchronously process the requests.`,
        },
        correctAnswer: "d",
        explanation: `
        Using a combination of SNS to buffer the requests
     and then asynchronously processing them using On-Demand EC2 Instances
    `,
      },
      
      {
        question: `
A software company has resources hosted in AWS and on-premises servers. 
You have been requested to create a decoupled architecture for applications which make use of both resources.
Which of the following options are valid? (Select TWO.)
     `,
        answers: {
          a: "Using RDS to utilize both on-premises servers and EC2 instances for your decoupled application",
          b: "Amazon Simple Queue Service (SQS) and Amazon Simple Workflow Service (SWF)",
          c: "using DynamoDB to utilize both on-premises servers and EC2 instances for your decoupled application",
          d: "Using VPC peering to connect both on-premises servers and EC2 instances for your decoupled application",
        },
        correctAnswer: "b",
        explanation: `
        Amazon Simple Queue Service (SQS) and Amazon Simple Workflow Service (SWF) 
        are the services that you can use for creating a decoupled architecture in AWS.
         Decoupled architecture is a type of computing architecture that enables 
         computing components or layers to execute independently while still interfacing with each other.

        Amazon SQS offers reliable, highly-scalable hosted queues for storing messages 
        while they travel between applications or microservices. 
        Amazon SQS lets you move data between distributed application 
        components and helps you decouple these components. 
        Amazon SWF is a web service that makes it easy to coordinate work across distributed application components.
        
        Using RDS to utilize both on-premises servers and EC2 instances 
        for your decoupled application and using DynamoDB to utilize both on-premises servers and 
        EC2 instances for your decoupled application are incorrect as RDS and DynamoDB are database services.
        
        Using VPC peering to connect both on-premises servers and EC2 instances 
        for your decoupled application is incorrect because you
         can't create a VPC peering for your on-premises network and AWS VPC.
        
         
        
        References:
        
        https://aws.amazon.com/sqs/
        
        http://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-welcome.html
        
         
        
        Check out this Amazon SQS Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-sqs/
        
         
        
        Amazon Simple Workflow (SWF) vs AWS Step Functions vs Amazon SQS:
        
        https://tutorialsdojo.com/amazon-simple-workflow-swf-vs-aws-step-functions-vs-amazon-sqs/
        
         
        
        Comparison of AWS Services Cheat Sheets:
        
        https://tutorialsdojo.com/comparison-of-aws-services/
        `,
      },
      
      {
        question: `
        A company has a top priority requirement to monitor a few database metrics and then afterward, 
        send email notifications to the Operations team in case there is an issue.
         Which AWS services can accomplish this requirement? (Select TWO.)
     `,
        answers: {
          a: "Amazon Simple Email Service",
          b: "Amazon EC2 Instance with a running Berkeley Internet Name Domain (BIND) Server",
          c: "Amazon CloudWatch and Amazon Simple Notification Service (SNS) ",
          d: "Amazon Simple Queue Service (SQS) ",
        },
        correctAnswer: "c",
        explanation: `
        Amazon CloudWatch and Amazon Simple Notification Service (SNS) are correct. 
        In this requirement, you can use Amazon CloudWatch to monitor the database and 
        then Amazon SNS to send the emails to the Operations team. 
        Take note that you should use SNS instead of SES (Simple Email Service) 
        when you want to monitor your EC2 instances.

        CloudWatch collects monitoring and operational data in the form of 
        logs, metrics, and events, providing you with a unified view of AWS resources, 
        applications, and services that run on AWS, and on-premises servers.
        
        SNS is a highly available, durable, secure, fully managed pub/sub messaging service
         that enables you to decouple microservices, distributed systems, and serverless applications.
        
        Amazon Simple Email Service is incorrect.
         SES is a cloud-based email sending service designed to send notification and transactional emails.
        
        Amazon Simple Queue Service (SQS) is incorrect. 
        SQS is a fully-managed message queuing service. 
        It does not monitor applications nor send email notifications unlike SES.
        
        Amazon EC2 Instance with a running Berkeley
         Internet Name Domain (BIND) Server is incorrect because BIND
          is primarily used as a Domain Name System (DNS) web service.
          This is only applicable if you have a private hosted zone in your AWS account. 
          It does not monitor applications nor send email notifications.
        
        
        References:
        
        https://aws.amazon.com/cloudwatch/
        
        https://aws.amazon.com/sns/
        
        
        Check out this Amazon CloudWatch Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-cloudwatch/
          
    
    `,
      },
      
      {
        question: `
An organization needs to control the access for several S3 buckets. 
They plan to use a gateway endpoint to allow access to trusted buckets.
Which of the following could help you achieve this requirement?
     `,
        answers: {
          a: "Generate an endpoint policy for trusted VPCs ",
          b: "Generate a bucket policy for trusted VPCs",
          c: "Generate an endpoint policy for trusted S3 buckets",
          d: "Generate a bucket policy for trusted S3 buckets",
        },
        correctAnswer: "c",
        explanation: `
        A VPC endpoint enables you to privately connect your VPC to supported AWS services 
        and VPC endpoint services powered by AWS PrivateLink without requiring an internet gateway,
         NAT device, VPN connection, or AWS Direct Connect connection. 
         Instances in your VPC do not require public IP addresses to communicate with resources in the service.
          Traffic between your VPC and the other service does not leave the Amazon network.

        When you create a VPC endpoint, you can attach an endpoint policy that 
        controls access to the service to which you are connecting. 
        You can modify the endpoint policy attached to your endpoint and
         add or remove the route tables used by the endpoint. 
         An endpoint policy does not override or replace IAM user policies 
         or service-specific policies (such as S3 bucket policies). 
         It is a separate policy for controlling access from the endpoint to the specified service.
        
        We can use a bucket policy or an endpoint policy to allow the traffic to trusted S3 buckets. 
        The options that have 'trusted S3 buckets' key phrases will be the possible answer in this scenario. 
        It would take you a lot of time to configure a bucket policy for each S3 bucket 
        instead of using a single endpoint policy. 
        Therefore, you should use an endpoint policy to control the traffic to the trusted Amazon S3 buckets.
        
        Hence, the correct answer is: Generate an endpoint policy for trusted S3 buckets.
        
        The option that says: Generate a bucket policy for trusted S3 buckets is incorrect. 
        Although this is a valid solution, 
        it takes a lot of time to set up a bucket policy for each and every S3 bucket. 
        This can simply be accomplished by creating an S3 endpoint policy.
        
        The option that says: Generate a bucket policy for trusted VPCs 
        is incorrect because you are generating a policy for trusted VPCs. 
        Remember that the scenario only requires you to allow the traffic for trusted S3 buckets, 
        and not to the VPCs.
        
        The option that says: Generate an endpoint policy for trusted 
        VPCs is incorrect because it only allows access to trusted VPCs, and not to trusted Amazon S3 buckets.
        
        
        References:
        
        https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-s3.html
        
        https://aws.amazon.com/premiumsupport/knowledge-center/connect-s3-vpc-endpoint/
        
        
        Check out this Amazon VPC Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-vpc/
        
    
    `,
      },
      
      {
        question: `
An insurance company plans to implement a message filtering feature in their web application. 
To implement this solution, they need to create separate Amazon SQS queues for each type of quote request. 
The entire message processing should not exceed 24 hours.
As the Solutions Architect of the company, which of the following should you do to meet the above requirement?
     `,
        answers: {
          a: `
          Create multiple Amazon SNS topics and configure the Amazon SQS queues to subscribe to the SNS topics. 
          Publish the message to the designated SQS queue based on the quote request type
          `,
          b: `
          Create one Amazon SNS topic and configure the Amazon SQS queues to subscribe to the SNS topic. 
          Set the filter policies in the SNS subscriptions 
          to publish the message to the designated SQS queue based on its quote request type.
          `,
          c: `
          Create one Amazon SNS topic and configure the Amazon SQS queues to subscribe to the SNS topic.
           Publish the same messages to all SQS queues. 
          Filter the messages in each queue based on the quote request type
          `,
          d: `
          Create a data stream in Amazon Kinesis Data Streams. Use the Amazon Kinesis Client Library
           to deliver all the records to the designated SQS queues based on the quote request type 
          `,
        },
        correctAnswer: "b",
        explanation: `
        Amazon SNS is a fully managed pub/sub messaging service. 
        With Amazon SNS, you can use topics to simultaneously distribute 
        messages to multiple subscribing endpoints such as Amazon SQS queues, 
        AWS Lambda functions, HTTP endpoints, email addresses, and mobile devices (SMS, Push).

        Amazon SQS is a message queue service used by distributed applications 
        to exchange messages through a polling model.
         It can be used to decouple sending and receiving 
         components without requiring each component to be concurrently available.
        
        A fanout scenario occurs when a message published to an SNS topic is 
        replicated and pushed to multiple endpoints, such as Amazon SQS queues,
         HTTP(S) endpoints, and Lambda functions. This allows for parallel asynchronous processing.
        
        For example, you can develop an application that publishes a message to an 
        SNS topic whenever an order is placed for a product. 
        Then, two or more SQS queues that are subscribed to the SNS 
        topic receive identical notifications for the new order. 
        An Amazon Elastic Compute Cloud (Amazon EC2) server instance 
        attached to one of the SQS queues can handle the processing or fulfillment of the order. 
        And you can attach another Amazon EC2 server instance to a data warehouse 
        for analysis of all orders received.
        
        By default, an Amazon SNS topic subscriber receives every message published to the topic. 
        You can use Amazon SNS message filtering to assign a filter policy to the topic subscription, 
        and the subscriber will only receive a message that they are interested in. 
        Using Amazon SNS and Amazon SQS together, messages can be delivered to 
        applications that require immediate notification of an event. 
        This method is known as fanout to Amazon SQS queues.
        
        Hence, the correct answer is: Create one Amazon SNS topic and 
        configure the Amazon SQS queues to subscribe to the SNS topic. 
        Set the filter policies in the SNS subscriptions to publish the 
        message to the designated SQS queue based on its quote request type.
        
        The option that says: Create one Amazon SNS topic and 
        onfigure the Amazon SQS queues to subscribe to the SNS topic. 
        Publish the same messages to all SQS queues. 
        Filter the messages in each queue based on the quote request type is incorrect 
        because this option will distribute the same messages on all SQS queues instead of its designated queue.
         You need to fan-out the messages to multiple SQS queues using a filter policy 
         in Amazon SNS subscriptions to allow parallel asynchronous processing. 
         By doing so, the entire message processing will not exceed 24 hours.
        
        The option that says: Create multiple Amazon SNS topics and configure 
        the Amazon SQS queues to subscribe to the SNS topics. 
        Publish the message to the designated SQS queue based on 
        the quote request type is incorrect because to implement the solution asked in the scenario, 
        you only need to use one Amazon SNS topic. To publish it to the designated SQS queue, 
        you must set a filter policy that allows you to fanout the messages. 
        If you didn't set a filter policy in Amazon SNS, 
        the subscribers would receive all the messages published to the SNS topic. 
        Thus, using multiple SNS topics is not an appropriate solution for this scenario.
        
        The option that says: Create a data stream in Amazon Kinesis Data Streams. 
        Use the Amazon Kinesis Client Library to deliver all 
        the records to the designated SQS queues based on the 
        quote request type is incorrect because Amazon KDS is not a message filtering service. 
        You should use Amazon SNS and SQS to distribute the topic to the designated queue.
        
        
        References:
        
        https://aws.amazon.com/getting-started/hands-on/filter-messages-published-to-topics/
        
        https://docs.aws.amazon.com/sns/latest/dg/sns-message-filtering.html
        
        https://docs.aws.amazon.com/sns/latest/dg/sns-sqs-as-subscriber.html
        
        
        Check out this Amazon SNS and SQS Cheat Sheets:
        
        https://tutorialsdojo.com/amazon-sns/
        
        https://tutorialsdojo.com/amazon-sqs/
        
    
    `,
      },
      
      {
        question: `
        An accounting application uses an RDS database configured with Multi-AZ deployments to improve availability. 
        What would happen to RDS if the primary database instance fails?
     `,
        answers: {
          a: "The IP address of the primary DB instance is switched to the standby DB instance ",
          b: `
          Amazon RDS simply flips the canonical name record (CNAME) for your DB instance to point at the standby,
           which is in turn promoted to become the new primary.
          `,
          c: "The primary database instance will reboot",
          d: "A new database instance is created in the standby Availability Zone",
        },
        correctAnswer: "b",
        explanation: `
        In Amazon RDS, failover is automatically handled so 
        that you can resume database operations as quickly as
         possible without administrative intervention in the event that your primary database instance went down.
          When failing over, Amazon RDS simply flips the canonical name record (CNAME) for your DB instance to point at the standby, which is in turn promoted to become the new primary.

        The option that says: The IP address of the primary DB instance 
        is switched to the standby DB instance is incorrect
        since IP addresses are per subnet, and subnets cannot span multiple AZs.
        
        The option that says: The primary database instance will
        reboot is incorrect since in the event of a failure, there is no database to reboot with.
        
        The option that says: A new database instance is created in the standby 
        Availability Zone is incorrect since with multi-AZ enabled,
        you already have a standby database in another AZ.
        
        
        References:
        
        https://aws.amazon.com/rds/details/multi-az/
        
        https://aws.amazon.com/rds/faqs/
        
        
        Check out this Amazon RDS Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-relational-database-service-amazon-rds/
        
    
    `,
      },
      
      {
        question: `
        An advertising company is currently working on a proof of concept project 
        that automatically provides SEO analytics for its clients. 
        Your company has a VPC in AWS that operates in a dual-stack mode in which IPv4 and IPv6 communication 
        is allowed. 
        You deployed the application to an Auto Scaling group of EC2 instances with an Application Load Balancer
         in front that evenly distributes the incoming traffic. 
         You are ready to go live but you need to point your domain name (tutorialsdojo.com) 
         to the Application Load Balancer.

        In Route 53, which record types will you use to point the DNS name of the Application Load Balancer? (Select TWO.)    
     `,
        answers: {
          a: "Alias with a type 'CNAME' record set ",
          b: "Non-Alias with a type 'A' record set ",
          c: "Alias with a type of 'MX' record set ",
          d: "Alias with a type 'AAAA' record set and Alias with a type 'A' record set.",
        },
        correctAnswer: "d",
        explanation: `
        The correct answers are: Alias with a type "AAAA" record set and Alias with a type "A" record set.

        To route domain traffic to an ELB load balancer, 
        use Amazon Route 53 to create an alias record that points to your load balancer.
         An alias record is a Route 53 extension to DNS. 
         It's similar to a CNAME record, but you can create an alias record both for the root domain, 
         such as tutorialsdojo.com, and for subdomains, 
         such as portal.tutorialsdojo.com. (You can create CNAME records only for subdomains.) 
         To enable IPv6 resolution, you would need to create a second resource record, 
         tutorialsdojo.com ALIAS AAAA -> myelb.us-west-2.elb.amazonnaws.com, 
         this is assuming your Elastic Load Balancer has IPv6 support.
        
        Non-Alias with a type "A" record set is incorrect because 
        you only use Non-Alias with a type “A” record set for IP addresses.
        
        Alias with a type "CNAME" record set is incorrect because
         you can't create a CNAME record at the zone apex. 
         For example, if you register the DNS name tutorialsdojo.com, the zone apex is tutorialsdojo.com.
        
        Alias with a type of “MX” record set is incorrect 
        because an MX record is primarily used for mail servers. 
        It includes a priority number and a domain name, for example: 10 mailserver.tutorialsdojo.com.
        
        
        Reference:
        
        https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer.html
        
        https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html
        
        
        Check out this Amazon Route 53 Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-route-53/
        
    
    `,
      },
      {
        question: `
A Solutions Architect of a multinational gaming company develops video games for PS4, Xbox One,
and Nintendo Switch consoles, plus a number of mobile games for Android and iOS.
Due to the wide range of their products and services, the architect proposed that they use API Gateway.
What are the key features of API Gateway that the architect can tell to the client? (Select TWO.)
`,
        answers: {
          a: `
 Enables you to build RESTful APIs and WebSocket APIs that are optimized for serverless workloads AND
-You pay only for the API calls you receive and the amount of data transferred out.
          `,
          b: "It automatically provides a query language for your APIs similar to GraphQL ",
          c: `rovides you with static anycast IP addresses that serve as a 
          fixed entry point to your applications hosted in one or more AWS Regions`,
          d: `Enables you to run applications requiring high levels of inter-node communications at 
          scale on AWS through its custom-built operating system (OS) bypass hardware interface`,
        },
        correctAnswer: "a",
        explanation: `
        Amazon API Gateway is a fully managed service that makes it
         easy for developers to create, publish, maintain, monitor, 
         and secure APIs at any scale. With a few clicks in 
         the AWS Management Console, you can create an API that 
         acts as a “front door” for applications to access data, 
         business logic, or functionality from your back-end services, 
         such as workloads running on Amazon Elastic Compute Cloud (Amazon EC2), 
         code running on AWS Lambda, or any web application. 
         Since it can use AWS Lambda, you can run your APIs without servers.

        Amazon API Gateway handles all the tasks involved in accepting and
         processing up to hundreds of thousands of concurrent API calls, 
         including traffic management, authorization and access control,
          monitoring, and API version management. Amazon API Gateway has no minimum fees or startup costs.
           You pay only for the API calls you receive and the amount of data transferred out.
        
        Hence, the correct answers are:
        
        - Enables you to build RESTful APIs and WebSocket APIs that are optimized for serverless workloads
        
        - You pay only for the API calls you receive and the amount of data transferred out.
        
        The option that says: It automatically provides a query language 
        for your APIs similar to GraphQL is incorrect because this is not provided by API Gateway.
        
        The option that says: Provides you with static anycast IP addresses 
        that serve as a fixed entry point to your applications hosted in one or more
         AWS Regions is incorrect because this is a capability of AWS Global Accelerator and not API Gateway.
        
        The option that says: Enables you to run applications requiring high levels 
        of inter-node communications at scale on AWS through its custom-built 
        operating system (OS) bypass hardware interface is incorrect because
         this is a capability of Elastic Fabric Adapter and not API Gateway.
        
        
        References:
        
        https://aws.amazon.com/api-gateway/
        
        https://aws.amazon.com/api-gateway/features/
        
        
        Check out this Amazon API Gateway Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-api-gateway/
        
        
        Tutorials Dojo's AWS Certified Solutions Architect Associate Exam Study Guide:
        
        https://tutorialsdojo.com/aws-certified-solutions-architect-associate/
        
    
    `,
      },
      
      {
        question: `
A company has a static corporate website hosted in a standard S3 bucket 
and a new web domain name that was registered using Route 53. 
You are instructed by your manager to integrate these two services
in order to successfully launch their corporate website.
What are the prerequisites when routing traffic using Amazon Route 53 
to a website that is hosted in an Amazon S3 Bucket? (Select TWO.)
     `,
        answers: {
          a: "The S3 bucket must be in the same region as the hosted zone",
          b: "Register a domain name and the s3 bucket name must be the same as the domain name",
          c: "The record set must be of type 'MX'",
          d: "",
        },
        correctAnswer: "The Cross-Origin Resource Sharing (CORS) option should be enabled in the S3 bucket",
        explanation: `
        Here are the prerequisites for routing traffic to a website that is hosted in an Amazon S3 Bucket:

        - An S3 bucket that is configured to host a static website. 
        The bucket must have the same name as your domain or subdomain. 
        For example, if you want to use the subdomain portal.tutorialsdojo.com,
         the name of the bucket must be portal.tutorialsdojo.com.
        
        - A registered domain name. You can use Route 53 as your domain registrar,
        or you can use a different registrar.
        
        - Route 53 as the DNS service for the domain. 
        If you register your domain name by using Route 53, 
        we automatically configure Route 53 as the DNS service for the domain.
        
        The option that says: The record set must be of type "MX" is incorrect 
        since an MX record specifies the mail server responsible for accepting 
        email messages on behalf of a domain name. This is not what is being asked by the question.
        
        The option that says: The S3 bucket must be in the same region as the hosted zone is incorrect. 
        There is no constraint that the S3 bucket must be in the same region as 
        the hosted zone in order for the Route 53 service to route traffic into it.
        
        The option that says: The Cross-Origin Resource Sharing (CORS) option should
         be enabled in the S3 bucket is incorrect because
         you only need to enable Cross-Origin Resource Sharing (CORS) 
         when your client web application on one domain interacts with the resources in a different domain.
        
        
        Reference:
        
        https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/RoutingToS3Bucket.html
        
        
        Check out this Amazon Route 53 Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-route-53/
        
    
    `,
      },
      
      {
        question: `
A Solutions Architect created a new Standard-class S3 bucket to store 
financial reports that are not frequently accessed but should immediately 
be available when an auditor requests them. To save costs, 
the Architect changed the storage class of the S3 bucket from Standard to Infrequent Access storage class.
In Amazon S3 Standard - Infrequent Access storage class, which of the following statements are true? (Select TWO.)
     `,
        answers: {
          a: `
          It automatically moves data to the most cost-effective access tier without any operational overhead
          `,
          b: "It provides high latency and low throughput performance ",
          c: `
It is designed for data that is accessed less frequently AND
 It is designed for data that requires rapid access when needed.
          `,
          d: " Ideal to use for data archiving ",
        },
        correctAnswer: "c",
        explanation: `
        Amazon S3 Standard - Infrequent Access (Standard - IA) 
        is an Amazon S3 storage class for data that is accessed less frequently,
         but requires rapid access when needed. 
         Standard - IA offers the high durability,
         throughput, and low latency of Amazon S3 Standard, 
         with a low per GB storage price and per GB retrieval fee.

        This combination of low cost and high performance make Standard - 
        IA ideal for long-term storage, backups, and as a data store for disaster recovery. 
        The Standard - IA storage class is set at the object level and can exist in the same bucket as Standard, 
        allowing you to use lifecycle policies to automatically 
        transition objects between storage classes without any application changes.
        
        Key Features:
        
        - Same low latency and high throughput performance of Standard
        
        - Designed for durability of 99.999999999% of objects
        
        - Designed for 99.9% availability over a given year
        
        - Backed with the Amazon S3 Service Level Agreement for availability
        
        - Supports SSL encryption of data in transit and at rest
        
        - Lifecycle management for automatic migration of objects
        
        Hence, the correct answers are:
        
        - It is designed for data that is accessed less frequently.
        
        - It is designed for data that requires rapid access when needed.
        
        The option that says: It automatically moves data to the most cost-effective 
        access tier without any operational overhead is incorrect as it actually refers to 
        Amazon S3 - Intelligent Tiering, which is the only cloud storage class that 
        delivers automatic cost savings by moving objects between different access tiers 
        when access patterns change.
        
        The option that says: It provides high latency and low throughput performance is incorrect
         as it should be "low latency" and "high throughput" instead. S3 automatically
          scales performance to meet user demands.
        
        The option that says: Ideal to use for data archiving is incorrect because 
        this statement refers to Amazon S3 Glacier. Glacier is a secure, durable, 
        and extremely low-cost cloud storage service for data archiving and long-term backup.
        
        
        References:
        
        https://aws.amazon.com/s3/storage-classes/
        
        https://aws.amazon.com/s3/faqs
        
        
        Check out this Amazon S3 Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-s3/
         
    
    `,
      },
      
      {
        question: `
A website that consists of HTML, CSS, and other client-side Javascript will be hosted on the AWS environment. 
Several high-resolution images will be displayed on the webpage. 
The website and the photos should have the optimal loading response times as possible, 
and should also be able to scale to high request rates.
Which of the following architectures can provide the most cost-effective and fastest loading experience?
     `,
        answers: {
          a: `Upload the HTML, CSS, Javascript, and the images in a single bucket. Then enable website hosting. 
          Create a CloudFront distribution and point the domain on the S3 website endpoint.`,
          b: `
          Create an Nginx web server in an EC2 instance to host the HTML, CSS, and Javascript files then enable caching. 
          Upload the images in a S3 bucket. Use CloudFront as a CDN to deliver the images closer to your end-users
          `,
          c:  `
          Launch an Auto Scaling Group using an AMI that has a pre-configured Apache web server, 
          then configure the scaling policy accordingly. Store the images in an Elastic Block Store. 
          Then, point your instance’s endpoint to AWS Global Accelerator
          `  ,
          d: `
          Create an Nginx web server in an Amazon LightSail instance to host the HTML, CSS, 
          and Javascript files then enable caching.
           Upload the images in an S3 bucket. 
           Use CloudFront as a CDN to deliver the images closer to your end-users
          `,
        },
        correctAnswer: "a",
        explanation: `
        Amazon S3 is an object storage service that offers industry-leading scalability,
         data availability, security, and performance. 
         Additionally, You can use Amazon S3 to host a static website. 
         On a static website, individual webpages include static content. 
         Amazon S3 is highly scalable and you only pay for what you use, 
         you can start small and grow your application as you wish, 
         with no compromise on performance or reliability.

        Amazon CloudFront is a fast content delivery network (CDN) 
        service that securely delivers data, videos, applications, 
        and APIs to customers globally with low latency, high transfer speeds. 
        CloudFront can be integrated with Amazon S3 for fast delivery of data 
        originating from an S3 bucket to your end-users. By design, 
        delivering data out of CloudFront can be more cost-effective 
        than delivering it from S3 directly to your users.
        
        The scenario given is about storing and hosting images and 
        a static website respectively. Since we are just dealing with 
        static content, we can leverage the web hosting feature of S3. 
        Then we can improve the architecture further by integrating it with CloudFront. 
        This way, users will be able to load both the web pages and images 
        faster than if we are serving them from a standard webserver.
        
        Hence, the correct answer is: Upload the HTML, CSS, Javascript, 
        and the images in a single bucket. Then enable website hosting. 
        Create a CloudFront distribution and point the domain on the S3 website endpoint.
        
        The option that says: Create an Nginx web server in an EC2 instance to host 
        the HTML, CSS, and Javascript files then enable caching. Upload the images in a S3 bucket. 
        Use CloudFront as a CDN to deliver the images closer to your end-users is incorrect. 
        Creating your own web server just to host a static website in AWS is a costly solution. 
        Web Servers on an EC2 instance is usually used for hosting dynamic web applications. 
        Since static websites contain web pages with fixed content, we should use S3 website hosting instead.
        
        The option that says: Launch an Auto Scaling Group using an AMI that 
        has a pre-configured Apache web server, then configure the scaling policy accordingly. 
        Store the images in an Elastic Block Store. Then, point your instance’s endpoint 
        to AWS Global Accelerator is incorrect. This is how we serve static websites in the old days. 
        Now, with the help of S3 website hosting, 
        we can host our static contents from a durable, 
        high-availability, and highly scalable environment without managing any servers. 
        Hosting static websites in S3 is cheaper than hosting it in an EC2 instance. 
        In addition, Using ASG for scaling instances 
        that host a static website is an over-engineered solution that carries unnecessary costs. 
        S3 automatically scales to high requests and you only pay for what you use.
        
        The option that says: Create an Nginx web server in an
         Amazon LightSail instance to host the HTML, CSS, 
         and Javascript files then enable caching. 
         Upload the images in an S3 bucket. 
         Use CloudFront as a CDN to deliver the images closer 
         to your end-users is incorrect because although LightSail 
         is cheaper than EC2, creating your own LightSail web server 
         for hosting static websites is still a relatively expensive 
         solution when compared to hosting it on S3. In addition, 
         S3 automatically scales to high request rates.
        
        
        References:
        
        https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html
        
        https://aws.amazon.com/blogs/networking-and-content-delivery/amazon-s3-amazon-cloudfront-a-match-made-in-the-cloud/
        
        
        Check out these Amazon S3 and CloudFront Cheat Sheets:
        
        https://tutorialsdojo.com/amazon-s3/
        
        https://tutorialsdojo.com/amazon-cloudfront/
        
    
    `,
      },
      
      {
        question: `
     `,
        answers: {
          a: " ",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
        explanation: `
    
    
    `,
      },
      
      {
        question: `
     `,
        answers: {
          a: " ",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
        explanation: `
    
    
    `,
      },
      
      {
        question: `
     `,
        answers: {
          a: " ",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
        explanation: `
    
    
    `,
      },
      
      {
        question: `
     `,
        answers: {
          a: " ",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
        explanation: `
    
    
    `,
      },
      
      {
        question: `
     `,
        answers: {
          a: " ",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
        explanation: `
    
    
    `,
      },
      
      {
        question: `
     `,
        answers: {
          a: " ",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
        explanation: `
    
    
    `,
      },
      
      {
        question: `
     `,
        answers: {
          a: " ",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
        explanation: `
    
    
    `,
      },
      
      {
        question: `
     `,
        answers: {
          a: " ",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
        explanation: `
    
    
    `,
      },
      
      {
        question: `
     `,
        answers: {
          a: " ",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
        explanation: `
    
    
    `,
      },
      
      {
        question: `
     `,
        answers: {
          a: " ",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
        explanation: `
    
    
    `,
      },
      
      {
        question: `
     `,
        answers: {
          a: " ",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
        explanation: `
    
    
    `,
      },
      
      {
        question: `
     `,
        answers: {
          a: " ",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
        explanation: `
    
    
    `,
      },
      
      {
        question: `
     `,
        answers: {
          a: " ",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
        explanation: `
    
    
    `,
      },
      


      


]
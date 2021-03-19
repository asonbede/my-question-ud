const solArcJonBon2= [  

{
        question: `
A company installed sensors to track the number of people who visit the park.
The data is sent every day to an Amazon Kinesis stream with tault settings 
for processing, in which a consumer is configured to process the data every other day.
You noticed that the S3 bucket is not receiving all of the data that is being sent 
to the Kinesis stream. You checked the sensors if they are properly sending the data 
to Amazon Kinesis and verified that the data is indeed sent every day.
What could be the reason for this?
     `,
        answers: {
          a: `
          There is a problem in the sensors.
           They probably had some intermittent connection hence,
            the data is not sent to the stream
          `,
          b: `By the data records are only accessible for 24 hours  from the time the are added to the stream`,
          c: ` By default, Amazon S3 stores the data for 1 day and moves it to Amazon Glacier`,
          d: `Your AWS account was hacked and someone has deleted some data in your Kinesis stream `,
        },
        correctAnswer: "b",
        explanation: `
        Kinesis Data Streams supports changes to the data record retention period of your stream. 
        A Kinesis data stream is an ordered sequence of data records meant to be written 
        to and read from in real-time. Data records are therefore stored in shards in your stream temporarily.

        The time period from when a record is added to when it is no longer 
        accessible is called the retention period. 
        A Kinesis data stream stores records from 24 hours by default to a maximum of 168 hours.
        
        This is the reason why there are missing data in your S3 bucket. 
        To fix this, you can either configure your sensors to send the data everyday
         instead of every other day or alternatively, 
         you can increase the retention period of your Kinesis data stream.
        
        The option that says: There is a problem in the sensors. 
        They probably had some intermittent connection hence, 
        the data is not sent to the stream is incorrect. 
        You already verified that the sensors are working as they should be hence, 
        this is not the root cause of the issue.
        
        The option that says: By default, Amazon S3 stores the data for 1 day and moves it to Amazon Glacier 
        is incorrect because by default, Amazon S3 does not store the data for 1 day only and move 
        it to Amazon Glacier.
        
        The option that says: Your AWS account was hacked and someone has deleted
         some data in your Kinesis stream is incorrect. 
         Although this could be a possibility, you should verify first if there are
          other more probable reasons for the missing data in your S3 bucket.
           Be sure to follow and apply security best practices as well to prevent being hacked by someone.
        
        By default, the data records are only accessible for 24 hours from the time
         they are added to a Kinesis stream, which depicts the root cause of this issue.
        
        
        Reference:
        
        http://docs.aws.amazon.com/streams/latest/dev/kinesis-extended-retention.html
        
        
        Check out this Amazon Kinesis Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-kinesis/
        
    
    `,
      },

{
        question: `
A company has established a dedicated network connection from its on-premises data center 
to AWS Cloud using AWS Direct Connect (DX). 
The core network services, such as the Domain Name System (DNS) service and Active Directory services, 
are all hosted on-premises. The company has new AWS accounts that will also require consistent and
 dedicated access to these network services.
Which of the following can satisfy this requirement with the LEAST amount of operational overhead and 
in a cost-effective manner?
     `,
        answers: {
          a: "Set up another Direct Connect connection for each and every new AWS account that will be added",
          b: `
          Create a new Direct Connect gateway and integrate it with the existing Direct Connect connection.
           Set up a Transit Gateway between AWS accounts and associate it with the Direct Connect gateway
          `,
          c: `Create a new AWS VPN CloudHub. Set up a Virtual Private Network (VPN) connection for additional AWS accounts`,
          d: `
          Set up a new Direct Connect gateway and integrate it with the existing Direct Connect connection. 
          Configure a VPC peering connection between AWS accounts and associate it with Direct Connect gateway
          `,
        },
        correctAnswer: "b",
        explanation: `
        Explanation

        AWS Transit Gateway provides a hub and spoke design for connecting VPCs and on-premises networks. 
        You can attach all your hybrid connectivity (VPN and Direct Connect connections) 
        to a single Transit Gateway consolidating and controlling your organization's entire AWS routing 
        configuration in one place. 
        It also controls how traffic is routed among all the connected spoke networks using route tables. 
        This hub and spoke model simplifies management and reduces operational costs because VPCs 
        only connect to the Transit Gateway to gain access to the connected networks.
        
        By attaching a transit gateway to a Direct Connect gateway using a transit virtual interface,
         you can manage a single connection for multiple VPCs or VPNs that are in the same AWS Region. 
         You can also advertise prefixes from on-premises to AWS and from AWS to on-premises.
        
        The AWS Transit Gateway and AWS Direct Connect solution simplify the management of connections 
        between an Amazon VPC and your networks over a private connection. 
        It can also minimize network costs, improve bandwidth throughput, 
        and provide a more reliable network experience than Internet-based connections.
        
        Hence, the correct answer is: Create a new Direct Connect gateway and integrate
         it with the existing Direct Connect connection. 
         Set up a Transit Gateway between AWS accounts and associate it with the Direct Connect gateway.
        
        The option that says: Set up another Direct Connect connection for each and every
         new AWS account that will be added is incorrect because this solution entails a 
         significant amount of additional cost. Setting up a single DX connection requires a 
         substantial budget and takes a lot of time to establish. It also has high
          management overhead since you will need to manage all of 
          the Direct Connect connections for all AWS accounts.
        
        The option that says: Create a new AWS VPN CloudHub. 
        Set up a Virtual Private Network (VPN) connection for 
        additional AWS accounts is incorrect because a VPN connection is not 
        capable of providing consistent and dedicated access to the on-premises network services. 
        Take note that a VPN connection traverses the public Internet and doesn't use a dedicated connection.
        
        The option that says: Set up a new Direct Connect gateway and 
        integrate it with the existing Direct Connect connection. Configure a VPC peering connection
         between AWS accounts and associate it with Direct Connect gateway is incorrect because VPC
          peering is not supported in a Direct Connect connection. 
          VPC peering does not support transitive peering relationships.
        
        
        References:
        
        https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-transit-gateways.html
        
        https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect-aws-transit-gateway.html
        
        https://aws.amazon.com/blogs/networking-and-content-delivery/integrating-sub-1-gbps-hosted-connections-with-aws-transit-gateway/
        
        
        Check out this AWS Transit Gateway Cheat Sheet:
        
        https://tutorialsdojo.com/aws-transit-gateway/
           
    
    `,
      },

      {
        question: `

An online stocks trading application that stores financial data in an S3 bucket has 
a lifecycle policy that moves older data to Glacier every month. 
There is a strict compliance requirement where a surprise audit 
can happen at anytime and you should be able to retrieve the required data in under 15 minutes 
under all circumstances. Your manager instructed you to ensure that retrieval capacity is 
available when you need it and should handle up to 150 MB/s of retrieval throughput.   
Which of the following should you do to meet the above requirement? (Select TWO.)
     `,
        answers: {
          a: "Use Expedited retrievals to access the financial data And Purchase provisioned retrival capacity",
          b: "Retrieving the data using Amazon Glacier Select",
          c: "Using Bulk Retrieval to access the financial data ",
          d: "Specifying a range, or portion, of the financial data archive to retrieve",
        },
        correctAnswer: "a",
        explanation: `
        Explanation

        Expedited retrievals allow you to quickly access your data when occasional urgent
         requests for a subset of archives are required. 
         For all but the largest archives (250 MB+), data accessed using Expedited retrievals are 
         typically made available within 1–5 minutes. 
         Provisioned Capacity ensures that retrieval capacity for Expedited retrievals is available when you need it.
        
        To make an Expedited, Standard, or Bulk retrieval, set the Tier parameter in 
        the Initiate Job (POST jobs) REST API request to the option you want, 
        or the equivalent in the AWS CLI or AWS SDKs. 
        If you have purchased provisioned capacity, then all expedited retrievals are automatically served
         through your provisioned capacity.
        
        Provisioned capacity ensures that your retrieval capacity for expedited retrievals 
        is available when you need it. Each unit of capacity provides that at least three expedited retrievals 
        can be performed every five minutes and provides up to 150 MB/s of retrieval throughput. 
        You should purchase provisioned retrieval capacity if your workload requires 
        highly reliable and predictable access to a subset of your data in minutes. 
        Without provisioned capacity Expedited retrievals are accepted, 
        except for rare situations of unusually high demand. 
        However, if you require access to Expedited retrievals under all circumstances, 
        you must purchase provisioned retrieval capacity.
        
        
        
        Retrieving the data using Amazon Glacier Select is incorrect because this is not 
        an archive retrieval option and is primarily used to perform filtering 
        operations using simple Structured Query Language (SQL) statements directly 
        on your data archive in Glacier.
        
        Using Bulk Retrieval to access the financial data is incorrect because bulk 
        retrievals typically complete within 5–12 hours hence, this does not satisfy 
        the requirement of retrieving the data within 15 minutes. 
        The provisioned capacity option is also not compatible with Bulk retrievals.
        
        Specifying a range, or portion, of the financial data archive to retrieve is incorrect 
        because using ranged archive retrievals is not enough to meet the requirement of 
        retrieving the whole archive in the given timeframe. 
        In addition, it does not provide additional retrieval capacity which is 
        what the provisioned capacity option can offer.
        
        
        References:
        
        https://docs.aws.amazon.com/amazonglacier/latest/dev/downloading-an-archive-two-steps.html
        
        https://docs.aws.amazon.com/amazonglacier/latest/dev/glacier-select.html
        
        
        Check out this Amazon S3 Glacier Cheat Sheet:
        
        https://tutorialsdojo.com/aws-cheat-sheet-amazon-glacier/
        
    
    `,
      },
      {
        question: `
        An insurance firm has an application that processes thousands of customer data stored in
        an Amazon MySQL database with Multi-AZ deployments configuration for high availability in case of downtime.
        For the past few days, you noticed an increasing trend of read and write operations,
        which is increasing the latency of the queries to your database.
        You are planning to use the standby database instance to balance 
        the read and write operations from the primary instance.
        When running your primary Amazon RDS Instance as a Multi-AZ deployment,
         can you use the standby instance for read and write operations?    
     `,
        answers: {
          a: "Only for Oracle RDB instance ",
          b: "Only for microsoft SQL based RDS",
          c: "Yes",
          d: "No",
        },
        correctAnswer: "d",
        explanation: `
        An insurance firm has an application that processes thousands of customer data stored in 
        an Amazon MySQL database with Multi-AZ deployments configuration for high availability in case of downtime.
         For the past few days, you noticed an increasing trend of read and write operations, 
         which is increasing the latency of the queries to your database. 
         You are planning to use the standby database instance to balance the read and write operations 
         from the primary instance.

        When running your primary Amazon RDS Instance as a Multi-AZ deployment, 
        can you use the standby instance for read and write operations?
        
        Explanation
        
        The answer is No. The standby instance will not perform any read and write operations while
         the primary instance is running.
        
        Multi-AZ deployments for the MySQL, MariaDB, Oracle, and PostgreSQL engines
        utilize synchronous physical replication to keep data on the standby up-to-date with the primary.
        Multi-AZ deployments for the SQL Server engine use synchronous logical replication 
        to achieve the same result, employing SQL Server-native Mirroring technology. 
        Both approaches safeguard your data in the event of a DB Instance failure or loss of an Availability Zone.
        
        If a storage volume on your primary instance fails in a Multi-AZ deployment, 
        Amazon RDS automatically initiates a failover to 
        the up-to-date standby (or to a replica in the case of Amazon Aurora). 
        Compare this to a Single-AZ deployment: in case of a Single-AZ database failure, 
        a user-initiated point-in-time-restore operation will be required. 
        This operation can take several hours to complete, 
        and any data updates that occurred after the latest 
        restorable time (typically within the last five minutes) will not be available.
        
        The rest of the options are incorrect because regardless of the database engine, 
        you cannot use a standby database for read and write operations.
        
        
        Reference:
        
        https://aws.amazon.com/rds/details/multi-az/
        
        
        Check out this Amazon RDS Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-relational-database-service-amazon-rds/
        
    
    `,
      },
      {
        question: `
A global online sports betting company has its popular web application hosted in AWS. 
They are planning to develop a new online portal for their new business venture and 
they hired you to implement the cloud architecture for a new online portal that will 
accept bets globally for world sports. 
You started to design the system with a relational database that runs on a single EC2 instance, 
which requires a single EBS volume that can support up to 30,000 IOPS.   
In this scenario, which Amazon EBS volume type can you use that will meet the performance 
requirements of this new online portal?
     `,
        answers: {
          a: "EBS Throughput Optimized HDD (st1)",
          b: "EBS Provisioned IOPS SSD (io1)",
          c: "EBS Cold HDD (sc1)",
          d: "EBS General Purpose SSD (gp2)",
        },
        correctAnswer: "b",
        explanation: `
        The scenario requires a storage type for a relational database with a high IOPS performance. 
        For these scenarios, SSD volumes are more suitable to use instead of HDD volumes. 
        Remember that the dominant performance attribute of SSD is IOPS while HDD is Throughput.

        In the exam, always consider the difference between SSD and HDD as shown on the table below. 
        This will allow you to easily eliminate specific EBS-types in the options which are not SSD or not HDD,
         depending on whether the question asks for a storage type which has small,
          random I/O operations or large, sequential I/O operations.
        
        Since the requirement is 30,000 IOPS, you have to use an EBS type of Provisioned IOPS SSD. 
        This provides sustained performance for mission-critical low-latency workloads.
         Hence, EBS Provisioned IOPS SSD (io1) is the correct answer.
        
        
        
        EBS Throughput Optimized HDD (st1) and EBS Cold HDD (sc1) are incorrect 
        because these are HDD volumes which are more suitable for large streaming 
        workloads rather than transactional database workloads.
        
        EBS General Purpose SSD (gp2) is incorrect because although a
         General Purpose SSD volume can be used for this scenario, 
         it does not provide the high IOPS required by the application,
          unlike the Provisioned IOPS SSD volume.
        
        
        Reference:
        
        https://aws.amazon.com/ebs/details/
        
        
        Check out this Amazon EBS Cheat Sheet:
        
        https://tutorialsdojo.com/aws-cheat-sheet-amazon-ebs/
        
    
    `,
      },
      {
        question: `
A travel company has a suite of web applications hosted in an Auto Scaling group 
of On-Demand EC2 instances behind an Application Load Balancer that handles traffic
 from various web domains such as i-love-manila.com, i-love-boracay.com, i-love-cebu.com and many others. 
 To improve security and lessen the overall cost, 
 you are instructed to secure the system by allowing multiple domains 
 to serve SSL traffic without the need to reauthenticate and reprovision
  your certificate everytime you add a new domain. 
  This migration from HTTP to HTTPS will help improve their SEO and Google search ranking.

Which of the following is the most cost-effective solution to meet the above requirement?
     `,
        answers: {
          a: "Using a wildcard certificate to handle multiple sub-domains and different domains ",
          b: `
          Upload all SSL certificates of the domains in the ALB using the console and
           bind multiple certificates to the same secure listener on your load balancer. 
          ALB will automatically choose the optimal TLS certificate for each client using Server Name Indication (SNI).
          `,
          c: "Adding a Subject Alternative Name (SAN) for each additional domain to your certificate ",
          d: `
          Create a new CloudFront web distribution and configure it 
          to serve HTTPS requests using dedicated IP addresses in order 
          to associate your alternate domain names with a dedicated IP address in each CloudFront edge location 
  
          `,
        },
        correctAnswer: "b",
        explanation: `
       
SNI Custom SSL relies on the SNI extension of the Transport Layer Security protocol, 
which allows multiple domains to serve SSL traffic over the same IP address by 
including the hostname which the viewers are trying to connect to.

You can host multiple TLS secured applications, each with its own TLS certificate, 
behind a single load balancer. In order to use SNI, all you need to do is 
bind multiple certificates to the same secure listener on your load balancer.
 ALB will automatically choose the optimal TLS certificate for each client. 
 These features are provided at no additional charge.



To meet the requirements in the scenario, you can upload all SSL certificates 
of the domains in the ALB using the console and bind multiple certificates to 
the same secure listener on your load balancer. ALB will automatically choose 
the optimal TLS certificate for each client using Server Name Indication (SNI).

Hence, the correct answer is the option that says: Upload all SSL certificates of 
the domains in the ALB using the console and bind multiple certificates to the
 same secure listener on your load balancer. ALB will automatically choose the
  optimal TLS certificate for each client using Server Name Indication (SNI).

Using a wildcard certificate to handle multiple sub-domains and different domains 
is incorrect because a wildcard certificate can only handle multiple sub-domains but not different domains.

Adding a Subject Alternative Name (SAN) for each additional domain to your certificate 
is incorrect because although using SAN is correct, you will still have to reauthenticate and
 reprovision your certificate every time you add a new domain.
  One of the requirements in the scenario is that you should not have to 
  reauthenticate and reprovision your certificate hence, this solution is incorrect.

The option that says: Create a new CloudFront web distribution and configure it to 
serve HTTPS requests using dedicated IP addresses in order to associate your alternate
 domain names with a dedicated IP address in each CloudFront edge location is incorrect because 
 although it is valid to use dedicated IP addresses to meet this requirement,
  this solution is not cost-effective. Remember that if you configure CloudFront to 
  serve HTTPS requests using dedicated IP addresses, you incur an additional monthly charge. 
  The charge begins when you associate your SSL/TLS certificate with your CloudFront distribution. 
  You can just simply upload the certificates to the ALB and use SNI to handle multiple domains in 
  a cost-effective manner.


References:

https://aws.amazon.com/blogs/aws/new-application-load-balancer-sni/

https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-https-dedicated-ip-or-sni.html#cnames-https-dedicated-ip

https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html


Check out this Amazon CloudFront Cheat Sheet:

https://tutorialsdojo.com/amazon-cloudfront/


SNI Custom SSL vs Dedicated IP Custom SSL:

https://tutorialsdojo.com/sni-custom-ssl-vs-dedicated-ip-custom-ssl/


Comparison of AWS Services Cheat Sheets:

https://tutorialsdojo.com/comparison-of-aws-services-for-udemy-students/

    `,
      },
      {
        question: `
A company plans to build a web architecture using On-Demand EC2 instances and a database in AWS. 
However, due to budget constraints, the company instructed the Solutions Architect 
to choose a database service in which they no longer need to worry about database management
 tasks such as hardware or software provisioning, setup, configuration, scaling, and backups.
Which of the following services should the Solutions Architect recommend?
     `,
        answers: {
          a: "Amazon DynamoDB",
          b: "Amazon RDS",
          c: "Amazon ElastiCache",
          d: "Amazon ElastiCache",
        },
        correctAnswer: "a",
        explanation: `
        Basically, a database service in which you no longer need to worry about database management
         tasks such as hardware or software provisioning, setup, and configuration is called a fully 
         managed database. This means that AWS fully manages all of the database management tasks and 
         the underlying host server. The main differentiator here is the keyword "scaling" in the question. 
         In RDS, you still have to manually scale up your resources and create Read Replicas to improve
          scalability while in DynamoDB, this is automatically done.

        Amazon DynamoDB is the best option to use in this scenario.
         It is a fully managed non-relational database service – you simply create a database table,
          set your target utilization for Auto Scaling, and let the service handle the rest.
           You no longer need to worry about database management tasks such as hardware or 
           software provisioning, setup, and configuration, software patching, operating a 
           reliable, distributed database cluster, or partitioning data over multiple instances as you scale. 
           DynamoDB also lets you backup and restore all your tables for data archival, 
           helping you meet your corporate and governmental regulatory requirements.
        
        Amazon RDS is incorrect because this is just a "managed" service and not "fully managed". 
        This means that you still have to handle the backups and other administrative tasks such as 
        when the automated OS patching will take place.
        
        Amazon ElastiCache is incorrect. Although ElastiCache is fully managed, 
        it is not a database service but an In-Memory Data Store.
        
        Amazon Redshift is incorrect. Although this is fully managed, 
        it is not a database service but a Data Warehouse.
        
        
        References:
        
        https://aws.amazon.com/dynamodb/
        
        https://aws.amazon.com/products/databases/
        
        
        Check out this Amazon DynamoDB Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-dynamodb/
        
    
    `,
      },
      {
        question: `
A company plans to set up a cloud infrastructure in AWS. In the planning, 
it was discussed that you need to deploy two EC2 instances that should continuously run for three years. 
The CPU utilization of the EC2 instances is also expected to be stable and predictable.
Which is the most cost-efficient Amazon EC2 Pricing type that is most appropriate for this scenario?
     `,
        answers: {
          a: "Reserved Instances",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "a",
        explanation: `
Reserved Instances provide you with a significant discount (up to 75%) compared to On-Demand instance pricing.
In addition, when Reserved Instances are assigned to a specific Availability Zone, 
they provide a capacity reservation,
giving you additional confidence in your ability to launch instances when you need them.

For applications that have steady state or predictable usage,
Reserved Instances can provide significant savings compared to using On-Demand instances.

Reserved Instances are recommended for:

- Applications with steady state usage

- Applications that may require reserved capacity

- Customers that can commit to using EC2 over a 1 or 3 year term to reduce their total computing costs


References:

https://aws.amazon.com/ec2/pricing/

https://aws.amazon.com/ec2/pricing/reserved-instances/


Check out this Amazon EC2 Cheat Sheet:

https://tutorialsdojo.com/amazon-elastic-compute-cloud-amazon-ec2/

    `,
      },
      {
        question: `
A Solutions Architect needs to set up a bastion host in the cheapest, most secure way. 
The Architect should be the only person that can access it via SSH.
Which of the following steps would satisfy this requirement?
     `,
        answers: {
          a: `
          Setting up a large EC2 instance and a security group which only allows access on
           port 22 via your IP address
          `,
          b: "Set up a large EC2 instance and a security group which only allows access on port 22 ",
          c: `
          Setting up a small EC2 instance and a security group which only allows access 
          on port 22 via your IP address
          `,
          d: "Set up a small EC2 instance and a security group which only allows access on port 22",
        },
        correctAnswer: "c",
        explanation: `
        A bastion host is a server whose purpose is to provide access to a private 
        network from an external network, such as the Internet. Because of its exposure to potential attack,
         a bastion host must minimize the chances of penetration.

        To create a bastion host, you can create a new EC2 instance which should only
         have a security group from a particular IP address for maximum security.
          Since the cost is also considered in the question, you should choose a small instance for your host.
           By default, t2.micro instance is used by AWS but you can change these settings during deployment.
        
        Setting up a large EC2 instance and a security group which only 
        allows access on port 22 via your IP address is incorrect because you don't
         need to provision a large EC2 instance to run a single bastion host. 
         At the same time, you are looking for the cheapest solution possible.
        
        The options that say: Set up a large EC2 instance and a security group which 
        only allows access on port 22 and Set up a small EC2 instance and a security group 
        which only allows access on port 22 are both incorrect because you 
        did not set your specific IP address to the security group rules, 
        which possibly means that you publicly allow traffic from all sources in your security group.
         This is wrong as you should only be the one to have access to the bastion host.
        
        
        References:
        
        https://docs.aws.amazon.com/quickstart/latest/linux-bastion/architecture.html
        
        https://aws.amazon.com/blogs/security/how-to-record-ssh-sessions-established-through-a-bastion-host/
        
        
        Check out this Amazon EC2 Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-elastic-compute-cloud-amazon-ec2/
        
    
    `,
      },
      {
        question: `
A Solutions Architect is working for a large IT consulting firm.
One of the clients is launching a file sharing web application in 
AWS which requires a durable storage service for hosting their static
contents such as PDFs, Word Documents, high-resolution images, and many others.
Which type of storage service should the Architect use to meet this requirement?    
     `,
        answers: {
          a: "Amazon EBS volume",
          b: "Amazon EC2 instance store",
          c: "Amazon S3",
          d: "Amazon RDS instance",
        },
        correctAnswer: "c",
        explanation: `
        Amazon S3 is storage for the Internet. 
        It’s a simple storage service that offers software developers a durable, 
        highly-scalable, reliable, and low-latency data storage infrastructure at very low costs. 
        Amazon S3 provides customers with a highly durable storage infrastructure. 
        Versioning offers an additional level of protection by providing a means 
        of recovery when customers accidentally overwrite or delete objects. 
        Remember that the scenario requires a durable storage for static content. 
        These two keywords are actually referring to S3, since it is highly durable and 
        suitable for storing static content.

        Hence, Amazon S3 is the correct answer.
    
Amazon EBS volume is incorrect because this is not as durable compared with S3.
 In addition, it is best to store the static contents in S3 rather than EBS.

Amazon EC2 instance store is incorrect because it is definitely not suitable - 
the data it holds will be wiped out immediately once the EC2 instance is restarted.

Amazon RDS instance is incorrect because an RDS instance is 
just a database and not suitable for storing static content. 
By default, RDS is not durable, unless you launch it to be in Multi-AZ deployments configuration.

 

Reference: 

https://aws.amazon.com/s3/faqs/ 

https://d1.awsstatic.com/whitepapers/Storage/AWS%20Storage%20Services%20Whitepaper-v9.pdf#page=24

 

Check out this Amazon S3 Cheat Sheet:

https://tutorialsdojo.com/amazon-s3/
    `,
      },
      {
        question: `
A Solutions Architect is working for a large insurance firm. 
To maintain compliance with HIPAA laws, all data that is backed
 up or stored on Amazon S3 needs to be encrypted at rest.
In this scenario, what is the best method of encryption for the data, 
assuming S3 is being used for storing financial-related data? (Select TWO.)
     `,
        answers: {
          a: `
          Encrypt the data using your own encryption keys then copy the data to Amazon S3 over HTTPS endpoints
          And
          Enable SSE on an S3 bucket to make use of AES-256 encryption
          `,
          b: "Storing the data in encrypted EBS snapshots",
          c: " storing the data on EBS volumes with encryption enabled instead of using Amazon S3",
          d: "Using AWS Shield to protect your data at rest",
        },
        correctAnswer: "a",
        explanation: `
        Data protection refers to protecting data while in-transit (as it travels to and from Amazon S3) and
         at rest (while it is stored on disks in Amazon S3 data centers). 
        You can protect data in transit by using SSL or by using client-side encryption.
         You have the following options for protecting data at rest in Amazon S3.

        Use Server-Side Encryption – You request Amazon S3 to encrypt your object before saving 
        it on disks in its data centers and decrypt it when you download the objects.
        
        Use Client-Side Encryption – You can encrypt data client-side and upload the encrypted data to Amazon S3. 
        In this case, you manage the encryption process, the encryption keys, and related tools.

        Hence, the following options are the correct answers:

- Enable SSE on an S3 bucket to make use of AES-256 encryption

- Encrypt the data using your own encryption keys then copy the data to Amazon S3 over HTTPS endpoints.
 This refers to using a Server-Side Encryption with Customer-Provided Keys (SSE-C).

Storing the data in encrypted EBS snapshots and storing the data on EBS volumes
 with encryption enabled instead of using Amazon S3 are both incorrect because
  all these options are for protecting your data in your EBS volumes. 
  Note that an S3 bucket does not use EBS volumes to store your data.

Using AWS Shield to protect your data at rest is incorrect because 
AWS Shield is mainly used to protect your entire VPC against DDoS attacks.


References:

https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html

https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html


Check out this Amazon S3 Cheat Sheet:

https://tutorialsdojo.com/amazon-s3/

    
    `,
      },
      {
        question: `
You are automating the creation of EC2 instances in your VPC. 
Hence, you wrote a python script to trigger the Amazon EC2 API to
 request 50 EC2 instances in a single Availability Zone. However,
  you noticed that after 20 successful requests, subsequent requests failed.
What could be a reason for this issue and how would you resolve it?
     `,
        answers: {
          a: `
          There was an issue with the Amazon EC2 API. Just resend the requests and these will be provisioned successfully
          `,
          b: `By default, AWS allows you to provision a maximum of 20 instances per region. 
          Select a different region and retry the failed request`,
          c: `
          By default, AWS allows you to provision a maximum of 20 instances per Availability Zone.
           Select a different Availability Zone and retry the failed request 
          `,
          d: `
          There is a vCPU-based On-Demand Instance limit per region which is why subsequent requests failed. 
          Just submit the limit increase form to AWS and retry the failed requests once approved.
          `,
        },
        correctAnswer: "",
        explanation: `
        You are limited to running On-Demand Instances per your vCPU-based On-Demand Instance limit, 
        purchasing 20 Reserved Instances, and requesting Spot Instances per your dynamic Spot limit per region. 
        New AWS accounts may start with limits that are lower than the limits described here.


If you need more instances, complete the Amazon EC2 limit increase request form with your use case,
 and your limit increase will be considered. Limit increases are tied to the region they were requested for.

Hence, the correct answer is: There is a vCPU-based On-Demand Instance limit per region which 
is why subsequent requests failed. Just submit the limit increase form to AWS and retry the 
failed requests once approved.

The option that says: There was an issue with the Amazon EC2 API.
 Just resend the requests and these will be provisioned successfully is incorrect 
 because you are limited to running On-Demand Instances per your vCPU-based On-Demand Instance limit. 
 There is also a limit of purchasing 20 Reserved Instances, and 
 requesting Spot Instances per your dynamic Spot limit per region hence,
  there is no problem with the EC2 API.

The option that says: By default, AWS allows you to provision a maximum of 20 instances per region.
 Select a different region and retry the failed request is incorrect. 
 There is no need to select a different region since this limit
  can be increased after submitting a request form to AWS.

The option that says: By default, AWS allows you to provision 
a maximum of 20 instances per Availability Zone. 
Select a different Availability Zone and retry the 
failed request is incorrect because the vCPU-based On-Demand Instance 
limit is set per region and not per Availability Zone. 
This can be increased after submitting a request form to AWS.


References:

https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ec2

https://aws.amazon.com/ec2/faqs/#How_many_instances_can_I_run_in_Amazon_EC2


Check out this Amazon EC2 Cheat Sheet:

https://tutorialsdojo.com/aws-cheat-sheet-amazon-elastic-compute-cloud-amazon-ec2/

    
    `,
      },
      {
        question: `
A company needs to collect gigabytes of data per second from websites and
social media feeds to gain insights on its product offerings and
continuously improve the user experience. To meet this design requirement,
you have developed an application hosted on an 
Auto Scaling group of Spot EC2 instances which processes the data and
stores the results to DynamoDB and Redshift. 
The solution should have a built-in enhanced fan-out feature.
Which fully-managed AWS service can you use to collect and process 
large streams of data records in real-time with the LEAST amount of administrative overhead?
     `,
        answers: {
          a: "Amazon Kinesis Data Streams",
          b: "Amazon S3 Access Points",
          c: "Amazon Redshift with AWS Cloud Development Kit (AWS CDK)",
          d: "Amazon Managed Streaming for Apache Kafka (Amazon MSK)",
        },
        correctAnswer: "a",
        explanation: `
Amazon Kinesis Data Streams is used to collect and process large streams of
data records in real-time. You can use Kinesis Data Streams
for rapid and continuous data intake and aggregation. 
The type of data used includes IT infrastructure log data, 
application logs, social media, market data feeds, and web clickstream data. 
Because the response time for the data intake and processing is in real-time, 
the processing is typically lightweight.

The following diagram illustrates the high-level architecture of Kinesis Data Streams.
The producers continually push data to Kinesis Data Streams,
 and the consumers process the data in real-time. 
Consumers (such as a custom application running on Amazon EC2 or an 
Amazon Kinesis Data Firehose delivery stream) can store their results using an AWS service
such as Amazon DynamoDB, Amazon Redshift, or Amazon S3.


Hence, the correct answer is: Amazon Kinesis Data Streams.

Amazon S3 Access Points is incorrect because this is mainly used to manage access of your S3 objects.
 Amazon S3 access points are named network endpoints that are attached to buckets that you
  can use to perform S3 object operations, such as uploading and retrieving objects.

Amazon Redshift with AWS Cloud Development Kit (AWS CDK) is incorrect because 
this is mainly used for data warehousing making it simple and cost-effective to
 analyze your data across your data warehouse and data lake. Again, it does not meet 
 the requirement of being able to collect and process large streams of data in real-time. 
 Using the AWS Cloud Development Kit (AWS CDK) with Amazon Redshift still won't satisfy this requirement.

Amazon Managed Streaming for Apache Kafka (Amazon MSK) is incorrect.
 Although you can process streaming data in real-time with Amazon MSK,
  this service still entails a lot of administrative overhead, unlike Amazon Kinesis. 
  Moreover, it doesn't have a built-in enhanced fan-out feature as required in the scenario.


References:

https://docs.aws.amazon.com/streams/latest/dev/introduction.html

https://aws.amazon.com/kinesis/


Check out this Amazon Kinesis Cheat Sheet:

https://tutorialsdojo.com/amazon-kinesis/


Tutorials Dojo's AWS Certified Solutions Architect Associate Exam Study Guide:

https://tutorialsdojo.com/aws-certified-solutions-architect-associate/

`,
      },
      {
        question: `
A Solutions Architect needs to deploy a mobile application that can collect
 votes for a popular singing competition. Millions of users from around 
 the world will submit votes using their mobile phones. 
 These votes must be collected and stored in a highly scalable and
highly available data store which will be queried for real-time ranking.
Which of the following combination of services should the architect use to meet this requirement?
     `,
        answers: {
          a: "Amazon Redshift and AWS Mobile Hub",
          b: "Amazon Relational Database Service (RDS) and Amazon MQ",
          c: "Amazon Aurora and Amazon Cognito",
          d: "Amazon DynamoDB And Amazon AppSync",
        },
        correctAnswer: "d",
        explanation: `
        When the word durability pops out, the first service that should come to your mind is Amazon S3. 
        Since this service is not available in the answer options,
         we can look at the other data store available which is Amazon DynamoDB.

         DynamoDB is durable, scalable, and highly available data store which can be used for real-time tabulation.
          You can also use AppSync with DynamoDB to make it easy for you to build 
          collaborative apps that keep shared data updated in real time.
           You just specify the data for your app with simple code statements and 
           AWS AppSync manages everything needed to keep the app data updated in real time. 
           This will allow your app to access data in Amazon DynamoDB, 
           trigger AWS Lambda functions, or run Amazon Elasticsearch queries and
            combine data from these services to provide the exact data you need for your app.

         Amazon Redshift and AWS Mobile Hub are incorrect as Amazon Redshift is mainly 
         used as a data warehouse and for online analytic processing (OLAP). 
         Although this service can be used for this scenario, 
         DynamoDB is still the top choice given its better durability and scalability.
         
         Amazon Relational Database Service (RDS) and Amazon MQ and Amazon Aurora and Amazon 
         Cognito are possible answers in this scenario, however,
          DynamoDB is much more suitable for simple mobile apps that do 
          not have complicated data relationships compared with enterprise web applications. 
          It is stated in the scenario that the mobile app will be used from around the world,
           which is why you need a data storage service which can be supported globally. 
           It would be a management overhead to implement multi-region deployment 
           for your RDS and Aurora database instances compared to using the Global table feature of DynamoDB.
         
         
         References:
         
         https://aws.amazon.com/dynamodb/faqs/
         
         https://aws.amazon.com/appsync/
         
         
         Check out this Amazon DynamoDB Cheat Sheet:
         
         https://tutorialsdojo.com/amazon-dynamodb/
         
         
         Tutorials Dojo's AWS Certified Solutions Architect Associate Exam Study Guide:
         
         https://tutorialsdojo.com/aws-certified-solutions-architect-associate/
         
    
    `,
      },
      {
        question: `
     `,
        answers: {
          a: `
 Each subnet maps to a single Availability Zone.
And
Every subnet that you create is automatically associated with the main route table for the VPC.
          `,
          b: "EC2 instances in a private subnet can communicate with the Internet only if they have an Elastic IP",
          c: "The allowed block size in VPC is between a /16 netmask (65,536 IP addresses) and /27 netmask (16 IP addresses)",
          d: "Each subnet spans to 2 Availability Zones ",
        },
        correctAnswer: "a",
        explanation: `
        A VPC spans all the Availability Zones in the region. 
        After creating a VPC, you can add one or more subnets in each Availability Zone.
         When you create a subnet, you specify the CIDR block for the subnet, 
         which is a subset of the VPC CIDR block. Each subnet must reside entirely 
         within one Availability Zone and cannot span zones.
          Availability Zones are distinct locations that are engineered to be 
          isolated from failures in other Availability Zones. 
          By launching instances in separate Availability Zones, 
          you can protect your applications from the failure of a single location.

          Each subnet maps to a single Availability Zone.

          - Every subnet that you create is automatically associated with the main route table for the VPC.
          
          - If a subnet's traffic is routed to an Internet gateway, the subnet is known as a public subnet.
          
          The option that says: EC2 instances in a private subnet can communicate with 
          the Internet only if they have an Elastic IP is incorrect because EC2 instances 
          in a private subnet can communicate with the Internet not just by having an Elastic IP, 
          but also with a public IP address via a NAT Instance or a NAT Gateway. 
          Take note that there is a distinction between private and public IP addresses. 
          To enable communication with the Internet, a public IPv4 address is 
          mapped to the primary private IPv4 address through network address translation (NAT).
          
          The option that says: The allowed block size in VPC is 
          between a /16 netmask (65,536 IP addresses) and /27 netmask (16 IP addresses) 
          is incorrect because the allowed block 
          size in VPC is between a /16 netmask (65,536 IP addresses) and /28 
          netmask (16 IP addresses) and not /27 netmask. 
          For you to easily remember this, /27 netmask is 
          equivalent to exactly 27 IP addresses but keep in mind that the limit is until /28 netmask.
          
          The option that says: Each subnet spans to 2 Availability Zones is incorrect 
          because each subnet must reside entirely within one Availability Zone and cannot span zones.
          `,
      },
      {
        question: `
A media company recently launched their newly created web application.
 Many users tried to visit the website, but they are receiving a 503 Service Unavailable Error. 
 The system administrator tracked the EC2 instance status and 
 saw the capacity is reaching its maximum limit and unable to process all the requests. 
 To gain insights from the application's data, they need to launch a real-time analytics service.
Which of the following allows you to read records in batches?
     `,
        answers: {
          a: "Create a Kinesis Data Firehose and use AWS Lambda to read records from the data stream",
          b: "",
          c: "Create a Kinesis Data Stream and use AWS Lambda to read records from the data stream",
          d: `
          Create an Amazon S3 bucket to store the captured data and use Amazon Athena to analyze the data and Create an 
          Amazon S3 bucket to store the captured data and use Amazon Redshift Spectrum to analyze the data 
          `,
        },
        correctAnswer: "c",
        explanation: `
        Amazon Kinesis Data Streams (KDS) is a massively scalable and durable real-time data streaming service.
         KDS can continuously capture gigabytes of data per second from hundreds of thousands of sources. 
         You can use an AWS Lambda function to process records in Amazon KDS. 
         By default, Lambda invokes your function as soon as records
          are available in the stream. Lambda can process up to 10 batches in each shard simultaneously. 
          If you increase the number of 
        concurrent batches per shard, Lambda still ensures in-order processing at the partition-key level.
    
        The first time you invoke your function, AWS Lambda creates an instance of the 
        function and runs its handler method to process the event. When the function returns a response,
         it stays active and waits to process additional events. 
         If you invoke the function again while the first event is being processed, 
         Lambda initializes another instance, and the function processes the two events concurrently. 
         As more events come in, Lambda routes them to available instances and creates new instances as needed.
          When the number of requests decreases, Lambda stops unused instances 
          to free upscaling capacity for other functions.

        Since the media company needs a real-time analytics service, 
        you can use Kinesis Data Streams to gain insights from your data. 
        The data collected is available in milliseconds. 
        Use AWS Lambda to read records in batches and invoke your function to process records from the batch. 
        If the batch that Lambda reads from the stream only has one record in it,
         Lambda sends only one record to the function.
        
        Hence, the correct answer in this scenario is: 
        Create a Kinesis Data Stream and use AWS Lambda to read records from the data stream.
        
        The option that says: Create a Kinesis Data Firehose and use
         AWS Lambda to read records from the data stream is incorrect. 
         Although Amazon Kinesis Data Firehose captures and loads data in near real-time,
          AWS Lambda can't be set as its destination. 
          You can write Lambda functions and integrate it with Kinesis Data Firehose to request additional,
           customized processing of the data before it is sent downstream. 
           However, this integration is primarily used for
            stream processing and not the actual consumption of the data stream. 
            You have to use a Kinesis Data Stream in this scenario.
        
        The options that say: Create an Amazon S3 bucket to store the captured 
        data and use Amazon Athena to analyze the data and Create 
        an Amazon S3 bucket to store the captured data and use Amazon Redshift 
        Spectrum to analyze the data are both incorrect. 
        As per the scenario, the company needs a real-time analytics service that can ingest and process data. 
        You need to use Amazon Kinesis to process the data in real-time.
        
        
        References:
        
        https://aws.amazon.com/kinesis/data-streams/
        
        https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html
        
        https://aws.amazon.com/premiumsupport/knowledge-center/503-error-classic/
        
        
        
        Check out this Amazon Kinesis Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-kinesis/   
    `,
      },
      {
        question: `
A company plans to migrate all their files to Amazon Web Services. 
The Solutions Architect is instructed to set up a document
storage system using S3 for all of the engineering files.
In Amazon S3, which of the following statements are true?   
     `,
        answers: {
          a: "The largest object that can be uploaded in a single PUT is 5 TB ",
          b: `
          The total volume of data and number of objects you can store are unlimited.
         And
        The largest object that can be uploaded in a single PUT is 5 GB.
          `,
          c: `
          S3 is an object storage service that provides file system access 
          semantics (such as strong consistency and file locking), and concurrently-accessible storage
          `,
          d: "You can only store ZIP or TAR files in S3",
        },
        correctAnswer: "b",
        explanation: `
        The correct answers are:

        - The total volume of data and number of objects you can store are unlimited.
        
        - The largest object that can be uploaded in a single PUT is 5 GB.
        
        
        The option that says: The largest object that can be uploaded in
         a single PUT is 5 TB is incorrect as the largest object that can 
         be uploaded in a single PUT is 5 GB and not 5 TB.
          Remember that the upload limit depends on whether
           you upload an object using a single PUT operation or via Multipart Upload. 
           The largest object that can be uploaded in a single PUT is 5 GB. 
           Please take note the phrase "... in a single PUT". 
           If you are using the multipart upload API, then the limit is 5 TB.
        
        The option that says: S3 is an object storage service that provides 
        file system access semantics (such as strong consistency and file locking), 
        and concurrently-accessible storage is incorrect because although S3 
        is indeed an object storage service, it does not provide file system access semantics. 
        EFS provides this feature but not S3.
        
        The option that says: You can only store ZIP or 
        TAR files in S3 is incorrect as you can store virtually any kind of data in any format in S3.
        
        
        References:
        
        https://aws.amazon.com/s3/faqs/
        
        https://docs.aws.amazon.com/AmazonS3/latest/dev/UploadingObjects.html
        
        
        Check out this Amazon S3 Cheat Sheet:
        
        https://tutorialsdojo.com/amazon-s3/
    
    `,
      },
      {
        question: `
A company has a decoupled application in AWS using EC2, Auto Scaling group, S3, and SQS. 
The Solutions Architect designed the architecture in such a way that the EC2 
instances will consume the message from the SQS queue and will automatically 
scale up or down based on the number of messages in the queue.
In this scenario, which of the following statements is false about SQS?
     `,
        answers: {
          a: "Standard queue provides at least once delivery which means that each message is delivered at least once ",
          b: "Standard queues preserve the order of messages",
          c: "Amazon SQS can help you build distributed application with decoupled component",
          d: "FIFO queues provides exactly-once processing",
        },
        correctAnswer: "b",
        explanation: `
        All of the answers are correct except for the option that says:
         Standard queues preserve the order of messages. 
        Only FIFO queues can preserve the order of messages and not standard queues.
    
    `,
      },
      {
        question: `
     `,
        answers: {
          a: " ",
          b: "",
          c: `
Go to the AWS Reserved Instance Marketplace and sell the Reserved instances.
   And
Terminate the Reserved instances as soon as possible to avoid getting billed at the on-demand price when it expires.
          `,
          d: "",
        },
        correctAnswer: "c",
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
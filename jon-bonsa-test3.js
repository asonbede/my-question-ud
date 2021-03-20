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
        A large financial firm in the country has an AWS environment that contains
         several Reserved EC2 instances hosting a web application that has been decommissioned last week.
          To save costs, you need to stop incurring charges for the Reserved instances as soon as possible.

        What cost-effective steps will you take in this circumstance?    
     `,
        answers: {
          a: "Stopping the Reserved instances as soon as possible",
          b: "Contacting AWS to cancel your AWS subscription",
          c: `
Go to the AWS Reserved Instance Marketplace and sell the Reserved instances.
   And
Terminate the Reserved instances as soon as possible to avoid getting billed at the on-demand price when it expires.
          `,
          d: "Going to the Amazon.com online shopping website and selling the Reserved instances",
        },
        correctAnswer: "c",
        explanation: `
        The Reserved Instance Marketplace is a platform that supports the sale of 
        third-party and AWS customers' unused Standard Reserved Instances, 
        which vary in terms of lengths and pricing options. For example, 
        you may want to sell Reserved Instances after moving instances to a new AWS region,
         changing to a new instance type, ending projects before the term expiration, 
         when your business needs change, or if you have unneeded capacity.

         Hence, the correct answers are:

- Go to the AWS Reserved Instance Marketplace and sell the Reserved instances.

- Terminate the Reserved instances as soon as possible to avoid getting billed at the on-demand price 
when it expires.

Stopping the Reserved instances as soon as possible is incorrect because a stopped instance can still be restarted.
 Take note that when a Reserved Instance expires, any instances that were covered by the Reserved Instance 
 are billed at the on-demand price which costs significantly higher. 
 Since the application is already decommissioned, there is no point of keeping the unused instances.
It is also possible that there are associated Elastic IP addresses,
which will incur charges if they are associated with stopped instances

Contacting AWS to cancel your AWS subscription is incorrect as you don't need to close down your AWS account.

Going to the Amazon.com online shopping website and selling the 
Reserved instances is incorrect as you have to use AWS Reserved Instance Marketplace to sell your instances.


References:

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html


Check out this Amazon EC2 Cheat Sheet:

https://tutorialsdojo.com/amazon-elastic-compute-cloud-amazon-ec2/

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
        A data analytics company is setting up an innovative checkout-free grocery store. 
        Their Solutions Architect developed a real-time monitoring application 
        that uses smart sensors to collect the items that the customers
         are getting from the grocery’s refrigerators and shelves then automatically deduct it from their accounts.
          The company wants to analyze the items that are frequently being bought and 
          store the results in S3 for durable storage to determine the purchase behavior of its customers.

        What service must be used to easily capture, transform, and 
        load streaming data into Amazon S3, Amazon Elasticsearch Service, and Splunk?
     `,
        answers: {
          a: "Amazon SQS ",
          b: "Amazon Redshift",
          c: "Amazon Kinesis Data Firehose.",
          d: "Amazon Kinesis",
        },
        correctAnswer: "c",
        explanation: `
        Amazon Kinesis Data Firehose is the easiest way to load streaming data into data stores 
        and analytics tools. It can capture, transform, and load streaming data into Amazon S3,
         Amazon Redshift, Amazon Elasticsearch Service, and Splunk,
          enabling near real-time analytics with existing business intelligence tools and 
          dashboards you are already using today.

        It is a fully managed service that automatically scales to match the throughput
         of your data and requires no ongoing administration. It can also batch, compress, 
         and encrypt the data before loading it, minimizing the amount of storage used at 
         the destination and increasing security.
        
        In the diagram below, you gather the data from your smart refrigerators and 
        use Kinesis Data firehouse to prepare and load the data. 
        S3 will be used as a method of durably storing the data for 
        analytics and the eventual ingestion of data for output using analytical tools.
        
        You can use Amazon Kinesis Data Firehose in conjunction with Amazon Kinesis Data Streams
         if you need to implement real-time processing of streaming big data. 
         Kinesis Data Streams provides an ordering of records, 
         as well as the ability to read and/or replay records in the same order 
         to multiple Amazon Kinesis Applications. 
         The Amazon Kinesis Client Library (KCL) delivers all records for 
         a given partition key to the same record processor,
          making it easier to build multiple applications reading 
          from the same Amazon Kinesis data stream (for example, to perform counting, aggregation, and filtering).

        Amazon Simple Queue Service (Amazon SQS) is different from Amazon Kinesis Data Firehose.
         SQS offers a reliable, highly scalable hosted queue for storing messages
          as they travel between computers.
           Amazon SQS lets you easily move data between distributed application 
           components and helps you build applications in which messages 
           are processed independently (with message-level ack/fail semantics), 
           such as automated workflows. Amazon Kinesis Data Firehose is primarily used to load 
           streaming data into data stores and analytics tools.
        
        Hence, the correct answer is: Amazon Kinesis Data Firehose.
        
        Amazon Kinesis is incorrect because this is the streaming data platform of AWS and 
        has four distinct services under it: Kinesis Data Firehose, Kinesis Data Streams, 
        Kinesis Video Streams, and Amazon Kinesis Data Analytics.
         For the specific use case just as asked in the scenario, use Kinesis Data Firehose.
        
        Amazon Redshift is incorrect because this is mainly used for data 
        warehousing making it simple and cost-effective to analyze your data
         across your data warehouse and data lake. It does not meet the requirement
          of being able to load and stream data into data stores for analytics. 
          You have to use Kinesis Data Firehose instead.
        
        Amazon SQS is incorrect because you can't capture, transform, and 
        load streaming data into Amazon S3, Amazon Elasticsearch Service, 
        and Splunk using this service. You have to use Kinesis Data Firehose instead.
        
        
        References:
        
        https://aws.amazon.com/kinesis/data-firehose/
        
        https://aws.amazon.com/kinesis/data-streams/faqs/
         
    
    `,
      },
      {
        question: `
A company is deploying a Microsoft SharePoint Server environment on AWS using CloudFormation.
 The Solutions Architect needs to install and configure the architecture 
 that is composed of Microsoft Active Directory (AD) domain controllers,
  Microsoft SQL Server 2012, multiple Amazon EC2 instances to host the Microsoft SharePoint Server and 
  many other dependencies. The Architect needs to ensure that the required 
  components are properly running before the stack creation proceeds.

Which of the following should the Architect do to meet this requirement?
     `,
        answers: {
          a: `
          onfigure a CreationPolicy attribute to the instance in the CloudFormation template.
           Send a success signal after the applications are
           installed and configured using the cfn-signal helper script
          `,
          b: `
          Configure the DependsOn attribute in the CloudFormation template. 
          Send a success signal after the applications are installed and configured using the cfn-init helper script 
          `   ,
          c: `
          Configure a UpdatePolicy attribute to the instance in the CloudFormation template. 
          Send a success signal after
           the applications are installed and configured using the cfn-signal helper script
          `,
          d: `
          Configure the UpdateReplacePolicy attribute in the CloudFormation template. 
          Send a success signal after the applications are installed and configured using the cfn-signal helper script
          `,
        },
        correctAnswer: "a",
        explanation: `
        You can associate the CreationPolicy attribute with a resource to prevent its status
         from reaching create complete until AWS CloudFormation receives a 
         specified number of success signals or the timeout period is exceeded.
         To signal a resource, you can use the cfn-signal helper script or SignalResource API.
          AWS CloudFormation publishes valid signals to the stack events
           so that you track the number of signals sent.

        The creation policy is invoked only when AWS CloudFormation creates the associated resource.
         Currently, the only AWS CloudFormation resources that support
          creation policies are AWS::AutoScaling::AutoScalingGroup, AWS::EC2::Instance,
           and AWS::CloudFormation::WaitCondition.
    
           Use the CreationPolicy attribute when you want to wait on resource 
           configuration actions before stack creation proceeds. For example, 
           if you install and configure software applications on an EC2 instance,
            you might want those applications to be running before proceeding. 
            In such cases, you can add a CreationPolicy attribute to the instance, 
            and then send a success signal to the instance after the applications are installed and configured.

           Hence, the option that says: Configure a CreationPolicy attribute to the 
           instance in the CloudFormation template. Send a success signal after the 
           applications are installed and configured using the cfn-signal helper script is correct.
           
           The option that says: Configure the DependsOn attribute in the CloudFormation template. 
           Send a success signal after the applications are installed and 
           configured using the cfn-init helper script is incorrect 
           because the cfn-init helper script is not suitable to be used to signal another resource.
            You have to use cfn-signal instead. And although you can use the DependsOn 
            attribute to ensure the creation of a specific resource follows another,
             it is still better to use the CreationPolicy attribute instead as it
              ensures that the applications are properly running before the stack creation proceeds.
           
           The option that says: Configure a UpdatePolicy attribute to the
            instance in the CloudFormation template. Send a success signal after
             the applications are installed and configured using the cfn-signal helper
              script is incorrect because the UpdatePolicy attribute is primarily 
              used for updating resources and for stack update rollback operations.
           
           The option that says: Configure the UpdateReplacePolicy attribute in the CloudFormation template. 
           Send a success signal after the applications are installed and configured 
           using the cfn-signal helper script is incorrect because the UpdateReplacePolicy 
           attribute is primarily used to retain or in some cases, back up the existing 
           physical instance of a resource when it is replaced during a stack update operation.
           
           
           References:
           
           https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-creationpolicy.html
           
           https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/deploying.applications.html#deployment-walkthrough-cfn-signal
           
           https://aws.amazon.com/blogs/devops/use-a-creationpolicy-to-wait-for-on-instance-configurations/
           
           
           Check out this AWS CloudFormation Cheat Sheet:
           
           https://tutorialsdojo.com/aws-cheat-sheet-aws-cloudformation/
                
    `,
      },
      {
        question: `
        A company is using Amazon VPC that has a CIDR block of 10.31.0.0/27< that is connected 
        to the on-premises data center. There was a requirement to create a Lambda function that 
        will process massive amounts of cryptocurrency transactions every minute and then store
         the results to EFS. After setting up the serverless architecture and 
         connecting the Lambda function to the VPC, the Solutions Architect noticed an 
         increase in invocation errors with EC2 error types such as EC2ThrottledException at certain 
         times of the day.

        Which of the following are the possible causes of this issue?

     `,
        answers: {
          a: `
          You only specified one subnet in your Lambda function configuration. 
          That single subnet runs out of available IP addresses and there is no other 
          subnet or Availability Zone which can handle the peak load.
         And
         Your VPC does not have sufficient subnet ENIs or subnet IPs.
          `,
          b: " Your VPC does not have a NAT gateway",
          c: "The associated security group of your function does not allow outbound connections",
          d: "The attached IAM execution role of your function does not have the necessary permissions to access the resources of your VPC",
        },
        correctAnswer: "a",
        explanation: `
        You can configure a function to connect to a virtual private cloud (VPC) in your account.
         Use Amazon Virtual Private Cloud (Amazon VPC) to create a private network for resources such as databases,
          cache instances, or internal services. Connect your function 
          to the VPC to access private resources during execution.

        AWS Lambda runs your function code securely within a VPC by default. 
        However, to enable your Lambda function to access resources inside your private VPC, 
        you must provide additional VPC-specific configuration information
         that includes VPC subnet IDs and security group IDs.
          AWS Lambda uses this information to set up
           elastic network interfaces (ENIs) that enable your function to connect securely 
           to other resources within your private VPC.
        
        Lambda functions cannot connect directly to a VPC with dedicated instance tenancy. 
        To connect to resources in a dedicated VPC, peer it to a second VPC with default tenancy.
        
        Your Lambda function automatically scales based on the number of events it processes. 
        If your Lambda function accesses a VPC, you must make sure 
        that your VPC has sufficient ENI capacity to support the scale requirements of your Lambda function.
         It is also recommended that you specify at least one subnet 
         in each Availability Zone in your Lambda function configuration.
        
        By specifying subnets in each of the Availability Zones,
         your Lambda function can run in another Availability Zone if one goes down or runs out of IP addresses.
          If your VPC does not have sufficient ENIs or subnet IPs, 
          your Lambda function will not scale as requests increase, 
          and you will see an increase in invocation errors with EC2 error types like EC2ThrottledException. 
          For asynchronous invocation, if you see an increase in errors without corresponding CloudWatch Logs, 
          invoke the Lambda function synchronously in the console to get the error responses.
        
        Hence, the correct answers for this scenario are:
        
        - You only specified one subnet in your Lambda function configuration. 
        That single subnet runs out of available IP addresses and 
        there is no other subnet or Availability Zone which can handle the peak load.
        
        - Your VPC does not have sufficient subnet ENIs or subnet IPs.
    
    `,
      },
      {
        question: `
A tech startup is launching an on-demand food delivery platform using Amazon ECS cluster 
with an AWS Fargate serverless compute engine and Amazon Aurora. 
It is expected that the database read queries will significantly increase in the coming weeks ahead. 
A Solutions Architect recently launched two Read Replicas to the database cluster 
to improve the platform's scalability.

Which of the following is the MOST suitable configuration that the Architect 
should implement to load balance all of the incoming read requests equally to the two Read Replicas?
     `,
        answers: {
          a: "Use the built-in Cluster endpoint of the Amazon Aurora database is ",
          b: `Create a new Network Load Balancer to evenly distribute 
          the read queries to the Read Replicas of the Amazon Aurora database `,
          c: "Enable Amazon Aurora Parallel Query",
          d: "use the built-in Reader endpoint of the Amazon Aurora database.",
        },
        correctAnswer: "a",
        explanation: `

Amazon Aurora typically involves a cluster of DB instances instead of a single instance.
 Each connection is handled by a specific DB instance. When you connect to an Aurora cluster, 
 the hostname and port that you specify point to an intermediate handler called an endpoint.
  Aurora uses the endpoint mechanism to abstract these connections. 
  Thus, you don't have to hardcode all the hostnames or write your own 
  logic for load-balancing and rerouting connections when some DB instances aren't available.

For certain Aurora tasks, different instances or groups of instances perform different roles.
 For example, the primary instance handles all data definition 
 language (DDL) and data manipulation language (DML) statements. 
 Up to 15 Aurora Replicas handle read-only query traffic.

Using endpoints, you can map each connection to the appropriate 
instance or group of instances based on your use case. For example,
 to perform DDL statements you can connect to whichever instance is the primary instance.
  To perform queries, you can connect to the reader endpoint, 
  with Aurora automatically performing load-balancing among all the Aurora Replicas. 
  For clusters with DB instances of different capacities or configurations,
   you can connect to custom endpoints associated with different subsets of DB instances. 
   For diagnosis or tuning, you can connect to a specific instance 
   endpoint to examine details about a specific DB instance.



A reader endpoint for an Aurora DB cluster provides load-balancing 
support for read-only connections to the DB cluster. Use the reader endpoint for read operations, such as queries.
 By processing those statements on the read-only Aurora Replicas, 
 this endpoint reduces the overhead on the primary instance. 
 It also helps the cluster to scale the capacity to handle simultaneous SELECT queries, 
 proportional to the number of Aurora Replicas in the cluster.
  Each Aurora DB cluster has one reader endpoint.

If the cluster contains one or more Aurora Replicas, 
the reader endpoint load-balances each connection request among the Aurora Replicas. 
In that case, you can only perform read-only statements such as SELECT in that session. 
If the cluster only contains a primary instance and no Aurora Replicas, 
the reader endpoint connects to the primary instance. 
In that case, you can perform write operations through the endpoint.

Hence, the correct answer is to use the built-in Reader endpoint of the Amazon Aurora database.

The option that says: Use the built-in Cluster endpoint of the
 Amazon Aurora database is incorrect because a 
 cluster endpoint (also known as a writer endpoint) simply connects 
 to the current primary DB instance for that DB cluster. 
 This endpoint can perform write operations in the database such as DDL statements, 
 which is perfect for handling production traffic but not suitable 
 for handling queries for reporting since there will be no write database operations that will be sent.

The option that says: Enable Amazon Aurora Parallel Query is incorrect because
 this feature simply enables Amazon Aurora to push down and distribute 
 the computational load of a single query across thousands of CPUs in Aurora's storage layer. 
 Take note that it does not load balance all of the incoming read requests equally to the two Read Replicas. 
 With Parallel Query, query processing is pushed down to the Aurora storage layer. 
 The query gains a large amount of computing power, and 
 it needs to transfer far less data over the network. 
 In the meantime, the Aurora database instance can continue 
 serving transactions with much less interruption. 
 This way, you can run transactional and analytical workloads alongside 
 each other in the same Aurora database, while maintaining high performance.

The option that says: Create a new Network Load Balancer to evenly distribute the 
read queries to the Read Replicas of the Amazon Aurora database is incorrect because 
a Network Load Balancer is not the suitable service/component to 
use for this requirement since an NLB is primarily used to distribute traffic to servers, not Read Replicas. 
You have to use the built-in Reader endpoint of the Amazon Aurora database instead.


References:

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.html

https://aws.amazon.com/rds/aurora/parallel-query/


Check out this Amazon Aurora Cheat Sheet:

https://tutorialsdojo.com/amazon-aurora/

    
    
    `,
      },
      {
        question: `
    A company has clients all across the globe that access product files stored in several S3 buckets,
     which are behind each of their own CloudFront web distributions. 
     They currently want to deliver their content to a specific client, 
     and they need to make sure that only that client can access the data. 
     Currently, all of their clients can access their S3 buckets directly using 
     an S3 URL or through their CloudFront distribution. The Solutions Architect 
     must serve the private content via CloudFront only, to secure the distribution of files.

    Which combination of actions should the Architect implement to meet the above requirements?  
     `,
        answers: {
          a: `
Restrict access to files in the origin by creating an origin access identity (OAI) and
 give it permission to read the files in the bucket.
AND
- Require the users to access the private content by using special CloudFront signed URLs or signed cookies.
          `,
          b: "Use AWS App Mesh to ensure that only their client can access the files",
          c: "Use AWS Cloud Map to ensure that only their client can access the files",
          d: `Use S3 pre-signed URLs to ensure that only their client can access the files. 
          Remove permission to use Amazon S3 URLs to read the files for anyone else`,
        },
        correctAnswer: "a",
        explanation: `
        Many companies that distribute content over the Internet want to restrict access to documents, 
        business data, media streams, or content that is intended for selected users, for example, 
        users who have paid a fee. To securely serve this private content by using CloudFront, 
        you can do the following:

        - Require that your users access your private content by using special 
        CloudFront signed URLs or signed cookies.
        
        - Require that your users access your Amazon S3 content by using CloudFront URLs, 
        not Amazon S3 URLs. Requiring CloudFront URLs isn't necessary, 
        but it is recommended to prevent users from bypassing the restrictions that 
        you specify in signed URLs or signed cookies. 
        You can do this by setting up an origin access identity (OAI) for your Amazon S3 bucket. 
        You can also configure the custom headers for a private HTTP server or
         an Amazon S3 bucket configured as a website endpoint.
        
        All objects and buckets by default are private. 
        The pre-signed URLs are useful if you want your user/customer to be able 
        to upload a specific object to your bucket, but you don't require them to have
         AWS security credentials or permissions. You can generate 
         a pre-signed URL programmatically using the AWS SDK for Java or 
         the AWS SDK for .NET. If you are using Microsoft Visual Studio, 
         you can also use AWS Explorer to generate a pre-signed object URL without writing any code. 
         Anyone who receives a valid pre-signed URL can then programmatically upload an object.
        

         Hence, the correct answers are:

         - Restrict access to files in the origin by creating an origin access identity (OAI) and 
         give it permission to read the files in the bucket.
         
         - Require the users to access the private content by using special CloudFront signed URLs or 
         signed cookies.
         
         The option that says: Use AWS App Mesh to ensure that only their client
          can access the files is incorrect because AWS App Mesh is just a service
           mesh that provides application-level networking to make it easy for your 
           services to communicate with each other across multiple types of compute infrastructure.
         
         The option that says: Use AWS Cloud Map to ensure that only their client can access 
         the files is incorrect because AWS Cloud Map is simply a cloud resource discovery 
         service that enables you to name your application resources with custom names and
          automatically update the locations of your dynamically changing resources.
         
         The option that says: Use S3 pre-signed URLs to ensure that only their client can access the files.
          Remove permission to use Amazon S3 URLs to read the files for anyone else is incorrect.
           Although this could be a valid solution, it doesn't satisfy the requirement 
           to serve the private content via CloudFront only to secure the distribution of files. 
           A better solution is to set up an origin access identity (OAI) then use Signed URL or
            Signed Cookies in your CloudFront web distribution.
         
         
         References:
         
         https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html
         
         https://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html
         
         
         Check out this Amazon CloudFront cheat sheet:
         
         https://tutorialsdojo.com/amazon-cloudfront/
         
         
         S3 Pre-signed URLs vs CloudFront Signed URLs vs Origin Access Identity (OAI)
         
         https://tutorialsdojo.com/s3-pre-signed-urls-vs-cloudfront-signed-urls-vs-origin-access-identity-oai/
         
         
         Comparison of AWS Services Cheat Sheets:
         
         https://tutorialsdojo.com/comparison-of-aws-services/
         
         
        
         `,
      },
      {
        question: `
A company needs to use Amazon Aurora as the Amazon RDS database engine of their web application. 
The Solutions Architect has been instructed to implement a 90-day backup retention policy.
Which of the following options can satisfy the given requirement?

           `,
        answers: {
          a: "Create an AWS Backup plan to take daily snapshots with a retention period of 90 days",
          b: "Configure an automated backup and set the backup retention period to 90 days",
          c: `  Configure RDS to export the automated snapshot automatically to Amazon S3 and
          create a lifecycle policy to delete the object after 90 days`,
          d: `
          Create a daily scheduled event using CloudWatch Events and AWS Lambda 
          to directly download the RDS automated snapshot to an S3 bucket.
           Archive snapshots older than 90 days to Glacier
          `,
        },
        correctAnswer: "a",
        explanation: `
        AWS Backup is a centralized backup service that makes it easy and 
        cost-effective for you to backup your application data across AWS services in the AWS Cloud,
         helping you meet your business and regulatory backup compliance requirements.
          AWS Backup makes protecting your AWS storage volumes, databases,
           and file systems simple by providing a central place where you can 
           configure and audit the AWS resources you want to backup, 
           automate backup scheduling, set retention policies, 
        and monitor all recent backup and restore activity.

In this scenario, you can use AWS Backup to create a backup plan with a retention period of 90 days.
 A backup plan is a policy expression that defines when and how you want to back up your AWS resources.
  You assign resources to backup plans, and 
  AWS Backup then automatically backs up and 
  retains backups for those resources according to the backup plan.

Hence, the correct answer is: Create an AWS Backup plan to take daily 
snapshots with a retention period of 90 days.

The option that says: Configure an automated backup and 
set the backup retention period to 90 days is incorrect because 
the maximum backup retention period for automated backup is only 35 days.

The option that says: Configure RDS to export the automated snapshot automatically 
to Amazon S3 and create a lifecycle policy to delete the object 
after 90 days is incorrect because you can't export an automated snapshot automatically to Amazon S3. 
You must export the snapshot manually.

The option that says: Create a daily scheduled event using CloudWatch Events and 
AWS Lambda to directly download the RDS automated snapshot to an S3 bucket. 
Archive snapshots older than 90 days to Glacier is incorrect because you cannot 
directly download or export an automated snapshot in RDS to Amazon S3. 
You have to copy the automated snapshot first for it to become a manual snapshot, 
which you can move to an Amazon S3 bucket. A better solution for this scenario is to simply use AWS Backup.


References:

https://docs.aws.amazon.com/aws-backup/latest/devguide/create-a-scheduled-backup.html

https://aws.amazon.com/backup/faqs/


Check out these AWS Cheat Sheets:

https://tutorialsdojo.com/links-to-all-aws-cheat-sheets/

    
    `,
      },
      {
        question: `
        A company has a global online trading platform in which the users from all 
        over the world regularly upload terabytes of transactional data to a centralized S3 bucket.

        What AWS feature should you use in your present system to 
        improve throughput and ensure consistently fast data transfer to the Amazon S3 bucket, 
        regardless of your user's location?

     `,
        answers: {
          a: "Amazon S3 Transfer Acceleration ",
          b: "FTP",
          c: "AWS Direct Connect ",
          d: "Using CloudFront Origin Access Identity",
        },
        correctAnswer: "a",
        explanation: `
        Amazon S3 Transfer Acceleration enables fast, easy, and 
        secure transfers of files over long distances between your client and your Amazon S3 bucket.
         Transfer Acceleration leverages Amazon CloudFront’s globally distributed AWS Edge Locations. 
         As data arrives at an AWS Edge Location, 
        data is routed to your Amazon S3 bucket over an optimized network path.
    
FTP is incorrect because the File Transfer Protocol does not guarantee fast throughput and consistent, 
fast data transfer.

AWS Direct Connect is incorrect because you have users all around the world and not just
 on your on-premises data center. Direct Connect would be too 
 costly and is definitely not suitable for this purpose.

Using CloudFront Origin Access Identity is incorrect because 
this is a feature which ensures that only CloudFront can serve S3 content.
 It does not increase throughput and ensure fast delivery of content to your customers.


Reference:

http://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html


Check out this Amazon S3 Cheat Sheet:

https://tutorialsdojo.com/amazon-s3/


S3 Transfer Acceleration vs Direct Connect vs VPN vs Snowball vs Snowmobile:

https://tutorialsdojo.com/s3-transfer-acceleration-vs-direct-connect-vs-vpn-vs-snowball-vs-snowmobile/


Comparison of AWS Services Cheat Sheets:

https://tutorialsdojo.com/comparison-of-aws-services-for-udemy-students/

    `,
      },
      {
        question: `

        In Amazon EC2, you can manage your instances from the moment you launch them up to their termination. 
        You can flexibly control your computing costs by changing the EC2 instance state. 
        Which of the following statements is true regarding EC2 billing?
     `,
        answers: {
          a: `
          You will be billed when your On-Demand instance is preparing to hibernate with a stopping state
          AND
          You will be billed when your Reserved instance is in terminated state
          `,
          b: "You will be billed when your On-Demand instance is in pending state",
          c: "You will be billed when your Spot instance is preparing to stop with a stopping state",
          d: "You will not be billed for any instance usage while an instance is not in the running state",
        },
        correctAnswer: "a",
        explanation: `
        By working with Amazon EC2 to manage your instances from the moment you 
        launch them through their termination, you ensure that your customers have
         the best possible experience with the applications or sites that you host on your instances. 
         The following illustration represents the transitions between instance states.
          Notice that you can't stop and start an instance store-backed instance:

        Below are the valid EC2 lifecycle instance states:
        
        pending - The instance is preparing to enter the running state.
         An instance enters the pending state when it launches for the first time,
          or when it is restarted after being in the stopped state.
        
        running - The instance is running and ready for use.
        
        stopping - The instance is preparing to be stopped. 
        Take note that you will not billed if it is preparing to stop however, 
        you will still be billed if it is just preparing to hibernate.
        
        stopped - The instance is shut down and cannot be used. 
        The instance can be restarted at any time.
        
        shutting-down - The instance is preparing to be terminated.
        
        terminated - The instance has been permanently deleted and cannot be restarted. 
        Take note that Reserved Instances that applied to terminated instances are still billed until 
        the end of their term according to their payment option.
        
        The option that says: You will be billed when your On-Demand instance is preparing
         to hibernate with a stopping state is correct because when the instance state is stopping, 
         you will not billed if it is preparing to stop however, 
         you will still be billed if it is just preparing to hibernate.
        
        The option that says: You will be billed when your Reserved instance is 
        in terminated state is correct because 
        Reserved Instances that applied to terminated instances are
         still billed until the end of their term according to their payment option.
          I actually raised a pull-request to Amazon team about the billing conditions 
          for Reserved Instances, which has been approved and reflected on your official AWS Documentation:
           https://github.com/awsdocs/amazon-ec2-user-guide/pull/45
        
        The option that says: You will be billed when your On-Demand instance
         is in pending state is incorrect because you will not be billed if your instance is in pending state.
        
        The option that says: You will be billed when your Spot instance 
        is preparing to stop with a stopping state is incorrect because
         you will not be billed if your instance is preparing to stop with a stopping state.
        
        The option that says: You will not be billed for any instance usage while
         an instance is not in the running state is incorrect because the statement is not entirely true.
          You can still be billed if your instance is preparing to hibernate with a stopping state.
        
        
        References:
        
        https://github.com/awsdocs/amazon-ec2-user-guide/pull/45
        
        http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html
        
        
        Check out this Amazon EC2 Cheat Sheet:
        
        https://tutorialsdojo.com/aws-cheat-sheet-amazon-elastic-compute-cloud-amazon-ec2/
        
    
    `,
      },
      {
        question: `
The media company that you are working for has a video transcoding application running on Amazon EC2.
 Each EC2 instance polls a queue to find out which video should be transcoded, 
 and then runs a transcoding process. If this process is interrupted, 
 the video will be transcoded by another instance based on the queuing system. 
 This application has a large backlog of videos which need to be transcoded. 
 Your manager would like to reduce this backlog by adding more EC2 instances,
  however, these instances are only needed until the backlog is reduced.

In this scenario, which type of Amazon EC2 instance is the most cost-effective type to use?
     `,
        answers: {
          a: "Reserved instances",
          b: "Dedicated instances",
          c: "On-demand instances ",
          d: "Spot instances ",
        },
        correctAnswer: "d",
        explanation: `
You require an instance that will be used not as a primary server but as a spare compute 
resource to augment the transcoding process of your application. 
These instances should also be terminated once the backlog has been significantly reduced.
In addition, the scenario mentions that if the current process is interrupted, 
the video can be transcoded by another instance based on the queuing system.
This means that the application can gracefully handle an unexpected termination of an EC2 instance, 
like in the event of a Spot instance termination when the Spot price is greater than your set maximum price.
Hence, an Amazon EC2 Spot instance is the best and cost-effective option for this scenario.

Amazon EC2 Spot instances are spare compute capacity in 
the AWS cloud available to you at steep discounts compared to On-Demand prices.
EC2 Spot enables you to optimize your costs on the AWS cloud and 
scale your application's throughput up to 10X for the same budget. 
By simply selecting Spot when launching EC2 instances,
you can save up-to 90% on On-Demand prices.
The only difference between On-Demand instances and 
Spot Instances is that Spot instances can be interrupted 
by EC2 with two minutes of notification when the EC2 needs the capacity back. 

You can specify whether Amazon EC2 should hibernate, stop,
 or terminate Spot Instances when they are interrupted. 
 You can choose the interruption behavior that meets your needs.

Take note that there is no "bid price" anymore for Spot EC2 instances since March 2018.
 You simply have to set your maximum price instead.

Reserved instances and Dedicated instances are incorrect as both do not act as spare compute capacity.

On-demand instances is a valid option but a Spot instance is much cheaper than On-Demand. 

 

References: 

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-interruptions.html

http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/how-spot-instances-work.html

https://aws.amazon.com/blogs/compute/new-amazon-ec2-spot-pricing

 

Check out this Amazon EC2 Cheat Sheet:

https://tutorialsdojo.com/aws-cheat-sheet-amazon-elastic-compute-cloud-amazon-ec2/
    
    `,
      },
      {
        question: `
A company is hosting EC2 instances that are on non-production environment and
 processing non-priority batch loads, which can be interrupted at any time.   
What is the best instance purchasing option which can be applied to your EC2 instances in this case?  
     `,
        answers: {
          a: "Spot instances",
          b: "Reaerved instances",
          c: "on-demand instances",
          d: "Scheduled-Reserved instances",
        },
        correctAnswer: "a",
        explanation: `
        Amazon EC2 Spot instances are spare compute capacity in the AWS cloud 
        available to you at steep discounts compared to On-Demand prices. 
        It can be interrupted by AWS EC2 with two minutes of notification when the EC2 needs the capacity back.

        To use Spot Instances, you create a Spot Instance request that 
        includes the number of instances, the instance type, 
        the Availability Zone, and the maximum price that you are willing to pay per instance hour. 
        If your maximum price exceeds the current Spot price, 
        Amazon EC2 fulfills your request immediately if capacity is available. 
        Otherwise, Amazon EC2 waits until your request can be fulfilled or until you cancel the request.
        
        
        
        References:
        
        http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html
        
        https://aws.amazon.com/ec2/spot/
        
        
        Check out this Amazon EC2 Cheat Sheet:
        
        https://tutorialsdojo.com/aws-cheat-sheet-amazon-elastic-compute-cloud-amazon-ec2/
    
    `,
      },
      {
        question: `
        A company is using multiple AWS accounts that are consolidated using AWS Organizations.
         They want to copy several S3 objects to another S3 bucket 
         that belonged to a different AWS account which they also own.
          The Solutions Architect was instructed to set up the necessary
           permissions for this task and to ensure that the destination
            account owns the copied objects and not the account it was sent from.

        How can the Architect accomplish this requirement?   
     `,
        answers: {
          a: `
          Set up cross-origin resource sharing (CORS) in S3 by creating a bucket policy that allows an IAM user or
           role to copy objects from the source bucket in one account to the destination bucket in the other account
          `,
          b: `
          Connect the two S3 buckets from two different AWS accounts to Amazon WorkDocs. 
          Set up cross-account access to integrate the two S3 buckets. 
          Use the Amazon WorkDocs console to copy the objects 
          from one account to the other with modified object ownership assigned to the destination account
          `,
          c: `
          Configure cross-account permissions in S3 by creating an IAM customer-managed
           policy that allows an IAM user or role to copy objects from the source bucket
            in one account to the destination bucket in the other account.
           Then attach the policy to the IAM user or role that you want to use to copy objects between accounts
          `,
          d: `
          Enable the Requester Pays feature in the source S3 bucket. 
          The fees would be waived through Consolidated Billing since both AWS accounts are part of AWS Organizations
          `,
        },
        correctAnswer: "c",
        explanation: `
        By default, an S3 object is owned by the account that uploaded the object. 
        That's why granting the destination account the permissions to 
        perform the cross-account copy makes sure that the destination owns the copied objects.
         You can also change the ownership of an object by changing its 
         access control list (ACL) to bucket-owner-full-control.

        However, object ACLs can be difficult to manage for multiple objects, 
        so it's a best practice to grant programmatic cross-account permissions to the destination account.
         Object ownership is important for managing permissions using a bucket policy. 
         For a bucket policy to apply to an object in the bucket, 
         the object must be owned by the account that owns the bucket. 
         You can also manage object permissions using the object's ACL. 
         However, object ACLs can be difficult to manage for multiple objects,
         so it's best practice to use the bucket policy as a centralized method for setting permissions.

         To be sure that a destination account owns an S3 object 
         copied from another account, grant the destination account 
         the permissions to perform the cross-account copy. 
         Follow these steps to configure cross-account
          permissions to copy objects from a source bucket in Account A to a destination bucket in Account B:

- Attach a bucket policy to the source bucket in Account A.

- Attach an AWS Identity and Access Management (IAM) policy to a user or role in Account B.

- Use the IAM user or role in Account B to perform the cross-account copy.

Hence, the correct answer is: Configure cross-account permissions in 
S3 by creating an IAM customer-managed policy that allows an IAM user or
 role to copy objects from the source bucket in one account to the destination bucket in the other account. 
 Then attach the policy to the IAM user or role that you want to use to copy objects between accounts.

The option that says: Enable the Requester Pays feature in the source S3 bucket. 
The fees would be waived through Consolidated Billing since 
both AWS accounts are part of AWS Organizations is incorrect
 because the Requester Pays feature is primarily used if you want the requester,
  instead of the bucket owner, to pay the cost of the data transfer request and download from the S3 bucket. 
  This solution lacks the necessary IAM Permissions to satisfy the requirement. 
  The most suitable solution here is to configure cross-account permissions in S3.

The option that says: Set up cross-origin resource sharing (CORS) 
in S3 by creating a bucket policy that allows an IAM user or role 
to copy objects from the source bucket in one account to the destination 
bucket in the other account is incorrect because CORS simply defines 
a way for client web applications that are loaded in one domain to 
interact with resources in a different domain, and not on a different AWS account.

The option that says: Connect the two S3 buckets from two different AWS accounts to Amazon WorkDocs. 
Set up cross-account access to integrate the two S3 buckets. 
Use the Amazon WorkDocs console to copy the objects from one 
account to the other with modified object ownership assigned to 
the destination account is incorrect because 
Amazon WorkDocs is commonly used to easily collaborate,
 share content, provide rich feedback, and collaboratively edit documents with other users. 
 There is no direct way for you to integrate WorkDocs and an Amazon S3 bucket owned by a different AWS account. 
 A better solution here is to use cross-account permissions in S3 to meet the requirement.


References:

https://docs.aws.amazon.com/AmazonS3/latest/dev/example-walkthroughs-managing-access-example2.html

https://aws.amazon.com/premiumsupport/knowledge-center/copy-s3-objects-account/

https://aws.amazon.com/premiumsupport/knowledge-center/cross-account-access-s3/


Check out this Amazon S3 Cheat Sheet:

https://tutorialsdojo.com/amazon-s3/

    
    `,
      },
      {
        question: `
Due to the large volume of query requests, the database performance of an online
 reporting application significantly slowed down. 
 The Solutions Architect is trying to convince her client 
 to use Amazon RDS Read Replica for their application instead of setting up a Multi-AZ Deployments configuration.
What are two benefits of using Read Replicas over Multi-AZ that the Architect should point out?
     `,
        answers: {
          a: `
 - It elastically scales out beyond the capacity constraints of a single DB instance for read-heavy database workloads.
And
- Provides asynchronous replication and improves the performance of the primary database by taking read-heavy database workloads from it.
          `,
          b: `
          Allows both read and write operations on the read replica to complement the primary database
          `,
          c: `
          Provides synchronous replication and automatic failover in the case of Availability Zone service failures
          `,
          d: "It enhances the read performance of your primary database by increasing its IOPS and accelerates its query processing via AWS Global Accelerator",
        },
        correctAnswer: "a",
        explanation: `
        Amazon RDS Read Replicas provide enhanced performance and durability for database (DB) instances.
         This feature makes it easy to elastically scale out beyond 
         the capacity constraints of a single DB instance for read-heavy database workloads.

        You can create one or more replicas of a given source DB Instance and
         serve high-volume application read traffic from multiple copies of your data,
          thereby increasing aggregate read throughput. Read replicas can 
          also be promoted when needed to become standalone DB instances.
        
        For the MySQL, MariaDB, PostgreSQL, and Oracle database engines, 
        Amazon RDS creates a second DB instance using a snapshot of the source DB instance. 
        It then uses the engines' native asynchronous replication to update 
        the read replica whenever there is a change to the source DB instance.
         The read replica operates as a DB instance that allows only read-only connections; 
         applications can connect to a read replica just as they would to any DB instance.
         Amazon RDS replicates all databases in the source DB instance.

         When you create a read replica for Amazon RDS for MySQL, MariaDB, PostgreSQL, and Oracle, Amazon RDS sets up a secure communications channel using public-key encryption between the source DB instance and the read replica, even when replicating across regions. Amazon RDS establishes any AWS security configurations such as adding security group entries needed to enable the secure channel.

You can also create read replicas within a Region or between Regions for your Amazon RDS for MySQL, MariaDB, PostgreSQL, and Oracle database instances encrypted at rest with AWS Key Management Service (KMS).

Hence, the correct answers are:

- It elastically scales out beyond the capacity constraints of a 
single DB instance for read-heavy database workloads.

- Provides asynchronous replication and improves the performance of the 
primary database by taking read-heavy database workloads from it.

The option that says: Allows both read and write operations on the read replica
 to complement the primary database is incorrect as Read Replicas are 
 primarily used to offload read-only operations from the primary database instance. 
 By default, you can't do a write operation to your Read Replica.

The option that says: Provides synchronous replication and automatic failover 
in the case of Availability Zone service failures is incorrect as this is a

benefit of Multi-AZ and not of a Read Replica. Moreover, 
Read Replicas provide an asynchronous type of replication and not synchronous replication.

The option that says: It enhances the read performance of your
 primary database by increasing its IOPS and accelerates 
 its query processing via AWS Global Accelerator is incorrect because 
 Read Replicas do not do anything to upgrade or 
 increase the read throughput on the primary DB instance per se, 
 but it provides a way for your application to fetch data from replicas. 
 In this way, it improves the overall performance of your
  entire database-tier (and not just the primary DB instance).
  It doesn't increase the IOPS nor use AWS Global Accelerator to 
  accelerate the compute capacity of your primary database. 
  AWS Global Accelerator is a networking service, not related to RDS, 
  that direct user traffic to the nearest application endpoint to the client, 
  thus reducing internet latency and jitter. It simply routes the traffic 
  to the closest edge location via Anycast.


References:

https://aws.amazon.com/rds/details/read-replicas/

https://aws.amazon.com/rds/features/multi-az/


Check out this Amazon RDS Cheat Sheet:

https://tutorialsdojo.com/aws-cheat-sheet-amazon-relational-database-service-amazon-rds/


Additional tutorial - How do I make my RDS MySQL read replica writable?

https://youtu.be/j5da6d2TIPc

    
    `,
      },
      {
        question: `
        A tech company is currently using Auto Scaling for their web application.
        A new AMI now needs to be used for launching a fleet of EC2 instances.

        Which of the following changes needs to be done?   
     `,
        answers: {
          a: `
          Do nothing. You can start directly launching EC2 instances in the Auto Scaling group 
          with the same launch configuration
          `,
          b: "create a new target group ",
          c: "create a new target group and launch configuration",
          d: "Create a new launch configuration.",
        },
        correctAnswer: "d",
        explanation: `

        A launch configuration is a template that an Auto Scaling group uses to launch EC2 instances.
         When you create a launch configuration, you specify information for the instances 
         such as the ID of the Amazon Machine Image (AMI), the instance type, a key pair, 
         one or more security groups, and a block device mapping. If you've launched an EC2 instance before, 
        you specified the same information in order to launch the instance.
        You can specify your launch configuration with multiple Auto Scaling groups. 
        However, you can only specify one launch configuration for an Auto Scaling group at a time,
         and you can't modify a launch configuration after you've created it. 
         Therefore, if you want to change the launch configuration for an Auto Scaling group,
          you must create a launch configuration and then update your 
          Auto Scaling group with the new launch configuration.

        For this scenario, you have to create a new launch configuration.
         Remember that you can't modify a launch configuration after you've created it.
        
        Hence, the correct answer is: Create a new launch configuration.
        
        The option that says: Do nothing. You can start directly launching EC2 instances 
        in the Auto Scaling group with the same launch configuration is
         incorrect because what you are trying to achieve is change 
         the AMI being used by your fleet of EC2 instances.
          Therefore, you need to change the launch configuration to update what your instances are using.
        
        The option that says: create a new target group and create 
        a new target group and launch configuration are both incorrect 
        because you only want to change the AMI being used by your instances,
         and not the instances themselves. 
         Target groups are primarily used in ELBs and not in Auto Scaling. 
         The scenario didn't mention that the architecture has a load balancer. 
         Therefore, you should be updating your launch configuration, not the target group.
        
        
        References:
        
        http://docs.aws.amazon.com/autoscaling/latest/userguide/LaunchConfiguration.html
        
        https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html
        
        
        Check out this AWS Auto Scaling Cheat Sheet:
        
        https://tutorialsdojo.com/aws-cheat-sheet-aws-auto-scaling/
        
    
    `,
      },
      {
        question: `
        A company hosted a web application on a Linux Amazon EC2 instance in 
        the public subnet that uses a default network ACL. 
        The instance uses a default security group and has an attached Elastic IP address. 
        The network ACL has been configured to block all traffic to the instance. 
        The Solutions Architect must allow incoming traffic on port 443 to access the application from any source.

        Which combination of steps will accomplish this requirement?

     `,
        answers: {
          a: `
In the Security Group, add a new rule to allow TCP connection on port 443 from source 0.0.0.0/0.
And
- In the Network ACL, update the rule to allow inbound TCP connection on port 443 from source 0.0.0.0/0 and outbound TCP connection on port 32768 - 65535 to destination 0.0.0.0/0.
          `,
          b: `
          In the Security Group, create a new rule to allow TCP connection on port 443 to destination 0.0.0.0/0
          `,
          c: `
          In the Network ACL, update the rule to allow both inbound and
           outbound TCP connection on port 443 from source 0.0.0.0/0 and to destination 0.0.0.0/0
          `,
          d: `
          In the Network ACL, update the rule to allow outbound TCP connection on
           port 32768 - 65535 to destination 0.0.0.0/0
          `,
        },
        correctAnswer: "a",
        explanation: `
        To enable the connection to a service running on an instance, 
        the associated network ACL must allow both inbound traffic on 
        the port that the service is listening on as well as allow outbound traffic from ephemeral ports. 
        When a client connects to a server, a random port from the ephemeral port range (1024-65535) becomes 
        the client's source port.

        The designated ephemeral port then becomes the destination port for return traffic from the service, 
        so outbound traffic from the ephemeral port must be allowed in the network ACL.
         By default, network ACLs allow all inbound and outbound traffic.
          If your network ACL is more restrictive, then you need to explicitly allow traffic
           from the ephemeral port range.
           The client that initiates the request chooses the ephemeral port range. The range varies depending on the client's operating system.

           - Many Linux kernels (including the Amazon Linux kernel) use ports 32768-61000.
           
           - Requests originating from Elastic Load Balancing use ports 1024-65535.
           
           - Windows operating systems through Windows Server 2003 use ports 1025-5000.
           
           - Windows Server 2008 and later versions use ports 49152-65535.
           
           - A NAT gateway uses ports 1024-65535.
           
           - AWS Lambda functions use ports 1024-65535.
           
           For example, if a request comes into a web server in your VPC from 
           a Windows 10 client on the Internet, your network ACL must have an 
           outbound rule to enable traffic destined for ports 49152 - 65535. 
           If an instance in your VPC is the client initiating a request, 
           your network ACL must have an inbound rule to enable traffic destined for 
           the ephemeral ports specific to the type of instance (Amazon Linux, Windows Server 2008, and so on).
           
           In this scenario, you only need to allow the incoming traffic on port 443. 
           Since security groups are stateful, you can apply any changes to an 
           incoming rule and it will be automatically applied to the outgoing rule.
           
           To enable the connection to a service running on an instance, 
           the associated network ACL must allow both inbound traffic on the port 
           that the service is listening on as well as allow outbound traffic from ephemeral ports. 
           When a client connects to a server, a random port from the ephemeral 
           port range (32768 - 65535) becomes the client's source port.
           
           Hence, the correct answers are:
           
           - In the Security Group, add a new rule to allow TCP connection on port 443 from source 0.0.0.0/0.
           
           - In the Network ACL, update the rule to allow inbound TCP 
           connection on port 443 from source 0.0.0.0/0 and outbound TCP connection 
           on port 32768 - 65535 to destination 0.0.0.0/0.
           
           The option that says: In the Security Group, 
           create a new rule to allow TCP connection 
           on port 443 to destination 0.0.0.0/0 is incorrect because this step just allows outbound connections
            from the EC2 instance out to the public Internet which is unnecessary. 
            Remember that a default security group already includes an outbound rule 
            that allows all outbound traffic.
           
           The option that says: In the Network ACL, update the rule to 
           allow both inbound and outbound TCP 
           connection on port 443 from source 0.0.0.0/0 and to destination 0.0.0.0/0 is incorrect because 
           your network ACL must have an outbound rule to allow ephemeral ports (32768 - 65535). 
           These are the specific ports that will be used as the client's source port for the traffic response.
           
           The option that says: In the Network ACL, 
           update the rule to allow outbound TCP connection on port 32768 - 65535 to destination 0.0.0.0/0 is 
           incorrect because this step is just partially right. You still need to add an
            inbound rule from port 443 and not just the outbound rule for the ephemeral ports (32768 - 65535).
           
           
           References:
           
           https://aws.amazon.com/premiumsupport/knowledge-center/connect-http-https-ec2/
           
           https://docs.amazonaws.cn/en_us/vpc/latest/userguide/vpc-network-acls.html#nacl-ephemeral-ports
           
           
           Check out this Amazon VPC Cheat Sheet:
           
           https://tutorialsdojo.com/amazon-vpc/
           
        
    
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
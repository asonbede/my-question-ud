[

{
        question: `
        You would like to make sure your EC2 instances have
        the highest performance while talking to each other as you're performing big data analysis. 
        Which placement group should you choose?
     `,
        answers: {
          a: " cluster",
          b: "spread",
          c: "partition",
          d: "none",
        },
        correctAnswer: "a",
        explanation: `
        Cluster placement groups places your instances 
        next to each other giving you high performance computing and networking 
    `,
      },
      {
        question: `
        You plan on running an open-source MongoDB database year-round on EC2. 
        Which instance launch mode should you choose?
     `,
        answers: {
          a: "on-demand instances",
          b: "Reserved instances",
          c: "spot instances",
          d: "dedicated",
        },
        correctAnswer: "b",
        explanation: `
        This will allow you to save cost as you know in advance that the instance will be a up for a full year 
    `,
      },
      {
        question: `
You are launching an EC2 instance in us-east-1 using this Python script snippet:

(we will see SDK in a later section, for now just look at the code reference ImageId)

    ec2.create_instances(ImageId='ami-b23a5e7', MinCount=1, MaxCount=1)

It works well, so you decide to deploy your script in us-west-1 as well.
 There, the script does not work and fails with "ami not found" error. What's the problem?


     `,
        answers: {
          a: "the AMI first need to be shared to another region before the id can be used ",
          b: "AMI is region locked and the same ID cannot not be used across the regions",
          c: "none",
          d: "alll of the above",
        },
        correctAnswer: "b",
        explanation: `
    none available
    `,
      },
      {
        question: `
        You would like to deploy a database technology and the vendor license bills you 
        based on the physical cores and underlying network socket visibility.
         Which EC2 launch modes allow you to get visibility into them?
     `,
        answers: {
          a: "Reserved instances",
          b: "spot instances",
          c: "on-demand instances",
          d: "dedicated host",
        },
        correctAnswer: "d",
        explanation: `
        none available
    `,
      },
      {
        question: `
        You are launching an application on EC2 and the whole process of installing the
         application takes about 30 minutes. You would like to minimize the total time
         for your instance to boot up and be operational to serve traffic. What do you recommend?
     `,
        answers: {
          a: "install the application using EC2 user data ",
          b: "Use EC2 cluster placement group",
          c: "Create an AMI after installing the application and launch from the AMI",
          d: "none of the above",
        },
        correctAnswer: "c",
        explanation: `
    none
    `,
      },
      {
        question: `
        You are running a critical workload of three hours per week, on Monday.
         As a solutions architect, which EC2 Instance Launch Type should 
        you choose to maximize the cost savings while ensuring the application stability?
     `,
        answers: {
          a: "on-demand instances ",
          b: "spot instances",
          c: "Scheduled reserved instances",
          d: "reserved instances",
        },
        correctAnswer: "c",
        explanation: `none
    `,
      },
      {
        question: `
        You built and published an AMI in the ap-southeast-2 region,
         and your colleague in us-east-1 region cannot see it
     `,
        answers: {
          a: "There IAM permission are wrong",
          b: "You need to share the AMI with them explicitly",
          c: "AMI is wrongly configured",
          d: "an AMI created for a region can only be seen in that region",
        },
        correctAnswer: "d",
        explanation: `
    none available
    `,
      },
      {
        question: `
        Load Balancers provide a 
     `,
        answers: {
          a: "Static ipv4 we can use in our application ",
          b: "Static DNS name we can use in our application",
          c: "Static ipv6 we can use in our application",
          d: "none of the above",
        },
        correctAnswer: "b",
        explanation: `
        The reason being that AWS wants your load balancer to be accessible using a static endpoint,
         even if the underlying infrastructure that AWS manages changes
    `,
      },
      {
        question: `
        You are running a website with a load balancer and 10 EC2 instances. 
        Your users are complaining about the fact that your website always asks 
        them to re-authenticate when they switch pages. You are puzzled, because it's working just fine
         on your machine and in the dev environment with 1 server. What could be the reason? 
     `,
        answers: {
          a: "Load balancer does not have stickness enables ",
          b: "Application must have a bug",
          c: "The EC2 instance log out users because they don't see their true ip",
          d: "none of the above",
        },
        correctAnswer: "a",
        explanation: `
        Stickiness ensures traffic is sent to the same backend instance for a client. 
        This helps maintaining session data
    `,
      },
      {
        question: `
        Your application is using an Application Load Balancer. 
        It turns out your application only sees traffic coming from private IP which are in fact your load balancer's. 
        What should you do to find the true IP of the clients connected to your website?
     `,
        answers: {
          a: "modify the front end of the website so that the user send their IP in the request ",
          b: "look into static IP of backend",
          c: "Look into the X-Forwarded-For header in the backend",
          d: "Look into the X-Forwarded-Proto header in the backend",
        },
        correctAnswer: "c",
        explanation: `
        This header is created by your load balancer and passed on to your backend application
    `,
      },
      {
        question: `
        You quickly created an ELB and it turns out your users are complaining about the fact that sometimes,
         the servers just don't work. You realise that indeed,
         your servers do crash from time to time. How to protect your users from seeing these crashes?
     `,
        answers: {
          a: "Enable Health checks ",
          b: "Enable stickness",
          c: "Enable SSL termination",
          d: "none of the above",
        },
        correctAnswer: "a",
        explanation: `
        Health checks ensure your ELB won't send traffic to unhealthy (crashed) instances
`,
      },
      {
        question: `
        You are designing a high performance application that will require millions of connections
         to be handled, as well as low latency. The best Load Balancer for this is
     `,
        answers: {
          a: "Network Load Balancer",
          b: "Application Load Balancer",
          c: "Classic Load Balancer",
          d: "None of the above",
        },
        correctAnswer: "a",
        explanation: `
        NLB provide the highest performance if your application needs it
`,
      },
      {
        question: `
        Application Load Balancers handle all these protocols except
       `,
        answers: {
          a: "HTTP",
          b: "HTTPS",
          c: "Websocket",
          d: "TCP",
        },
        correctAnswer: "d",
        explanation: `
        Use a NLB (Network Load Balancer) support TCP instead
    `,
      },
      {
        question: `
        The application load balancer can route to different target groups based on all these except...
     `,
        answers: {
          a: "Geography ",
          b: "Hostname",
          c: "Request path",
          d: "Source IP",
        },
        correctAnswer: "a",
        explanation: `
    None available
        `,
      },
      {
        question: `
        You are running at desired capacity of 3 and the maximum capacity of 3. 
        You have alarms set at 60% CPU to scale out your application. 
        Your application is now running at 80% capacity. What will happen?
     `,
        answers: {
          a: "Desired capacity will go to 4 and maximum capacity will go to 4 ",
          b: "Desired capacity will go to 6 and maximum capacity will go to 6 ",
          c: "Nothing",
          d: "none of the above",
        },
        correctAnswer: "c",
        explanation: `
        The capacity of your ASG cannot go over the maximum capacity you have allocated during scale out events 
    `,
      },
      {
        question: `
        I have an ASG and an ALB, and I setup my ASG to get health status of instances thanks to my ALB. 
        One instance has just been reported unhealthy. What will happen?  
     `,
        answers: {
          a: "ASG will terminate the EC2 instance ",
          b: "ASG will detach the EC2 instance from the group and leave it running",
          c: "ASG will keep the instance running and re-start the application",
          d: "none of the above",
        },
        correctAnswer: "",
        explanation: `
        Because the ASG has been configured to leverage the ALB health checks, unhealthy instances will be terminated
    `,
      },
      {
        question: `
        Your boss wants to scale
         your ASG based on the number of requests per minute your application makes to your database.
     `,
        answers: {
          a: "Create a cloudWatch custom metric and build an alarm on this to scale the ASG ",
          b: "Tell your boss it is impossible",
          c: "Enable detailed monitoring and use those to scale the ASG",
          d: "none of the above",
        },
        correctAnswer: "a",
        explanation: `
        The metric "requests per minute" is not an AWS metric, hence it needs to be a custom metric
    `,
      },
      {
        question: `
        Scaling an instance from an r4.large to an r4.4xlarge is called
     `,
        answers: {
          a: "Vertical scaling",
          b: "Horizontal scaling",
          c: "east-west scaling",
          d: "North-south scaling",
        },
        correctAnswer: "a",
        explanation: `
        none
    `,
      },
      {
        question: `
        Running an application on an auto scaling group that scales the number of instances in and out is called
     `,
        answers: {
          a: "Vertical scaling ",
          b: "Horizontal scaling",
          c: "east-west scaling",
          d: "North-south scaling",
        },
        correctAnswer: "b",
        explanation: `
    none
    `,
      },
      {
        question: `
        A web application hosted in EC2 is managed by an ASG.
         You are exposing this application through an Application Load Balancer. 
         The ALB is deployed on the VPC with the following CIDR: 192.168.0.0/18. 
        How do you configure the EC2 instance security group to ensure only the ALB can access the port 80?
     `,
        answers: {
          a: "Open up the EC2 on port 80 to the ALB's security group to 0.0.0.0/0 ",
          b: "Open up the EC2 on port 80 to the ALB's security group to 192.168.0.0/18",
          c: "Open up the EC2 on port 80 to the ALB's security group",
          d: "Load an ssl client certificate on ALB",
        },
        correctAnswer: "c",
        explanation: `
        This is the most secure way of ensuring only the ALB can access the EC2 instances. 
        Referencing by security groups in rules is an extremely powerful rule and many questions at the exam rely on it. 
        Make sure you fully master the concepts behind it!
    
    `,
      },
      {
        question: `
        Your application load balancer is hosting 3 target groups with 
        hostnames being users.example.com, api.external.example.com and checkout.example.com. 
        You would like to expose HTTPS traffic for each of these hostnames.
         How do you configure your ALB SSL certificates to make this work?
     `,
        answers: {
          a: "Use SNI",
          b: "Use a wild card ssl certificate",
          c: "Use HTTP OR HTTPS redirect rule",
          d: "Use a security group ssl certificate",
        },
        correctAnswer: "a",
        explanation: `
        SNI (Server Name Indication) is a feature allowing you to expose multiple SSL certs if the client supports it.
         Read more here: https://aws.amazon.com/blogs/aws/new-application-load-balancer-sni/
    `,
      },
      {
        question: `
    An ASG spawns across 2 availability zones. AZ-A has 3 EC2 instances and AZ-B has 4 EC2 instances.
     The ASG is about to go into a scale-in event. What will happen?
     `,
        answers: {
          a: "AZ-A will terminate an instance randomly",
          b: "AZ-A will terminate an instance with the oldest launch configuration",
          c: "AZ-B will terminate an instance with the oldest launch configuration",
          d: "AZ-B will terminate an instance randomly",
        },
        correctAnswer: "c",
        explanation: `
        Make sure you remember the Default Termination Policy for ASG. It tries to balance across AZ first,
         and then delete based on the age of the launch configuration. 
    `,
      },
      {
        question: `
        The Application Load Balancers target groups can be all of these EXCEPT...
     `,
        answers: {
          a: "EC2 Instances ",
          b: "IP Addresses",
          c: "Lambda Functions",
          d: "Network Load Balancers",
        },
        correctAnswer: "d",
        explanation: `
        none
    `,
      },
      {
        question: `
        You are running an application in 3 AZ, with an Auto Scaling Group and a Classic Load Balancer.
         It seems that the traffic is not evenly distributed amongst all the backend EC2 instances, 
         with some AZ being overloaded. 
        Which feature should help distribute the traffic across all the available EC2 instances?
     `,
        answers: {
          a: "Stickness ",
          b: "Cross Zone Load Balancing",
          c: "Target Group Routing Rules",
          d: "HTTPS Termination",
        },
        correctAnswer: "b",
        explanation: `
    
    
    `,
      },
      {
        question: `
        Your Application Load Balancer (ALB) currently is routing to two target groups, 
        each of them is routed to based on hostname rules.
         You have been tasked with enabling HTTPS traffic for 
         each hostname and have loaded the certificates onto the ALB. 
        Which ALB feature will help it choose the right certificate for your clients?
     `,
        answers: {
          a: "Server Name Indication(SNI) ",
          b: "SSL security policy",
          c: "Host Header",
          d: "none of the above",
        },
        correctAnswer: "a",
        explanation: `
    none
    
    `,
      },
      {
        question: `
        An application is deployed with an Application Load Balancer and an Auto Scaling Group.
         Currently, the scaling of the Auto Scaling Group is done
          manually and you would like to define a scaling policy 
          that will ensure the average number of connections 
        to your EC2 instances is averaging at around 1000. Which scaling policy should you use?
     `,
        answers: {
          a: "Target Tracking",
          b: "Step Scaling Policy",
          c: "Simple Scaling policy",
          d: "scheduled scaling",
        },
        correctAnswer: "a",
        explanation: `
    none
    `,
      },
      {
        question: `
        You would like to expose a fixed static IP to your end-users for compliance purposes, 
        so they can write firewall rules that will be stable and approved by regulators.
         Which Load Balancer should you use?
     `,
        answers: {
          a: "Application Load Balancer",
          b: "Network Load Balancer",
          c: "All of the above",
          d: "None of the above",
        },
        correctAnswer: "b",
        explanation: `
        Network Load Balancers expose a public static IP, 
        whereas an Application or Classic Load Balancer exposes a static DNS (URL)
    `,
      },
      {
        question: `
        Your instance in us-east-1a just got terminated, and the attached EBS volume is now available.
         Your colleague tells you he can't seem to attach it to your instance in us-east-1b. 
     `,
        answers: {
          a: "He is missing IAM permission",
          b: "EBS volumes are region locked",
          c: "EBS volumes are AZ locked",
          d: "none of the above",
        },
        correctAnswer: "c",
        explanation: `
        EBS Volumes are created for a specific AZ. 
        It is possible to migrate them between different AZ through backup and restore
    `,
      },
      {
        question: `
        You have provisioned an 8TB gp2 EBS volume and you are running out of IOPS. 
        What is NOT a way to increase performance?
     `,
        answers: {
          a: "Increase the EBS volume size",
          b: "Mont EBS volume in RAID 0",
          c: "change an io1 volume type",
          d: "none of the above",
        },
        correctAnswer: "",
        explanation: `
        EBS IOPS peaks at 16,000 IOPS. or equivalent 5334 GB.
    `,
      },
      {
        question: `
        You would like to leverage EBS volumes in parallel to linearly increase performance,
         while accepting greater failure risks. Which RAID mode helps you in achieving that?
     `,
        answers: {
          a: "RAID 0",
          b: "RAID 1",
          c: "RAID 5",
          d: "RAID 6",
        },
        correctAnswer: "a",
        explanation: `
        See https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/raid-config.html
     `,
      },
      {
        question: `
        Although EBS is already a replicated solution, your company SysOps advised you to use a RAID mode that will mirror data and will allow your instance to not be affected if an EBS volume entirely fails.
         Which RAID mode did he recommend to you?
     `,
        answers: {
          a: "RAID 0",
          b: "RAID 1",
          c: "none",
          d: "all",
        },
        correctAnswer: "b",
        explanation: `
    `,
      },
      {
        question: `
        You would like to have the same data
         being accessible as an NFS drive cross AZ on all your EC2 instances. What do you recommend?
     `,
        answers: {
          a: "Mount an EFS ",
          b: "Mount an EBS",
          c: "",
          d: "Mount an instance store",
        },
        correctAnswer: "a",
        explanation: `
        EFS is a network file system (NFS) and allows
        to mount the same file system on EC2 instances that are in different AZ    
`,
      },
      {
        question: `
        You would like to have a high-performance cache for your application that mustn't be shared.
         You don't mind losing the cache upon termination of your instance.
         Which storage mechanism do you recommend as a Solution Architect?
     `,
        answers: {
          a: "EBS",
          b: "Instance store",
          c: "EFS",
          d: "none",
        },
        correctAnswer: "B",
        explanation: `
        Instance Store provide the best disk performance
`,
      },
      {
        question: `
        You are running a high-performance database 
        that requires an IOPS of 210,000 for its underlying filesystem. What do you recommend?
`,
        answers: {
          a: "Use an EBS gp2 drive ",
          b: "Use an EBS io1 drive",
          c: "Use an instance store",
          d: "Use EFS",
        },
        correctAnswer: "c",
        explanation: `
        Is running a DB on EC2 instance store possible? It is possible to run a database on EC2.
         It is also possible to use instance store, but there are some considerations to have. 
         The data will be lost if the instance is stopped, but it can be restarted without problems.
          One can also set up a replication mechanism on another EC2 instance with instance store to have a standby copy.
           One can also have back-up mechanisms. 
           It's all up to how you want to set up your architecture to validate your requirements. 
        In this case, it's around IOPS, and we build an architecture of replication and back up around i
    
    `,
      },
      {
        question: `
        My company would like to have a MySQL database internally that is
         going to be available even in case of a disaster in the AWS Cloud. I should setup 
     `,
        answers: {
          a: "Read Replicas ",
          b: "Encryptions",
          c: "Multi-AZ",
          d: "none",
        },
        correctAnswer: "c",
        explanation: `
        In this question, we consider a disaster to be an entire Availability Zone going down.
         In which case Multi-AZ will help. If we want to plan 
        against an entire region going down, backups and replication across regions would help. 
`,
      },
      {
        question: `
        We have setup read replicas on our RDS database, but our users are 
        complaining that upon updating their social media posts, they do not see the update right away
     `,
        answers: {
          a: "There must be a bug in our application ",
          b: `Read Replicas has asynchronuos replication and therefore it is possible our users will only observer
           eventual consistency`,
          c: "Set up Multi Az",
          d: "all of the above",
        },
        correctAnswer: "b",
        explanation: `
        none
    `,
      },
      {
        question: `
        Which RDS Classic (not Aurora) feature does not require us to change our SQL connection string?
     `,
        answers: {
          a: "Multi AZ ",
          b: "Read Replicas",
          c: "none",
          d: "all",
        },
        correctAnswer: "a",
        explanation: `
        Multi AZ keeps the same connection string regardless of which database is up.
         Read Replicas imply we need to reference
         them individually in our application as each read replica will have its own DNS name
    `,
      },
      {
        question: `
        One analytics application is currently performing its queries against your main production database.
        These queries slow down the database which impacts the main user experience. 
        What should you do to improve the situation?
`,
        answers: {
          a: "Set up Read Replicas",
          b: "Set up Multi AZ",
          c: "Run analytics queries at night",
          d: "increase the RDS instance size",
        },
        correctAnswer: "a",
        explanation: `
        Read Replicas will help as our analytics application can now perform queries against it, 
        and these queries won't impact the main production database. 
    `,
      },
      {
        question: `
        You have a requirement to use TDE (Transparent Data Encryption) on top of KMS.
         Which database technology does NOT support TDE on RDS?
     `,
        answers: {
          a: "PostgreSQL ",
          b: "Oracle",
          c: "My SQL Server",
          d: "none of the above",
        },
        correctAnswer: "a",
        explanation: `
    none
`,
      },
      {
        question: `
        Which RDS database technology does NOT support IAM authentication?
     `,
        answers: {
          a: "Postgres ",
          b: "Oracle",
          c: "MySQL",
          d: "none",
        },
        correctAnswer: "b",
        explanation: `
        None available
    `,
      },
      {
        question: `
        You would like to ensure you have a database available in another region
         if a dimster happens to your main region. Which database do you recommend?
     `,
        answers: {
          a: "Aurora Global Database",
          b: "Aurora Read Replicas",
          c: "RDS Multi AZ",
          d: "RDS Read Replicas",
        },
        correctAnswer: "a",
        explanation: `
    none
    `,
      },
      {
        question: `
        How can you enhance the security of your Redis cache to force users to enter a password?
     `,
        answers: {
          a: "Use Redis Auth",
          b: "Use IAM Auth",
          c: "Use security groups",
          d: "none",
        },
        correctAnswer: "a",
        explanation: `
    none available
    `,
      },
      {
        question: `
        Your company has a production Node.js application 
        that is using RDS MySQL 5.6 as its data backend.
         A new application programmed in Java will perform some
          heavy analytics workload to create a dashboard, on a regular hourly basis.
           You want to the final solution to minimize costs 
           and have minimal disruption on the production application, 
        what should you do?
     `,
        answers: {
          a: "Create Read Replicas on the different AZ and run analytics workload on the replica database",
          b: "Create Read Replicas on the same AZ and run analytics workload on the replica database",
          c: "Create Read Replicas on the different AZ and run analytics workload on the source database",
          d: "none",
        },
        correctAnswer: "b",
        explanation: `
        this will minimize cost because the data won't have to move across AZ
    `,
      },
      {
        question: `
        You would like to create a disaster recovery strategy for your 
        RDS PostgreSQL database so that in case of a regional outage, 
        a database can be quickly made available for Read and Write workload in another region.
         The DR database must be highly available. What do you recommend?
     `,
        answers: {
          a: "Create Read Replicas in same region and enable Multi AZ on the main database",
          b: "Create Read Replicas in same region and enable Multi AZ on the Read Replicas",
          c: "Create Read Replicas in different regions and enable Multi AZ on the main database",
          d: "none of the above",
        },
        correctAnswer: "c",
        explanation: `
        none
    `,
      },
      {
        question: `
        You are managing a PostgreSQL database and for security reasons, you would like to ensure users
         are authenticated using short-lived credentials. What do you suggest doing?
     `,
        answers: {
          a: "Use PostgreSQL for RDS  and install the pg_iam module authenticate using the username and password",
          b: "Use Postgres for RDS  and authenticate using a token obtained through the RDS service",
          c: "Use PostgreSQL for RDS on EC2 and install the pg_iam module authenticate using the username and password",
          d: "none of the above",
        },
        correctAnswer: "b",
        explanation: `
        In this case, IAM is leveraged to obtain the RDS service token, so this is the IAM authentication use case.
    `,
      },
      {
        question: `
        An application is running in production, using an Aurora database as its backend.
         Your development team would like to run a version of the application in a scaled-down application,
          but still, be able to perform some heavy workload on a need-basis. Most of the time, 
          the application will be unused. 
        Your CIO has tasked you with helping the team while minimizing costs. What do you suggest?
     `,
        answers: {
          a: "Use Aurora Serverless ",
          b: "Use an Aurora Global database",
          c: "Use an RDS database",
          d: "Use Aurora on EC2",
        },
        correctAnswer: "a",
        explanation: `
    none
    
    `,
      },
      {
        question: `
        Our RDS database struggles to keep up with the demand of the users from our website.
         Our million users mostly read news, and we don't post news very often. 
         Which solution is NOT adapted to this problem?


     `,
        answers: {
          a: "An ElastiCache cluster ",
          b: "RDS Read Replicas",
          c: "RDS Multi AZ",
          d: "none of the above",
        },
        correctAnswer: "c",
        explanation: `
        Be very careful with the way you read questions at the exam. 
        Here, the question is asking which solution is NOT adapted to this problem.
         ElastiCache and RDS Read Replicas do indeed help with scaling reads. 
    `,
      },
      {
        question: `
        Your application functions on an ASG behind an ALB. 
        Users have to constantly log back in and you'd rather not enable stickiness
         on your ALB as you fear it will overload some servers. What should you do?
     `,
        answers: {
          a: "Store session data in shared EBS ",
          b: "Store session data in RDS",
          c: "Store session data in elastiCache",
          d: "none",
        },
        correctAnswer: "c",
        explanation: `
        Storing Session Data in ElastiCache is a common pattern
         to ensuring different instances can retrieve your user's state if needed. 
    
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
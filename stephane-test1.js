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
          b: "Open up the EC2 on port 80 to the ALB's security group to 192.6968.0.0/18",
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
    You have deployed a new Elastic Beanstalk environment and
    would like to direct 5% of your production traffic to this new environment,
    in order to monitor for CloudWatch metrics and ensuring no bugs exist. 
    What type of Route 53 records allows you to do so?
     `,
        answers: {
          a: "Simple ",
          b: "Weighted",
          c: "Latency",
          d: "Failover",
        },
        correctAnswer: "b",
        explanation: `
    Weighted allows you to redirect a part of the traffic based on a weight (hence a percentage).
    It's common to use to send a part of a traffic to a new application you're deploying
    `,
      },
      {
        question: `
        After updating a Route 53 record to point "myapp.mydomain.com" from an 
        old Load Balancer to a new load balancer, 
        it looks like the users are still not redirected to your new load balancer. You are wondering why...
`,
        answers: {
          a: "It is because of the TTL ",
          b: "It is because of the CNAME records",
          c: "It is because of the Alias records",
          d: "It is because of the health checks",
        },
        correctAnswer: "a",
        explanation: `
        DNS records have a TTL (Time to Live) in order for clients to
         know for how long to caches these values and not overload the DNS with DNS requests.
          TTL should be set to strike
         a balance between how long the value should be cached vs how much pressure should go on the DNS. 
     `,
      },
      {
        question: `
    You want your users to get the best possible user experience and
     that means minimizing the response time from your servers to your users.
    Which routing policy will help?
     `,
        answers: {
          a: "Multi value ",
          b: "Weighted",
          c: "Latency",
          d: "Geo Location",
        },
        correctAnswer: "c",
        explanation: `
    Latency will evaluate the latency results and help
     your users get a DNS response that will minimize their latency (e.g. response time)
    `,
      },
      {
        question: `
        You have a legal requirement that people in any country but France should not be able to access your website.
         Which Route 53 record helps you in achieving this?
     `,
        answers: {
          a: "Latency ",
          b: "Weighted",
          c: "simple",
          d: "Geolocation",
        },
        correctAnswer: "d",
        explanation: `none
    `,
      },
      {
        question: `
        You have purchased a domain on Godaddy and would like to use it with Route 53. 
        What do you need to change to make this work?
     `,
        answers: {
          a: "Create a public hosted zone and update the 3rd party registrar NS records",
          b: "Create a private hosted zone and update the 3rd party registrar NS records",
          c: "Create a public hosted zone and update route53  NS records",
          d: "Create a private hosted zone and update route53  NS records",
        },
        correctAnswer: "a",
        explanation: `
        Private hosted zones are meant to be used for internal network
         queries and are not publicly accessible. Public Hosted Zones
          are meant to be used for people requesting your website through the public internet.
         Finally, NS records must be updated on the 3rd party registrar. 
    `,
      },
      {
        question: `
        You have purchased "mycoolcompany.com" on the AWS registrar and
         would like for it to point to lb1-1234.us-east-2.elb.amazonaws.com . 
        What sort of Route 53 record is NOT POSSIBLE to set up for this?
     `,
        answers: {
          a: "CNAME ",
          b: "Alias",
          c: "none",
          d: "all",
        },
        correctAnswer: "a",
        explanation: `
        The DNS protocol does not allow
         you to create a CNAME record for the top node of a DNS namespace (mycoolcompany.com),
          also known as the zone apex
    `,
      },
      {
        question: `
        You have an ASG that scales on demand based on the traffic going to your new website:
         TriangleSunglasses.Com. You would like to optimise for cost, so you have selected 
         an ASG that scales based on demand going through your ELB. Still,
          you want your solution to be highly available so you have selected the minimum instances to 2. 
        How can you further optimize the cost while respecting the requirements?
     `,
        answers: {
          a: "Reserve two instances ",
          b: "Remove the ELB and use elastic IP instead",
          c: "Reduce the minimum instance to 1",
          d: "Reduce the minimum instance to 0",
        },
        correctAnswer: "a",
        explanation: `
        This is the way to save further costs as we know we will run 2 EC2 instances no matter what.
    `,
      },
      {
        question: `
        You are looking to store shared software updates data across 100s of EC2 instances.
         The software updates should be dynamically loaded on the EC2 instances and 
         shouldn't require heavy operations. What do you suggest?
`,
        answers: {
          a: "Store the softeware updates on EFS and mount EFS as network drive ",
          b: "Store the softeware updates on Amazon RDS instance",
          c: "Store the softeware updates on EBS",
          d: "none is correct",
        },
        correctAnswer: "a",
        explanation: `
        EFS is a network file system (NFS) and allows to mount the same file system to 100s of EC2 instances. 
        Publishing software updates their allow each EC2 instance to access them.
    `,
      },
      {
        question: `
        As a solution architect managing a complex ERP software suite,
         you are orchestrating a migration to the AWS cloud.
          The software traditionally takes well over an hour 
          to setup on a Linux machine, and you would like to make sure your
           application does leverage the ASG feature of auto scaling based on the demand.
         How do you recommend you speed up the installation process?
     `,
        answers: {
          a: "Use Golden AMI ",
          b: "Boostrap using User Data",
          c: "Store applications in RDS",
          d: "Retrieve application set-up file from EFS",
        },
        correctAnswer: "a",
        explanation: `
        Golden AMI are a standard in making sure you snapshot a state after an
         application installation so that future instances can boot up from that AMI quickly. 
    `,
      },
      {
        question: `
        I am creating an application and would like for it to be running with 
        minimal cost in a development environment with Elastic Beanstalk. I should run it in
     `,
        answers: {
          a: "Single instance mode ",
          b: "High Availability mode",
          c: "none of the above",
          d: "all of the above",
        },
        correctAnswer: "a",
        explanation: `
        This will create one EC2 instance and one Elastic IP
`,
      },
      {
        question: `
        My deployments on Elastic Beanstalk have been painfully slow,
         and after looking at the logs, I realize this is due to the fact
          that my dependencies are resolved on each EC2 machine at deployment time.
         How can I speed up my deployment with the minimal impact?
     `,
        answers: {
          a: "Place the dependencies on Amazon EFS ",
          b: "Create a Golden AMI that contains the dependencies  and launch the EC2 instance fro that",
          c: "Remove some dependencies in your code",
          d: "none of the above",
        },
        correctAnswer: "b",
        explanation: `
        Golden AMI are a standard in making sure save the state after the installation or pulling
         dependencies so that future instances can boot up from that AMI quickly. 
    `,
      },
      {
        question: `
        Which of the following will NOT help make our application tier stateless?
     `,
        answers: {
          a: "Storing shared data on EBS",
          b: "offload data in RDS",
          c: "Store session data in elastiCache",
          d: "Send session data through client cookies",
        },
        correctAnswer: "a",
        explanation: `
        EBS volumes are created for a specific AZ and can only be attached to one EC2 instance at a time.
         This will not help make our application stateles
    
    `,
      },
      {
        question: `
        You're trying to upload a 25 GB file on S3 and it's not working
         `,
        answers: {
          a: "The file size limit on s3 is 5gb",
          b: "The s3 service must be down",
          c: "You should use multi part upload when your file is bigger than 5gb",
          d: "none of the above",
        },
        correctAnswer: "c",
        explanation: `
        Multi Part Upload is also recommended as soon as the file is over 100MB
    `,
      },
      {
        question: `
        I tried creating an S3 bucket named "dev" but it didn't work. 
        This is a new AWS Account and I have no buckets at all. What is the cause?
`,
        answers: {
          a: " I  am missing IAM permission to create a bucket ",
          b: "Bucket name must be globally unique and dev is already taken",
          c: "None of the above",
          d: "all of the above",
        },
        correctAnswer: "b",
        explanation: `
    `,
      },
      {
        question: `
        You've added files in your bucket and then enabled versioning. 
        The files you've already added will have which version?
     `,
        answers: {
          a: "1",
          b: "2",
          c: "-1",
          d: "null",
        },
        correctAnswer: "d",
        explanation: `
        none available
`,
      },
      {
        question: `
        Your client wants to make sure the encryption is happening in S3, 
        but wants to fully manage the encryption keys and never store them in AWS. You recommend
     `,
        answers: {
          a: "SSE-C",
          b: "SSE-S3",
          c: "SSE-KMS",
          d: "Client side encryption",
        },
        correctAnswer: "a",
        explanation: `
        Here you have full control over the encryption keys, and let AWS do the encryption
    `,
      },
      {
        question: `
        Your company wants data to be encrypted in S3,
         and maintain control of the rotation policy for the encryption keys, 
        but not know the encryption keys values. You recommend
     `,
     answers: {
        a: "SSE-C",
        b: "SSE-S3",
        c: "SSE-KMS",
        d: "Client side encryption",
      },
        correctAnswer: "c",
        explanation: `
        With SSE-KMS you let AWS manage the encryption keys but you have full control of the key rotation policy
    `,
      },
      {
        question: `
        Your company does not trust S3 for encryption and wants it to happen on the application. You recommend
     `,
     answers: {
        a: "SSE-C",
        b: "SSE-S3",
        c: "SSE-KMS",
        d: "Client side encryption",
      },
        correctAnswer: "d",
        explanation: `
        With Client Side Encryption you perform the encryption yourself and send the encrypted data to AWS directly. 
        AWS does not know your encryption keys and cannot decrypt your data. 
    `,
      },
      {
        question: `
        The bucket policy allows our users to read/write files in the bucket,
         yet we were not able to perform a PutObject API call. 
     `,
        answers: {
          a: "The bucket policy must be wrong ",
          b: "The IAM user must have an explicit deny  in the attached IAM policy",
          c: "You need to contact AWS Support to lift this limit",
          d: "none of the above",
        },
        correctAnswer: "b",
        explanation: `
        Explicit DENY in an IAM policy will take precedence over a bucket policy permission
    `,
      },
      {
        question: `
        You have a website that loads files from another S3 bucket. 
        When you try the URL of the files directly in your Chrome browser it works, but when the website you're 
        visiting tries to load these files it doesn't. What's the problem?
     `,
        answers: {
          a: "The bucket policy is wrong ",
          b: "The IAM policy is wrong",
          c: "CORS  is wrong",
          d: "Encryption is wrong",
        },
        correctAnswer: "c",
        explanation: `
        Cross-origin resource sharing (CORS) defines a way for client web applications 
        that are loaded in one domain to interact with resources in a different domain. 
        To learn more about CORS, go here: https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html 
    `,
      },
      {
        question: `
        My EC2 Instance does not have the permissions to perform an API call PutObject on S3. What should I do?
     `,
        answers: {
          a: `Ask an administrator to attach a Policy to the IAM role on my EC2  instance that authorises it to 
          do the API call ` ,
          b: "Use EC2 meta data API call",
          c: "Use EC2 user data API call",
          d: "none of the above",
        },
        correctAnswer: "a",
        explanation: `
        IAM roles are the right way to provide credentials and permissions to an EC2 instance
`,
      },
      {
        question: `
        I have an on-premise personal server that I'd like to use to perform AWS API calls
     `,
        answers: {
          a: "Attach IAM role on the personal server ",
          b: "Run 'aws configure' and put credentials there. Invalidate them when done ",
          c: "None of the above",
          d: "All of the above",
        },
        correctAnswer: "b",
        explanation: `
        Even better would be to create a user specifically for that one on-premise serve
    `,
      },
      {
        question: `
        I need my colleagues help to debug my code. When he runs the application on his machine, 
        it's working fine, whereas I get API authorisation exceptions. What should I do?
     `,
        answers: {
          a: "Compare his IAM policy and my IAM policy in the policy stimulator to understand the difference ",
          b: "Ask him to send me his credentials so i can start working",
          c: "none...",
          d: " all...",
        },
        correctAnswer: "a",
        explanation: `
    not implemented
    `,
      },
      {
        question: `
        To get the instance id of my EC2 machine from the EC2 machine, the best thing is to...
     `,
        answers: {
          a: "Query the meta data at http://169.254.169.254/latest/meta-data ",
          b: "Query the meta data at http://169.254.169.254/latest/user-data",
          c: "Query the meta data at http://254.169.254.169/latest/meta-data",
          d: "",
        },
        correctAnswer: "a",
        explanation: `
    not implemented
    
    `,
      },
      {
        question: `
        You have enabled versioning and want to be extra careful when it comes to deleting files on S3.
         What should you enable to prevent accidental permanent deletions?
`,
        answers: {
          a: "Use bucket policy ",
          b: "Enable MFA Delete",
          c: "Encrypt the file",
          d: "Disable versioning",
        },
        correctAnswer: "b",
        explanation: `
        MFA Delete forces users to use MFA tokens before deleting objects.
         It's an extra level of security to prevent accidental deletes
    `,
      },
      {
        question: `
        You would like all your files in S3 to be encrypted by default. 
        What is the optimal way of achieving this?
     `,
        answers: {
          a: "Use bucket policy that forces HTTPS connection ",
          b: "Enable default encryption on s3",
          c: "Enable versioning",
          d: "none of the above",
        },
        correctAnswer: "b",
        explanation: `
        not implemented
    `,
      },
      {
        question: `
        You suspect some of your employees to try to access files in S3 
        that they don't have access to. How can you verify this is indeed the case without them noticing?
`,
        answers: {
          a: "Enable s3 access logs and analyse them using Athena ",
          b: "Use bucket policy",
          c: "Restrict their IAM policies and look at cloudTrail logs",
          d: "none of the above",
        },
        correctAnswer: "a",
        explanation: `
        S3 Access Logs log all the requests made to buckets, 
        and Athena can then be used to run serverless analytics on top of the logs files
    `,
      },
      {
        question: `
        You are looking for your entire S3 bucket to be available fully in a different region so you can
         perform data analysis optimally at the lowest possible cost. Which feature should you use?
     `,
        answers: {
          a: "s3 website",
          b: "s3 versioning",
          c: "Cross region replication",
          d: "CloudFront Distribution",
        },
        correctAnswer: "c",
        explanation: `
        S3 CRR is used to replicate data from an S3 bucket to another one in a different region
    `,
      },
      {
        question: `
        You are looking to provide temporary URLs to a growing list of federated users in order to allow them
        to perform a file upload on S3 to a specific location. What should you use?
     `,
        answers: {
          a: "s3 CORS ",
          b: "s3 Pre-Signed Url",
          c: "s3 bucket policy",
          d: "IAM Users",
        },
        correctAnswer: "b",
        explanation: `
        Pre-Signed URL are temporary and grant time-limited access to some actions in your S3 bucket. 
`,
      },
      {
        question: `
        How can you automate the transition of S3 objects between their different tiers?
     `,
        answers: {
          a: "Use AWS Lambda",
          b: "Use CloudWatch event",
          c: "Use s3 lifecycle Rules",
          d: "all of the above",
        },
        correctAnswer: "c",
        explanation: `
    not implemented
    
    `,
      },
      {
        question: `
        Which of the following is NOT a Glacier retrieval mode?
     `,
        answers: {
          a: "instant(10 seconds) ",
          b: "expidited(1-5 minutes)",
          c: "standard(3-5 hours)",
          d: "Bulk(5-12 hours)",
        },
        correctAnswer: "a",
        explanation: `
    `,
      },
      {
        question: `
        Which of the following is a Serverless data analysis service allowing you to query data in S3?
     `,
        answers: {
          a: "RDS ",
          b: "Redshift",
          c: "Athena",
          d: "s3 Analytics",
        },
        correctAnswer: "c",
        explanation: `
    `,
      },
      {
        question: `
        You are looking to build an index of your files in S3, using Amazon RDS PostgreSQL. 
        To build this index, it is necessary to read the first 250 bytes of each object in S3, 
        which contains some metadata about the content of the file itself. 
        There is over 100,000 files in your S3 bucket, amounting to 50TB of data.
         how can you build this index efficiently?
     `,
        answers: {
          a: `Create an application that will traverse the  s3 bucket,
           issue a byte range fetch for the first 250 bytes,and store that information in RDS
          ` ,
          b: "###",
          c: "---",
          d: "@@@",
        },
        correctAnswer: "a",
        explanation: `
    
    
    `,
      },
      {
        question: `
        Which features allows us to distribute paid content from S3 securely, globally, 
        if the S3 bucket is secured to only exchange data with CloudFront?
     `,
        answers: {
          a: "Origin Identity",
          b: "S3 Pre-Signed URL",
          c: "CloudFront Signed URL",
          d: "CloudFront  distribution invalidation ",
        },
        correctAnswer: "c",
        explanation: `
    CloudFront Signed URL are
     commonly used to distribute paid content through dynamic CloudFront Signed URL generation. 
    `,
      },
      {
        question: `
        You are hosting highly dynamic content in Amazon S3 in us-east-1. Recently, there has been 
        a need to make that data available with low latency in Singapore. What do you recommend using?
     `,
        answers: {
          a: "CloudFront ",
          b: "S3 Cross Region Replication",
          c: "S3 Pre-Signed URLS",
          d: "none of the above",
        },
        correctAnswer: "c",
        explanation: `
        S3 CRR allows you to replicate the data from one bucket in a region to another bucket in another region
    `,
      },
      {
        question: `
        You would like to provide your users access to hundreds of private files in your CloudFront distribution, 
        which is fronting an HTTP web server behind an application load balancer. What should you use? 
     `,
        answers: {
          a: "CloudFront Signed URL",
          b: "CloudFront Signed Cookies",
          c: "CloudFront Origin Access identity",
          d: "CloudFront HTTPS Encryption",
        },
        correctAnswer: "b",
        explanation: `
        Allows you to access many files
    `,
      },

      {
        question: `
        You are creating an application that is going 
        to expose an HTTP REST API. There is a need to provide 
        request routing rules at the HTTP level. Due to security requirements, 
        your application can only be exposed through the use of two static IPs. 
        How can you create a solution that validates these requirements?

`,
        answers: {
          a: "Use Global Accelerator and Application Load Balancer ",
          b: "Use Network Load Balancing and attach elastic IP to it",
          c: "Use Application Load Balancing and attach elastic IP to it",
          d: "Use CloudFront with elastic IP and Application Load Balancer",
        },
        correctAnswer: "a",
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
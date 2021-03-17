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
        Global Accelerator will provide us with the two static IP, 
        and the ALB will provide use with the HTTP routing rules
    
    `,
      },

      {
        question: `
        What does this S3 bucket policy do?

     {
       "Version":"2012-10-17",
       "Id":"Mystery policy",
       "Statement":[
         {
           "Sid":"What could it be?",
           "Effect":"Allow",
           "Principal":{"CanonicalUser":"CloudFront Origin Identity Canonical User ID"},
           "Action":"s3:GetObject",
           "Resource":"arn:aws:s3:::examplebucket/*"
         }
       ]
    }


     `,
        answers: {
          a: "Allow the s3 bucket content to be accessed from your cloudFront distribution origin",
          b: "Only allow getObject type of request from anyWhere",
          c: "Forces getObject request to be encrypted if comming from cloudFront",
          d: "none of the above",
        },
        correctAnswer: "a",
        explanation: `
    not implemented
    
    `,
      },

      {
        question: `
        You need to move hundreds of Terabytes into the cloud in S3, 
        and after that pre-process it using many EC2 instances in order to clean the data. 
        You have a 1 Gbit/s broadband and would like to optimize the process
         of moving the data and pre-processing it, in order to save time. What do you recommend?
     `,
        answers: {
          a: "Use the network ",
          b: "Use Snowball",
          c: "Use Aws data Migration",
          d: "Use Snowball Edge",
        },
        correctAnswer: "d",
        explanation: `
        Snowball Edge is the right answer as it comes with computing capabilities 
        and allows use to pre-process the data while it's being moved in Snowball, 
        so we save time on the pre-processing side as well. 
    
    `,
      },

      {
        question: `
        You want to expose a virtually infinite storage for your tape backups.
         You want to keep the same software as today and want a iSCSI compatible interface. What do you use?
     `,
        answers: {
          a: "Snowball ",
          b: "File Gateway",
          c: "Volume Gateway",
          d: "Tape Gateway",
        },
        correctAnswer: "d",
        explanation: `
   not implemented
    
    `,
      },

      {
        question: `
        Your EC2 Windows Servers need to share some data by having 
        a Network File System mounted, that respect the Windows
         security mechanisms and has integration with Active Directory. 
        What do you recommend putting in place as an NFS? 
     `,
        answers: {
          a: "EFS ",
          b: "FSx ",
          c: "FSx for lustre",
          d: "Amazon s3 with File Gateway",
        },
        correctAnswer: "FSx",
        explanation: `
    
    
    `,
      },

      {
        question: `
        You would like to have a distributed POSIX compliant file system that will
         allow you to maximize the IOPS in order to perform some HPC and genomics computational research.
         That file system will have to scale easily to millions of IOPS. What do you recommend?
     `,
        answers: {
          a: "EFS with Max IO enabled",
          b: "FSx for Lustre",
          c: "Amazon s3 mounted on the instances",
          d: "EC2 instance store",
        },
        correctAnswer: "b",
        explanation: `
        not implemented
     `,
      },

      {
        question: `
        You are preparing for the biggest day of sale of the year,
         where your traffic will increase by 100x. You have already setup SQS standard queue. What should you do?


     `,
        answers: {
          a: "Do nothing SQS scales automatically ",
          b: "Enable auto scaling in SQS queue",
          c: "Increase the capacity of SQS Queue",
          d: "Open a support ticket to pre-warm SQS queue",
        },
        correctAnswer: "a",
        explanation: `
    not implemented
    
    `,
      },

      {
        question: `
        You would like messages to be 
        processed by SQS consumers only after 5 minutes of being published to SQS. What should you do?
     `,
        answers: {
          a: "Change the Visibility Timeout ",
          b: "Increase the DelaySeconds parameters",
          c: "Enable Long Polling",
          d: "Use extended SQS client",
        },
        correctAnswer: "b",
        explanation: `
        Delay queues let you postpone the delivery of new messages to a queue for a number of seconds. 
        If you create a delay queue, any messages that you send 
        to the queue remain invisible to consumers for the duration of the delay period. 
        The default (minimum) delay for a queue is 0 seconds. The maximum is 15 minutes
    
    `,
      },

      {
        question: `
        Your consumers poll 10 messages at a time and finish processing them in 1 minute. 
        You notice that your messages are processed twice, as other consumers also receive the messages.
         What should you do? 
     `,
        answers: {
          a: "Enable Long Polling ",
          b: "Add delay to the messages when being produced",
          c: "Increase the VisibilityTimeout",
          d: "Decrease the Visibility Timeout",
        },
        correctAnswer: "c",
        explanation: `
        Immediately after a message is received, it remains in the queue.
         To prevent other consumers from processing the message again, 
         Amazon SQS sets a visibility timeout, 
         a period of time during which Amazon SQS prevents other consumers from receiving and processing the message. 
         Increasing the timeout gives more time to 
        the consumer to process that message and will prevent duplicate readings of the message
    
    `,
      },

      {
        question: `
        You'd like your messages to be processed exactly once and in order. Which do you need?
     `,
        answers: {
          a: "SQS standard queue ",
          b: "SQS Dead Letter Queue",
          c: "SQS Delay Queue",
          d: "SQS FIFO Queue",
        },
        correctAnswer: "d",
        explanation: `
        FIFO (First-In-First-Out) queues are designed to enhance messaging 
        between applications when the order of operations and events is critical, 
        or where duplicates can't be tolerated. 
        FIFO queues also provide exactly-once processing but have a limited number of transactions per second (TPS).
    
    `,
      },

      {
        question: `
        You'd like to send a message to 3 different applications all using SQS. You should
     `,
        answers: {
          a: "Use SQS Replication features",
          b: "Use SNS + SQS Fan Out Pattern",
          c: "Send messages individually to 3 SQS queues",
          d: "none of the above",
        },
        correctAnswer: "b",
        explanation: `
    not implemented
    
    `,
      },

      {
        question: `
        You have a Kinesis stream usually receiving 5MB/s of data and sending out 8 MB/s of data.
        You have provisioned 6 shards.
         Some days, your traffic spikes up to 2 times and you get a throughput exception. You should
     `,
        answers: {
          a: "Enable kinesis replication",
          b: "Add more shards",
          c: "Use SQS as a buffer to kinesis",
          d: "none of the above",
        },
        correctAnswer: "b",
        explanation: `
        Each shard allows for 1MB/s incoming and 2MB/s outgoing of data
    `,
      },

      {
        question: `
        You are sending a clickstream for your users navigating your website, all the way to Kinesis.
         It seems that the users data is not ordered in Kinesis, 
        and the data for one individual user is spread across many shards. How to fix that problem?
     `,
        answers: {
          a: "There are many shards, you should only use one shard ",
          b: "You should use a partition key that represent the identity of the user",
          c: "You shouldn't use multiple consumers, only one and it should re-order data",
          d: "none of the above",
        },
        correctAnswer: "b",
        explanation: `
        By providing a partition key we ensure the data is ordered for our users
     `,
      },

      {
        question: `
        We'd like to perform real time analytics on streams of data. The most appropriate product will be
     `,
        answers: {
          a: "SQS ",
          b: "SNS",
          c: "Kinesis",
          d: "none of the above",
        },
        correctAnswer: "c",
        explanation: `
    
    
    `,
      },

      {
        question: `
        We'd like for our big data to be loaded near real time to S3 or Redshift. 
        We'd like to convert the data along the way. What should we use?
     `,
        answers: {
          a: "SQS + Lambda",
          b: "SNS + HTTP Endpoint",
          c: "Kinesis Streams + kinesis firehose",
          d: "none of the above",
        },
        correctAnswer: "c",
        explanation: `
        This is a perfect combo of technology for loading data near real-time in S3 and Redshift
    `,
      },

      {
        question: `
        You want to send email notifications to your users. You should use
     `,
        answers: {
          a: "SQS + Lambda ",
          b: "SNS",
          c: "Kinesis",
          d: "none of the above",
        },
        correctAnswer: "b",
        explanation: `
        Has that feature by default
    `,
      },

      {
        question: `
        You have many microservices running on-premise and they currently communicate 
        using a message broker that supports the MQTT protocol.
         You would like to migrate these applications and the
          message broker to the cloud without changing the application logic. 
        Which technology allows you to get a managed message broker that supports the MQTT protocol?
     `,
        answers: {
          a: "Amazon MQ",
          b: "SQS",
          c: "SNS",
          d: "Kinesis",
        },
        correctAnswer: "a",
        explanation: `
        Supports JMS, NMS, AMQP, STOMP, MQTT, and WebSocket
    
    `,
      },

      {
        question: `
        You have a Lambda function that will process data for 25 minutes before successfully completing.
         The code is working fine in your machine, 
        but in AWS Lambda it just fails with a "timeout" issue after 3 seconds. What should you do?
     `,
        answers: {
          a: "Set Timeout to 25 minutes ",
          b: "Set memory to 3 GB",
          c: "Run your code elsewhere than Lambda- the maximum timeout is 15 minutes",
          d: "none of the above",
        },
        correctAnswer: "c",
        explanation: `
    
    
    `,
      },

      {
        question: `
        You'd like to have a dynamic DB_URL variable loaded in your Lambda code
     `,
        answers: {
          a: "Place it in environmental variable",
          b: "Place it in the code zip file",
          c: "place it in the code itself",
          d: "none of the above",
        },
        correctAnswer: "a",
        explanation: `
        Environment variables allow for your Lambda to have dynamic variables from within
    `,
      },

      {
        question: `
        We have to provision the instance type for our DynamoDB database
     `,
        answers: {
          a: "false ",
          b: "true",
          
        },
        correctAnswer: "a",
        explanation: `
    DynamoDB is a serverless service 
    and as such we don't provision an instance type for our database.
     We just say how much RCU and WCU we require for our table (or auto scaling)
    `,
      },

      {
        question: `
        A DynamoDB table has been provisioned with 10 RCU and 10 WCU. 
        You would like to increase the RCU to sustain more read traffic. What is true about RCU and WCU?
     `,
        answers: {
          a: "RCU and WCU are decoupled, so WCU  can stay the same ",
          b: "You will also have to increase WCU to match RCU",
          c: "none of the above",
          d: "all of the above",
        },
        correctAnswer: "a",
        explanation: `
        not implemented
    `,
      },

      {
        question: `
        You are about to enter the Christmas sale and you know
         a few items in your website are very popular and will be read often. 
         Last year you had a ProvisionedThroughputExceededException. What should you do this year?
`,
        answers: {
          a: "increase the read capacity unit(RCU) to very, very high value ",
          b: "Create DAX cluster",
          c: "Migrate the database away from Dynamodb for the time of sale",
          d: "none of the above",
        },
        correctAnswer: "b",
        explanation: `
        A DynamoDB Accelerator (DAX) cluster is a cache that fronts your 
        DynamoDB tables and caches the most frequently read values. 
        They help offload the heavy reads on hot keys off of DynamoDB itself,
         hence preventing the ProvisionedThroughputExceededException
     `,
      },

      {
        question: `
        You would like to automate sending welcome
         emails to the users who subscribe to the Users table in DynamoDB. How can you achieve that?
`,
        answers: {
          a: "Create Lambda Function to scan the table every minute looking for new user ",
          b: "Enable dynamodb stream and have lambda function receive the event in real-time",
          c: "Enable SNS and DynamoDB integration",
          d: "none of the above",
        },
        correctAnswer: "b",
        explanation: `
        This is the best pattern
    `,
      },

      {
        question: `
        To make a serverless API, I should integrate API Gateway with
     `,
        answers: {
          a: "EC2 ",
          b: "ELB",
          c: "Lambda",
          d: "all of the above",
        },
        correctAnswer: "c",
        explanation: `
        Lambda is a serverless technology
    `,
      },

      {
        question: `
        You would like to provide a Facebook login before your users call your API hosted by API Gateway. 
        You need seamlessly authentication integration, you will use 
     `,
        answers: {
          a: "Cognito Sync",
          b: "DynamoDB user tables with lambda authorizer",
          c: "Cognito user pools",
          d: "none of the above",
        },
        correctAnswer: "",
        explanation: `
        Cognito User Pools directly integration with Facebook Logins
    `,
      },

      {
        question: `
        Your production application is leveraging DynamoDB as its backend
        and is experiencing smooth sustained usage. There is a need to
        make the application run in development as well, where it will experience unpredictable,
        sometimes high, sometimes low volume of requests. 
        You would like to make sure you optimize for cost. What do you recommend?
     `,
        answers: {
          a: "Provision WCU & RCU  and enable autoscaling for production and use on-demand capacity for development ",
          b: "Provision WCU & RCU  and enable autoscaling for production and use reserved capacity for development",
          c: "none",
          d: "all",
        },
        correctAnswer: "a",
        explanation: `
    not implemented
    
    `,
      },

      {
        question: `
    As a solutions architect, you have been tasked
    to implement a fully Serverless REST API. Which technology choices do you recommend?
     `,
        answers: {
          a: "AWS API Gateway + AWS Lambda ",
          b: "Application Load Balancer + EC2",
          c: "ECS + EBS",
          d: "CloudFront + s3",
        },
        correctAnswer: "a",
        explanation: `
        This is fully serverless
`,
      },

      {
        question: `
        Which technology does not have an out of the box caching feature?
     `,
        answers: {
          a: "API Gateway",
          b: "Lambda",
          c: "DynamoDB",
          d: "none of the above",
        },
        correctAnswer: "b",
        explanation: `
    Lambda does not have an out of the box caching feature (it's often paired with API gateway for that)
    
    `,
      },

      {
        question: `
        Which service allows to federate mobile users and generate temporary credentials 
        so that they can access their own S3 bucket sub-folder?
     `,
        answers: {
          a: "Cognito",
          b: "IAM",
          c: "SSO",
          d: "CloudFront",
        },
        correctAnswer: "a",
        explanation: `
        in combination with STS
    `,
      },

      {
        question: `
        You would like to distribute your static content which currently lives in Amazon S3 to 
        multiple regions around the world, such as the US, France and Australia. What do you recommend?
     `,
        answers: {
          a: "S3 cross region replication",
          b: "CloudFront",
          c: "Route53",
          d: "API Gateway",
        },
        correctAnswer: "b",
        explanation: `
        This is a perfect use case for CloudFront
    `,
      },

      {
        question: `
        You have hosted a DynamoDB table in ap-northeast-1 and would like to make it available in eu-west-1.
         What must be enabled first to create a DynamoDB Global Table?
     `,
        answers: {
          a: "DynamoDB  Streams",
          b: "DynamoDB DAX",
          c: "DynamoDB Versioning",
          d: "DynamoDB Backups",
        },
        correctAnswer: "a",
        explanation: `
        Streams enable DynamoDB to get a changelog and use that changelog to replicate data across regions
    `,
      },

      {
        question: `
        A Lambda function is triggered by a DynamoDB stream and is meant to
         insert data into SQS for further long processing jobs. The Lambda function does seem able to read from 
        the DynamoDB stream but isn't able to store messages in SQS. What's the problem?
     `,
        answers: {
          a: "The Lambda IAM role is missing permissions ",
          b: "Lambda security group must allow outbound access to SQS",
          c: "The flow DynamoDB => Lambda => SQS is not authorised",
          d: "SQS security group must be edited to allow lambda",
        },
        correctAnswer: "a",
        explanation: `
    not implemented
    
    `,
      },

      {
        question: `
        You would like to create a micro service whose sole purpose is 
        to encode video files with your specific algorithm from S3 back into S3. 
        You would like to make that micro-service reliable and retry upon failure.
        Processing a video may take over 25 minutes. The service is asynchronous and it
        should be possible for the service to be stopped for a day and resume the next
        day from the videos that haven't been encoded yet.
         Which of the following service would you recommend to implement this service?
     `,
        answers: {
          a: "S3 + Lambda",
          b: "SQS + EC2",
          c: "SNS + EC2",
          d: "SQS + Lambda",
        },
        correctAnswer: "b",
        explanation: `
        SQS allows you to retain messages for days and process them later, while we take down our EC2 instance
    `,
      },

      {
        question: `
        You would like to distribute paid software installation files globally 
        for your customers that have indeed purchased the content. 
        The software may be purchased by different users, and you want to protect the
         download URL with security including IP restriction. Which solution do you recommend?
     `,
        answers: {
          a: "s3 pre-signed url",
          b: "CloudFront Signed URL",
          c: "EFS",
          d: "S3 public bucket",
        },
        correctAnswer: "b",
        explanation: `
        This will have security including IP restriction
    `,
      },

      {
        question: `
        You are a photo hosting service and publish every month a master pack of
         beautiful mountains images, that are over 50 GB in size and downloaded from all around the world.
          The content is currently hosted on EFS and distributed by ELB and EC2 instances. 
          You are experiencing high load each month and very high network costs. What can you recommend
         that won't force an application refactor and reduce network costs and EC2 load dramatically?
     `,
        answers: {
          a: "Hosts the master pack into s3 ",
          b: "Create a Cloudfront distribution",
          c: "upgrade the EC2 Instance",
          d: "Enable ELB caching",
        },
        correctAnswer: "b",
        explanation: `
        CloudFront can be used in front of an ELB
    `,
      },

      {
        question: `
        You would like to deliver big data streams in real time to multiple 
        consuming applications, with replay features. Which technology do you recommend?
     `,
        answers: {
          a: "Kinesis Data Streams",
          b: "Kinesis firehose",
          c: "SQS",
          d: "Amazon MQ",
        },
        correctAnswer: "a",
        explanation: `
        Kinesis Data Streams has all these features
    `,
      },

      {
        question: `
        Which database helps you store data in a relational format, 
        with SQL language compatibility and capability of processing transactions? 
     `,
        answers: {
          a: "RDS",
          b: "Redshift",
          c: "DynamoDB",
          d: "ElastiCache",
        },
        correctAnswer: "a",
        explanation: `
    not implemented
    
    `,
      },

      {
        question: `
        Which database do you suggest to have caching capability with a Redis compatible API?
     `,
        answers: {
          a: "RDS ",
          b: "DynamoDB",
          c: "ElastiCache",
          d: "ElastiSearch",
        },
        correctAnswer: "c",
        explanation: `
        ElastiCache can create a Redis cache or a Memcached cache
    `,
      },

      {
        question: `
        You are looking to perform OLTP, and would like to have the underlying storage 
        with the maximum amount of replication and auto-scaling capability. What do you recommend?
     `,
        answers: {
          a: "ElastiCache ",
          b: "Redshift",
          c: "Aurora",
          d: "RDS",
        },
        correctAnswer: "c",
        explanation: `
    not implemented
`,
      },

      {
        question: `
        As a solution architect, you plan on creating a social 
        media website where users can be friends with each other, and like each other's posts.
         You plan on performing some complicated queries such as "What are the number 
        of likes on the posts that have been posted by the friends of Mike?". What database do you suggest?
     `,
        answers: {
          a: "Neptune ",
          b: "RDS",
          c: "Redshift",
          d: "ElasticSearch",
        },
        correctAnswer: "a",
        explanation: `
        This is AWS' managed graph database
    `,
      },

      {
        question: `
        You would like to store big objects of 100 MB into a reliable and durable Key Value store.
         What do you recommend? 
     `,
        answers: {
          a: "Athena",
          b: "S3",
          c: "DynamoDB",
          d: "ElastiCache",
        },
        correctAnswer: "b",
        explanation: `
        S3 is indeed a key value store! (where the key is the full path of the object in the bucket)
     `,
      },

      {
        question: `
        You would like to have a database which is efficient
         at performing analytical queries on large sets of columnar data.
          You would like to connect that Data Warehouse to a reporting and
         dashboard tool such as Amazon Quicksight. Which technology do you recommend?
     `,
        answers: {
          a: "RDS",
          b: "S3",
          c: "Redshift",
          d: "Neptune",
        },
        correctAnswer: "c",
        explanation: `
        not implemented
    `,
      },

      {
        question: `
        Your log data is currently stored in S3 and you would 
        like to perform a quick analysis if possible serverless to filter the logs and find a
         user which may have completed an unauthorized action. Which technology do you recommend?
     `,
        answers: {
          a: "DynamoDB ",
          b: "Redshift",
          c: "Athena",
          d: "Glacier",
        },
        correctAnswer: "c",
        explanation: `
    not implemented
    
    `,
      },

      {
        question: `
        Your gaming website is currently running on top of DynamoDB. 
        Users have been asking for a search feature to find other gamers by name, with partial matches if possible. 
        Which technology do you recommend to implement that feature?
     `,
        answers: {
          a: "DynamoDB ",
          b: "ElasticSearch",
          c: "Neptune",
          d: "Redshift",
        },
        correctAnswer: "b",
        explanation: `
        Anytime you see "search", think ElasticSearch
    `,
      },

      {
        question: `
        We'd like to have CloudWatch Metrics for EC2 at a 1 minute rate. What should we do?
     `,
        answers: {
          a: "Enable custom metrics ",
          b: "Enable High Resolution",
          c: "Enable Basic Monitoring",
          d: "Enable Detailed Monitoring",
        },
        correctAnswer: "d",
        explanation: `
        This is a paid offering and gives you EC2 metrics at a 1 minute rate
    `,
      },

      {
        question: `
        Your CloudWatch alarm is triggered and controls an ASG.
         The alarm should trigger 1 instance being deleted from your ASG,
         but your ASG has already 2 instances running and the minimum capacity is 2. What will happen?
     `,
        answers: {
          a: "One instance will be deleted and the ASG capacity and minimum will go to 1 ",
          b: "The alarm will remain in the Alarm state but never decrease the number of instances in my ASG",
          c: "The alarm will be detached from the ASG",
          d: "The alarm will go into ok state",
        },
        correctAnswer: "b",
        explanation: `
        The number of instances in an ASG cannot go below the minimum, 
        even if the alarm would in theory trigger an instance termination
    `,
      },

      {
        question: `
        You have made a configuration change and would like to evaluate
         the impact of it on the performance of your application. Which service do you use?
     `,
        answers: {
          a: "CloudWatch",
          b: "CloudTrail",
          c: "none of the above",
          d: "All of the above",
        },
        correctAnswer: "a",
        explanation: `
        CloudWatch is used to monitor the applications performance / metrics
    `,
      },

      {
        question: `
        Someone has terminated an EC2 instance in your account last week, which was hosting a critical database. 
        You would like to understand who did it and when, how can you achieve that?
     `,
        answers: {
          a: "Look at CloudWatch Metrics",
          b: "Look at CloudWatch Alarm",
          c: "Look at CloudWatch Events",
          d: "Look at CloudTrail",
        },
        correctAnswer: "d",
        explanation: `
        CloudTrail helps audit the API calls made within your account, so the database deletion 
        API call will appear here (regardless if made from the console, the CLI, or an SDK)
    `,
      },

      {
        question: `
        You would like to ensure that over time,
         none of your EC2 instances expose the port 84 as it 
         is known to have vulnerabilities with the OS you are using. What can you do to monitor this?
`,
        answers: {
          a: "Setup CloudWatch Metrics",
          b: "Setup CloudTrails trail",
          c: "Setup config rules",
          d: "create an aws lambda cron job",
        },
        correctAnswer: "c",
        explanation: `
    not implemented
    
    `,
      },

      {
        question: `
        You would like to evaluate the
         compliance of your resource's configurations over time. Which technology do you choose?
     `,
        answers: {
          a: "CloudWatch",
          b: "CloudTrail",
          c: "Config",
          d: "None of the above",
        },
        correctAnswer: "c",
        explanation: `
   Not implemented
    
    `,
      },

      {
        question: `
        High Resolution Custom Metrics can have a minimum resolution of 
     `,
        answers: {
          a: "1 seconds",
          b: "10 seconds",
          c: "30 seconds",
          d: "1 minute",
        },
        correctAnswer: "a",
        explanation: `
    Not implemented
    
    `,
      },

      {
        question: `
        An Alarm on a High Resolution Metric can be triggered as often as
     `,
        answers: {
          a: "1 second",
          b: "10 seconds",
          c: "30 seconds",
          d: "1 minute",
        },
        correctAnswer: "b",
        explanation: `
    note implemented
    
    `,
      },

      {
        question: `
        We need to gain access to a Role in another AWS account. How is it done?
     `,
        answers: {
          a: "You should ask them to create a user for you",
          b: "You should ask them to send us access key",
          c: "We should us STS service to gain temporary credentials",
          d: "None of the above",
        },
        correctAnswer: "c",
        explanation: `
        STS will allow us to get cross account access through the
         creation of a role in our account authorized to access a role in another account. 
        See more here: https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html
    
    `,
      },

      {
        question: `
        You have a mobile application and would like to give
         your users access to their own personal space in Amazon S3. How do you achieve that?
     `,
        answers: {
          a: "Generate IAM user credential for each of your application's user ",
          b: "Use Cognito Identity Federation",
          c: "Use SAML Identity Fedration",
          d: "Use a bucket policy to make your bucket public",
        },
        correctAnswer: "b",
        explanation: `
        Cognito is made to federate mobile user accounts and provide them with their own IAM policy. 
        As such, they should be able thanks to that policy to access their own personal space in Amazon S3. 
    
    `,
      },

      {
        question: `
        You have strong regulatory requirements to only allow fully internally audited AWS Services in production. 
        You still want to allow your teams to experiment
         in development environments while services are being audited. How can you best set this up?
     `,
        answers: {
          a: "Provide the dev team with a completely independent account",
          b: "Create an AWS Organisation and create two prod and Dev OU. Apply a SCP on Prod",
          c: "Apply a Global IAM policy on your production account",
          d: "Create an aws config rule",
        },
        correctAnswer: "b",
        explanation: `
        not implemented
     `,
      },

      {
        question: `
        You have an on-premise active directory setup and would like 
        to provide access for your on-premise users to the multiple accounts you have in AWS.
         The solution should scale to adding accounts in the future. What do you recommend?
     `,
        answers: {
          a: "Setup SAML 2.0 integration between each aws account and your on-premise AD",
          b: "Set up aws Single Sign-on",
          c: "Set up web identity federation through cognito",
          d: "Create a Lambda function that automatically creates IAM user in every aws account  for each user in yourr AD",
        },
        correctAnswer: "",
        explanation: `
    not implemented
    `,
      },

      {
        question: `
        Which AWS Directory Service allows you to proxy requests to your on-premise active directory?
     `,
        answers: {
          a: "AD on EC2 ",
          b: "Managed microsoft AD",
          c: "AD connector",
          d: "Simple AD",
        },
        correctAnswer: "c",
        explanation: `
    Not implemented
    `,
      },

      {
        question: `
        To enable encryption in flight, we need to have
`,
        answers: {
          a: "An HTTP endpoint with ssl certificate",
          b: "An HTTPs endpoint with ssl certificate",
          c: "A TCP endpoint",
          d: "None of the above",
        },
        correctAnswer: "b",
        explanation: `
        encryption in flight = HTTPS, and HTTPs cannot be enabled without an SSL certificate
    `,
      },

      {
        question: `
        Server side encryption means that the data is sent encrypted to the server first
     `,
        answers: {
          a: "true",
          b: "false",
          
        },
        correctAnswer: "b",
        explanation: `
        Server side encryptions means the server will encrypt the data for us.
         We don't need to encrypt it beforehand
    `,
      },

      {
        question: `
        In server side encryption, only the encryption happens on the server. Where does the decryption happen?
     `,
        answers: {
          a: "The server",
          b: "The client",
          c: "both client and server",
          d: "either client or server",
        },
        correctAnswer: "a",
        explanation: `
        In server side encryption, the decryption also happens on
         the server (in AWS, we wouldn't be able to decrypt the 
        data ourselves as we can't have access to the corresponding encryption key)
     `,
      },

      {
        question: `
        In client side encryption, the server must know our encryption scheme to accept the data
     `,
        answers: {
          a: "true",
          b: "false",
         
        },
        correctAnswer: "b",
        explanation: `
        With client side encryption, the server does not need to know any information about the encryption being used,
         as the server won't perform any encryption or decryption tasks
    
    `,
      },

      {
        question: `
        We need to create User Keys in KMS before using the encryption features for EBS, S3, etc...
     `,
        answers: {
          a: "false",
          b: "true",
         
        },
        correctAnswer: "a",
        explanation: `
        we can use the AWS Managed Service Keys in KMS, therefore we don't need to create our own keys
     `,
      },

      {
        question: `
        We'd like our Lambda function to have access to a database password. We should
     `,
        answers: {
          a: "Embed it in code",
          b: "Have it as plain text environment variable",
          c: "Have it as encrypted variable and decrypt it at runtime",
          d: "None of the above",
        },
        correctAnswer: "c",
        explanation: `
    This is the most secure solution amongst the options
    
    `,
      },

      {
        question: `
        We would like to audit the values of an encryption value over time
     `,
        answers: {
          a: "We should use AWS KMS versioning feature",
          b: "We should use s3",
          c: "We should use SSM Parameter store",
          d: "none of the above",
        },
        correctAnswer: "c",
        explanation: `
        SSM Parameter Store has versioning and audit of values built-in directly
    `,
      },

      {
        question: `
        Under the shared responsibility model, what are your responsible for in RDS?
     `,
        answers: {
          a: "Security group rules",
          b: "OS patching",
          c: "Database patching",
          d: "none of the above",
        },
        correctAnswer: "a",
        explanation: `
        This are configured by us and we've done that extensively in the course
    `,
      },

      {
        question: `
        Your user-facing website is a high risk target for DDoS attack and
         you would like to get 24/7 support in case they happen,
         as well as AWS bill reimbursement for the incurred costs during the attacks. What service should you use?
     `,
        answers: {
          a: "AWS Shield Advanced ",
          b: "AWS WAF",
          c: "AWS Shield",
          d: "AWS DDOs Oops Team",
        },
        correctAnswer: "a",
        explanation: `
        Your user-facing website is a high risk target for DDoS attack and
         you would like to get 24/7 support in case they happen, as well as
         AWS bill reimbursement for the incurred costs during the attacks. What service should you use?
    `,
      },

      {
        question: `
        You need an encryption service that supports asymmetric encryption schemes, 
        and you want to manage the security keys yourself. Which service could you use?
`,
        answers: {
          a: "CloudHSM",
          b: "KMS",
          c: "Parameter store",
          d: "none of the above",
        },
        correctAnswer: "a",
        explanation: `
    not implemented
    
    `,
      },

      {
        question: `
        What does this CIDR correspond to?
     `,
        answers: {
          a: "10.0.4.0  to  10.0.4.15",
          b: "10.0.4.0  to  10.0.32.0",
          c: "10.0.4.0  to  10.0.4.28 ",
          d: "10.0.0.0  to  10.0.16.0 ",
        },
        correctAnswer: "a",
        explanation: `
        /28 means 16 IPs (=2^(32-28) = 2^4), means only the last digit can change. 
    `,
      },
      {
        question: `
        You plan on creating a subnet and want it to have at least capacity for 28 EC2 instances. 
        What's the minimum size you need to have for your subnet?
     `,
        answers: {
          a: "/28",
          b: "/27",
          c: "/26",
          d: "/25",
        },
        correctAnswer: "c",
        explanation: `
        perfect size (64 IP)
    `,
      },

      {
        question: `
        You would like to provide internet access to your instances in private subnets with IPv4, 
        while making sure this solution
         requires the least amount of administration and scales seamlessly. What should you use?
     `,
        answers: {
          a: "NAT Instances with Source/Destination flag off",
          b: "NAT Gatway",
          c: "Egress Only Internet Gateway",
          d: "None of the above",
        },
        correctAnswer: "b",
        explanation: `
   Not implemented
    `,
      },

      {
        question: `
        VPC Peering has been enabled between VPC A and VPC B, and the route tables have been updated for VPC A. 
        Still, your instances cannot communicate. What is the likely issue?
     `,
        answers: {
          a: "Check the NACL",
          b: "Check the table in VPC B",
          c: "Check the instance security group",
          d: "Check if DNS Security Group is enabled",
        },
        correctAnswer: "b",
        explanation: `
        Route tables must be updated in both VPC that are peered
    `,
      },

      {
        question: `
        Which are the only two services that have a Gateway Endpoint instead of an Interface Endpoint as a VPC endpoint? 
     `,
        answers: {
          a: "Amazon s3 & Amazon SQS",
          b: "Amazon s3 & Amazon DynamoDB",
          c: "Amazon SQS & Amazon DynamoDB",
          d: "Amazon RDS & Amazon Redshift",
        },
        correctAnswer: "b",
        explanation: `
        these two services have a Gateway endpoint (remember it),
         all the other ones have an interface endpoint (powered by Private Link - means a private IP)
    `,
      },

      {
        question: `
        Your company has created a REST API that it will sell to hundreds of customers as a SaaS.
        Your customers are on AWS and are using their own VPC. 
         You would like to allow your customers to access your SaaS without going through the public internet while 
        ensuring your infrastructure is not left exposed to network attacks. What do you recommend?
     `,
        answers: {
          a: "Create  a VPC Endpoint",
          b: "Create  a VPC Peering Connection",
          c: "Create  a PrivateLink",
          d: "Create  a ClassicLink",
        },
        correctAnswer: "c",
        explanation: `
    not  implemented
     `,
      },



      {
        question: `
        You have a corporate network of size 10.0.0.0/8  and a satellite office of size 192.168.0.0/16. 
        Which CIDR is acceptable for your AWS VPC if you plan on connecting your networks later on?
     `,
        answers: {
          a: "172.16.0.0/12",
          b: "172.16.0.0/16",
          c: "10.0.16.0/16",
          d: "192.168.4.0/18",
        },
        correctAnswer: "c",
        explanation: `
        CIDR not should overlap, and the max CIDR size in AWS is /16
    `,
      },



      {
        question: `
        You have set up an internet gateway in your VPC,
         but your EC2 instances still don't have access to the internet. What is NOT a possible issue?
     `,
        answers: {
          a: "Route Tables are missing entries ",
          b: "Security groups does not allow network in",
          c: "NACL does not allow network out",
          d: "None of the above",
        },
        correctAnswer: "b",
        explanation: `
        security groups are stateful and if traffic can go out, then it can go back in
    `,
      },



      {
        question: `
        You have set-up a direct connection between your Corporate Data Center and your VPC A. 
        You need to access VPC B in another region from your Corporate Data Center as well. What should you do?
     `,
        answers: {
          a: "Enable VPC peering",
          b: "Use Direct Connect Gateway",
          c: "Use a Direct Connect",
          d: "Setup a NAT Gateway",
        },
        correctAnswer: "b",
        explanation: `
        This is the main use case of Direct Connect Gateways
    `,
      },



      {
        question: `
        Your company has several on-premise sites across the USA.
        These sites are currently linked using a private connection,
        but your private connection provider has been recently quite unstable,
        making your IT architecture partially offline. 
        You would like to create a backup connection 
        that will use the public internet to link your on-premise sites,
         that you can failover in case of issues with your provider. What do you recommend?
     `,
        answers: {
          a: "Site-to-site VPN",
          b: "Direct Connect",
          c: "VPN CloudHub",
          d: "PrivateLink",
        },
        correctAnswer: "c",
        explanation: `
    not implemented
    `,
      },



      {
        question: `
        As part of your disaster recovery strategy, you would like to have only the critical systems up
         and running in AWS. You don't mind a longer RTO. Which DR strategy do you recommend?
     `,
        answers: {
          a: "Backup and Restore",
          b: "Pilot Light",
          c: "Warm Standby",
          d: "Multi site",
        },
        correctAnswer: "b",
        explanation: `
        If you're interested into reading more about disaster recovery, the whitepaper is here
        : https://d1.awsstatic.com/asset-repository/products/CloudEndure/CloudEndure_Affordable_Enterprise-Grade_Disaster_Recovery_Using_AWS.pdf
    `,
      },



      {
        question: `
        You would like to get the DR strategy
         with the lowest RTO and RPO, regardless of the cost, which one do you recommend?
     `,
     answers: {
        a: "Backup and Restore",
        b: "Pilot Light",
        c: "Warm Standby",
        d: "Multi site",
      },
        correctAnswer: "d",
        explanation: `
        If you're interested into reading more about disaster recovery, the whitepaper is here:
         https://d1.awsstatic.com/asset-repository/products/CloudEndure/CloudEndure_Affordable_Enterprise-Grade_Disaster_Recovery_Using_AWS.pdf
    `,
      },



      {
        question: `
        Which of the following strategies has a potentially high RPO and RTO?
     `,
     answers: {
        a: "Backup and Restore",
        b: "Pilot Light",
        c: "Warm Standby",
        d: "Multi site",
      },
        correctAnswer: "d",
        explanation: `
        If you're interested into reading more about disaster recovery, the whitepaper is here:
         https://d1.awsstatic.com/asset-repository/products/CloudEndure/CloudEndure_Affordable_Enterprise-Grade_Disaster_Recovery_Using_AWS.pdf
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
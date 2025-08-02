import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, Target, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Yotta Tech Ports",
      role: "Data Engineer",
      duration: "November 2022 – Present",
      client: "Pilot Flying J (Fortune 500 Fuel Retailer)",
      project: "Cloud-Based Transaction Integration Platform",
      domain: "Fuel Retail / Data Engineering",
      achievements: [
        "Migrated five legacy systems into a serverless AWS architecture, reducing data processing latency by 40%",
        "Designed event-driven pipelines using AWS Lambda, SQS, and SNS for real-time document and transaction ingestion",
        "Implemented OCR-based invoice validation pipeline with 98% accuracy",
        "Created optimized schemas in PostgreSQL and DynamoDB to manage high-volume data ingestion",
        "Developed test coverage using pytest and enforced code quality through SonarQube, reducing production bugs by 30%",
        "Automated CI/CD processes via Jenkins and CloudBees, cutting release cycle times by 40%",
        "Built internal tools to automate deployment health checks and eliminate manual validation steps"
      ],
      techStack: [
        "Python", "PostgreSQL", "AWS Lambda", "SQS", "SNS", "S3", "CloudWatch", 
        "DynamoDB", "RDS", "API Gateway", "IAM", "ActiveBatch", "Jenkins", "Git"
      ]
    },
    {
      company: "Yotta Tech Ports",
      role: "Full Stack Developer",
      duration: "May 2022 – November 2022",
      client: "Internal",
      project: "Performance Management System (PMS)",
      domain: "HR / Employee Performance Evaluation",
      achievements: [
        "Designed and developed an intuitive web application to manage goal setting, self-evaluation, and manager reviews",
        "Built RESTful APIs using Flask for back-end services and used Angular to implement responsive front-end components",
        "Created UI/UX mockups in Figma for approval before component development",
        "Designed and implemented PostgreSQL schemas to handle evaluation cycles, scores, and feedback records",
        "Hosted and monitored the application on AWS, integrating S3 for storage and EC2 for compute resources",
        "Ensured security and performance best practices were followed throughout development"
      ],
      techStack: [
        "Python", "Flask", "Angular", "PostgreSQL", "AWS S3", "Lambda", 
        "RDS", "CloudWatch", "Figma", "Git", "VSCode"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building scalable solutions and driving digital transformation
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-foreground mb-2">
                        {exp.role}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Building className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 text-muted-foreground mb-1">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">Client: {exp.client}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Target className="h-4 w-4" />
                        <span className="text-sm">{exp.domain}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    Project: {exp.project}
                  </h4>
                  
                  <div className="mb-6">
                    <h5 className="text-lg font-medium text-foreground mb-3">
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-medium text-foreground mb-3">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Cloud, 
  Settings, 
  TestTube, 
  Monitor,
  Layers,
  GitBranch
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python (Pandas, SQLAlchemy)", "SQL", "Java", "JavaScript"],
      color: "text-blue-600"
    },
    {
      title: "Frontend Frameworks",
      icon: Layers,
      skills: ["Angular", "React", "HTML/CSS", "TypeScript"],
      color: "text-green-600"
    },
    {
      title: "Data Engineering & ETL",
      icon: Database,
      skills: ["Apache Spark", "ActiveBatch", "DBT", "ETL Pipelines"],
      color: "text-purple-600"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "Snowflake", "DynamoDB"],
      color: "text-orange-600"
    },
    {
      title: "Cloud Services - AWS",
      icon: Cloud,
      skills: [
        "Lambda", "SQS", "SNS", "CloudWatch", "S3", "DynamoDB", 
        "RDS", "EC2", "API Gateway", "IAM", "Secret Manager"
      ],
      color: "text-yellow-600"
    },
    {
      title: "Cloud Services - GCP",
      icon: Cloud,
      skills: ["Cloud Functions", "BigQuery", "Dataproc"],
      color: "text-red-600"
    },
    {
      title: "CI/CD & DevOps",
      icon: Settings,
      skills: ["Jenkins", "CloudBees", "JFrog Artifactory", "Docker"],
      color: "text-indigo-600"
    },
    {
      title: "Testing & Code Quality",
      icon: TestTube,
      skills: ["Unit Testing (pytest)", "Code Coverage", "SonarQube"],
      color: "text-pink-600"
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "Bitbucket", "GitHub Desktop"],
      color: "text-gray-600"
    },
    {
      title: "Development Tools",
      icon: Monitor,
      skills: [
        "Postman", "Jira", "PyCharm", "VSCode", "pgAdmin", 
        "Figma", "Confluence", "ServiceNow", "Visual Studio"
      ],
      color: "text-cyan-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-3">
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                      <span className="text-lg">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Operating Systems
                </h3>
                <div className="flex justify-center space-x-4">
                  <Badge variant="outline" className="text-lg py-2 px-4">
                    Windows
                  </Badge>
                  <Badge variant="outline" className="text-lg py-2 px-4">
                    Ubuntu
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
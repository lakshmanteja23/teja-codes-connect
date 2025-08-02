import { Card, CardContent } from "@/components/ui/card";
import { Award, MapPin, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about transforming complex data challenges into elegant, scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Results-oriented Data Engineer with 3+ years of experience designing and deploying scalable, 
                cloud-native data solutions for high-impact enterprise systems. Led the modernization of 
                five legacy platforms into a unified AWS architecture for a Fortune 500 fuel retail client, 
                improving processing efficiency by 60%.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Skilled in Python, SQL, AWS, and ETL pipeline development, with hands-on experience in 
                data ingestion, validation, transformation, and reconciliation. Known for writing clean, 
                testable code and delivering automation tools that eliminate manual effort and reduce 
                production incidents.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Hyderabad, Telangana</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="text-foreground">B.Tech in Electronics and Communication Engineering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Extra Mile Award 2024 - Yotta Tech Ports</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    Education
                  </h4>
                  <div className="space-y-2">
                    <p className="text-foreground font-medium">
                      Bachelor of Technology
                    </p>
                    <p className="text-muted-foreground">
                      Electronics and Communication Engineering
                    </p>
                    <p className="text-muted-foreground">
                      DRK Institute of Science and Technology
                    </p>
                    <p className="text-primary font-medium">
                      2017 - 2021
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    Specializations
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">Data Engineering</span>
                      <span className="text-primary font-medium">Expert</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">Cloud Architecture (AWS)</span>
                      <span className="text-primary font-medium">Advanced</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">Full Stack Development</span>
                      <span className="text-primary font-medium">Proficient</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">DevOps & CI/CD</span>
                      <span className="text-primary font-medium">Advanced</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lakshmanteja675@gmail.com",
      href: "mailto:lakshmanteja675@gmail.com",
      color: "text-blue-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "lakshman-teja-errapothu",
      href: "https://www.linkedin.com/in/lakshman-teja-errapothu",
      color: "text-blue-700"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7842201779",
      href: "tel:+917842201779",
      color: "text-green-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, Telangana",
      href: null,
      color: "text-red-600"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on your next data engineering project or discuss opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              const content = (
                <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-3">
                      <IconComponent className={`h-6 w-6 ${contact.color}`} />
                      <span className="text-lg">{contact.label}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground break-all">
                      {contact.value}
                    </p>
                  </CardContent>
                </Card>
              );

              return contact.href ? (
                <a 
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={index}>
                  {content}
                </div>
              );
            })}
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Let's Work Together
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always interested in discussing new opportunities, innovative projects, 
                and ways to leverage data engineering to solve complex business challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a href="mailto:lakshmanteja675@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/in/lakshman-teja-errapothu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
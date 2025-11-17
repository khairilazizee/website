import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    title: "Front-End Development and UI/UX Excellence",
    description:
      "Demonstrated strong expertise in developing responsive and intuitive web interfaces at MDEC using modern front-end technologies and frameworks, ensuring seamless performance across devices and platforms.",
  },
  {
    title: "OutSystems Low-Code Development",
    description:
      "Leveraged OutSystems to accelerate application delivery, reduce development overhead, and ensure scalable and maintainable code. Played a central role in rapidly prototyping and deploying enterprise-grade applications.",
  },
  {
    title: "Agile & Collaborative Software Engineering",
    description:
      "Actively participated in agile development cycles, sprint planning, and code reviews to ensure code quality and efficient resource management. Mentored junior developers, fostering a collaborative environment.",
  },
  {
    title: "Back-End System Development and API Integration",
    description:
      "Delivered robust and secure back-end solutions using Laravel and Core PHP, managing large-scale MySQL databases and integrating complex third-party APIs.",
  },
  {
    title: "Business Process Automation & Internal Tooling",
    description:
      "Led the automation of procurement workflows and developed internal systems that streamlined operations, reducing manual work and improving operational efficiency.",
  },
  {
    title: "Data Analysis and Reporting Dashboards",
    description:
      "Designed and implemented SDMA solutions and custom dashboards using Analysis Services, enabling real-time insights and reporting for business stakeholders.",
  },
];

const companies = [
  {
    role: "Front-End & OutSystems Developer",
    company: "Malaysian Digital Economy Corporation (MDEC)",
    period: "Feb 2023 – Present",
    current: true,
    description:
      "Design and develop intuitive web interfaces to elevate user experience. Utilize the OutSystems low-code platform for rapid, scalable app deployment. Collaborate with cross-functional teams on responsive design implementation, agile sprint planning, and scalable architecture.",
    tags: ["OutSystems", "React", "UI/UX", "Agile"],
  },
  {
    role: "Backend Developer",
    company: "Malaysian Digital Economy Corporation (MDEC)",
    period: "Oct 2021 – Sep 2022",
    current: false,
    description:
      "Developed backend systems using Laravel and Core PHP, supporting multiple frontend integrations. Built Python scripts for internal data analytics and decision-making. Managed API integrations and large-scale MySQL datasets.",
    tags: ["Laravel", "PHP", "Python", "MySQL"],
  },
  {
    role: "Software Engineer",
    company: "Uzma Engineering Sdn Bhd",
    period: "Jul 2018 – Oct 2021",
    current: false,
    description:
      "Automated procurement workflows and developed internal web tools, enhancing operational efficiency. Led development of SDMA solutions and business reporting models using Analysis Services, enabling real-time analytics.",
    tags: ["SDMA", "Automation", "Analytics", "Digital Transformation"],
  },
  {
    role: "Web Developer",
    company: "Aramis Group, Mont Kiara",
    period: "Apr 2017 – Jun 2018",
    current: false,
    description:
      "Created and maintained responsive, cross-browser web applications. Collaborated closely with design and backend teams to deliver seamless UX. Improved system reliability and performance through rigorous testing.",
    tags: ["Web Development", "Git", "Cross-browser", "Testing"],
  },
  {
    role: "Software Engineer & Web Developer",
    company: "Velocity Technology, Subang Jaya",
    period: "Jan 2010 – May 2016",
    current: false,
    description:
      "Led full-stack development of custom web applications and CMS platforms tailored to client needs. Delivered scalable solutions using JavaScript, Python, and Java. Mentored junior developers and implemented agile methodologies.",
    tags: ["Full-Stack", "CMS", "JavaScript", "Python", "Java"],
  },
];

const Career = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Career Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A timeline of professional growth, achievements, and impact across
            leading organizations.
          </p>
        </div>

        {/* Achievements Section */}
        <section
          className="mb-20 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <h2 className="text-3xl font-bold mb-8 border-b border-border pb-4">
            Core Achievements
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Company History Section */}
        <section
          className="animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="text-3xl font-bold mb-8 border-b border-border pb-4">
            Company History
          </h2>
          <div className="space-y-8">
            {companies.map((job, index) => (
              <Card
                key={index}
                className="relative overflow-hidden hover:shadow-lg transition-shadow"
              >
                {job.current && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="default">Current</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{job.role}</CardTitle>
                  <CardDescription className="text-lg">
                    {job.company} • {job.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Career;

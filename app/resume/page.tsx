const Resume = () => {
  const experiences = [
    {
      title: "Front-End & OutSystems Developer",
      company: "Malaysian Digital Economy Corporation (MDEC)",
      period: "Feb 2023 – Present",
      description:
        "Design and develop intuitive web interfaces to elevate user experience. Utilize the OutSystems low-code platform for rapid, scalable app deployment. Collaborate with cross-functional teams on responsive design implementation, agile sprint planning, and scalable architecture.",
    },
    {
      title: "Backend Developer",
      company: "Malaysian Digital Economy Corporation (MDEC)",
      period: "Oct 2021 – Sep 2022",
      description:
        "Developed backend systems using Laravel and Core PHP, supporting multiple frontend integrations. Built Python scripts for internal data analytics and decision-making. Managed API integrations and large-scale MySQL datasets.",
    },
    {
      title: "Software Engineer",
      company: "Uzma Engineering Sdn Bhd",
      period: "Jul 2018 – Oct 2021",
      description:
        "Automated procurement workflows and developed internal web tools, enhancing operational efficiency. Led development of SDMA solutions and business reporting models using Analysis Services.",
    },
    {
      title: "Web Developer",
      company: "Aramis Group, Mont Kiara",
      period: "Apr 2017 – Jun 2018",
      description:
        "Created and maintained responsive, cross-browser web applications. Collaborated closely with design and backend teams to deliver seamless UX.",
    },
    {
      title: "Software Engineer & Web Developer",
      company: "Velocity Technology, Subang Jaya",
      period: "Jan 2010 – May 2016",
      description:
        "Led full-stack development of custom web applications and CMS platforms. Delivered scalable solutions using JavaScript, Python, and Java. Mentored junior developers and implemented agile methodologies.",
    },
  ];

  const skills = [
    "Front-End Development & UI/UX",
    "OutSystems Low-Code Development",
    "Agile & Collaborative Engineering",
    "Back-End System Development",
    "API Integration",
    "Business Process Automation",
    "Data Analysis & Reporting",
    "Full-Stack Web Development",
    "Software Lifecycle Leadership",
  ];

  const technologies = [
    "PHP",
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "Laravel",
    "CodeIgniter",
    "Flask",
    "Next.js",
    "OutSystems",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "Crystal Reports",
    "ERP Systems",
  ];

  return (
    <div className="min-h-screen px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">RESUME</h1>
          <div className="h-1 w-24 bg-foreground" />
          <div className="space-y-2 text-lg">
            <p className="font-medium">Mohamad Khairil Azizee Mohamed</p>
            <p className="text-muted-foreground">Selangor, Malaysia</p>
            <p className="text-muted-foreground">khairil114@gmail.com</p>
            <a
              href="https://linkedin.com/in/khairilazizee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              linkedin.com/in/khairilazizee
            </a>
          </div>
        </div>

        {/* Summary */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">About</h2>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-4xl">
            Bachelor's Degree in Computer Science with experience in full-stack
            and low-code development. Strong expertise in building responsive
            front-end interfaces, scalable back-end systems, and enterprise
            applications using technologies like OutSystems, Laravel, Python,
            and MySQL. Focused on UI/UX improvements and accelerated digital
            solution delivery while mentoring junior developers and fostering
            agile practices.
          </p>
        </section>

        {/* Experience */}
        <section className="space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-foreground pl-8 space-y-3"
              >
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <p className="text-lg font-medium">{exp.company}</p>
                <p className="text-muted-foreground">{exp.period}</p>
                <p className="text-foreground/80 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Core Competencies</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-foreground mt-2 shrink-0" />
                <p className="text-lg">{skill}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-smooth"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">
                Bachelor's Degree in Computer Science
              </h3>
              <p className="text-lg text-muted-foreground">
                Universiti Teknologi MARA
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">
                Diploma in Computer Science
              </h3>
              <p className="text-lg text-muted-foreground">
                Institute Profesional Baitulmal
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;

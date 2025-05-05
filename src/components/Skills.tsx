
import { 
  Code, 
  Database, 
  Globe, 
  Layers, 
  PenTool, 
  Server, 
  Terminal, 
  Smartphone 
} from "lucide-react";

const skillsData = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Programming Languages",
    skills: ["JavaScript/TypeScript", "Python", "Java", "C/C++"]
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Web Development",
    skills: ["React", "HTML/CSS", "Node.js", "RESTful APIs"]
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"]
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Mobile Development",
    skills: ["React Native", "Android Development", "iOS Fundamentals"]
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Backend",
    skills: ["Express.js", "Django", "Spring Boot", "API Design"]
  },
  {
    icon: <Terminal className="h-8 w-8 text-primary" />,
    title: "Dev Tools",
    skills: ["Git", "Docker", "Linux/Unix", "CI/CD"]
  },
  {
    icon: <PenTool className="h-8 w-8 text-primary" />,
    title: "Design",
    skills: ["UI/UX Basics", "Figma", "Responsive Design"]
  },
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "Other Skills",
    skills: ["Problem Solving", "Algorithms", "Data Structures", "Team Collaboration"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            As a computer engineering student and software developer, I've developed a diverse set of technical skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold ml-3">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

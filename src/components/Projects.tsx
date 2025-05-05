
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projectsData = [
  {
    title: "Smart Health Monitoring System",
    description: "Developed an IoT-based health monitoring system that tracks vital signs and alerts caregivers in emergency situations.",
    tags: ["IoT", "Python", "React", "MongoDB"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "E-Learning Platform",
    description: "Created a responsive web application for online learning featuring video lectures, quizzes, and progress tracking.",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Inventory Management System",
    description: "Built a full-stack application for small businesses to track inventory, sales, and generate insightful reports.",
    tags: ["TypeScript", "React", "Firebase", "Chart.js"],
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Personal Finance Tracker",
    description: "Designed and developed a mobile app that helps users track expenses, set budgets, and visualize spending habits.",
    tags: ["React Native", "Redux", "Firebase", "D3.js"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "#",
    liveUrl: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on as a computer engineering student and software developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

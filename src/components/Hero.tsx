
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hi, I'm <span className="text-primary">Atharva Sankhe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700">
              Software Developer & Computer Engineering Student
            </h2>
            <p className="text-lg text-gray-600">
              I build innovative software solutions and applications with a passion for clean code and user-centered design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <Avatar className="w-full h-full border-4 border-primary shadow-lg">
                <AvatarImage 
                  src="/lovable-uploads/dafcfe97-fc70-4ca5-a166-c7a1d1305ee2.png" 
                  alt="Atharva Sankhe Profile"
                  className="object-cover"
                />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

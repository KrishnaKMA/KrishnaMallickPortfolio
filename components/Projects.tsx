import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';  // <-- Added this import

// Skills object with icons
const skills = {
  Languages: [
    { name: 'C', image: 'images/C.png' },
    { name: 'C++', image: 'images/cpp.png' },
    { name: 'Swift', image: 'images/swift.png' },
    { name: 'Flutter', image: 'images/flutter.png' },
    { name: 'Java', image: 'images/Java.png' },
    { name: 'JavaScript', image: 'images/JavaScript.png' },
    { name: 'TypeScript', image: 'images/TypeScript.png' },
    { name: 'Python', image: 'images/Python.png' },
    { name: 'HTML', image: 'images/HTML.png' },
    { name: 'CSS', image: 'images/CSS.svg' },
    { name: 'SQL', image: 'images/SQL.png' },
    { name: 'Bash', image: 'images/Bash.png' },
    { name: 'PHP', image: 'images/PHP.png' },
  ],
  Tools: [
    { name: 'SwiftUI', image: 'images/SwiftUI.png' },
    { name: 'UIKit', image: 'images/UIkit.webp' },
    { name: 'Charles', image: 'images/Charles.webp' },
    { name: 'Node.js', image: 'images/NodeJS.webp' },
    { name: 'Express', image: 'images/Express.png' },
    { name: 'Firebase', image: 'images/Firebase.svg' },
    { name: 'Angular', image: 'images/Angular.png' },
    { name: 'React', image: 'images/React.png' },
    { name: 'Nextion', image: 'images/Nextion.png' },
    { name: 'Next.js', image: 'images/NextJS.svg' },
  ],
  DevOps: [
    { name: 'Git', image: 'images/Git.png' },
    { name: 'GitHub Actions', image: 'images/GithubActions.png' },
    { name: 'Docker', image: 'images/Docker.svg' },
    { name: 'CI/CD Pipelines', image: 'images/CICDPipelines.png' },
    { name: 'AWS', image: 'images/AWS.png' },
  ],
};

// Define the type of the skills object
type SkillCategory = keyof typeof skills;
type Skill = { name: string; image: string };

// Function to find icon for a technology
const getTechnologyIcon = (tech: string): string | null => {
  for (const category in skills) {
    const categoryKey = category as SkillCategory;
    const skill = (skills[categoryKey] as Skill[]).find((item) => item.name === tech);
    if (skill) return skill.image;
  }
  return null; // Return null if no icon is found
};

export default function Projects() {
  const projects = [
    {
      title: 'Birdie',
      description: 'A full-stack Android mobile app clone of Twitter using Flutter, FlutterUI, and Firebase. Features include tweeting, liking tweets, profile customization, notifications, messages, and search.',
      technologies: ['Flutter', 'Firebase', 'React'],
      date: 'January 2023',
    },
    {
      title: 'Straights',
      description: 'An interactive and fully automated poker-like game playable by 0 to 4 players. Developed in C++ using strict object-oriented programming techniques and the Model-View-Controller (MVC) design pattern.',
      technologies: ['C++', 'VS-Code'],
      date: 'May 2024',
    },
    {
      title: 'Naan-stop wok',
      description: 'A fast-food restaurant website where users can order items, create accounts to save favorite orders, and reserve seats. Built with React, Tailwind, and Firebase while adhering to the MVC design pattern.',
      technologies: ['React', 'Tailwind', 'Firebase'],
      date: 'December 2023',
    },
    {
      title: 'Reflow Oven',
      description: 'Oven made with STM-32 microprocessor to control heating for preparing metal to make circuit boards. Built with C for backend, Figma and Nextion for UI, and used Git actions for team access to data.',
      technologies: ['C', 'Figma', 'Nextion'],
      date: 'July 2024',
    },
    {
      title: 'Heads-Up Display for FASE car',
      description: 'Advanced HUD system on ESP32 microcontroller with integrated MPU-6050 sensor to display real-time vehicle metrics. Implemented embedded programming in C++, designed UI using Figma and Nextion, and set up data sharing protocols through Git Actions.',
      technologies: ['C++', 'Figma', 'Nextion', 'HTML', 'CSS', 'Java'],
      date: 'September 2024',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-blue-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <div className="p-4">
                  <Card className="overflow-hidden shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.date}</p>
                      <p className="text-gray-700 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech, idx) => {
                          const icon = getTechnologyIcon(tech);
                          return (
                            <div
                              key={idx}
                              className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm"
                            >
                              {icon && (
                                <Image
                                  src={icon}
                                  alt={`${tech} logo`}
                                  width={30}
                                  height={30}
                                  className="mr-2"
                                />
                              )}
                              <span className="text-sm font-semibold text-gray-700">{tech}</span>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

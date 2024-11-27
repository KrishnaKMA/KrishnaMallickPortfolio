import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Skills object with icons
const skills = {
  Languages: [
    { name: 'C', image: '/Images/C.png' },
    { name: 'C++', image: '/Images/cpp.png' },
    { name: 'Swift', image: '/Images/swift.png' },
    { name: 'Flutter', image: '/Images/flutter.png' },
    { name: 'Java', image: '/Images/Java.png' },
    { name: 'JavaScript', image: '/Images/JavaScript.png' },
    { name: 'TypeScript', image: '/Images/TypeScript.png' },
    { name: 'Python', image: '/Images/Python.png' },
    { name: 'HTML', image: '/Images/HTML.png' },
    { name: 'CSS', image: '/Images/CSS.svg' },
    { name: 'SQL', image: '/Images/SQL.png' },
    { name: 'Bash', image: '/Images/Bash.png' },
    { name: 'PHP', image: '/Images/PHP.png' },
  ],
  Tools: [
    { name: 'SwiftUI', image: '/Images/SwiftUI.png' },
    { name: 'UIKit', image: '/Images/UIkit.webp' },
    { name: 'Charles', image: '/Images/Charles.webp' },
    { name: 'Node.js', image: '/Images/NodeJS.webp' },
    { name: 'Express', image: '/Images/Express.png' },
    { name: 'Firebase', image: '/Images/Firebase.svg' },
    { name: 'Angular', image: '/Images/Angular.png' },
    { name: 'React', image: '/Images/React.png' },
    { name: 'Nextion', image: '/Images/Nextion.png' },
    { name: 'Next.js', image: '/Images/NextJS.svg' },
  ],
  DevOps: [
    { name: 'Git', image: '/Images/Git.png' },
    { name: 'GitHub Actions', image: '/Images/GithubActions.png' },
    { name: 'Docker', image: '/Images/Docker.svg' },
    { name: 'CI/CD Pipelines', image: '/Images/CICDPipelines.png' },
    { name: 'AWS', image: '/Images/AWS.png' },
  ],
};

// Define the type of the skills object
type SkillCategory = keyof typeof skills;
type Skill = { name: string; image: string };

// Function to find icon for a technology
const getTechnologyIcon = (tech: string): string | null => {
  for (const category in skills) {
    // TypeScript now knows that category is one of 'Languages', 'Tools', or 'DevOps'
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


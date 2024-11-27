import Image from 'next/image';
import KrishnaMallick from '../public/images/KrishnaMallick.jpeg';  // Importing the image
import EmailIcon from '../public/images/EmailIcon.png';  // Importing the email icon
import LinkedinIcon from '../public/images/LinkedinIcon.webp';  // Importing the LinkedIn icon
import GithubIcon from '../public/images/GithubIcon.png';  // Importing the GitHub icon

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex bg-blue-400">
      {/* Image - 2/3 width */}
      <div className="w-2/3 relative">
        <Image
          src={KrishnaMallick}  // Using the imported image
          alt="Krishna Mallick"
          layout="fill"  // Fills the parent container
          objectFit="cover"  // Ensures the image covers the container without distortion
          className="rounded-l-lg"  // Optional: add a rounded left corner if desired
        />
      </div>

      {/* Content - 1/3 width */}
      <div className="w-1/3 flex flex-col justify-center items-start p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Krishna Mallick</h1>
        <h2 className="text-2xl text-gray-600 mb-8">Software Engineering Student</h2>
        <p className="text-gray-700 mb-6">
          Passionate software engineering student with experience in embedded systems, web development, and machine programming. 
          Skilled in multiple programming languages and frameworks, with a focus on creating efficient and innovative solutions.
        </p>
        <div className="mt-8 flex justify-center md:justify-start space-x-4">
          <a
            href="mailto:krishnamallick46@hotmail.com"
            className="hover:opacity-80"
            aria-label="Email"
          >
            <Image
              src={EmailIcon}  // Using the imported email icon
              alt="Email Icon"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/krishna-mallick-a558b6260/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
            aria-label="LinkedIn"
          >
            <Image
              src={LinkedinIcon}  // Using the imported LinkedIn icon
              alt="LinkedIn Icon"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://github.com/KrishnaKMA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
            aria-label="GitHub"
          >
            <Image
              src={GithubIcon}  // Using the imported GitHub icon
              alt="GitHub Icon"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
    </section>
  );
}



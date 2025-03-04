import Image from 'next/image'; 
 
export default function Hero() { 
  return ( 
    <section 
      id="about" 
      className="relative min-h-screen flex flex-col md:flex-row bg-black"
    > 
      {/* Red Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>

      {/* Image - full width on mobile and 2/3 width on medium screens */} 
      <div className="w-full md:w-2/3 relative min-h-[400px] md:min-h-screen"> 
        <Image 
          src="/images/KrishnaMallick.jpeg"  // Ensure the image path is correct 
          alt="Krishna Mallick" 
          layout="fill"  
          objectFit="cover"  
          className="rounded-t-lg md:rounded-l-lg pb-1"  
        /> 
      </div> 
 
      {/* Content - full width on mobile and 1/3 width on medium screens */} 
      <div className="w-full md:w-1/3 flex flex-col justify-center items-start p-8 bg-black rounded-lg shadow-lg"> 
        <h1 className="text-4xl font-bold mb-4 text-red-600">Krishna Mallick</h1> 
        <h2 className="text-2xl text-white mb-8">Software Engineering Student</h2> 
        <p className="text-white mb-6"> 
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
              src="/images/EmailIcon.png"  
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
              src="/images/LinkedinIcon.webp"  
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
              src="/images/GithubIcon.png"  
              alt="Github Icon" 
              width={40} 
              height={40} 
            /> 
          </a> 
        </div> 
      </div> 
    </section> 
  ); 
} 

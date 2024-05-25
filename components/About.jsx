import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight} from "react-icons/bs";
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I am Meriem TAHIRI second year Software Engineering student,
            passionate about web development, and eager to learn new technologies
            and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building web applications using NodeJs, ReactJs/NextJs, SpringBoot and Angular
            I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2 text-gray-600'>
          open to join a dynamic and innovative organization where I can work on a real
          projects to deepen my proficiency, give the best solutions, and collaborate with
          diverse and talented professionals.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;

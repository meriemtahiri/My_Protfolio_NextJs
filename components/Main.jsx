import Link from 'next/link';
import { motion } from "framer-motion";
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>

        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#51aae5]'> Meriem</span>
          </h1>
          <h1 className='py-2 text-gray-700'>Software Engineering student</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] mb-4 m-auto'>
            I’m focused on building web applications
            using <b>NodeJs </b>and <b>ReactJs/NextJs</b>.
          </p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
        >
          <div className="flex flex-col space-y-4">
          <a href="assets/CV_Meriem TAHIRI.pdf" download="CV_Meriem TAHIRI.pdf">
              <button>Download Essays</button>
            </a>
            <a href="assets/CV_Meriem TAHIRI.pdf" download="CV_Meriem TAHIRI.pdf">
              <button>Download Resume</button>
            </a>
            <a href="assets/Cover Letter.pdf" download="Cover Letter.pdf">
              <button>Download Cover Letter</button>
            </a>
          </div>

        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
          <div className='flex items-center justify-between max-w-[250px] mt-4 m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/meriem-tahiri-79b383254/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/meriemtahiri'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='mailto:meryemtahiri222@gmail.com'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Main;

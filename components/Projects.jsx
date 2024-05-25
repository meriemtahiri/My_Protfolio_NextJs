import React from 'react';
import netflixImg from '../public/assets/projects/netflix.jpg'
import docApp from '../public/assets/projects/docApp.png'
import game from '../public/assets/projects/game.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        
        <div className='grid md:grid-cols-2 gap-8'>
          
          <ProjectItem
            title='Netflix Clone'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'
          />

          <ProjectItem
            title='Docter Appointment'
            backgroundImg={docApp}
            projectUrl='/docApp'
            tech='React JS'
          />

          <ProjectItem
            title='The Girl Warrior'
            backgroundImg={game}
            projectUrl='/game'
            tech='Java'
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;

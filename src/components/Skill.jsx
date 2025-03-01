import React from 'react'
import SkillCard from './SkillCard';
import figma from './figma.svg';
import css3 from './css3.svg';
import javascript from './javascript.svg';
import nodejs from './nodejs.svg';
import expressjs from './expressjs.svg';
import mongodb from './mongodb.svg';
import react from './react.svg';  
import tailwindcss from './tailwindcss.svg';


export default function Skill() {

    const skillItem = [
        {
          imgSrc:{figma},
          label: 'Figma',
          desc: 'Design tool'
        },
        {
          imgSrc: {css3},
          label: 'CSS',
          desc: 'User Interface'
        },
        {
          imgSrc: {javascript},
          label: 'JavaScript',
          desc: 'Interaction'
        },
        {
          imgSrc: {nodejs},
          label: 'NodeJS',
          desc: 'Web Server'
        },
        {
          imgSrc: {expressjs},
          label: 'ExpressJS',
          desc: 'Node Framework'
        },
        {
          imgSrc: {mongodb},
          label: 'MongoDB',
          desc: 'Database'
        },
        {
          imgSrc: {react},
          label: 'React',
          desc: 'Framework'
        },
        {
          imgSrc: {tailwindcss},
          label: 'TailwindCSS',
          desc: 'User Interface'
        },
      ];


  return (
    <section id="skills" className='section'>
        <div className='container'>
             <h2 className='headline-2 reveal-up'>
             Essential Tools I use
             </h2>
             <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
             Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
             </p>
             <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
                {
                  skillItem.map(({imgSrc,label,desc},key)=>(
                    <SkillCard 
                       key={key}
                        imgSrc={imgSrc}
                        label={label}
                        desc={desc}
                        classes='reveal-up'
                    />
                  ))  
                }
             </div>
        </div>
    </section>
  )
}

import React from 'react';
import ProjectCard from './ProjectCard';
import portfoliopropic from "./PORTFOLIOPROPIC.png"
import netflixoropic from "./netflixpropic.png"

export default function Work() {
  const works = [
    { imgSrc: portfoliopropic, title: 'Portfolio', tags: ['react.js', 'tailwind css'], projectLink: 'https://jha-anjali.github.io/portfolio/' },
    { imgSrc: netflixoropic, title: 'Netflix Clone', tags: ['API', 'Node.js' ,'react.js'], projectLink: 'https://github.com/JHA-ANJALI/MyNetflixClone' },
    // { imgSrc: '/images/project-3.jpg', title: 'Recipe app', tags: ['Development', 'API'], projectLink: '' },
    // { imgSrc: '/images/project-4.jpg', title: 'Real estate website', tags: ['Web-design', 'Development'], projectLink: 'https://github.com/codewithsadee-org/wealthome' },
    // { imgSrc: '/images/project-5.jpg', title: 'eCommerce website', tags: ['eCommerce', 'Development'], projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website' },
    // { imgSrc: '/images/project-6.jpg', title: 'vCard Personal portfolio', tags: ['Web-design', 'Development'], projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio' }
  ];

  return (
    <section id="work" className='section'>
      <div className='container'>
        <h2 className='headline-2 mb-8 reveal-up'>My portfolio highlights</h2>
        <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,_1fr))]'>
          {works.map(({ imgSrc, title, tags, projectLink }, index) => (
            <ProjectCard key={index} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes='reveal-up' />
          ))}
        </div>
      </div>
    </section>
  );
}

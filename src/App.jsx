import React from 'react'
import './App.css'

import { ReactLenis, useLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
//register gsap plugins
gsap.registerPlugin(useGSAP , ScrollTrigger);

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {

  useGSAP(()=>{
    const elements=gsap.utils.toArray('.reveal-up')
    elements.forEach((element)=>{
      gsap.to(element,{
        scrollTrigger:{
          trigger:element,
          start:'-200 bottom',
          end:'bottom 80%',
          scrub:true,
        },
        y:0,
        opacity:1,
        duration:1,
        ease:'power2.out'
      })
    })
  })
  return (
  
<ReactLenis root>
<Header/>
<main>
<Hero/>
<About/>
<Skill/>
<Work/>
<Contact/>
</main>
<Footer/>
</ReactLenis>
   
  )
}

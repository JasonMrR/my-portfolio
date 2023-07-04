import React, { useState, useEffect } from 'react'

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

import './styles/Welcome.css';
import avatar from '../assets/profile-image.jpg';


const phrases = ["Software engineer", "Web developer", "App designer"];

const Welcome = () => {

  const [phrase, setPhrase] = useState(phrases[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhrase((prevPhrase) => {
        const currentIndex = phrases.indexOf(prevPhrase);
        const nextIndex = (currentIndex + 1) % phrases.length;
        return phrases[nextIndex];
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="welcome">
      <article className="welcome-container-introduce">
        <h3 className="text-2xl text-slate-500 mb-2">Hello!</h3>
        <h1 className="text-7xl font-bold text-slate-300">My name is Jason Morales</h1>
        <h2 className="text-3xl text-cyan-600 mb-8 uppercase">{phrase}</h2>
        <p className="text-md text-slate-300">I would like to introduce myself as an enthusiastic software developer, passionate about creating innovative and user-friendly applications. With a deep interest in the world of technology and a love for coding 🩶</p>
      </article>
      <article className="welcome-container-picture">
        <img
          className=" 
            bg-gradient-to-r 
            from-slate-500 
            to-cyan-800
            p-1.5 
            w-65 
            h-65 
            object-cover 
            rounded-full
            basis-1
          "
          src={avatar}
          alt="Yo"
        />
        <div className='social-container mt-8'>
          <a className='social-icon text-teal-600 text-3xl hover:text-slate-300' href='https://www.facebook.com/profile.php?id=100040590052935'>
            <FaFacebook />
          </a>
          <a className='social-icon text-teal-600 text-3xl hover:text-slate-300' href='https://www.linkedin.com/in/jason-morales-rodriguez-689a6427a/'>
            <FaLinkedin />
          </a>
          <a className='social-icon text-teal-600 text-3xl hover:text-slate-300' href='https://www.instagram.com/jcks_x.mk/'>
            <FaInstagram />
          </a>
        </div>
      </article>
    </section>
  )
}

export default Welcome
import React from 'react'

import './styles/LastesProjects.css'
import magitlan from '../assets/magitlan-landing-page.png'
import narah from '../assets/narah-landing-page.png'

const Projects = () => {

  const openMagitlan = () => {
    window.open('https://magitlan.com', '_blank');
  }

  const openNarah = () => {
    window.open('https://narahtres.com', '_blank');
  }

  return (
    <section className='projects'>
      <div className='projects-title-container'>
        <h1 className='projects-title-text text-slate-300 text-4xl font-semibold'>My lastes</h1>
        <h1 className='projects-title-text text-cyan-600 text-4xl font-bold'>Projects</h1>
      </div>
      <article className='projects-lastest'>
        <div className='project-last-one bg-sky-900'>
          <div>
            <p className='text-slate-500 text-lg'>Magitlán</p>
            <h1 className='text-slate-300 font-bold text-2xl mb-3 uppercase'>Landing page</h1>
            <h3 className='text-slate-400 font-semibold text-xl mb-5'>The marketing company Magitlan requires my services to create and publish a landing page for their business.</h3>
          </div>
          <figure onClick={() => openMagitlan()} className='figure-page-project'>
            <img className='page-project-image' src={magitlan} />
          </figure>
        </div>
        <div className="project-second-one bg-slate-700">
          <div>
            <p className='text-slate-500 text-lg'>Narah</p>
            <h1 className='text-slate-300 font-bold text-2xl mb-3 uppercase'>Landing page</h1>
            <h3 className='text-slate-400 font-semibold text-xl mb-5'>Narah real estate required my service to create and publish a landing page to show the apartments they have for sale.</h3>
          </div>
          <figure onClick={() => openNarah()} className='figure-page-project'>
            <img className='page-project-image' src={narah} />
          </figure>
        </div>
      </article>
    </section>
  )
}

export default Projects
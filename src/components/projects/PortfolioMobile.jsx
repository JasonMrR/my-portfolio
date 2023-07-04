import React, { useState } from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaGithub, FaNodeJs } from "react-icons/fa6";

import '../styles/Portfolio.css';
import image from '../../assets/magitlan-landing-page.png';

const projects = [
  {
    title: 'Project 1',
    subTitle: 'Dating Mobile App Design',
    description: 'lorem ipsum dolor sit amet, consectetur adip lorem, sed do eiusmod tempor incididunt ut labore',
    technologies: [
      <FaCss3 />,
      <FaJs />,
      <FaReact />,
      <FaGithub />,
    ],
    image: image,
    direction: 1,
  },
  {
    title: 'Project 2',
    subTitle: 'E-commerce Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ex ac lacus ullamcorper lacinia.',
    technologies: [
      <FaHtml5 />,
      <FaCss3 />,
      <FaJs />,
      <FaReact />,
      <FaNodeJs />,
      <FaGithub />,
    ],
    image: image,
    direction: 2,
  },
  {
    title: 'Project 3',
    subTitle: 'Social Media App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim placerat purus, sit amet feugiat nunc facilisis sit amet.',
    technologies: [
      <FaHtml5 />,
      <FaCss3 />,
      <FaReact />,
      <FaGithub />,
    ],
    image: image,
    direction: 1,
  },
  {
    title: 'Project 4',
    subTitle: 'Weather Application',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. In sodales sollicitudin metus, sed placerat enim finibus eu.',
    technologies: [
      <FaHtml5 />,
      <FaCss3 />,
      <FaJs />,
      <FaReact />,
      <FaNodeJs />,
      <FaGithub />,
    ],
    image: image,
    direction: 2,
  }
];


const Project = (props) => {
  return (
    <li className={`mobile-item ${props.direction===1?"direction-1":"direction-2"}`}>
      <div className='mobile-item-description'>
        <div>
          <h2 className='text-xl text-cyan-600 font-semibold'>{props.title}</h2>
          <h1 className='text-3xl font-bold text-slate-300'>{props.subTitle}</h1>
          <p className='text-md text-slate-400'>{props.description}</p>
          <ul className='technologies-container'>
            {props.technologies.map((tech, index) => {
              return <li className='text-2xl text-slate-600' key={index}>{tech}</li>
            })}
          </ul>
        </div>
        <button className='button-mobile-item bg-teal-600 text-slate-100 uppercase font-bold hover:bg-teal-500'>Open Repository</button>
      </div>
      <figura className='mobile-item-picture'>
        <img src={props.image} />
      </figura>
    </li>
  )
}

const PorfolioMobile = () => {

  const [itemDirection, setItemDirection] = useState(1);

  return (
    <div className='portfolio-fragment-mobile'>
      <ul className='mobile-items-container'>
        {
          projects.map((project, index) => {
            return (<Project key={index} {...project} itemDirection setItemDirection />)
          })
        }
      </ul>
    </div>
  )
}

export default PorfolioMobile
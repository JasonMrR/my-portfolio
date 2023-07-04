import React, {useEffect, useState} from 'react'

import './styles/Experience.css'

import { FaHtml5, FaCss3, FaJava, FaJs, FaReact, FaGithub, FaNodeJs } from "react-icons/fa6";

const icons = [
  {name: "HTML", icon: <FaHtml5/>, years: "+2"},
  {name: "CSS", icon: <FaCss3/>, years: "+2"},
  {name: "JavaScrip", icon: <FaJs/>, years: "+1"},
  {name: "React Js", icon: <FaReact/>, years: "+1"},
  {name: "GitHub", icon: <FaGithub/>, years: "+1"},
  {name: "NodeJs", icon: <FaNodeJs/>, years: "+1"},
  {name: "Java", icon: <FaJava/>, years: "+3"},
]

const Experience = () => {

  const [items, setItems] = useState([]);

  useEffect(()=>{
    const list = icons.map((val,index) => {
      return <li className='experience-item border-slate-300 bg-slate-800' key={index}>
        <div>
          <h1 className='experience-icon text-6xl text-slate-300'>{val.icon}</h1>
          <h1 className='text-md text-slate-600 text-center'>{val.name}</h1>
        </div>
        <div className='experience-years'>
          <h2 className='text-lg text-cyan-600 font-bold'>{val.years}</h2>
          <h3 className='text-sm text-slate-500'>Years</h3>
        </div>
      </li>
    })
    setItems(list);
  },[])

  return (
    <div className='experience'>
      <div className='title-experience'>
        <h1 className='title-experience-text text-slate-300 text-5xl font-semibold'>Experience</h1>
      </div>
      <ul className='experience-container'>
        {items}
      </ul>
    </div>
  )
}

export default Experience
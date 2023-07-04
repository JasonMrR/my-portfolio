import React from 'react'

import './styles/AboutMe.css'

const AboutMe = () => {

  const info = [
    ["First name", "Jason"],
    ["Last name", "Morales"],
    ["Age", "23 Years"],
    ["Nationality", "Mexican"],
    ["Disponibility", "Available"],
    ["Address", "Mexico"],
    ["Phone", "+52 341-106-1243"],
    ["Email", "jasonework.00@gmail.com"]
  ];


  const items = info.map((item) => {
    return <p className=' text-slate-500' key={item[1]}>{item[0]}: {item[1]}</p>
  })


  return (
    <div className='background-about-me bg-slate-900'>
      <div className='about-me'>
        <div className='title-about'>
          <h1 className='title text-slate-300 text-6xl font-semibold'>About</h1>
          <h1 className='title text-cyan-600 text-6xl font-bold'>Me</h1>
        </div>
        <div className='personal-information'>
          <h2 className='text-3xl text-slate-300'>Personal Information</h2>
          <div className='personal-information-items'>
            <div className='item-container'>
              {items}
            </div>
          </div>
          <button className="cv-button border-teal-600 text-teal-600 font-bold hover:text-slate-300 hover:bg-teal-600">Download cv</button>
        </div>
        <div className='personal-description border-cyan-600'>
          <div className='description-container bg-slate-600'>
            <p className='m-2 text-sm text-slate-300 font-bold'>
              👨‍💻 Experienced in software engineering, web development, and app design, my passion lies in turning ideas into reality.<br /><br />
              💡 With proficiency in multiple languages and frameworks, I develop robust software solutions that push the boundaries of innovation.<br /><br />
              🌐 Web development is where I create captivating user experiences, weaving together HTML, CSS, and JavaScript to craft visually stunning and intuitive websites.<br /><br />
              🤝 Thriving in collaborative teams, I excel in finding innovative solutions through open communication and collective problem-solving.<br /><br />
              💪 Let's join forces and bring your ideas to life. Together, we can create something extraordinary!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
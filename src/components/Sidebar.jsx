import React from 'react'


const Sidebar = (props) => {
  
  return (
    <div className={`
        sidebar
        shadow-xl
      bg-slate-200
        ${props.sidebar === true ?'sidebar-open': props.sidebar === false && 'sidebar-close'}
      `}
    >
      <div
        onClick={() => props.setSidebar(false)} 
        className='back-item  
        bg-slate-300 
        hover:bg-slate-500 
        hover:text-white hover:font-semibold'>
        <h1 className='text-center'>X CLOSE</h1>
      </div>
      <figure className="figure-profile">
        <img
          className=" 
            bg-gradient-to-r 
            from-slate-500 
            to-cyan-800
            p-1.5 
            w-44 
            h-44 
            object-cover 
            rounded-full
            basis-1
          "
          src={props.avatar}
          alt="Yo"
        />
      </figure>
      <h2 className="text-2xl font-semibold text-center mt-2 ">
        Jason Morales <span className='text-4xl'>🐈</span>
      </h2>
    </div>
  )
}

export default Sidebar
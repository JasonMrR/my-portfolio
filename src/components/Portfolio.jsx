import React, {useState, useEffect} from 'react'

import Mobile from './projects/PortfolioMobile'
import Web from './projects/PortfolioWeb'
import Others from './projects/PortfolioOthers'
import './styles/Portfolio.css'

const Projects = () => {

  const [itemSelected, setItemSelected] = useState(1);
  const [fragment, setFragment] = useState();

  useEffect(() =>{
    switch(itemSelected){
      case 1: 
        setFragment(<Mobile/>);
        break;
      case 2:
        setFragment(<Web/>);
        break;
      case 3:
        setFragment(<Others/>);
        break;
    }
  }, [itemSelected]);

  return (
    <div className='background-portfolio bg-slate-900'>
      <div className='portfolio'>
       <div className='title-about'>
          <h1 className='title text-slate-300 text-4xl font-semibold'>Portfolio</h1>
        </div>
        <ul className='portfolio-options-container text-slate-300'>
          <li className={`portfolio-option text-xl ${itemSelected===1&&"text-teal-600 font-bold"}`} onClick={() => setItemSelected(1)}>Mobile Apps</li>
          <li className={`portfolio-option text-xl ${itemSelected===2&&"text-teal-600 font-bold"}`} onClick={() => setItemSelected(2)}>Websites</li>
          <li className={`portfolio-option text-xl ${itemSelected===3&&"text-teal-600 font-bold"}`} onClick={() => setItemSelected(3)}>Other projects</li>
        </ul>
        <div className='portfolio-proyects'>
          {fragment}
        </div>
      </div>
    </div>
  )
}

export default Projects
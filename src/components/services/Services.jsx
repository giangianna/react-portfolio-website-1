import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Development Framework</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Codeigniter</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Laravel</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Flask</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Django</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB FRAMEWORK */}

        <article className='service'>
          <div className="service__head">
            <h3>Data Analysis</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Python Pandas</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Python Matplotlib</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Jupyter Notebook</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Microsoft Excel</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Tableau</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Shell Script</p>
            </li>
          </ul>
        </article>
        {/* END OF DATA Data Analysis */}

        <article className='service'>
          <div className="service__head">
            <h3>DevOps</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>GitLab, GitHub</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Docker</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>OS Linux</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Cpanel Hosting</p>
            </li>
          </ul>
        </article>
        {/* END OF DATA  */}

      </div>
    </section>
  )
}

export default Services
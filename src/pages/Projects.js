import React, { useState, useEffect } from 'react'
import data from '../components/data'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight, FaEye } from 'react-icons/fa'
import Social from '../components/Social'

const Projects = () => {
  const [project, setProject] = useState(data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const length = project.length - 1
    if (index < 0) {
      setIndex(length)
    }
    if (index > length) {
      setIndex(0)
    }
  }, [index])
  useEffect(() => {
    const clear = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => {
      clearInterval(clear)
    }
  }, [index])
  return (
    <section className="projects">
      <h1 className="title">Projects</h1>
      <div className="review-container">
        {project.map((item, personIndex) => {
          let position = 'next-slide'
          if (personIndex === index) {
            position = 'active'
          }
          if (personIndex === index - 1 || (index === 0 && personIndex === project.length - 1)) {
            position = 'last-slide'
          }
          return <div className={`project-container ${position}`} key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className='info-center'>
              <p className="name"><span className="bold">Project Name : </span>{item.name}</p>
              <div className='url-center'>
                <a className="url" href={item.url}>
                  <div>
                    <div className="overlay-img"><FaEye /></div>
                    <img src={item.image} alt={item.name} />
                  </div>
                </a>
              </div>
              <p className="job"><span className="bold">Technology used :</span> {item.desc}</p>
              <FaQuoteRight className='icon-quote' />
            </div>
          </div>
        })}
        <button className="prev-btn" onClick={() => setIndex(index - 1)}><FiChevronLeft /></button>
        <button className="next-btn" onClick={() => setIndex(index + 1)}><FiChevronRight /></button>
      </div>
      <Social />
    </section>
  )
}

export default Projects

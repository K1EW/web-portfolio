import React from 'react'
import ProjectCard from '../components/ProjectCard'

function ProjectPage() {
  return (
    <div className='py-5'>
      <div className='flex flex-col mx-auto mt-5 max-w-[85rem] px-[2rem]'>
        <div className='text-[2rem] font-bold mb-5'>Projects 🗂️</div>
        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem]'>
          <ProjectCard title="Web - Portfolio" desc="A small yet comprehensive website that serves as a portfolio for all of my works. It's a collective platform where I showcase my projects, skills, and achievements." url="https://github.com/K1EW/web-portfolio" img="/images/webport-preview.png" />
          <ProjectCard title="CEDT - Comprog Solutions" desc="Solutions for each problem in (2110104) CEDT - Computer Programming (2023)" url="https://github.com/K1EW/CEDT-Comprog" img="/images/github-banner.jpg" />
          <ProjectCard title="CEDT - Data & Algo Solutions" desc="Solutions for each problem in (2110328) CEDT - Data Structures and Algorithms (2023)" url="https://github.com/K1EW/CEDT-DataAlgo" img="/images/github-banner.jpg" />
        </div>
        <div className='mt-5 flex items-center gap-[1rem]'>
          <div className='text-[1.25rem] font-bold'>More on My</div>
          <a href='https://github.com/K1EW' target="_blank" rel="noopener noreferrer" className='group flex justify-center items-center gap-2 w-fit py-1 px-3 rounded-full bg-black hover:bg-white shadow-md ease-in-out duration-100'>
            <div className='text-white group-hover:text-black ease-in-out duration-100'>Github.</div>
            <img src="/github-mark-white.svg" alt="github" className='bg-black w-[2.25rem] h-[2.25rem] p-1 rounded-full' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage

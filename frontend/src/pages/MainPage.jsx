import React from 'react'
import ProfileCard from '../components/ProfileCard'
import ProjectCard from '../components/ProjectCard'

function MainPage() {
  return (
    <div className='py-5'>
      <ProfileCard />
      <div className='flex flex-col mx-auto mt-5 max-w-[85rem] px-[2rem]'>
        <div className='text-[2rem] font-bold mb-5'>Featured Projects 🗂️</div>
        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem]'>
          <ProjectCard title="Web - Portfolio" desc="A small yet comprehensive website that serves as a portfolio for all of my works. It's a collective platform where I showcase my projects, skills, and achievements." url="https://github.com/K1EW/web-portfolio" img="/images/webport-preview.png" />
          <ProjectCard title="CEDT - Comprog Solutions" desc="Solutions for each problem in (2110104) CEDT - Computer Programming (2023)" url="https://github.com/K1EW/CEDT-Comprog" img="/images/github-banner.jpg" />
          <ProjectCard title="CEDT - Data & Algo Solutions" desc="Solutions for each problem in (2110328) CEDT - Data Structures and Algorithms (2023)" url="https://github.com/K1EW/CEDT-DataAlgo" img="/images/github-banner.jpg" />
        </div>
      </div>
    </div>
  )
}

export default MainPage

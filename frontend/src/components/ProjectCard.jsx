import React from 'react'

function ProjectCard(props) {
  const {title, desc, url, img} = props;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className='flex flex-col max-w-[25rem] shadow-lg rounded-b-xl hover:scale-105 ease-in-out duration-100 gap-[1rem]'>
      <img src={img} alt="github-banner" className='h-[15rem] object-cover rounded-t-xl select-none shadow-md' />
      <div className='px-3 pb-3'>
        <div className='text-[1.5rem] font-semibold line-clamp-1'>{title}</div>
        <div className=' line-clamp-3'>{desc}</div>
      </div>
    </a>
  )
}

export default ProjectCard

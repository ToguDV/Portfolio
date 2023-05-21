import React from 'react'
import ProjectItem from './ProjectItem'

const ProjectItems = () => {
    return (
        <>
            <div className='projects-header flex flex-col items-center mt-20'>
                <h1 className='mb-5 font-bold text-white text-4xl'>Latest Projects</h1>
                <p className='mb-10 text-white'>Available por new projects!</p>
            </div>

            <div className='projects-container flex justify-center flex-wrap'>
                <ProjectItem img="https://img.itch.zone/aW1hZ2UvNzA4MzE0LzM5MjAxMzUucG5n/347x500/nSDKFw.png" title="Cospida" desc="Cospida is a 2D action game with a top-down perspective where you face crows of enemys in different battle arenas, each one more difficult than the last." cat1="C#" cat2="Unity"></ProjectItem>
                <ProjectItem img="https://play-lh.googleusercontent.com/7N3OTyKcxO2QWbnSH6oc_YBAaWgtszkDnVfVKs7_EmmZehQ6QEg32JnfBwy9qq802hWT=w240-h480-rw" title="Slowball" desc="Game for android, where you are a ball with the ability to stop time, dodge and destroy enemies." cat1="C#" cat2="Unity"></ProjectItem>

            </div>

        </>
    )
}

export default ProjectItems
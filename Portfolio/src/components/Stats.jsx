import React from 'react'
import AnimatedNumbers from "react-animated-numbers";

const Stats = () => {
    const [projects, setProjects] = React.useState(30);
    const [clients, setClients] = React.useState(15);
    const [experience, setExperience] = React.useState(3);
    return (
        <>
            <div className='flex justify-center mt-10 stats-container flex-wrap'>

                <div className='flex stat-blue stats-item flex-col items-center ml-10 mr-10'>
                    <p className='text-center mb-4 text-2xl font-bold'>PROJECTS</p>
                    <div className='flex items-center mr-4'>
                        <p className='text-5xl'>+</p>
                        <AnimatedNumbers
                            animateToNumber={projects}
                            fontStyle={{ fontSize: 50 }}
                            configs={(number, index) => {
                                return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                            }}
                        ></AnimatedNumbers>
                    </div>
                </div>

                <div className='flex stat-cyan stats-item flex-col items-center ml-10 mr-10'>
                    <p className='text-center mb-4 text-2xl font-bold'>CLIENTS</p>
                    <div className='flex items-center mr-4'>
                        <p className='text-5xl'>+</p>
                        <AnimatedNumbers
                            animateToNumber={clients}
                            fontStyle={{ fontSize: 50 }}
                            configs={(number, index) => {
                                return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                            }}
                        ></AnimatedNumbers>
                    </div>
                </div>

                <div className='flex stat-purple stats-item flex-col items-center ml-10 mr-10'>
                    <p className='text-center mb-4 text-2xl font-bold'>EXPERIENCE</p>
                    <div className='flex items-center mr-1'>
                        <p className='text-5xl'>+</p>
                        <AnimatedNumbers
                            animateToNumber={experience}
                            fontStyle={{ fontSize: 50 }}
                            configs={(number, index) => {
                                return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                            }}
                        ></AnimatedNumbers>
                        <p className='text-2xl mt-3 ml-2'>YEARS</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Stats

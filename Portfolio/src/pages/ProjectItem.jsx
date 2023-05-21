import React from 'react'

const ProjectItem = (props) => {
    return (
        <>
            <a href={props.link} target='_blank'>
            <article className="article-wrapper m-5">
                <div className="rounded-lg container-project">
                    <img src={props.img} alt="" />
                </div>
                <div className="project-info">
                    <div className="flex-pr">
                        <div className="project-title text-nowrap">
                            <h2>{props.title}</h2>
                            
                        </div>
                        <div className="project-hover">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </div>

                    </div>
                    <p>{props.desc}</p>
                    <div className="types">
                        <span className="project-type">• {props.cat1}</span>
                        <span className="project-type">• {props.cat2}</span>
                    </div>
                </div>
            </article>
            </a>
        </>
    )
}

export default ProjectItem
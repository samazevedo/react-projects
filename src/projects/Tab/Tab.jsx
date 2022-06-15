// import { useEffect } from 'react'
import { useState } from 'react'
import { JOBSDATA } from './jobsdata'
import { TabStyled, TabMenuStyled } from './Tab.styled'
// import TabMenu from './TabMenu'
import { FaAngleDoubleRight } from 'react-icons/fa'
//https://gatsby-strapi-portfolio.netlify.app/
//const url = 'https://course-api.netifly.app/api/react-tabs-project/'
// const url = JOBSDATA
function Tab() {
    // const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState(JOBSDATA)
    const [value, setValue] = useState(0)

    //example using useEffect to fetch data from the API
    // const fetchJobs = async () => {
    //     const response = await fetch(url)
    //     const newJobs = await response.json()
    //     setJobs(newJobs)
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     fetchJobs()
    // }, [])

    // if (loading && jobs === []) {
    //     return <div>Loading...</div>

    // }

    const { company, dates, duties, title } = jobs[value]
    const companiesList = jobs.map((job) => job.company)

    return (
        <TabStyled>
            <header>
                <h2>Experience</h2>
                <div className='underscore'></div>
            </header>
            <section className='info'>
                <TabMenuStyled>
                    <ul>
                        {companiesList.map((company, index) => {
                            return (
                                <li key={index}>
                                    <button
                                        key={index}
                                        onClick={() => setValue(index)}
                                    >
                                        {company}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </TabMenuStyled>
                {/* <TabMenu
                    {...JOBSDATA}
                    companiesList={companiesList}
                    changeValue={changeValue}
                /> */}
                <div className='job-info'>
                    <article>
                        <h3>{title}</h3>
                        <h4>{company}</h4>
                        <h5>{dates}</h5>
                        {duties.map((duty, index) => {
                            return (
                                <p key={index}>
                                    <span className='icon'>
                                        <FaAngleDoubleRight />
                                    </span>
                                    {duty}
                                </p>
                            )
                        })}
                    </article>
                    <button>More Info</button>
                </div>
            </section>
        </TabStyled>
    )
}

export default Tab

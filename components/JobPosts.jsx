import React, {useEffect, useContext} from 'react'
import Store from '../contex/AppContex'
import classes from '../styles/styles.module.css'

const JobPosts = () => {
    const appCtx = useContext(Store)
    const body = {
        companySkills: true,
        dismissedListingHashes: [],
        fetchJobDesc: true,
        jobTitle: "Business Analyst",
        locations: [],
        numJobs: 20,
        previousListingHashes: []
    }
    //function for fetching data from the API
    const fetchJobs = async() =>{
        const response = await fetch('https://www.zippia.com/api/jobs',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const data = await response.json()
        appCtx.jobPostsHandler(data)
    }
    //used to filter job posts that is posted within a week
    let jobPosts = appCtx.jobPosts.filter(post=>{
        const today = new Date()
        const week = new Date()
        week.setDate(week.getDate() -8) // set the last day of the current week ()
        return post.datePosted <= today && post.datePosted >= week 
    })
    //The app will display all job posting by default
    if(!appCtx.isFilter){
        jobPosts = appCtx.jobPosts
    }
    useEffect(()=>{
        fetchJobs()
    },[])
    return (
        <main className ={classes['list-container']}>
            <div className = {classes['filter-text']}>
                {appCtx.isFilter && <p >Showing Jobs Posts in the last 7 Days</p>}
            </div> 
            {jobPosts.filter(item=>{
                return item.companyName.toLowerCase().includes(appCtx.searchItem.toLowerCase())
            })?.map(item=>{
                return(
                    <div key = {item.jobId} className = {classes.card}>
                        <h2>{item.jobTitle}</h2>
                        <h3>{item.companyName}</h3>
                        <p>{item.shortDesc} ...</p>
                        <p>Posted {item.postedDate}</p>
                    </div>
                )
            })}
        </main>
    )
}


export default JobPosts


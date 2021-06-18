//context data used across the app
import React, { useState } from 'react'
import Store from './AppContex'

const ContextProvider = (props) => {

    const [jobPosts, setJobPosts] = useState([]) // used to store job posts data
    const [isFilter, setIsFilter] = useState(false)
    const [searchItem, setSearchItem] = useState('')//used to store the search string from the input field in the FilterContainer Component

    const jobPostsHandler =(jobPostsObj) =>{ // Handler for storing job posts data arrived from api call
      const newJobPosts= []
      //get only the first 10 jobs posts from the response data
      for(let i = 0; i< 10; i++){
        newJobPosts.push({datePosted: new Date(jobPostsObj.jobs[i].OBJpostingDate) ,...jobPostsObj.jobs[i]})
      }
      setJobPosts(newJobPosts)  
    }
    
    const searchItemHandler = (e) =>{ //Handler for changes in the search string
        setSearchItem(e.target.value)
    }
    const filterHandler = () =>{
      setIsFilter(prevState => !prevState)
      
      
    }
    const contex = {
      jobPosts,
      searchItem,
      isFilter,
      jobPostsHandler,
      searchItemHandler,
      filterHandler,

    }
    return (
       <Store.Provider value = {contex}>
           {props.children}
       </Store.Provider>
    )
}

export default ContextProvider

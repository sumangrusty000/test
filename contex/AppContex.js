import React from 'react'

const Store = React.createContext({
    jobPosts: [],
    searchItem: '',
    isFilter: false,
    jobPostsHandler: () => {},
    searchItemHandler: () =>{},
    filterHandler: () =>{}
})

export default Store
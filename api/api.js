const body = {
    companySkills: true,
    dismissedListingHashes: [],
    fetchJobDesc: true,
    jobTitle: "Business Analyst",
    locations: [],
    numJobs: 20,
    previousListingHashes: []
}
export function fetchJobs(){
    const fetchData = async()=>{
        const response = await fetch('https://www.zippia.com/api/jobs',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const data = await response.json()
    // console.log(data)
    return data
    }
    return fetchData()
    
    
    
}
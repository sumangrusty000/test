import { useRouter } from 'next/router'
import React, {useEffect} from 'react'
//this component is just made to redirect the user to URL/test/jobs
const Index = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/test/jobs')
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Index

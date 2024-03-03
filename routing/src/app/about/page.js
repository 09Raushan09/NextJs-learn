"use client"
import { useRouter } from "next/navigation"

const About = ()=>{
    const router = useRouter()
    const navigate= (name)=>{
        return router.push(name)
    }
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-48 m-16">
            <h1>About page</h1>
            <button onClick={()=> navigate('/about/aboutstudent')}> About Student Section</button>
            <button onClick={()=> navigate('/about/aboutcollage')}> About College Section</button>
        </div>
    )
}

export default About
import React, { useEffect, useState } from 'react'
import SpinnerItem from '../components/Spinner'

const AboutPage = () => {

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    return (
        <div>

            {loading ?
                <SpinnerItem />
                : <h1 className="text-3xl underline text-slate-600">
                    About
                </h1>}
        </div>
    )
}

export default AboutPage



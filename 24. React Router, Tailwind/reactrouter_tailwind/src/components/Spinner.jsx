import React from 'react'
import Spinner, { MoonLoader, PacmanLoader } from 'react-spinners'
const SpinnerItem = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            {/* <MoonLoader color='red' loading={false} /> */}
            <PacmanLoader color='red' loading={true} />
        </div>
    )
}

export default SpinnerItem

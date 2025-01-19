import React, { useEffect, useRef } from 'react'

const Loader = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <>
            <div className='loader'>
                <h1>
                    <em>We are a </em>CREATIVE < em > studio</em > DEDICATED < em > to</em > CULTURAL < br />
                    ADVANCEMENT < em > through</em > STRATEGY < em > and</em > DESIGN.
                </h1 >
                <div className='yellow'>
                <video ref={videoRef} className='video' autoPlay muted loop>
                <source src="./assets/vedio.mp4" type="video/mp4" />
            </video>
                </div>
            
            </div>
           
        </>
    )
}

export default Loader
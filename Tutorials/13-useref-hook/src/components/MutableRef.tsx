import React, { useState, useEffect, useRef } from 'react';

function MutableRef() {

    const [Timer, setTimer] = useState(0);// initialize with 0
    const intervalRef = useRef<null | number>(null); // ref id 

    const stopTimer = () => {
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current)// clear interval using ref id
        }
    }

    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setTimer((Timer) => Timer + 1) // var udpate using usestate hook
        }, 1000)
        return () => {
            stopTimer()
        }
    }, [])

    return (
        <div>
            <div style={{fontSize: 20, fontWeight: 'bold'}}>HookTimer-{Timer}</div>
            <button onClick={() => stopTimer()} style={{backgroundColor: 'black', color: 'white', fontSize: 25,margin: 15, padding: 15}}>Stop Timer</button>
        </div>
    )
}

export default MutableRef
import React, { useState, useEffect } from 'react';
import lightOff from './images/light-off.png';
import lightOn from './images/light-on.png';
const imgList = [lightOff, lightOn];
let index = 0;

function LightBulb() {
    const[photo, updatePhoto] = useState(imgList.lightOff);

    useEffect(
        () => {
            console.log('entry')
            if (index + 1 === imgList.length) {
                index = 0;
            }
            else {
                index = index + 1;
            }

        setInterval(() => {
            updatePhoto(photo)
        }, 1000);

        return () => console.log('exit')
    }, [photo]);

    return (
        <>          
        <div>
        <img src = {imgList[index]} />
        <button onClick={ () => updatePhoto(imgList[index])}>Blink! Blink!</button>
        </div>
        </>
    )
}

export default LightBulb;
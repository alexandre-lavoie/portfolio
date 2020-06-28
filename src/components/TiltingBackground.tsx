import React, { useEffect, useState } from 'react';
import Tilt from 'react-tilt';

interface PropsTiltingBackground {
    backgroundImage?: string,
    blur?: string
}

const TiltingBackground: React.FC<PropsTiltingBackground> = (props) => {
    return (
        <>
            <div style={{ position: 'fixed', width: '100%', height: '100vh', overflow: 'hidden', filter: `blur(${(props.blur) ? props.blur : 0})`}}>
                <Tilt options={{ max: 10, scale: 1 }} style={{ position: 'absolute', height: '200%', width: '200%', left: '-50%', top: '-50%', background: `url(${props.backgroundImage})` }} />
            </div>
            <div style={{ pointerEvents: 'none' }}>
                {props.children}
            </div>
        </>
    );
}

export default TiltingBackground;
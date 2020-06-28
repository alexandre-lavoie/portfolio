import React, { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import './App.css';
import TiltingBackground from './components/TiltingBackground';
import DevPage from './pages/Dev';
import LandingPage from './pages/Landing';
import MenuPage from './pages/Menu';

const PathnametoBackground = (pathname: string) => {
    switch(pathname) {
        case '/menu':
            return require('./images/MenuBackgroundIcons.png');
        default:
            return require('./images/LandingBackgroundIcons.png');
    }
};

const Routes: React.FC = () => {
    const [backgroundImage, setBackgroundImage] = useState(require('./images/LandingBackgroundIcons.png'));
    const history = useHistory();

    useEffect(() => {
        setBackgroundImage(PathnametoBackground(history.location.pathname));
        
        history.listen(() => {
            setBackgroundImage(PathnametoBackground(history.location.pathname));
        });
    }, [history]);

    return (
        <TiltingBackground backgroundImage={backgroundImage}>
            <Route path='/' exact>
                <LandingPage />
            </Route>
            <Route path='/menu'>
                <MenuPage />
            </Route>            
            <Route path='/dev'>
                <DevPage />
            </Route>
        </TiltingBackground>
    );
}

export default Routes;
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Routes from './Routes';
import LandingPage from './pages/LandingPage';

const theme = createMuiTheme({
    palette: {
        background: {
            default: '#363156'
        }
    },
    typography: {
        fontFamily: `'Prompt', sans-serif`
    }
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Route path="/test">
                    <LandingPage />
                </Route>
            </Router>
        </ThemeProvider>
    );
}

export default App;
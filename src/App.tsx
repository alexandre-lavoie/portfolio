import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/index';

const theme = createMuiTheme({
    palette: {
        background: {
            default: '#FFF'
        },
        primary: {
            main: "#FFF"
        },
        secondary: {
            main: "#6075AC"
        },
        text: {
            primary: "#322E18",
            secondary: "#FFF"
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
                <Route path="/" exact>
                    <LandingPage />
                </Route>
            </Router>
        </ThemeProvider>
    );
}

export default App;
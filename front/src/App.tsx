import React from 'react';
import Layout from "./components/Layout";
import {useStyles} from "./styles/Styles";

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Layout/>
        </div>
    );
}

export default App;

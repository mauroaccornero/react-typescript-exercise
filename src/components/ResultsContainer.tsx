import React, { useEffect, useState } from 'react';
import {ResultsList} from "./ResultsList";
import {LinearProgress} from "@material-ui/core";
import {makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme :Theme) => ({
    loader: {
        width: '100%',
    },
}));

export const ResultsContainer = () => {

    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then((response) => response.json())
            .then((json) => {
                setResults(json)
                setLoading(false)
            });
    }, []);
    const classes = useStyles();
    return loading === false && results != null ? <ResultsList results={results}/> : <LinearProgress className={classes.loader} />
}
import React from "react";
import {Container, Paper} from "@material-ui/core";
import {ResultsContainer} from "./components/ResultsContainer";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        marginTop: 50,
    },
});

export const App = () => {
    const classes = useStyles();

    return <Container fixed className={classes.container}>
        <Paper>
        <ResultsContainer />
        </Paper>
    </Container>
}
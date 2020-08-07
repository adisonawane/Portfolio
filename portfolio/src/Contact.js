import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
const useStyles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    tabsBar: {
        color: '#f50057',
        backgroundColor: '#fff',
        boxShadow: 'none',
    },
    container: {
        margin: 0,
        padding: 0
    },
    tabRoot: {
        minWidth: 10,
        fontSize: '0.7rem',
        fontWeight: 500
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',

    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: 15
    },
    gridText: {
        textAlign: "center",
        margin: 10
    },
    containerSpacing: {
        margin: 500
    }



});
export default withStyles(useStyles)(class Contact extends Component {
    render() {
        return (
            <Container>
                hiii
            </Container>
        )
    }
})

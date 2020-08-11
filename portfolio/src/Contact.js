import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
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
    },
    skillsLabel:{
        textAlign: 'center',
          color:'#a50369',
          fontWeight:600
      },
      containerTabs:{
          margin:20
      },
      contactSection:{
        color:'#8E8E89',
        fontSize:12,
        textAlign:'center',
        fontWeight:400,
        marginBottom:21
    },



});
export default withStyles(useStyles)(class Contact extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Container>
                <div className={classes.containerTabs}>
                    <Grid container direction="row"
                        justify="center"
                        alignItems="center" spacing={3} >
                        <Grid item xs={12} className={classes.skillsLabel}>
                            <Link href="https://www.linkedin.com/in/adityasonawane/" >

                                <div><LinkedInIcon fontSize="large" /></div>
                                <div className={classes.contactSection}>Connect on LinkedIn!</div>

                            </Link>
                        </Grid>
                        <Grid item xs={12} className={classes.skillsLabel}>
                            <Link href="https://github.com/adisonawane" >

                                <div><GitHubIcon fontSize="large" /></div>
                                <div className={classes.contactSection}>Checkout my projects on Github</div>
                            </Link>
                        </Grid>
                        <Grid item xs={12} className={classes.skillsLabel}>
                            <Link href="mailto:adityasonawane0194@gmail.com?" >

                                <div><MailIcon fontSize="large" /></div>
                                <div className={classes.contactSection}>Have  queries? Feel free to mail!</div>
                            </Link>
                        </Grid>

                    </Grid>



                </div>
            </Container>
        )
    }
})

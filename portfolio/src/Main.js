import React, { Component, PropTypes } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Container } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
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
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            project: null
        }
        this.intro = React.createRef();
        this.skills = React.createRef();
        this.projects = React.createRef();
        this.contact = React.createRef();
        this.about = React.createRef();

    }


    render() {
        const { classes } = this.props;


        const handleChange = (event, newValue) => {
            //console.log(newValue)
            this.setState({
                value: newValue
            }, () => {
                //console.log("out");
                if (this.state.value === 0) {
                    //console.log("dgd");
                    this.intro.current.scrollIntoView({
                        behavior: "smooth",
                    });
                }
                else if (this.state.value === 1) {
                    //console.log("dgd");
                    this.skills.current.scrollIntoView({
                        behavior: "smooth",
                    });
                }
                else if (this.state.value === 2) {
                    //console.log("dgd");
                    this.projects.current.scrollIntoView({
                        behavior: "smooth",
                    });
                }
                else if (this.state.value === 3) {
                    //console.log("dgd");
                    this.contact.current.scrollIntoView({
                        behavior: "smooth",
                    });
                }
                else if (this.state.value === 4) {
                    console.log("dgd");
                    this.about.current.scrollIntoView({
                        behavior: "smooth",
                    });
                }
            })

        };
        return (

            <div className={classes.root}>
                <AppBar position="fixed" className={classes.tabsBar}>
                    <Tabs
                        value={this.state.value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"

                        aria-label="scrollable force tabs example"
                    >
                        <Tab label="About" classes={{ root: classes.tabRoot }} />
                        <Tab label="Skills" classes={{ root: classes.tabRoot }} />

                        <Tab label="Projects" classes={{ root: classes.tabRoot }} />
                        <Tab label="Contact Information" classes={{ root: classes.tabRoot }} />

                        <Tab label="About Me" classes={{ root: classes.tabRoot }} />
                    </Tabs>
                </AppBar>
                <Container className={classes.container}>
                    <Container className={classes.containerSpacing} ref={this.intro}><div>Intro</div></Container>
                    <Container className={classes.containerSpacing} ref={this.skills}><div>skills</div></Container>
                    <Container className={classes.containerSpacing} ref={this.projects}><div>Projects</div></Container>
                    <Container className={classes.containerSpacing} ref={this.contact}><div>Contact</div></Container>
                    <Container className={classes.containerSpacing} ref={this.about}><div>About</div></Container>
                </Container>


            </div>
        );
    }
}


export default withStyles(useStyles)(Main);
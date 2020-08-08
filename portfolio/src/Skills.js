import React, { Component } from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const useStyles = skill => ({
    skills:{
        textAlign: "center",
        color: "#ea7800",
    },
    skillsLabel:{
        textAlign:"center",
        color:"#a50369",
        fontWeight:600
    },
    containerTabs:{
        margin:20
    },
    skillsSection:{
        color:"#8E8E89",
        fontSize:12,
        textAlign:"center",
        marginTop:21,
        marginBottom:21
    },
}) 
class Skills extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {classes}=this.props
        return (
            <div className={classes.containerTabs}>
                <Grid container direction="row"
                        justify="center"
                        alignItems="center" spacing={0} >
                        <Grid item xs={4} >
                        <Divider variant="middle" />
                        </Grid>
                        <Grid item xs={4} className={classes.skillsSection}>
                        Front End Development
                        </Grid>
                        <Grid item xs={4} >
                        <Divider variant="middle" />
                        </Grid>

                </Grid>

                <Grid container direction="row"
                        justify="center"
                        alignItems="center" spacing={3} >
                        <Grid item xs={6} className={classes.skillsLabel}>
                            ReactJS
                        </Grid>
                        <Grid item xs={6} className={classes.skills}>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarBorderIcon fontSize="small"/>
                        </Grid>

                    </Grid>
                    <Grid container direction="row"
                        justify="center"
                        alignItems="center" spacing={3} >
                        <Grid item xs={6} className={classes.skillsLabel}>
                            HTML5, CSS
                        </Grid>
                        <Grid item xs={6} className={classes.skills}>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarBorderIcon fontSize="small"/>
                        </Grid>

                    </Grid>
                    <Grid container direction="row"
                        justify="center"
                        alignItems="center" spacing={3} >
                        <Grid item xs={6} className={classes.skillsLabel}>
                            ReactJS
                        </Grid>
                        <Grid item xs={6} className={classes.skills}>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarBorderIcon fontSize="small"/>
                        <StarBorderIcon fontSize="small"/>
                        </Grid>

                    </Grid>
                    
                    <Grid container direction="row"
                        justify="center"
                        alignItems="center" spacing={3} >
                        <Grid item xs={6} className={classes.skillsLabel}>
                            Ionic Framework
                        </Grid>
                        <Grid item xs={6} className={classes.skills}>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarBorderIcon fontSize="small"/>
                        </Grid>

                    </Grid>

                    <Grid container direction="row"
                        justify="center"
                        alignItems="center" spacing={0} >
                        <Grid item xs={4} >
                        <Divider variant="middle" />
                        </Grid>
                        <Grid item xs={4} className={classes.skillsSection}>
                        Back End Development
                        </Grid>
                        <Grid item xs={4} >
                        <Divider variant="middle" />
                        </Grid>

                    </Grid>
                    

                    <Grid container direction="row"
                        justify="center"
                        alignItems="center" spacing={3} >
                        <Grid item xs={6} className={classes.skillsLabel}>
                            Firebase
                        </Grid>
                        <Grid item xs={6} className={classes.skills}>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarBorderIcon fontSize="small"/>
                        </Grid>

                    </Grid>
                    <Grid container direction="row"
                        justify="center"
                        alignItems="center" spacing={3} >
                        <Grid item xs={6} className={classes.skillsLabel}>
                            C# MVC
                        </Grid>
                        <Grid item xs={6} className={classes.skills}>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarBorderIcon fontSize="small"/>
                        </Grid>

                    </Grid>
                    <Grid container direction="row"
                        justify="center"
                        alignItems="center" spacing={3} >
                        <Grid item xs={6} className={classes.skillsLabel}>
                            SQL
                        </Grid>
                        <Grid item xs={6} className={classes.skills}>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarBorderIcon fontSize="small"/>
                        <StarBorderIcon fontSize="small"/>
                        </Grid>

                    </Grid>

                    <Grid container direction="row"
                        justify="center"
                        alignItems="center" spacing={0} >
                        <Grid item xs={4} >
                        <Divider variant="middle" />
                        </Grid>
                        <Grid item xs={4} className={classes.skillsSection}>
                        Artificial Intelligence
                        </Grid>
                        <Grid item xs={4} >
                        <Divider variant="middle" />
                        </Grid>

                    </Grid>

                    <Grid container direction="row"
                        justify="center"
                        alignItems="center" spacing={3} >
                        <Grid item xs={6} className={classes.skillsLabel}>
                            Python for AI
                        </Grid>
                        <Grid item xs={6} className={classes.skills}>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        </Grid>

                    </Grid>
                    <Grid container direction="row"
                        justify="center"
                        alignItems="center" spacing={3} >
                        <Grid item xs={6} className={classes.skillsLabel}>
                            Robot Operating System
                        </Grid>
                        <Grid item xs={6} className={classes.skills}>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        </Grid>

                    </Grid>
                    <Grid container direction="row"
                        justify="center"
                        alignItems="center" spacing={3} >
                        <Grid item xs={6} className={classes.skillsLabel}>
                            Flask
                        </Grid>
                        <Grid item xs={6} className={classes.skills}>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarBorderIcon fontSize="small"/>
                        </Grid>

                    </Grid>

                    <Grid container direction="row"
                        justify="center"
                        alignItems="center" spacing={3} >
                        <Grid item xs={6} className={classes.skillsLabel}>
                            Pytorch
                        </Grid>
                        <Grid item xs={6} className={classes.skills}>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarBorderIcon fontSize="small"/>
                        <StarBorderIcon fontSize="small"/>
                        </Grid>

                    </Grid>

                    <Grid container direction="row"
                        justify="center"
                        alignItems="center" spacing={3} >
                        <Grid item xs={6} className={classes.skillsLabel}>
                            Data Visualisation with Plotly
                        </Grid>
                        <Grid item xs={6} className={classes.skills}>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarBorderIcon fontSize="small"/>
                        <StarBorderIcon fontSize="small"/>
                        </Grid>

                    </Grid>
                    <Grid container direction="row"
                        justify="center"
                        alignItems="center" spacing={3} >
                        <Grid item xs={6} className={classes.skillsLabel}>
                            Data Analytics
                        </Grid>
                        <Grid item xs={6} className={classes.skills}>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarIcon fontSize="small"/>
                        <StarBorderIcon fontSize="small"/>
                        <StarBorderIcon fontSize="small"/>
                        </Grid>

                    </Grid>
            </div>
        )
    }
}
export default withStyles(useStyles)(Skills)
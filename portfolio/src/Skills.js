import React, { Component } from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
const useStyles = skill => ({
    skills: {
        textAlign: "center",
        color: "#ea7800",
    },
    skillsLabel: {
        textAlign: "center",
        color: "#a50369",
        fontWeight: 600
    },
    containerTabs: {
        margin: 20
    },
    skillsSection: {
        color: "#8E8E89",
        fontSize: 12,
        textAlign: "center",
        marginTop: 21,
        marginBottom: 21
    },
})

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progLang: null
        }
    }
    componentDidMount() {
        axios.get('https://us-central1-aditya-portfolio-6de9f.cloudfunctions.net/api/getskills').then((data) => {
            console.log(data.data[0].skillname)
            this.setState({
                skills: data.data[0].skillname.skills
            })
        })
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.containerTabs}>
                

                {this.state.skills ?
                    this.state.skills.map((data_row,j) => 
                    <div key={j}>
                    <Grid container direction="row"
                    justify="center"
                    alignItems="center" spacing={0} >
                    <Grid item xs={4} >
                        <Divider variant="middle" />
                    </Grid>
                    <Grid item xs={4} className={classes.skillsSection}>
                        {data_row.skill}
                        </Grid>
                    <Grid item xs={4} >
                        <Divider variant="middle" />
                    </Grid>

                </Grid>
                {data_row.value.map((data,j)=>
                    <Grid container key={j} direction="row"
                    justify="center"
                    alignItems="center" spacing={3} >
                    <Grid item xs={6} className={classes.skillsLabel}>
                        {data.name}
                    </Grid>
                    <Grid item xs={6} className={classes.skills}>
                        {[...Array(data.stars)].map((data,i) => <StarIcon key={i} fontSize="small" />)}
                        {[...Array(5-data.stars)].map((data,k) => <StarBorderIcon key={k} fontSize="small" />)}

                    </Grid>

                    </Grid>

                )}
                   </div>)
                    : <div>None</div>}


                {/* <Grid container direction="row"
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
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarBorderIcon fontSize="small" />
                    </Grid>

                </Grid>
                <Grid container direction="row"
                    justify="center"
                    alignItems="center" spacing={3} >
                    <Grid item xs={6} className={classes.skillsLabel}>
                        C# MVC
                        </Grid>
                    <Grid item xs={6} className={classes.skills}>
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarBorderIcon fontSize="small" />
                    </Grid>

                </Grid>
                <Grid container direction="row"
                    justify="center"
                    alignItems="center" spacing={3} >
                    <Grid item xs={6} className={classes.skillsLabel}>
                        SQL
                        </Grid>
                    <Grid item xs={6} className={classes.skills}>
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarBorderIcon fontSize="small" />
                        <StarBorderIcon fontSize="small" />
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
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                    </Grid>

                </Grid>
                <Grid container direction="row"
                    justify="center"
                    alignItems="center" spacing={3} >
                    <Grid item xs={6} className={classes.skillsLabel}>
                        Robot Operating System
                        </Grid>
                    <Grid item xs={6} className={classes.skills}>
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                    </Grid>

                </Grid>
                <Grid container direction="row"
                    justify="center"
                    alignItems="center" spacing={3} >
                    <Grid item xs={6} className={classes.skillsLabel}>
                        Flask
                        </Grid>
                    <Grid item xs={6} className={classes.skills}>
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarBorderIcon fontSize="small" />
                    </Grid>

                </Grid>

                <Grid container direction="row"
                    justify="center"
                    alignItems="center" spacing={3} >
                    <Grid item xs={6} className={classes.skillsLabel}>
                        Pytorch
                        </Grid>
                    <Grid item xs={6} className={classes.skills}>
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarBorderIcon fontSize="small" />
                        <StarBorderIcon fontSize="small" />
                    </Grid>

                </Grid>

                <Grid container direction="row"
                    justify="center"
                    alignItems="center" spacing={3} >
                    <Grid item xs={6} className={classes.skillsLabel}>
                        Data Visualisation with Plotly
                        </Grid>
                    <Grid item xs={6} className={classes.skills}>
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarBorderIcon fontSize="small" />
                        <StarBorderIcon fontSize="small" />
                    </Grid>

                </Grid>
                <Grid container direction="row"
                    justify="center"
                    alignItems="center" spacing={3} >
                    <Grid item xs={6} className={classes.skillsLabel}>
                        Data Analytics
                        </Grid>
                    <Grid item xs={6} className={classes.skills}>
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarIcon fontSize="small" />
                        <StarBorderIcon fontSize="small" />
                        <StarBorderIcon fontSize="small" />
                    </Grid>

                </Grid> */}
            </div>
        )
    }
}
export default withStyles(useStyles)(Skills)
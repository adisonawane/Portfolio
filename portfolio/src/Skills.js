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
export default class Skills extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {}
        return (
            <div>
                <h1>Python</h1>
            </div>
        )
    }
}

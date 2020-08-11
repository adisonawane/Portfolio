import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = theme => ({

    root: {
        width: '90%',
        margin: "2% 5%"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: '#3e0984'
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
        padding: 0
    },
    column: {
        flexBasis: '25%',
    },
    helper: {
        borderLeft: `0.5px solid ${theme.palette.divider}`,
        padding: 0,
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },

    },
    chipsRoot: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    }

});

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: null
        }

    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                {this.props.projects?this.props.projects.map(data=>
                <div key={data.name} className={classes.root}>

                    <ExpansionPanel defaultExpanded>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1c-content"
                            id="panel1c-header"
                        >

                            <div >
                                <Typography className={classes.secondaryHeading} >{data.name}</Typography>
                            </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.details}>

                            <div className={classes.column}>
                                <span className={classes.chipsRoot}>
                                    {data.technologies.map(technology =>

                                        <Chip key={technology} color="primary" label={technology} />
                                    )}
                                </span>

                            </div>
                            <div className={classes.helper}>
                                <Typography variant="caption">
                                    <List >
                                        {data.desc.map(descData =>
                                            <ListItem key={descData}>
                                                <ListItemText secondary={descData} />
                                            </ListItem>)}




                                    </List>

                                </Typography>
                            </div>
                        </ExpansionPanelDetails>

                    </ExpansionPanel>
                </div>
        ):<div>Loading...</div>}
            </div>
        )
    }
}
export default withStyles(useStyles)(Projects);
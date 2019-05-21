import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        minWidth: 275,
        maxWidth: 400
    },
    posStyle: {
        marginTop: 14
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function WeatherCard(props) {
    const { classes, temp, date, tempUnit, weatherConditon } = props;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Temperature
                </Typography>
                <Typography variant="h5" component="h2" color="primary">
                    {temp} °{tempUnit}
                </Typography>
                <Typography className={classes.posStyle} color="textSecondary">
                    Date
                </Typography>
                <Typography variant="h6" component="h4">
                    {date}
                </Typography>
                <Typography className={classes.posStyle} color="textSecondary">
                    Weather Conditon
                </Typography>
                <Typography component="h5" color="inherit">
                    {weatherConditon}
                </Typography>
            </CardContent>
        </Card>
    );
}

WeatherCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeatherCard);
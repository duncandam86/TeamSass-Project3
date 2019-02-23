// import React from 'react';

// import Beach from '../../images/beach-1.jpg';


// function Landing () {
//     return (
//         <div className="row">
//         <div className="img">
//           <img src={Beach} width="100" height="50" />
//         </div>
//       </div>
//     );
// }

// export default Landing

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 1000,
  },
  media: {
    height: 200,
  },
};

function Landing(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../../images/beach-1.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Sign Up 
        </Button>
        <Button size="small" color="primary">
          Login
        </Button>
      </CardActions>
    </Card>
  );
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Landing);
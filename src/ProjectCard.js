import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import Divider from '@mui/material/Divider';

import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export const ProjectCard = ({
    projectImg,
    projectType,
    projectTitle,
    projectDate,
    projectSummary,
    projectDesc,
    projectComponents
}: ProjectCardProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    useEffect(() => {
        console.log("Project Components:", projectComponents)

    }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {projectType}
          </Avatar>
        }
        title={projectTitle}
        subheader={projectDate}
      />
      <CardMedia
        component="img"
        height="194"
        image={projectImg}
        alt={projectTitle}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {projectSummary}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>More about the project...</Typography>
          <Typography paragraph>
            {projectSummary}
          </Typography>
          <br />
          <Typography paragraph>Keywords</Typography>
          <ul>
            {projectComponents.length && projectComponents.map((pc) => (
                <React.Fragment>
                <li><Typography>{pc}</ Typography></li>
                </React.Fragment>
            ))}
          </ul>
        </CardContent>
      </Collapse>
    </Card>
  );
}
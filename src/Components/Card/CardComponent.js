import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import styles from "./CardComponent.module.css"
export default function ActionAreaCard(props) {
  const onClick=()=>{
    console.log("ye");
  };
  return (

    <Card  sx={{ width: "300px", backgroundColor: "black",
      minWidth:"200px",
      color:"#28c6ed",
      padding: "2rem",
      margin:"1rem",
      border:"1px solid",
      }}>
      <CardActionArea onClick={onClick} >  
        <CardMedia
          component="img"
          height="140"
          image={props.source}
          alt="work"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {props.toDisplay}
          </Typography>
          <Typography variant="body2">
            {props.toDescribe}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

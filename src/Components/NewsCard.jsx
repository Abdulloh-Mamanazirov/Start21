import * as React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function NewsCard(props) {
  return (
    <Card
      className="newsCard hoverCard"
      sx={{
        maxWidth: 250,
        background: "#252525",
        color: "white",
        transition: ".3s",
        marginRight: "14px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: "220px" }}
          image={props.image}
          alt="news image"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.name}
          </Typography>
          <div className="text-sm flex items-center justify-between pt-3 opacity-80">
            <span>
              <i className="fa-regular fa-eye pr-2"></i>
              {props.seen}
            </span>
            <Link to="/news" className="hover:text-sky-500 hover:decoration-sky-400 hover:underline">
              Read More <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

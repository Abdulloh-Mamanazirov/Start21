import * as React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function TeacherCard(props) {
    const {t} = useTranslation()
  return (
    <Card
      className="hoverCard"
      sx={{
        maxWidth: 250,
        background: "#252525",
        color: "white",
        transition: ".3s",
        marginRight:"14px"
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <span className="flex items-center gap-2 text-[15px] pb-2 opacity-80"><VerifiedIcon sx={{fontSize:"17px", color:"gold"}}/> {props.exp} {t("TeacherExperience")}</span>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" sx={{opacity:".85"}}>{props.desc}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

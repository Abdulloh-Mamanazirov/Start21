import * as React from "react";
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NewsCard(props) {
  const { t } = useTranslation();
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
          <Typography className="news-card-title" variant="h6" component="p" minHeight={50}>
            {props.name}
          </Typography>
          <div className="text-sm flex items-center justify-between pt-3 opacity-80">
            <span>
              <i className="fa-regular fa-eye pr-2"></i>
              {props.seen}
            </span>
            <Link
              to={`/news/${props.id}`}
              className="hover:text-sky-500 hover:decoration-sky-400 hover:underline"
            >
              {t("NewsLink")} <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

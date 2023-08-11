import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import data from "../data";

export default function CardGrid() {
  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        mt={3}
        color="secondary.light"
      >
        CARD and GRİD LAYOUT
      </Typography>

      <Grid container justifyContent="center" alignItems="center">
        {data.map((card) => {
          const { id, name, img, text } = card;
          return (
            <Grid item key={id} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia component="img" image={img} alt="green iguana" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

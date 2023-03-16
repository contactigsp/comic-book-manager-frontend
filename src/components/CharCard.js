import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { blueGrey, grey } from "@mui/material/colors";
import listCharacters from "../listCharacters";
import { Container } from "@mui/system";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function CharCard({
  setSelectedLink,
  link,
}) {
  useEffect(() => {
    setSelectedLink(link);
  }, []);
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          my: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? blueGrey[100] : grey[900],
        }}
        elevation={5}
      >
        <Typography variant="h4">Characters</Typography>
      </Paper>

      <Paper
        elevation={20}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? blueGrey[50] : grey[900],
        }}
      >
        <Container
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {listCharacters.map((char) => (
            <Paper
              key={char.titleCard}
              elevation={5}
              sx={{
                flexBasis: "390px",
                flexGrow: 2,
                p: 2,
                m: 2,
                maxWidth: 550,
                backgroundColor: (theme) =>
                  theme.palette.mode === "light" ? blueGrey[200] : grey[900],
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  ".MuiContainer-root ": {
                    justifyContent: "center",
                  },
                }}
              >
                <Grid item>
                  <ButtonBase sx={{ width: 188, height: 260 }}>
                    <Img alt={char.titleCard} src={char.imgCard} />
                  </ButtonBase>
                </Grid>
                <Grid item sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        {char.titleCard}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {char.descriptionCard}
                      </Typography>
                    </Grid>
                    <Grid item></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Container>
      </Paper>
    </>
  );
}

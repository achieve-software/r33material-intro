import { Box, Button, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const TypoButtons = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          mt={3}
          color="forestgreen"
        >
          Mui Typho
        </Typography>

        <Typography
          variant="body1"
          align="justify"
          mt={4}
          sx={{ backgroundColor: "red", color: "white" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nobis
          alias quibusdam quod ipsum consequuntur voluptate, voluptates beatae
          non architecto, libero adipisci totam molestiae sint deserunt, aut
          nulla. Dolor, dolores.
        </Typography>

        <Typography
          variant="button"
          sx={{ display: "inline-block", marginTop: "1.1rem" }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          minus, eum aut, vel voluptatibus aperiam dolore tempore amet dolorem
          fugit eaque, sapiente ab neque totam inventore quibusdam porro
          nesciunt placeat.
        </Typography>

        <Container>
          <Box
            mt={4}
            sx={{ display: "flex", justifyContent: "center", gap: 2 }}
          >
            <Button variant="text" color="warning">
              Text
            </Button>
            <Button variant="contained" color="error">
              Contained
            </Button>
            <Button variant="outlined" color="secondary">
              Outlined
            </Button>
            <Button variant="outlined">Outlined</Button>
          </Box>
          <Stack
           direction={{xs:"coloumn", sm:"row"}}
           spacing={{xs:1, sm:2, md:4}}
          >
            <Button variant="text" color="error">
              Text
            </Button>
            <Button variant="contained" color="error">
              Contained
            </Button>
            <Button variant="outlined" color="secondary">
              Outlined
            </Button>
            <Button variant="outlined">Primary</Button>
          </Stack>
        </Container>
      </Container>
    </>
  );
};

export default TypoButtons;

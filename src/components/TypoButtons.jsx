import Typography from "@mui/material/Typography";

const TypoButtons = () => {
  return (
    <div>
      <Typography variant="h3" component="h1" align="center" mt={3} color="forestgreen">
        Mui Typho
      </Typography>


      <Typography variant="body1" align="justify" mt={3} sx={{backgroundColor:"red", color:"white"}}>


        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nobis alias quibusdam quod ipsum consequuntur voluptate, voluptates beatae non architecto, libero adipisci totam molestiae sint deserunt, aut nulla. Dolor, dolores.
      </Typography>
    </div>
  );
};

export default TypoButtons;

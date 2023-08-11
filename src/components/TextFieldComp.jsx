import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const TextFieldComp = () => {


    const [error, setError] = useState("second")
  return (
    <div>
      <Typography variant="h3" align="center" mt={4} color="secondary.dark">
        TEXT FİELD
      </Typography>
      <TextField id="email" label="email" type="email" variant="outlined" placeholder="enter your email" fullWidth margin="normal" required error={error} helperText={error && "Incorrect email format"} />
      <TextField id="password" label="password" variant="filled" type = "password"/>
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </div>
  );
};

export default TextFieldComp;

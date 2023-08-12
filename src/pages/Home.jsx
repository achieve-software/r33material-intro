import AppbarComp from "../components/AppbarComp";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import{createTheme, ThemeProvider} from "@mui/material";
import {pink, deepOrange } from  "@mui/material/colors";

const Home = () => {
  const theme = createTheme({
    palette:{
      primary:{
        main:"#000008B"
      },secondary:{
        main:pink[500]
      },
      error:{
        main:deepOrange[600]
      }
    }
  })
  
  return (
    <>
      {/* <TypoButtons />
      <TextFieldComp/> */}
      <AppbarComp/>
      <CardGrid/>
    </>
  );
};

export default Home;

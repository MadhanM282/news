import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { SearchAppBar } from './search';
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const ButtonAppBar = () => {

  const darkTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#000000",
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" >
          <Toolbar sx={{display: 'flex',justifyContent: 'space-evenly'}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
              News
            </Typography>

            {/* <SearchAppBar /> */}
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

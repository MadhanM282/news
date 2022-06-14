import { Box, Button, Typography } from "@mui/material"
import '@fontsource/roboto/700.css'
import Fade from 'react-reveal/Fade';

export const Landing = () => {
    return (
        <Box>

            <Box sx={{ display: 'flex', alignItems: "center", bgcolor: "#f7f7f7" }}>
                <Fade left>
                    <Box>

                        <Typography variant="h3" sx={{ fontFamily: "robot , sans-serif" }}>
                            Know whats Happening around you
                        </Typography>
                        {/* <Button sx={[{ bgcolor: "orange", color: "white", borderRadius: "50px", width: "100px" }, () => ({ "&:hover": { color: "#ffffff", bgcolor: "#474747" } })]}>News</Button> */}
                    </Box>
                </Fade>
                <Fade bottom>

                    <img width="80%" src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243__340.png" alt="" />
                </Fade>
            </Box>
            <Box>
                <Fade left>
                    <Box>
                        <Typography variant="h3" sx={{ fontFamily: "robot , sans-serif" }}>
                            News Across 
                        </Typography>
                        <Typography>
                            INDIA
                        </Typography>
                    </Box>
                </Fade>

            </Box>
        </Box>
    )
}   
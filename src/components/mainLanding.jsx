import { Box, Button, Typography } from "@mui/material"
import '@fontsource/roboto/700.css'
import Fade from 'react-reveal/Fade';
import { Home } from './homepage'
import "./animation.css"
import { useState } from "react";
import { SingleArticle } from "./article";
export const Landing = () => {
    const [show, setShow] = useState(false)
    return (
        <Box sx={{ bgcolor: "#f7f7f7" }}>

            <Box sx={{ display: 'flex', alignItems: "center", bgcolor: "#f7f7f7", height: "92vh" }}>
                <Fade left>
                    <Box>

                        <Typography variant="h3" sx={{ fontFamily: "robot , sans-serif", color: "orange" }}>
                            Know whats Happening around you
                        </Typography>


                        <img src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/54/external-web-web-hosting-kmg-design-detailed-outline-kmg-design.png" alt="" />

                    </Box>
                </Fade>

                <Fade bottom>

                    <img width="80%" src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243__340.png" alt="" />
                </Fade>
            </Box>
            <Fade top>
                <Box>

                    <img width="50px" className="arrow" src="https://img.icons8.com/ios/2x/arrow--v2.gif" alt="" />
                </Box>
            </Fade>
            <Box>
                <Box sx={{ mb: "-135px" }}>

                    <Fade left>
                        <Box sx={{ textAlign: "right", mr: 5 }}>
                            <Typography variant="h3" sx={{ fontFamily: "robot , sans-serif", color: "white" }}>
                                News Across
                            </Typography>
                            <Typography sx={{ color: "orange" }} variant="h4">
                                The World
                            </Typography>
                            <Button onMouseEnter={() => setShow(true)} onClick={() => {
                                window.location.href = "#list"
                            }} sx={[{ bgcolor: "orange", color: "white", borderRadius: "50px", width: "100px" }, () => ({ "&:hover": { color: "#ff9900", bgcolor: "#ffffff" } })]}>See Now</Button>
                        </Box>
                    </Fade>
                </Box>

                <Box sx={{ width: "100%" }}>
                    <img width="100%" src="https://appsmaventech.com/images/blog/The-Evolution-Of-Web-Development-Via-Machine-Learning.jpg" alt="" />
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>

                <Box id="list">
                    {show ? <Home /> : ""}
                </Box>
                <Box>

                    <SingleArticle />
                </Box>
            </Box>

        </Box>
    )
}   
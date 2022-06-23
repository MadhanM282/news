import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { article, clicked } from '../Redux/article/action';

export const Cards = ({ data }) => {
    const [expanded, setExpanded] = React.useState(false);
    let date = data.publishedAt.split("T")
    const dispatch = useDispatch()
    return (
        <Box sx={{ m: 1, width: "410px" }}>
            <Accordion
                expanded={expanded === 'panel1'}
                onMouseEnter={() => setExpanded("panel1")}
                onMouseLeave={() => setExpanded(false)}
            >
                <AccordionSummary

                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Box>

                        <img height="200px" src={data.urlToImage} alt={data.urlToImage} />
                        <Typography sx={{ color: 'text.secondary', textAlign: 'left' }}>{data.title}</Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: 'left' }}>
                   
                    <Button sx={[{ bgcolor: "orange", color: "white", borderRadius: "50px", width: "100px" }, () => ({ "&:hover": { color: "#ff9900", bgcolor: "#ffffff" } })]} onClick={() =>{
                        dispatch(article(data))
                        dispatch(clicked())}}>View more</Button>
                </AccordionDetails>
            </Accordion>

        </Box>
    );
}

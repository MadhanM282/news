import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Cards = ({ data }) => {
    const [expanded, setExpanded] = React.useState(false);
    let date = data.publishedAt.split("T")
    // if(data.urlToImage===null){
    //     return
    // }
    return (
        <Box sx={{ m: 1, width: "410px" }} onClick={() => window.location = `${data.url}`}>
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
                        <Typography sx={{ color: 'text.secondary',textAlign:'left' }}>{data.title}</Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails sx={{textAlign: 'left'}}>
                    <Typography variant="h6">
                        Source:-{data.source.name}
                    </Typography>
                    <Typography variant="h6">
                        Published on:-{date[0]}
                    </Typography>
                    <Typography>
                        {data.description}
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    );
}

// author: null
// content: "KK, who was just 54 years old, is survived by his wife and two children.\r\nMumbai: Several celebrities from the Indian music industry paid heartfelt tributes to Krishnakumar Kunnath, better known as K… [+2493 chars]"
// description: "Several celebrities from the Indian music industry paid heartfelt tributes to Krishnakumar Kunnath, better known as KK, after the demise of the popular playback singer."
// publishedAt: "2022-06-01T02:16:08Z"
// source:
    // id: null
    // name: "NDTV News"
    // [[Prototype]]: Object
// title: "From Sonu Nigam To Shreya Ghoshal, Music Industry Mourns KK's Sudden Demise - NDTV"
// url: "https://www.ndtv.com/india-news/singer-kk-dies-from-sonu-nigam-to-shreya-ghoshal-music-industry-mourns-singers-sudden-demise-3027513"
// urlToImage: "https://c.ndtvimg.com/2022-06/br4rbbeg_singer-kk_625x300_01_June_22.jpg"

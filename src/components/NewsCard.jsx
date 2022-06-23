import { Box } from '@mui/material';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Cards } from './card';

export const Card = ({ In}) => {
    

    return (
        <Box>
            <Box sx={{ display: "flex",justifyContent:"space-evenly" }}>
                <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}} className='india'>
                    {In.map((e, i) => {

                        return <Fade bottom>
                            <Cards data={e} />
                        </Fade>
                    })}
                </Box>
                
            </Box>
        </Box>
    );

}

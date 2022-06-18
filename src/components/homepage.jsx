import { Box } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { ButtonAppBar } from "./nav"
import { Card } from "./NewsCard"

export const Home = () => {
    const [Ru, SetRu] = useState([])
    const [In,SetIn] = useState([]);
    const [Us,SetUs] = useState([]);
    useEffect(() => {
        GetDataIndia()
    }, [])
    const GetDataRussia = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=nz&apiKey=7731b0203f1f47028f029aab37012d8c`).then(({ data }) => {
            console.log('data', data);
            SetRu(data.articles)
        })
    }
    const GetDataIndia = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=7731b0203f1f47028f029aab37012d8c`).then(({ data }) => {
            console.log('data', data);
            SetIn(data.articles)
            // GetDataUSA()
        })
    }
    const GetDataUSA = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=7731b0203f1f47028f029aab37012d8c`).then(({ data }) => {
            console.log('data', data);
            SetUs(data.articles)
            // GetDataRussia()
        })
    }

    return (
        <Box sx={{height:"90vh",overflow:"scroll"}}>
            {/* <ButtonAppBar /> */}
            {/* <Card Ru={Ru} In={In} Us={Us} /> */}
            <Card  In={In} />
        </Box>
    )
}
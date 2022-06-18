import { Typography,Button } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux"

export const SingleArticle = ()=>{
    const {article,clicked} = useSelector((store)=>store.article)
    console.log('clicked', clicked);
    console.log('article', article);
    // let date = article.publishedAt.split("T")
    return clicked? (
        <Box sx={{width:"400px",textAlign: 'left' }}>
            <Typography variant="h6">
                Author:{article.author}
            </Typography>
            <Typography variant="h6">
                Published By:{article.source.name}
            </Typography>
            <img width="400px" src={article.urlToImage} alt="" />
            <Typography>
                {article.title}
            </Typography>
            <br />
            <Typography>
                {article.content}
            </Typography>
            {/* <h4>Published on: {date[0]}</h4> */}
            <Button onClick={() =>{
                window.location=`${article.url}`
            }}>Know more</Button>
        </Box>
        ):""
}

// author: "Lifestyle Desk"
// content: "The nerves in our body play a vital role in transmitting impulses of sensationto our brain, muscles, spinal cord, and organs. The nerve cells, better known as neurons, communicate messages and send i… [+4356 chars]"
// description: "Watching out for early symptoms and acting on them swiftly reduces the chances of experiencing neuropathy by a great fraction"
// publishedAt: "2022-06-18T03:40:51Z"
// source: {id: null, name: 'The Indian Express'}
// title: "Why you mustn't ignore pins and needles in hands and feet - The Indian Express"
// url: "https://indianexpress.com/article/lifestyle/health/why-you-mustnt-ignore-pins-and-needles-in-hands-and-feet-7964788/"
// urlToImage: "https://images.indianexpress.com/2022/06/nerves_200_pixabay.jpg"
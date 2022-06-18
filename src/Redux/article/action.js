export const Article = "ARTICLE";

export const Loding = "LODING";

export const Error = "ERROR";

export const CLICKED = "CLICKED"

export const article = (data)=>({type:Article,payload:data})

export const loding = ()=>({type:Loding});

export const clicked = ()=>({type:CLICKED})

export const error = () => ({type:Error});
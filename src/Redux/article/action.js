export const Article = "ARTICLE";

export const Loding = "LODING";

export const Error = "ERROR";

export const article = (data)=>({type:Article,payload:data})

export const loding = ()=>({type:Loding});

export const error = () => ({type:Error});
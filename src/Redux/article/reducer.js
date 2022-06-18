import { Article, CLICKED, Error, Loding } from "./action"

const Initial = {
    article:{},
    loding:false,
    error:false,
    clicked:false
}

export const ArticleReducer = (store=Initial,{type,payload}) =>{
    switch(type) {
        case Article : return{...store,article:payload,loding:false,error:false}
        case Loding : return{...store,loding:true,error:false}
        case Error : return{...store,error:true,loding:false}
        case CLICKED : return{...store,clicked:true}
        default : return store
    }
}
import React from "react";
import { useRouter } from "next/router";

export default function Docs(){
    const router = useRouter();
    console.log("Line 6 ::", router.query);
    const { slug =[]} = router.query;
    console.log("Line 888", slug)
    if(slug.length === 2){
        return (
            <>
              <h1>Viewing docs for  fetaure {slug[0]} and concept {slug[1]}</h1>
            </>
        )
    } else if(slug.length === 1){
        return (
            <>
              <h1>Viewing docs for  fetaure {slug[0]} </h1>
            </>
        )
    }

    return (<>
     <h1>Docs Page :::::::::::::::jlkufkfh</h1>
    </>)
}
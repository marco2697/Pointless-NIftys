import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Component } from "react/cjs/react.production.min";
import { NavBar } from "../components/navbar";
import * as s from '../styles/styles';



export const HomePage2 = () => {

    const connected = useSelector((state) => state.connected);
    const loading = useSelector((state) => state.loading);
    const message = useSelector((state)=> state.message);
    const totalSupply = useSelector((state)=> state.totalSupply);
    const maxSupply = useSelector((state)=> state.maxSupply);
    const wallet = useSelector((state)=> state.wallet);

    let images = maxSupply;
    let count = 1;
    let image = "../assets/images/"+count+".png";

    const cycleImages = () => {
        while(count <= maxSupply){ 
            console.log(image);
            if(count === maxSupply){
               count = 1;
            }   
            count++;
        }
    }

    useEffect( ()=>{
       cycleImages();
    },[count]);


        return(
            <>
                <s.Grid gtc='100' gap="1em" bg="">
                    <s.Container fd='column' jc='center' ai='center'>
                        <s.TextTitle pad='20px 0px' ta='center' color="white">POINTLESS NIFTYS</s.TextTitle>
                        <s.TextSubTitle ta='center' color="white">a collection of 10,000 completely pointless nfts</s.TextSubTitle>
                    </s.Container>
                </s.Grid>
            </>
        );
} 
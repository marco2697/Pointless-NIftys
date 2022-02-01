import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as s from '../styles/styles';





export const HomePage = () => {

    const connected = useSelector((state) => state.connected);
    const loading = useSelector((state) => state.loading);
    const message = useSelector((state)=> state.message);
    const totalSupply = useSelector((state)=> state.totalSupply);
    const maxSupply = useSelector((state)=> state.maxSupply);
    const wallet = useSelector((state)=> state.wallet);

    let count = 1;
    const cycleImages = () => {
        while(count <= maxSupply){ 
            if(count === maxSupply){
               count = 1;
            }
            count++; 
        }
    }

    useEffect( ()=>{
       cycleImages();
    });


        return(
            <>
                <s.Grid gtc='50% 50%' gap="1em">
                    <s.Container fd='column' jc='center' ai='right'>
                        <s.TextTitle pad='20px 0px' ta='right'>POINTLESS NIFTYS</s.TextTitle>
                        <s.TextSubTitle ta='right'>a collection of 10,000 completely pointless nfts</s.TextSubTitle>
                    </s.Container>
                    <s.Container fd='column' jc='center' ai='center'>
                        <s.ImgLrg src={require("../assets/nft_loop.gif").default}></s.ImgLrg>
                    </s.Container>
                </s.Grid>
            </>
        );
} 
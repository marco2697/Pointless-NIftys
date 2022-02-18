import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as s from '../styles/styles';





export const HomePage = () => {

        return(
            <>
                <s.Grid gtc='50% 50%' gap="1em">
                    <s.Container fd='column' jc='center' ai='right'>
                        <s.TextTitle pad='20px 0px' ta='right'>POINTLESS NIFTYS</s.TextTitle>
                        <s.TextSubTitle ta='right'>a collection of 500 completely pointless nfts</s.TextSubTitle>
                    </s.Container>
                    <s.Container fd='column' jc='center' ai='center'>
                        <s.ImgLrg src={require("../assets/nft_loop.gif").default}></s.ImgLrg>
                    </s.Container>
                </s.Grid>
            </>
        );
} 
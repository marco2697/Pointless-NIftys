import { ConnectButton } from "../components/connector";
import * as s from '../styles/styles';
import { useDispatch, useSelector } from "react-redux";
import { MintButton } from "../components/minter";
import { maxSupplyReached } from "../redux/actions";


export const MintPage = () => {
    const dispatch = useDispatch();

    const connected = useSelector((state) => state.connected);
    const loading = useSelector((state) => state.loading);
    const message = useSelector((state)=> state.message);
    const totalSupply = useSelector((state)=> state.totalSupply);
    const maxSupply = useSelector((state)=> state.maxSupply);
    const wallet = useSelector((state)=> state.wallet); 

    if(totalSupply === maxSupply && connected == true){
        dispatch(maxSupplyReached());
    }

        return(
            <s.Page>
             <s.Container fd='column' jc='center' ai='center'>
                <s.BoxOuter bg="#FA255E">
                    <s.BoxInner>
                        <s.Container fd='column' jc='flex-end' ai='center'><s.TextTitle ta='center'>POINTLESS NIFTYS</s.TextTitle></s.Container>
                        <s.Container fd='column' jc='center' ai='center'>
                            {connected == true ? (
                                <>
                                {loading == true ? (
                                    <>
                                    <s.TextSubTitle>Loading...</s.TextSubTitle>
                                    </>
                                ):(
                                    totalSupply === maxSupply ? (
                                        <>
                                            <a href="https://opensea.io/" target="_blank">
                                            <s.Button 
                                                type="submit"
                                                bg="#C39EA0"
                                              > OpenSea
                                            </s.Button>
                                            </a>
                                        </>
                                        
                                    ):(
                                        <MintButton></MintButton>
                                    )
                                )}
                                </>
                            ):(
                                loading == true ? (
                                    <s.TextSubTitle>Loading...</s.TextSubTitle>
                                ):(
                                    <ConnectButton></ConnectButton>
                                )
                            )}
                        </s.Container>
                        <s.Container fd='column' jc='flex-start' ai='center'>
                            <s.TextSubTitle ta="center">{message}</s.TextSubTitle>
                            <br></br>
                            <br></br>
                            {connected == true ? (
                                <s.TextSmall>{totalSupply + " / " + maxSupply + " minted"}</s.TextSmall>
                            ):(
                                null
                            )}
                        </s.Container>
                    </s.BoxInner>
                </s.BoxOuter>
            </s.Container>               
            </s.Page>
        );
}


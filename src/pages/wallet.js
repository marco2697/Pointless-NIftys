import { useSelector } from "react-redux";
import { ConnectButton } from "../components/connector";
import { Gallery } from "../components/gallery";
import * as s from '../styles/styles';

export const WalletPage = () =>{
    const connected = useSelector((state) => state.connected);
    const loading = useSelector((state) => state.loading);
    const message = useSelector((state)=> state.message);
    const wallet = useSelector((state)=> state.wallet); 

        return(
            connected == true ? (
                <>
                 <s.Container jc="center">
                       <s.TextTitle pad="0.5em">You Own {wallet.length} Pointless Niftys</s.TextTitle>
                 </s.Container> 
                 {wallet.length == 0 ? (
                     <>
                     <s.Container fd="column" jc='flex-start' ai="center">
                         <s.TextSubTitle>you don't own any pointless niftys, head to the mint page</s.TextSubTitle>
                         <br></br>
                        <s.NavItem to="/mint"><s.Button bg="#C39EA0">MINT NOW</s.Button></s.NavItem>
                     </s.Container>
                     </>
                 ):(
                     <s.Container fd="column" jc="center" ai="cetner">
                          <Gallery></Gallery>
                     </s.Container>
                 )}
                </>              
            ):(
                <s.Container fd='column' jc='center' ai='center'>
                    <s.BoxOuter bg="#000744">
                        <s.BoxInner>
                            <s.Container fd='column' jc='flex-end' ai='center'>
                                <s.TextTitle ta='center'>YOUR WALLET</s.TextTitle> 
                            </s.Container>
                             <s.Container fd='column' jc='center' ai='center'>
                                 {loading == true ? (
                                     <s.TextSubTitle>Loading...</s.TextSubTitle>
                                 ):(
                                     <ConnectButton></ConnectButton>
                                 )}
                             </s.Container>
                             <s.Container fd='column' jc='flex-start' ai='center'>
                                 <s.TextSubTitle ta="center">{message}</s.TextSubTitle>
                             </s.Container>
                        </s.BoxInner>
                    </s.BoxOuter>
                </s.Container>
            )         
        );
    }

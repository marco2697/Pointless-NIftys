import * as s from '../styles/styles';
import { useSelector } from "react-redux";

export const Gallery =  () => {
    const wallet = useSelector((state)=> state.wallet);
    
    const displayNFTs = wallet.map( (nft) => 
        <s.Img src={require("../assets/images/" + nft + ".png").default} key={nft}></s.Img>
     );

        return(
            <s.Gallery gtc="25% 25% 25% 25%">
                {displayNFTs}
            </s.Gallery>
            )      
}
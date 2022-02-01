import * as s from '../styles/styles';
import { useSelector } from "react-redux";

export const Gallery =  () => {
    const wallet = useSelector((state)=> state.wallet);
    const imageBase = "https://ipfs.io/ipfs/QmdaktDJMQisPo8prCC7cDwW5FNUKTv9s72nS8yn65Ao6P/"

    const displayNFTs = wallet.map( (nft) => 
        <s.Img src={imageBase  +nft + ".png"} key={nft}></s.Img>
     );

        return(
            <s.Gallery gtc="25% 25% 25% 25%">
                {displayNFTs}
            </s.Gallery>
            )      
}
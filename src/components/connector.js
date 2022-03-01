import { useDispatch} from "react-redux";
import { connectFailed, connectRequest, connectSuccess, wrongNetwork} from "../redux/actions";
import * as s from "../styles/styles";
import Web3 from "web3";
import * as PointlessNiftys from "../contracts/PointlessNiftys.json";


export const ConnectButton =  () => {
    const dispatch = useDispatch();
    const web3 = new Web3(window.ethereum);

    const connectWallet = async () => {
        dispatch(connectRequest());
        if(window.ethereum){
            try{
            const networkID = await window.ethereum.request({ method: 'net_version'});
                console.log("networkID:");
                console.log(networkID); 
            if(networkID == 4){
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log("accounts:");
                console.log(accounts);
            const account = accounts[0];
                console.log("Your Account:");
                console.log(account);   
            const contract = new web3.eth.Contract(PointlessNiftys.abi, "0xffEA65eF514Abff21Ce345D18be91b47C477B5AE");
                console.log("contract retrieved");
            const wallet = await contract.methods.walletOfOwner(account).call();
                    console.log("wallet retrieved");
            const totalSupply = await contract.methods.totalSupply().call();
                console.log("total supply:");
                console.log(totalSupply);
            const maxSupply = await contract.methods.maxSupply().call();
                console.log("max supply:");
                console.log(maxSupply);
            dispatch(connectSuccess({account, wallet,totalSupply,maxSupply}));
            }else{
                dispatch(wrongNetwork());
            }
            }catch(error){
                console.log(error);
                dispatch(connectFailed("failed to mint, please try again"));
            }
        }else{
            dispatch(connectFailed("install metamask first"));
        }
    }
    
  
    return(
        <s.Button 
            bg='#C39EA0'
            onClick={
            connectWallet
            }
        >
        CONNECT
       </s.Button>
    )
}


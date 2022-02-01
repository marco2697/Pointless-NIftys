import * as s from "../styles/styles";
import Web3 from "web3";
import { useDispatch} from "react-redux";
import { attemptMint, mintSuccess, mintFailed } from "../redux/actions";
import * as PointlessNiftys from "../contracts/PointlessNiftys.json";

export const MintButton = () => {



    const dispatch = useDispatch();
    const mint = async () => {
        const web3 = new Web3(window.ethereum);  
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        const contract = new web3.eth.Contract(PointlessNiftys.abi, "0x14Ca0900b3a3d5A339478E0F710903fb3612Da61");
        dispatch(attemptMint());

        try{
        await contract.methods.mint(account, 1)
            .send({ from: account, value: 1000000000000000000 })
            .once("error", (err) => {
                console.log(err)
            })
            .then((receipt) => {
                console.log("receipt:")
                console.log(receipt);
            });
        const wallet = await contract.methods.walletOfOwner(account).call();
        const totalSupply = await contract.methods.totalSupply().call();
        const maxSupply = await contract.methods.maxSupply().call();
        dispatch(mintSuccess({wallet,totalSupply, maxSupply}));
        }catch(error){
            console.log(error);
            dispatch(mintFailed());
        }

    }

    return(
            <s.Button 
              bg='#C39EA0'
              onClick={ () => {
                mint()
              }}
            >
                Mint
            </s.Button>
    )
}
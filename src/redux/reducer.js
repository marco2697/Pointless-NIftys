
const initialState = {
    connected: false,
    loading: false,
    message: "connect to MetaMask",
    totalSupply: null,
    maxSupply: null,
    account: "",
    wallet: null
}


const rootReducer = (state = initialState, action) => {

    switch(action.type){
        case "REQUESTING_ACCOUNT":
            return{
                ...initialState,
                loading: true
            }
        case "WRONG_NETWORK":
            return{
                ...initialState,
                loading: false,
                message: "please connect to the rinkeby test network",               
            }
        case "CONNECT_SUCCESS":
            return{
                ...state,
                connected: true,
                loading: false,
                message: "mint your pointless nifty",
                totalSupply: action.payload.totalSupply,
                maxSupply: action.payload.maxSupply,
                account: action.payload.account,
                wallet: action.payload.wallet
        }
        case "CONNECT_FAILED":
            return{
                ...state,
                loading:false,
                message: action.payload
            }
        case "ATTEMPTING_MINT":
            return{
               ...state,
               loading: true,
               message: "attempting to mint..."
        }
        case "MINT_SUCCESS":
            return{
                ...state,
                loading: false,
                message: "mint was successful!",
                totalSupply: action.payload.totalSupply,
                maxSupply: action.payload.maxSupply,
                wallet: action.payload.wallet,
            }
        case "MINT_FAILED":
            return{
                ...state,
                loading: false,
                message: "failed to mint, please try again"
            }
        case "MAX_SUPPLY_REACHED":
            return{
                ...state,
                message: "all nfts have been minted"
            }
        case "MAX_WALLET_REACHED":
            return{
                ...state,
                connected: true,
                message: "you cant mint more than 8 pointless niftys"
            }  
        default:
            return{
                ...initialState
            }
    }
}

export default rootReducer;
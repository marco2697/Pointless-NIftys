export const connectRequest = () => {
    return {
        type: "REQUESTING_ACCOUNT"
    }
}
export const wrongNetwork = () => {
    return {
        type: "WRONG_NETWORK"
    }
}
export const connectSuccess = (payload) => {
    return{
        type: "CONNECT_SUCCESS",
        payload: payload
    }
}
export const attemptMint = () => {
    return{
        type: "ATTEMPTING_MINT"
    }
}
export const mintSuccess = (payload) => {
    return{
        type: "MINT_SUCCESS",
        payload: payload
    }
}
export const mintFailed = () => {
    return{
        type: "MINT_FAILED"
    }
}
export const maxSupplyReached = () => {
    return{
        type: "MAX_SUPPLY_REACHED"
    }
}
export const maxWalletReached = () => {
    return{
        type: "MAX_WALLET_REACHED"
    }
}
export const connectFailed = (payload) => {
    return{
        type: "CONNECT_FAILED",
        payload: payload
    }
}



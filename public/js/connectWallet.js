import {verifyNetwork} from "/js/verifyNetwork.js";
document.querySelector("#connectWallet").addEventListener('click' , connectWalletfunc)

async function connectWalletfunc() {

    if (!window.ethereum) {
        console.log("MetaMask not installed; using read-only defaults")
    }
    await verifyNetwork();
    
    let walletAddress;
    // get the wallet address from metamask
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []).then((accounts) => {
        walletAddress = accounts[0];
    })
    await console.log(walletAddress)
    const signer = await provider.getSigner();
    await location.reload();
}

export {
    connectWalletfunc
}
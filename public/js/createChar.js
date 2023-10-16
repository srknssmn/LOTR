import { LOTR_ADDRESS } from "/constants/address.js";
import { LOTR_ABI } from "/constants/abi.js";
import {connectWalletfunc} from "/js/connectWallet.js";
import {verifyNetwork} from "/js/verifyNetwork.js";

document.querySelector("#charSelectButton").addEventListener('click' , createCharFunc)

async function createCharFunc(event) {
    event.preventDefault()
    
    // get the wallet address from metamask
    const accounts = await ethereum.request({method: 'eth_accounts'});
    if (accounts.length) {
        await verifyNetwork();
        
        const provider = await new ethers.providers.Web3Provider(window.ethereum);
        // await provider.send("eth_requestAccounts", [])
        const signer = await provider.getSigner();
        const contract = await new ethers.Contract(LOTR_ADDRESS, LOTR_ABI, signer);

        let nickname = document.querySelector("#nickname").value
        let char = document.querySelector("#charSelect").value
        const txn = await contract.setChar(nickname , char);
        await txn.wait();
        await console.log("success")
        await location.reload();
    } else {
        connectWalletfunc();
    }

}
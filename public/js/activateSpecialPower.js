import { LOTR_ADDRESS } from "/constants/address.js";
import { LOTR_ABI } from "/constants/abi.js";
import {connectWalletfunc} from "/js/connectWallet.js";
import {verifyNetwork} from "/js/verifyNetwork.js";

document.querySelector("#activateSpecialPowerButton").addEventListener('click' , activateSpecialPowerFunc)

async function activateSpecialPowerFunc(event) {
    event.preventDefault()
    
    // get the wallet address from metamask
    const accounts = await ethereum.request({method: 'eth_accounts'});
    if (accounts.length) {
        await verifyNetwork();
        
        const provider = await new ethers.providers.Web3Provider(window.ethereum);
        // await provider.send("eth_requestAccounts", [])
        const signer = await provider.getSigner();
        const contract = await new ethers.Contract(LOTR_ADDRESS, LOTR_ABI, signer);

        const playerXP = await contract?.playerXP(signer.getAddress());

        if (playerXP < 250) {
            await window.alert("insufficient xp!")
        }

        const txn = await contract.buySpecialPower();
        await txn.wait();
        await console.log("success")
        await location.reload();
    } else {
        connectWalletfunc();
    }

}
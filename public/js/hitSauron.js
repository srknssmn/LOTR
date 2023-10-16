import { LOTR_ADDRESS } from "/constants/address.js";
import { LOTR_ABI } from "/constants/abi.js";
import {connectWalletfunc} from "/js/connectWallet.js";
import {verifyNetwork} from "/js/verifyNetwork.js";

document.querySelector("#hitSauron").addEventListener('click' , hitSauronfunc)

async function hitSauronfunc(event) {
    event.preventDefault()
    
    // get the wallet address from metamask
    const accounts = await ethereum.request({method: 'eth_accounts'});
    if (accounts.length) {
        await verifyNetwork();
        
        let walletAddress;
        const provider = await new ethers.providers.Web3Provider(window.ethereum);
        // await provider.send("eth_requestAccounts", [])
        const signer = await provider.getSigner();
        const contract = await new ethers.Contract(LOTR_ADDRESS, LOTR_ABI, signer);

        const charCooldown = await contract?.cooldown(signer.getAddress());
        const blocktime = await contract.blockTime();
    
        if (charCooldown > blocktime) {
            await window.alert("Wait Cooldown or Buy Spell")
        }
    
        const txn = await contract.hitSauron();

        await txn.wait();
        await console.log("success")
        await location.reload();
    } else {
        connectWalletfunc();
    }

}
import { LOTR_ADDRESS } from "/constants/address.js";
import { LOTR_ABI } from "/constants/abi.js";

let userNickname = document.querySelector('#userNickname');

export const charCheck = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(LOTR_ADDRESS, LOTR_ABI, signer);
    
    const charName = await contract?.playerName(signer.getAddress());
    userNickname.innerHTML = await charName;
};
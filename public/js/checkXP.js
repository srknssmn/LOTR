import { LOTR_ADDRESS } from "/constants/address.js";
import { LOTR_ABI } from "/constants/abi.js";

let userXP = document.querySelector('#userXP');

export const checkXP = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(LOTR_ADDRESS, LOTR_ABI, signer);
    
    const charXPs = await contract?.playerXP(signer.getAddress());
    userXP.innerHTML = await charXPs;
};
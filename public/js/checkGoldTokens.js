import { LOTR_ADDRESS } from "/constants/address.js";
import { LOTR_ABI } from "/constants/abi.js";

let userGoldTokens = document.querySelector('#userGoldTokens');

export const checkGoldTokens = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(LOTR_ADDRESS, LOTR_ABI, signer);
    
    const charGolds = await contract?.playerReward(signer.getAddress());
    const charGoldsValue = await charGolds / Math.pow(10, 18)
    userGoldTokens.innerHTML = await charGoldsValue;
};
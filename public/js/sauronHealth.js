import { LOTR_ADDRESS } from "/constants/address.js";
import { LOTR_ABI } from "/constants/abi.js";

let sauronHealthID = document.querySelector('#sauronHealthID')
let sauronHealthP = document.querySelector('#sauronHealthP')

export const sauronHealth = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(LOTR_ADDRESS, LOTR_ABI, signer);
    
    const totalHealth = await contract.sauron();
    const totalLockedAmount = await ethers.utils.formatEther(totalHealth)
    let totalLockedAmount1 = await totalLockedAmount * 1000000000000000;
    let totalLockedAmount2 = await totalLockedAmount1 * 1000;
    let totalLockedAmount3 = await Math.round(totalLockedAmount2)
    sauronHealthID.innerHTML = await totalLockedAmount3
    let amount = await (1000000 - totalLockedAmount3) / 100000 * 100
    sauronHealthP.style.width = `${amount}%`;
};
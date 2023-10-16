import { LOTR_ADDRESS } from "/constants/address.js";
import { LOTR_ABI } from "/constants/abi.js";

let userChar = document.querySelector('#userChar');
let userPower = document.querySelector('#userPower');
let userHit = document.querySelector('#userHit');
let userCooldown = document.querySelector('#userCooldown');
let userSpecialPower = document.querySelector('#userSpecialPower');
let userWeapon = document.querySelector('#userWeapon');
let userArmor = document.querySelector('#userArmor');

export const charStatus = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(LOTR_ADDRESS, LOTR_ABI, signer);
    
    const char = await contract?.playerChar(signer.getAddress());
    const charPower = await contract?.playerPower(signer.getAddress());
    const charTotalHit = await contract?.playerHit(signer.getAddress());
    const charCooldown = await contract?.playerCooldown(signer.getAddress());
    const charSpecialPower = await contract?.specialPower(signer.getAddress());
    const charWeapon = await contract?.playerWeapon(signer.getAddress());
    const charArmor = await contract?.playerArmor(signer.getAddress());
    userChar.innerHTML = await char;
    userPower.innerHTML = await charPower;
    userHit.innerHTML = await charTotalHit;
    userCooldown.innerHTML = await charCooldown;
    userSpecialPower.innerHTML = await charSpecialPower;
    userWeapon.innerHTML = await charWeapon;
    userArmor.innerHTML = await charArmor;
};
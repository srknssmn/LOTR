// import { LOTR_ADDRESS } from "/constants/address.js";
// import { LOTR_ABI } from "/constants/abi.js";

// let hitSauronButton = document.querySelector('#hitSauron');

// hitSauronButton.addEventListener('click', checkCooldown)

// async function checkCooldown() {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const contract = new ethers.Contract(LOTR_ADDRESS, LOTR_ABI, signer);
    
//     const charCooldown = await contract?.cooldown(signer.getAddress());
//     const blocktime = await contract.blockTime();

//     if (charCooldown > blocktime) {
//         await window.alert("Wait Cooldown or Buy Spell")
//     }
// };
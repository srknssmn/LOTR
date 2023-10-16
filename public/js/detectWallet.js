window.onload = (event) => {
    isConnected();
};

import {charCheck} from "/js/charCheck.js";
import {charStatus} from "/js/charStatus.js";
import {checkGoldTokens} from "/js/checkGoldTokens.js";
import {checkXP} from "/js/checkXP.js";
import {sauronHealth} from "/js/sauronHealth.js";

let chooseHero = document.querySelector('#chooseHero')
let gandalfPic = document.querySelector('#gandalfPic')
let sauronPic = document.querySelector('#sauronPic')
let progressBAR = document.querySelector('#progressBAR')
let connectWalletButton = document.querySelector('#connectWallet')
let hitSauronButton = document.querySelector('#hitSauron')
let monsterHealthSec = document.querySelector('#monsterHealthSec')
let userStatus = document.querySelector('#userStatus')
let kickersList = document.querySelector('#kickersList')

async function isConnected() {
    const accounts = await ethereum.request({method: 'eth_accounts'});       
    if (accounts.length) {
        await console.log(`You're connected to: ${accounts[0]}`);
        await charCheck();
        let userNickname = await document.querySelector('#userNickname').innerHTML
        if (userNickname.length > 0) {
            await sauronHealth();
            await charStatus();
            await checkGoldTokens();
            await checkXP();
            chooseHero.hidden = await true;
            sauronPic.hidden = await false;
            monsterHealthSec.hidden = await false;
            progressBAR.hidden = await false;
            hitSauronButton.hidden = await false;
            userStatus.hidden = await false;
        } else {
            chooseHero.hidden = await false
            console.log(userNickname.length)
            hitSauronButton.hidden = await true;
            userStatus.hidden = await true;
        }
        connectWalletButton.hidden = await true
        connectWalletButton.disabled = await true;
        gandalfPic.hidden = await true
        // kickMonsterButton.hidden = false
        // monsterHealth();
        // userValue();

        // genslerIMG.hidden = false
        // progressBAR.hidden = false
        // monsterHealthSec.hidden = false
        // userInfo.hidden = false
        // kickersList.hidden = false
    } else {
        console.log("Metamask is not connected");
        chooseHero.hidden = true
        // kickMonsterButton.hidden = true
        // connectWalletButton.hidden = false
        // monsterHealthSec.hidden = true
        // userInfo.hidden = true
        // kickersList.hidden = true
        // lotrIMG.hidden = false
        // genslerIMG.hidden = true
        // progressBAR.hidden = true
    }
}
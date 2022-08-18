// ==UserScript==
// @name         Inspect+ Pro
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  Best script for destroying website styling.
// @author       DaxCodes
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
var isOpen = false;
////var CCHackopen = false;
var calculatorIsOn = false;


function openInspectPro() {
    var frameVar = document.getElementById("mainFrameInspect");

    if(isOpen == false) {
        isOpen = true;
        frameVar.style.opacity = 1;
        frameVar.style.pointerEvents = "all";

    } else {
        isOpen = false;
        frameVar.style.opacity = 0;
        frameVar.style.pointerEvents = "none";

    }
}

// SCRIPT BUTTON FUNCTIONS \\

function notiveScript() {
    console.log("asd");
    var notiveimg = document.createElement("img");
    notiveimg.style = "top: 50%; left: 50%; position: fixed; transform: translate(-50%, -50%);";
    notiveimg.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3554f9e1-cd13-4814-a8b9-0e4011d28d69/de0w7sg-a975207c-c72d-422c-b444-300e0cca4e81.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1NTRmOWUxLWNkMTMtNDgxNC1hOGI5LTBlNDAxMWQyOGQ2OVwvZGUwdzdzZy1hOTc1MjA3Yy1jNzJkLTQyMmMtYjQ0NC0zMDBlMGNjYTRlODEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.M3stmTlClN6dVrA_upobEZYBavZs66RJyJU2h4sQons";

    var notiveimg1 = document.createElement("img");
    notiveimg1.style = "top: 50%; left: 50; position: fixed; transform: translate(-50%, -50%);";
    notiveimg1.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3554f9e1-cd13-4814-a8b9-0e4011d28d69/de0w7sg-a975207c-c72d-422c-b444-300e0cca4e81.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1NTRmOWUxLWNkMTMtNDgxNC1hOGI5LTBlNDAxMWQyOGQ2OVwvZGUwdzdzZy1hOTc1MjA3Yy1jNzJkLTQyMmMtYjQ0NC0zMDBlMGNjYTRlODEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.M3stmTlClN6dVrA_upobEZYBavZs66RJyJU2h4sQons";
    var notiveimg2 = document.createElement("img");
    notiveimg2.style = "top: 0; left: 50; position: fixed;";
    notiveimg2.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3554f9e1-cd13-4814-a8b9-0e4011d28d69/de0w7sg-a975207c-c72d-422c-b444-300e0cca4e81.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1NTRmOWUxLWNkMTMtNDgxNC1hOGI5LTBlNDAxMWQyOGQ2OVwvZGUwdzdzZy1hOTc1MjA3Yy1jNzJkLTQyMmMtYjQ0NC0zMDBlMGNjYTRlODEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.M3stmTlClN6dVrA_upobEZYBavZs66RJyJU2h4sQons";
    document.body.appendChild(notiveimg)
    document.body.appendChild(notiveimg1)
    document.body.appendChild(notiveimg2)
    document.body.style.backgroundImage = "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3554f9e1-cd13-4814-a8b9-0e4011d28d69/de0w7sg-a975207c-c72d-422c-b444-300e0cca4e81.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1NTRmOWUxLWNkMTMtNDgxNC1hOGI5LTBlNDAxMWQyOGQ2OVwvZGUwdzdzZy1hOTc1MjA3Yy1jNzJkLTQyMmMtYjQ0NC0zMDBlMGNjYTRlODEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.M3stmTlClN6dVrA_upobEZYBavZs66RJyJU2h4sQons)";
}

function WindowsXPScript() {
    console.log("windowsXPXPXPXPXXP");
    document.body.style.backgroundImage = "url(https://media.gcflearnfree.org/ctassets/topics/40/xp_desktop.jpg)";
    document.body.style.backgroundSize = "cover";
}

function CCHackScript1() {
    var idk = 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999 * 99999999999999999999999999999999999999999999
    var idk2 = idk * 999999999
    Game.Earn(idk2);
}

function CCHackScript2() {
    Game.cookies=0
    Game.cookiesPs=0
    Game.lumps=0
}

function FBHackScript() {
    counter.text = 999999999;counterOutline.text=999999999;rd=(counter.text*1.5)+4.82;
}

function RedBGScript() {
    document.body.style.background = "red";
}

function calculatorScript() {
    if(calculatorIsOn == false) {
        calculatorIsOn = true;
        var calcFrame = document.createElement("iframe");
        calcFrame.id = "dangYouFoundTheCalculator";
        calcFrame.src = "https://calculator.net/";
        calcFrame.style = "height: 350px; width: 750px; overflow-y: hidden; overflow-x: hidden;";
        document.body.appendChild(calcFrame);
    } else {
        console.log("Already Loaded CalculatorScript!");
    }

}



(function() {
    'use strict';

    var open = document.createElement("Button");
    open.id = "openButtonInspect";
    open.innerHTML = "Inspect+ Pro";
    open.style = "border: 3px solid #262626; font-weight: bold; border-radius: 6px; font-size: 18px; font-family: sans-serif; background: #1a1a1a; color: white; width: 210px; height: 35px; bottom: 0; left: 0; position: fixed; z-index: 9999;";
    open.onclick = function() { openInspectPro() };

    var frame = document.createElement("div");
    frame.id = "mainFrameInspect";
    frame.style = "opacity: 0; overflow-y: auto; font-size: 18px; font-family: sans-serif; overflow-x: hidden; text-align: center; pointer-events: none; border: 3px solid #262626; background: #1a1a1a; color: white; border-radius: 6px; width: 205px; height: 350px; bottom: 35px; left: 0; position: fixed; z-index: 9999;";
    // just some credts \\ oweijdfmhkadfsujhkawsdiukljwehkjafhsgisadkjslkjhfasdjklfskgjhofsidjlkbkhilajkfdjgkhfdsjklgjhk
    var credit = document.createElement("h2");
    credit.id = "ifyouchangethisYOUDIE";
    credit.style = "color: white; font-weight: bold; font-size: 15px; padding: 0; margin: 0;";
    credit.innerHTML = "Made by <a href='https://replit.com/@DaxCodes/' color='aqua'>@DaxCodes</a>";
    ///////////////////////////oogly\\\\\\\\\\\\\\\\\\\\\\\\\\
    //\\\\\\\\\\\\\\\\\\\\\\\\\boogly//////////////////////////
    // Script Buttons \\
    var notiveButton = document.createElement("Button");
    notiveButton.id = "notiveButtonInspect";
    notiveButton.style = "font-weight: bold; text-align: center; color: white; background: #262626; padding: 2px; border: 1.5px solid #333333; border-radius: 7px; font-size: 18px; width: 200px;";
    notiveButton.innerHTML = "notive";
    notiveButton.onclick = function() { notiveScript() };

    var FBHackButton = document.createElement("Button");
    FBHackButton.id = "FBHackButtonInspect";
    FBHackButton.style = "font-weight: bold; text-align: center; color: white; background: #262626; padding: 2px; border: 1.5px solid #333333; border-radius: 7px; font-size: 18px; width: 200px;";
    FBHackButton.innerHTML = "FlappyBird Hack";
    FBHackButton.onclick = function() { FBHackScript() };

    var WindowsXPButton = document.createElement("Button");
    WindowsXPButton.id = "WindowsXPButtonInspect";
    WindowsXPButton.style = "font-weight: bold; text-align: center; color: white; background: #262626; padding: 2px; border: 1.5px solid #333333; border-radius: 7px; font-size: 18px; width: 200px;";
    WindowsXPButton.innerHTML = "Windows XP";
    WindowsXPButton.onclick = function() { WindowsXPScript() };

    var RedBGButton = document.createElement("Button");
    RedBGButton.id = "RedBGButtonInspect";
    RedBGButton.style = "font-weight: bold; text-align: center; color: white; background: #262626; padding: 2px; border: 1.5px solid #333333; border-radius: 7px; font-size: 18px; width: 200px;";
    RedBGButton.innerHTML = "Red Background";
    RedBGButton.onclick = function() { RedBGScript() };

    var calcButton = document.createElement("Button");
    calcButton.id = "calcButtonInspect";
    calcButton.style = "font-weight: bold; text-align: center; color: white; background: #262626; padding: 2px; border: 1.5px solid #333333; border-radius: 7px; font-size: 18px; width: 200px;";
    calcButton.innerHTML = "Calculator";
    calcButton.onclick = function() { calculatorScript() };
    // splitter boi \\

    var ccsplit = document.createElement("h2");
    ccsplit.id = "CCSplitInspect";
    ccsplit.style = "color: #ffcc80; font-weight: bold; font-size: 15px; padding: 0; margin: 5px;";
    ccsplit.innerHTML = "-- Cookie Clicker Hacks --";

    // COOKIE CLICKER HACKS \\
    var CCHackButton = document.createElement("Button");
    CCHackButton.id = "CCHackButtonInspect";
    CCHackButton.style = "font-weight: bold; text-align: center; color: white; background: #262626; padding: 2px; border: 1.5px solid #333333; border-radius: 7px; font-size: 18px; width: 200px;";
    CCHackButton.innerHTML = "CC INF Cookie Hack";
    CCHackButton.onclick = function() { CCHackScript1() };

    var CCWipeButton = document.createElement("Button");
    CCWipeButton.id = "CCWipeButtonInspect";
    CCWipeButton.style = "font-weight: bold; text-align: center; color: white; background: #262626; padding: 2px; border: 1.5px solid #333333; border-radius: 7px; font-size: 18px; width: 200px;";
    CCWipeButton.innerHTML = "CC Wipe";
    CCWipeButton.onclick = function() { CCHackScript2() };

    // MORE \\
    document.body.appendChild(frame);
    document.body.appendChild(open);
    document.getElementById("mainFrameInspect").appendChild(credit); // This line needs to be first!! \\
    document.getElementById("mainFrameInspect").appendChild(notiveButton);
    document.getElementById("mainFrameInspect").appendChild(FBHackButton);
    document.getElementById("mainFrameInspect").appendChild(WindowsXPButton);
    document.getElementById("mainFrameInspect").appendChild(RedBGButton);
    document.getElementById("mainFrameInspect").appendChild(calcButton);
    document.getElementById("mainFrameInspect").appendChild(ccsplit); // This line needs to be IN FRONT of the cookie clicker stuff! \\
    document.getElementById("mainFrameInspect").appendChild(CCHackButton);
    document.getElementById("mainFrameInspect").appendChild(CCWipeButton);
})();

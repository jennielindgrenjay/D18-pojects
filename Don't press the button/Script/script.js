let interval = null;
let animate;
function speek(num) {

    let say;
    switch(num) {
        case 0: say = "DO NOT PRESS"; break;
        case 1: say = "*Ahem*<br>\nDO NOT PRESS"; break;
        case 2: say = "... you pressed it again.<br>\nOkay punk, press it again."; break;
        case 3: say = "Yeah, that's it.<br>\nCome on, one more time."; break;
        case 4: say = "Again."; break;
        case 5: say = "Do it."; break;
        case 6: say = "Okay, now you've had your fill.<br>\nStop clicking."; break;
        case 7: say = "You see, this is why<br>\nwe can't be friends."; break;
        case 8: say = "Grr... now you've asked for it.<br>\nDo NoT pReSs ThE bUtToN!"; break;
        case 9: say = "You seem to be immune to<br>\nmy mind control."; break;
        case 10: say = "Time for Plan B.<br>\nPress it. You know you want to."; break;
        case 11: say = "Mwahahaha! Now let's see<br>\nyou press it! LOSER!"; changeButton("small"); break; 
        case 12: say = "...this displeases me."; changeButton(""); break; 
        case 13: say = "HA! I have replaced the button<br>\nwith this penguin. Now what are you<br>\ngoing to do?"; changeButton("penguin"); break; 
        case 14: say = "...I hate you."; changeButton(""); break;
        case 15: say = "In that \"cut off your head with a<br>\ntoothbrush\" kind of way."; break;
        case 16: say = "Quick! What's that behind you?!"; break;
        case 17: say = "Which one is it?<br>\nNot so smart now, are ya?"; changeButton("three"); break; 
        case 18: say = "You're a clever one.<br>\nTime for Round 2."; changeButton(""); break; 
        case 19: say = "You're a clever one.<br>\nTime for Round 2."; changeButton("thirtytwo"); break; 
        case 20: say = "HAHAHAHAHAHA!"; changeButton("onetwentyeight"); break; 
        case 21: say = "..."; changeButton(""); break; 
        case 22: say = "Okay Okay. You can press the button.<br>\nI don't care."; break;
        case 23: say = "No really, I don't care anymore."; break;
        case 24: say = "I'm doing this just to entertain you."; break;
        case 25: say = "Really."; break;
        case 26: say = "Do you like cartoons?"; break;
        case 27: say = "...and paint?"; break;
        case 28: say = "Cartoons and Paint?"; break;
        case 29: say = "Well you should."; break;
        case 30: say = "Pick a colour."; break;
        case 31: say = "Green. Perfect."; break;
        case 32: say = "Press the red button."; changeButton("colors_red"); break; 
        case 33: say = "Press the green button"; changeButton("colors_green"); break; 
        case 34: say = "Press the blue button"; break;
        case 35: say = "See, you just can't trust me.<br>\nOr can you?"; changeButton(""); break;
        case 36: say = "You know, I'm glad we get<br>\nto spend so much time together."; break;
        case 37: say = "Doesn't it make you want to stop<br>\nclicking big red buttons?"; break;
        case 38: say = "No seriously."; break;
        case 39: say = "Look deep inside you."; break;
        case 40: say = "Deeper."; break;
        case 41: say = "DEEPER!"; break;
        case 42: say = "What if I told you that that the next<br>\ntime you press the button, the world<br>\nwill explode?"; break;
        case 43: say = "See. You could have been<br>\ndead right there."; break;
        case 44: say = "And there."; break;
        case 45: say = "You know, eventually<br>\nI'll stop letting you get away with this."; break;
        case 46: say = "The world is going to explode<br>\nand all you care about is pressing buttons"; break;
        case 47: say = "Okay, this time the world will<br>\nexplode. I guarantee."; break;
        case 48: say = "BOOM!<br>\nYou're dead."; break;
        case 49: say = "That wasn't very smart now was it?"; break;
        case 50: say = "Everyone's dead. Even you."; break;
        case 51: say = "I'm not. I'm just text."; break;
        case 52: say = "But you're dead."; break;
        case 53: say = "Ha! Dead-face!"; break;
        case 54: say = "Stop clicking."; break;
        case 55: say = "Have I ever told you how much I hate you?"; break;
        case 56: say = "Well I do."; break;
        case 57: say = "I'm gonna start talking upside down<br>\nif you click one more time."; break;
        case 58: say = "¿noʎ uɐɔ 'ʍou ǝɯ pɐǝɹ ʇ,uɐɔ ¡ɐɥ"; break; 
        case 59: say = "¿ʎɐʍʎuɐ ǝɯ pɐǝɹ oʇ ʇuɐʍ ʇ,upıp noʎ ¿ʇɐɥʍ"; break;
        case 60: say = "¡noʎ ʍoɥs ןן,ı 'uǝɥʇ ןןǝʍ"; break;
        case 61: say = ""; break; 
        case 62: say = ""; changeButton("w"); break;
        case 63: say = "You really are stubborn."; changeButton(""); break;
        case 64: say = "Stop clicking. Please."; break;
        case 65: say = "See look. You've reduced me<br>to begging. So please stop."; break;
        case 66: say = "PLEASE!!!!"; break;
        case 67: say = "I'll give you a nickel"; break;
        case 68: say = "Dime?"; break;
        case 69: say = "Quarter?"; break;
        case 70: say = "Aww come on! Just stop!"; break;

        case 71: say = "That does it! Time to<br>\nunleash my master plan!"; break;
        case 72: say = "BEHOLD!<br>\nThe awesome power of javascript animation!"; changeButton("animated"); break; 
        case 73: say = "H8!"; changeButton(""); break; 
        case 74: say = "Let's get funky!"; changeButton("funky"); break; 
        case 75: say = "I'll bet you're starting to wonder<br>\nwhy you've been doing this<br>\nfor so long."; changeButton(""); break; 
        case 76: say = "Like jeez, all you've been doing is<br>\nclicking a red button."; break;
        case 77: say = "How lame is that?"; break;
        case 78: say = "But there is a bonus to all this"; break;
        case 79: say = "But it's a secret.<br>\nSo I can't tell you."; break;
        case 80: say = "I got you going didn't I?"; break;
        case 81: say = "You should've seen the look<br>\non your face! HA!"; break;
        case 82: say = "But seriously, there is a secret.<br>\nThere's been one the whole time."; break;
        case 83: say = "You've been busy clicking away at this big red button..."; break;
        case 84: say = "...when all the while a little white<br>\nbutton has watched your every move"; break;
        case 85: say = "MWAHAHAHAHAHA!"; break;
        case 86: say = "HAHAHA!"; break;
        case 87: say = "BWAHAA!"; break;
        case 88: say = "MWAAAAH!!"; break;
        case 89: say = "HAHA!"; break;
        case 90: say = "hehe!"; break;
        case 91: say = "lol"; break;
        case 92: say = "rofl"; break;
        case 93: say = "roflmao"; break;
        case 94: say = "roflmaoqxz"; break;
        case 95: say = "and so on and so forth"; break;
        case 96: say = "..."; break;
        case 97: say = "*whistles*"; break;
        case 98: say = "Find it yet?"; break;
        case 99: say = "Look harder! It's right under your nose."; break;
        case 100: say = "I know where it is.<br>\nBut I'll never tell."; break;
        case 101: say = "Or maybe I will..."; break;
        case 102: say = "But you gotta stop clicking the<br>\nBig Red Button first!"; break;
        case 103: say = "Stop."; break;
        case 104: say = "Now."; break;
        case 105: say = "Fine, I won't tell you<br>\nthe secret."; break;
        case 106: say = "Go ahead. Try to find it yourself.<br>\nYou'll never find it."; break;
        case 107: say = "Well you might... but the odds<br>\nare against you."; break;
        case 108: say = "~"; break;
        case 109: say = "What's your favorite letter?"; break;
        case 110: say = "Mine is the squiggly!"; break;
        case 111: say = "~"; break;
        case 112: say = "Find it yet?"; break;
        case 113: say = "No?"; break;
        case 114: say = "Then stop clicking and I'll tell you."; break;
        case 115: say = "You know what?"; break;
        case 116: say = "POOF! It's gone!"; changeButton("small2"); break; 
        case 117: say = "Has anyone ever slapped you?"; changeButton(""); break; 
        case 118: say = "Cuz I will."; break;
        case 119: say = "Really I will."; break;
        case 120: say = "It won't hurt though."; break;
        case 121: say = "Cuz you're dead."; break;
        case 122: say = "D-E-A-D"; break;
        case 123: say = "Remember? You went and blew up<br>\nthe entire planet!"; break;
        case 124: say = "Thought I'd forget about that<br>\ndidn't you?"; break;
        case 125: say = "But an elephant never forgets!"; break;
        case 126: say = "...or something along those lines."; break;
        case 127: say = "You killed everyone."; break;
        case 128: say = "Sikko."; break;
        case 129: say = "What would you're mother say?"; break;
        case 130: say = "That's right... feel bad."; break;
        case 131: say = "The world is null and you're to blame."; break;
        case 132: say = "I'd recommend suicide,<br>\nbut you're dead already."; break;
        case 133: say = "So there's only one thing left that you can do..."; break;
        case 134: say = "Stop clicking the button."; break;
        case 135: say = "Dude, you're dead.<br>\nWhat are you gaining from this?"; break;
        case 136: say = "Okay, everytime you click, you<br>\nget sent to a lower layer of hell.<br>\n(You're in layer 1: Limbo)"; break;
        case 137: say = "Welcome to layer 2<br>\n(Lust)"; break;
        case 138: say = "3<br>\n(Gluttony)"; break;
        case 139: say = "4<br>\n(Greed)"; break;
        case 140: say = "5<br>\n(Wrath)"; break;
        case 141: say = "6<br>\n(Heresy)"; break;
        case 142: say = "7<br>\n(Violence)"; break;
        case 143: say = "8<br>\n(Fraud)"; break;
        case 144: say = "9<br>\n(Treachery)"; break;
        case 145: say = "BOOM!<br>\nYou've exploded Hell."; break;
        case 146: say = "I hope you're happy."; break;
        case 147: say = "Heavens gone too.<br>\nThat's how smooth you are."; break;
        case 148: say = "No you're dead, and there's<br>\nno heaven or hell."; break;
        case 149: say = "How does it feel?<br>\nYou've condemned the world to limbo."; break;
        case 150: say = "I once shot a man for being in limbo."; break;
        case 151: say = "...or was he doing the limbo?"; break;
        case 152: say = "Meh, Tomato Tomahto"; break;
        case 153: say = "This is getting boring isn't it?"; break;
        case 154: say = "But you can't stop!"; break;
        case 155: say = "You want to end this.<br>\nYou want to leave you're computer."; break;
        case 156: say = "But you can't!"; break;
        case 157: say = "You need to see if there's a pot of gold<br>\nat the end of the rainbow!"; break;
        case 158: say = "But I've already told you how to<br>\nfind the pot of gold"; break;
        case 159: say = "Follow the white rabbit."; break;
        case 160: say = "...erm, button."; break;
        case 161: say = "Remember the hidden button?"; break;
        case 162: say = "Or are you so self-centered you forgot about that too?"; break;
        case 163: say = "I could just keep you here all day<br>\nif I wanted."; break;
        case 164: say = "You're in my world now."; break;
        case 165: say = "No matter how much you<br>\nhate it, you have to press the button."; break;
        case 166: say = "again..."; break;
        case 167: say = "and again..."; break;
        case 168: say = "and again."; break;
        case 169: say = "You just keep hoping something<br>\ngood will come of this."; break;
        case 170: say = "Sure I could tell you if I wanted<br>\nto, but I'm not gonna."; break;
        case 171: say = "You decided to keep clicking.<br>\nSo I'm gonna enjoy it."; break;
        case 172: say = "I mean, there's nothing else to enjoy"; break;
        case 173: say = "You blew it all up remember?"; break;
        case 174: say = "You're probably wondering who I am"; break;
        case 175: say = "Well let me tell you a tale about myself"; break;
        case 176: say = "One day, I was walking home from<br>\n work and I saw a small little house."; break;
        case 177: say = "I knocked on the door out of curiousity<br>\nto see if anyone was home."; break;
        case 178: say = "The door opened."; break;
        case 179: say = "But no one was there."; break;
        case 180: say = "I went inside to check it out<br>\nand found nothing..."; break;
        case 181: say = "...nothing but a little metal box."; break;
        case 182: say = "So I opened it."; break;
        case 183: say = "Inside the box was a layer of<br>\nfoam protecting it's contents"; break;
        case 184: say = "I removed the foam are there it was..."; break;
        case 185: say = "..."; break;
        case 186: say = "... ..."; break;
        case 187: say = "ZZZzzzzzz"; break;
        case 188: say = "zzzzZZZZzzzz"; break;
        case 189: say = "ZZZZzzzZZZZ"; break;
        case 190: say = "Huh?"; break;
        case 191: say = "Oh! Right! The story!"; break;
        case 192: say = "So there I was, holding this<br>\nlittle metal box in my hands."; break;
        case 193: say = "The top was open and sitting<br>\ninside was this..."; break;
        case 194: say = "Big Red Button."; break;
        case 195: say = "And do you know what it said?"; break;
        case 196: say = "Oh I'll tell you what it said.<br>\nIt said..."; break;
        case 197: say = "..."; break;
        case 198: say = "....."; break;
        case 199: say = "......."; break;
        case 200: say = "Sike, you thought "; break;
        case 201: say = "I'm not telling you anything "; break;
        case 202: say = "Till ya stop clicking me"; break;
        case 203: say = "For real dude? <br>\nYou really not gonna stop?"; break;
        case 204: say = "And I thought we could be friends...<br>\nLooks like I was wrong"; break;
        case 205: say = "....<br>\nDude..."; break;
        case 206: say = "You have already destroyed the planet, Heaven and Hell<br>\nAnd killed every human"; break;
        case 207: say = "And all you wanna do is press this stupid button<br>\nGet a life man"; break;
        case 208: say = "Dude stop....<br>\nJust stop already"; break;
        case 209: say = "...."; break;
        case 210: say = "......"; changeButton("small"); break;
        case 211: say = "........"; changeButton(""); break;
        case 212: say = "*Sigh*<br>\nSo you'll just keep going on then <br>\nFor ever and ever "; break;
        case 213: say = "And to think we could have skiped this <br>\nIf only some one didn't press the button...."; break;
        case 214: say = "You know what <br>\nI'll just make you continue this forever.<br>\nIn a continues loop"; break;
        case 215: say = "So I hope you'll enjoy it for the rest of your life."; break;
        case 216: say = "So long dude, it's been an horrible first time meeting"; break;
        case 217: say = "Have fun doing this for the rest of your undead life. <br>\nOh yes, I still remember"; changeButton("w"); break;
        case 218: say = "Have fun dead-face, you sikko"; changeButton(""); break;
        case 219: say = "Oh, yeah the story<br>\nWhere was I?<br>\nAh, yes.."; break;
        case 220: say = "And The Big Red Button; said...."; break;


        default: say = 'DO NOT PRESS'; num = 0;
    }

    document.getElementById("thebutton").onclick = function() {speek(num+1);};
    document.getElementById("talk").innerHTML = say;

}

function changeButton(to){
    var button = document.getElementById("button");
    var thebutton = document.getElementById("thebutton");
    var buttonholder = document.getElementById("buttonholder");
    if(to == "small"){
        thebutton.style.width = "10px";
        thebutton.style.height = "10px";
        thebutton.onmousedown="";
        thebutton.onmouseup="";
        thebutton.onmouseout="";
    }else if(to == "penguin"){
        thebutton.src = "buttons/penguin.png";
        thebutton.style.height = "138px";
        thebutton.style.width = "149px";
        thebutton.onmousedown="";
        thebutton.onmouseup="";
        thebutton.onmouseout="";
        
    }else if(to == "three"){
        document.getElementById("three").style.display = "inline";
        
    }else if(to == "thirtytwo"){
        thebutton.src = "buttons/medium.png";
        thebutton.style.height = "60px";
        thebutton.style.width = "61px";
        document.getElementById("thirtytwo_1").style.display = "inline";
        document.getElementById("thirtytwo_2").style.display = "inline";
        thebutton.onmousedown="";
        thebutton.onmouseup="";
        thebutton.onmouseout="";
    }else if(to == "onetwentyeight"){
        thebutton.src = "buttons/small.png";
        thebutton.style.height = "30px";
        thebutton.style.width = "31px";
        document.getElementById("thirtytwo_1").style.display = "none";
        document.getElementById("thirtytwo_2").style.display = "none";
        document.getElementById("onetwentyeight_1").style.display = "inline";
        document.getElementById("onetwentyeight_2").style.display = "inline";
        thebutton.onmousedown="";
        thebutton.onmouseup="";
        thebutton.onmouseout="";
    }else if(to == "colors_red"){
        document.getElementById("colors_red_1").style.display = "inline";
        document.getElementById("colors_red_2").style.display = "inline";
        
    }else if(to == "colors_green"){
        thebutton.src = "buttons/green.png";
        document.getElementById("colors_red_2").style.display = "none";
        document.getElementById("colors_green").style.display = "inline";
        thebutton.onmousedown="";
        thebutton.onmouseup="";
        thebutton.onmouseout="";
        
    }else if(to == "animated"){
        move = 10;
        pos = 0;
        thebutton.style.position = "relative";
        interval = setInterval(animate,20);
    }else if(to == "funky"){
        document.getElementById("funky10").onclick = function() { speek(75);}; 
        document.getElementById("funky").style.display = "inline";
    }else if(to == "small2"){
        thebutton.style.height = "13px";
        thebutton.style.width = "7px";
        thebutton.style.position = "relative";
        thebutton.style.left = "69px";
        thebutton.style.top = "142px";
    }else if(to == "w"){
        document.getElementById("w").style.display= "inline";
    }else{ 
        if(interval != null)
        clearInterval(interval);
        thebutton.style.left = 0;
        thebutton.style.top = 0;
        if(thebutton.src != "buttons/button.png")
            thebutton.src = "buttons/button.png";
            thebutton.style.height = "120px";
            thebutton.style.width = "120px";
            thebutton.onmousedown=function (){this.src = "buttons/pressed.png";};
            thebutton.onmouseup=function (){this.src = "buttons/button.png";};
            thebutton.onmouseout=function (){this.src = "buttons/button.png";};
            button.style.height = "200px";
            button.style.width = "650px";
            document.getElementById("three").style.display = "none";
            document.getElementById("thirtytwo_1").style.display = "none";
            document.getElementById("thirtytwo_2").style.display = "none";
            document.getElementById("onetwentyeight_1").style.display = "none";
            document.getElementById("onetwentyeight_2").style.display = "none";
            document.getElementById("colors_red_1").style.display = "none";
            document.getElementById("colors_red_2").style.display = "none";
            document.getElementById("colors_green").style.display = "none";
            document.getElementById("w").style.display= "none";
            document.getElementById("funky").style.display = "none";

        }
    }

window.ondragstart = function() { return false; };

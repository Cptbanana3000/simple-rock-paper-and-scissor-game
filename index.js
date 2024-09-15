let gameoptions = ["rock","paper","scissors"]


let userinput = prompt("enter your choiec: rock paper or scissors").toLocaleLowerCase().trim();
let computerschoice = gameoptions[Math.floor(Math.random() * gameoptions.length)]

console.log("User choice:", userinput);
console.log("Computer choice:", computerschoice);


if(userinput === computerschoice){
    alert(" ITS A TIE! ")
}else if(
    (userinput === "rock"  && computerschoice === "scissors")||
    (userinput === "scissors" && computerschoice === "paper")||
    (userinput === "paper" && computerschoice === "rock")
){
    alert("you win!")

}else{
    alert("you lose!better luck next time")
}


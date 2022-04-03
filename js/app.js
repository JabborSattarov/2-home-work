var humburger = 20000,
    hotDog = 15000,
    cola = 5000,
    pepsi = 5000;




let rec = new webkitSpeechRecognition();
console.log(rec);

rec.lang = "en-US"
const btn = document.querySelector(".btn");
btn.addEventListener("click", ()=> {
    rec.start()
})

rec.onresult = (evt)=> {
    let command = evt["results"][0][0]["transcript"];
    let lowerCase = command.toLowerCase()
    console.log(lowerCase);

    if (lowerCase === "menu") {
        let menyu = document.querySelector(".menyu")
        menyu.classList.add("display-b")

        let say =document.querySelector(".say")
        say.textContent = "What I do bring to eat??? "
    }
    if (lowerCase === "hot dog") {
        let hoddog = document.querySelector('.eat');
        hoddog.classList.add("up")

        let tarelka = document.querySelector(".forEat")
        tarelka.classList.add("opacity2")
    }
    if (lowerCase === "hamburger") {
        let hoddog = document.querySelector('.eat');
        hoddog.classList.remove("up")

        let tarelka = document.querySelector(".forEat")
        tarelka.classList.add("opacity2")
    }

    if (lowerCase === "cola") {
        let cola = document.querySelector('.drink');
        cola.classList.remove("secondUp")

        let bakal = document.querySelector(".forDrink")
        bakal.classList.add("opacity3")
    }
    if (lowerCase === "pepsi") {
        let pepsi = document.querySelector('.drink');
        pepsi.classList.add("secondUp")

        let bakal = document.querySelector(".forDrink")
        bakal.classList.add("opacity3")
    }

    if (lowerCase === "check") {
        alert("Nima Yedingiz ??")
    }
    // cola humb
    if (lowerCase === "hamburger and cola" ) {
        let acaunt = humburger + cola 
        let pr = prompt(`You neet to pay ${acaunt}`)
       
        let say =document.querySelector(".say")
        say.textContent = `Payed ${pr}  ` 
    }
    if (lowerCase === "cola and hamburger" ) {
        let acaunt = humburger + cola 
        let pr = prompt(`You neet to pay ${acaunt}`)
       
        let say =document.querySelector(".say")
        say.textContent = `Payed ${pr}  ` 
    }
// pepsi and hodog
    if (lowerCase === "hot dog and pepsi" ) {
        let acaunt = hotDog + pepsi 
        let pr = prompt(`You neet to pay ${acaunt}`)
       
        let say =document.querySelector(".say")
        say.textContent = `Payed ${pr}  ` 
    }
    if (lowerCase === "pepsi and hot dog " ) {
        let acaunt = hotDog + pepsi 
        let pr = prompt(`You neet to pay ${acaunt}`)
       
        let say =document.querySelector(".say")
        say.textContent = `Payed ${pr}  ` 
    }
    // pepsi and hamburger
    if (lowerCase === "hamburger and pepsi" ) {
        let acaunt = hotDog + pepsi 
        let pr = prompt(`You neet to pay ${acaunt}`)
       
        let say =document.querySelector(".say")
        say.textContent = `Payed ${pr}  ` 
    }
    if (lowerCase === "pepsi and hamburger" ) {
        let acaunt = hotDog + pepsi 
        let pr = prompt(`You neet to pay ${acaunt}`)
       
        let say =document.querySelector(".say")
        say.textContent = `Payed ${pr}  ` 
    }
 // hotdog and humburger
    if (lowerCase === "hot dog and hamburger") {
        let acaunt = hotDog + humburger 
        let pr = prompt(`You neet to pay ${acaunt}`)
       
        let say =document.querySelector(".say")
        say.textContent = `Payed ${pr}  ` 
    }
    if (lowerCase === "hamburger and hotdog") {
        let acaunt = hotDog + humburger 
        let pr = prompt(`You neet to pay ${acaunt}`)
       
        let say =document.querySelector(".say")
        say.textContent = `Payed ${pr}  ` 
    }
// cola and  hoddog

if (lowerCase === "hotdogs and cola" ) {
    let acaunt = hotDog + cola 
    let pr = prompt(`You neet to pay ${acaunt}`)
   
    let say =document.querySelector(".say")
    say.textContent = `Payed ${pr}  ` 
}
if (lowerCase === "cola and hotdogs " ) {
    let acaunt = hotDog + cola 
    let pr = prompt(`You neet to pay ${acaunt}`)
   
    let say =document.querySelector(".say")
    say.textContent = `Payed ${pr}  ` 
}
// cola adn pepsi 
if (lowerCase === "cola and pepsi" ) {
    let acaunt = cola + pepsi 
    let pr = prompt(`You neet to pay ${acaunt}`)
   
    let say =document.querySelector(".say")
    say.textContent = `Payed ${pr}  ` 
}
if (lowerCase === "pepsi and cola" ) {
    let acaunt = cola + pepsi 
    let pr = prompt(`You neet to pay ${acaunt}`)
   
    let say =document.querySelector(".say")
    say.textContent = `Payed ${pr}  ` 
}





    if (lowerCase === "thank you") {
        alert("You are Wellcome !!! Come again!")
    }
    else{
    
        let say =document.querySelector(".say")
        say.textContent = `Say Correctly!!`;   
    }

}
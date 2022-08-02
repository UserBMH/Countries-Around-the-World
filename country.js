function Country(name, language, hello, colors){
    this.name = name;
    this.language = language;
    this.hello = hello;
    this.colors = colors;
}

let usa = new Country("USA", "English", "Hello", ["Red", "White", "Blue"]);
let germany = new Country("Germany", "German", "Guten Tag", ["Red", "Black", "Yellow"]);
let brazil = new Country("Brazil", "Portuguese", "Ola", ["Green", "Yellow", "Blue"]);
let india = new Country("India", "Hindi", "Namaste", ["Orange", "White", "Green"]);
let norway = new Country("Norway", "Norwegian", "Hei", ["Red", "Black", "White"])


function SwitchCountry(){
    let choice = document.getElementById("CountryChoice");
    
    if (choice.value === "USA"){
        DisplayCountry(usa);
    }
    else if (choice.value === "Germany"){
        DisplayCountry(germany);
    }
    else if (choice.value === "Brazil"){
        DisplayCountry(brazil);
    }
    else if (choice.value === "India"){
        DisplayCountry(india);
    }
    else if (choice.value === "Norway"){
        DisplayCountry(norway);
     }
}


function DisplayCountry(Country)
{
   

    let countryName = document.querySelector("#CountryName");
    countryName.innerText = Country.name; 

    let officialLanguage = document.querySelector("#OfficialLanguage");
    officialLanguage.innerText = Country.language;

    let helloWorld = document.querySelector("#HelloWorld");
    helloWorld.innerText = Country.hello;

    let colors = Country.colors;

    let color1 = document.querySelector("#Color1"); 
    color1.style.backgroundColor = colors[0]; 

    let color2 = document.querySelector("#Color2");
    color2.style.backgroundColor = colors[1];

    let color3 = document.querySelector("#Color3");
    color3.style.backgroundColor = colors[2]; 
}
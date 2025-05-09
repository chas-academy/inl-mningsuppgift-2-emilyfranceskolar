// Definera array av namn
let people =[
  "Anna",
  "John",
  "Daniel",
  "Emilia",
  "Yasser",
  "Johanna",
];


export function initSearch(people) { // rör ej denna rad

  // Hämta HTML-element
  let input = document.getElementById("searchInput");
  let button = document.getElementById("searchBtn");
  let htmlText = document.getElementById("resultDisplay");
  
  // Lägg till en klickhändelse på "Sök"-knappen
  searchBtn.addEventListener("click",() => {
    // 1. Hämta texten i searchInput.value
    htmlText.innerHTML = input.value;
    // 2. Skapa en boolean för found
    let isFound = false;
  
    // 3. Loopa igenom people-arrayen
    for (let i = 0; i < people.length; i++){
      if(input.value === people[i]){
        //console.log(people[i])
        htmlText.innerHTML = `Namn hittades: ${input.value}`;
        //console.log("hi")
        isFound = true;
        break;
      } else {
        htmlText.innerHTML = ("Namn hittades inte!");
        isFound = false;
      } 
    }
  
    // 4. Jämför texten med varje namn i arrayen
    
    // 5. Om du hittar en match, skriv ut "Namn hittades!" i resultDisplay, ändra found till true
    
    // 6. Om du efter loopen inte hittat något, skriv ut "Namn hittades inte." och gör found till false igen.

    
    });
}



// rör ej dessa rader
document.addEventListener("DOMContentLoaded", () => {
  initSearch(people);
});
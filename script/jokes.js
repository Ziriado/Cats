const url="https://api.chucknorris.io/jokes/random"
const start=document.getElementById("jokepage")

fetch(url)
.then(function(response){return response.json();})
.then(function(data){
    this.data=data;

    console.log(this.data)
    
        let card=document.createElement("div")
        card.setAttribute("class","card")

        let jokevalue=document.createElement("p")
        jokevalue.innerHTML=this.data.value;

        card.appendChild(jokevalue)
        start.appendChild(card)
    
})





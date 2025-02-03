import { pokemons } from "./data.js"

// Array de objetos

const meusPokemons = []

const todosPokemons = document.getElementById('div-pokemons')
const meusFavoritos = document.getElementById('div-favoritos')



pokemons.forEach((element, index) => {

    todosPokemons.innerHTML += `
    <div class ="pokemon"> 
       <div> 
        <img src="${element.url}" alt=""> 
        <p>${element.number}</p>  
        <h5>${element.name}</h5>
        <p>${element.type}</p>
        <button class="btn btn-dark">Favoritar</button>
        </div>
    </div>

    `

})

const btns = document.querySelectorAll(".btn")



btns.forEach((element, index) => {
    element.addEventListener('click', function () {

        meusPokemons.forEach((element, i) => {

            if (pokemons[index] === element) {

                return alert("Esse pokemon ja existe")
            }

        })

        meusPokemons.push(pokemons[index])

        meusPokemons.forEach((element, index) => {

            meusFavoritos.innerHTML += `
            <div> 
                <div>
                <img src="${element.url}" alt=""> 
                <p>${element.number}</p>  
                <h5>${element.name}</h5>
                <p>${element.type}</p>
                </div>
                
            </div> `

        })

    })
})





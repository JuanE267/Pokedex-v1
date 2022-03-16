
let sprite = document.querySelector("#sprite");
let bar1 = new ldBar("#myItem1");
let bar2 = new ldBar("#myItem2");
let bar3 = new ldBar("#myItem3");
let bar4 = new ldBar("#myItem4");
let bar5 = new ldBar("#myItem5");
let bar6 = new ldBar("#myItem6");
let nombre;
let nombreMayus = document.querySelector("#nameMayus");
let boton = document.querySelector("#boton");
let input = document.querySelector("#busqueda");


let franchella = {
    name: "franchella",
    img: "GF.jpeg",
    stats: 200
}

input.addEventListener("keyup", function (event) {
    input.setAttribute("placeholder", "")
    if(event.keyCode === 13){
        event.preventDefault;
        boton.click()
        console.log("asd")
    }
})


boton.addEventListener("click", function () {
    
    pokemon = input.value;

    if (pokemon === "franchella") {
        nombre = franchella.name; 
        nombreMayus.innerHTML = nombre[0].toUpperCase() + nombre.slice(1)

        sprite.src = franchella.img;

        bar1.set(franchella.stats);
        bar2.set(franchella.stats);
        bar3.set(franchella.stats);
        bar4.set(franchella.stats);
        bar5.set(franchella.stats);
        bar6.set(franchella.stats)

        
    }else{
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(resultado => resultado.json())
    .then(resultadoJSON => {
        
        nombre = resultadoJSON.forms[0].name; //gets pokemon name
        nombreMayus.innerHTML = nombre[0].toUpperCase() + nombre.slice(1) //capiitalize first letter
        
        sprite.src = resultadoJSON.sprites.front_default;//sprite

        bar1.set(resultadoJSON.stats[0].base_stat);//HP    
        bar2.set(resultadoJSON.stats[1].base_stat);//ATTACK
        bar3.set(resultadoJSON.stats[2].base_stat);//DEFENCE
        bar4.set(resultadoJSON.stats[3].base_stat);//SPEED
        bar5.set(resultadoJSON.stats[4].base_stat);//SPECIALAT
        bar6.set(resultadoJSON.stats[5].base_stat);//SPECIALDEF
    
    })
}
        
})




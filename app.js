
let nombres = [];

function agregarAmigo(){

    let nombreAmigo = document.querySelector('#amigo').value.trim()
    if(nombreAmigo == ""){
        alert("debe escribir un nombre");
        limpiaCampos();
    }else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombreAmigo)) {
        alert("El nombre debe contener solo letras");
        limpiaCampos();
    }
    else if(nombreAmigo.length < 2){
        alert("El nombre es muy corto, por favor introduzca un nombre valido");
        limpiaCampos();
    }
    else{
        nombres.push(nombreAmigo);
        console.log(nombres.length)
        agregarAmigosLista(nombreAmigo);
        
        console.log(`nombres amigos: ${nombres}`);
        limpiaCampos();
    }

}

function agregarAmigosLista(nombre){
    let ulListaAmigos = document.querySelector('#listaAmigos');
    let liListaAmigos = document.createElement('li');
    liListaAmigos.innerHTML = nombre;
    ulListaAmigos.appendChild(liListaAmigos);

}

function sortearAmigo(){
    
    if(nombres !=""){

        let numeroAleatorio = Math.floor(Math.random() * nombres.length)+1;
        console.log("numeroAleatorio:  "+numeroAleatorio);
        let nombreElegido = nombres[numeroAleatorio-1];
        console.log("nombreElegido:  "+nombreElegido);
        let ulResultado = document.querySelector('#resultado');
        let liResultado = document.createElement('li');
        liResultado.innerHTML = `El amigo secreto es: ${nombreElegido}`;
        ulResultado.appendChild(liResultado);

        nombres.splice(numeroAleatorio-1, 1);
        console.log("nombres despues de eliminar uno:  "+nombres);
        //despues de 3 segundos se borra el amigo elegido para que el siguiente no sepa cual salio antes
        setTimeout(() => {
            document.querySelector('#resultado').innerHTML = "";
            if(nombres == ""){
            alert("Ya fueron sorteados todos los amigos.");
            document.querySelector('#listaAmigos').innerHTML="";
        }
        }, 3000);
        
        

    }else{
        alert("Primero debe agregar almenos 3 nombres");
    }
}


function limpiaCampos(){
    document.querySelector('#amigo').value = "";
}


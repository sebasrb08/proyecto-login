// import {rotar} from './carrusel.js' 

// rotar()
let elementos=''
const descripcion=document.querySelector('.descripcion')
const url="https://fakestoreapi.com/products"
async function traer(){
    const respuesta=await fetch(url)
    const datos=await respuesta.json()
    elementos=Array.from(datos)
    let cont=0
    datos.forEach(producto=>{
    descripcion.innerHTML+=
            `
                <div class="modal">
                    <h3 >${producto.title}</h3>
                    <img src="${producto.image}" alt="">
                    <p>${producto.description}</p>
                    <div class="precio">$${producto.price}</div>
                    <button class="css-button-gradient--4" value=${cont}>Comprar</button>
                </div>
            `
        cont++
    })
}
traer()
addEventListener('click',(event)=>{
    if(event.target.className=="css-button-gradient--4"){
        document.getElementById('modal2').style.display='flex'
        console.log(event.target.value)
        contenido.innerHTML=
        `
        <div class="modal">
            <h3 class='titul'>${elementos[event.target.value].title}</h3>
            <img src="${elementos[event.target.value].image}" alt="">
            <p>${elementos[event.target.value].description}</p>
            <div class="precio">$${elementos[event.target.value].price}</div>
            <button class="css-button-gradient--4s" value${event.target}>Comprar</button>
            <button class="css-button-gradient--5">Cancelar</button>

        </div>
     `
    
    }
    const ventana=document.querySelector('.ventana')
    ventana.addEventListener('click',(event)=>{
    if(event.target.className=="cerrar"){
        document.getElementById('modal2').style.display='none'
    }if(event.target.className=="css-button-gradient--5"){
        document.getElementById('modal2').style.display='none'

    }

    
    if(event.target.className=="css-button-gradient--4s"){
        location.href='../html/index3.html'
    }
    })
    
})
let name=document.querySelector('.titul').innerText
export function titulos(){
    console.log(name)
}
    


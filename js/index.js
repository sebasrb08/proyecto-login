import {rotar} from './carrusel.js' 

rotar()

const modal=document.querySelector('modal')
const url="https://fakestoreapi.com/products"
async function traer(){
    const respuesta=await fetch(url)
    const datos=await respuesta.json()
    console.log(datos)
    datos.forEach(producto=>{
    modal.innerHTML+=
    `<div class="modal">
                    <h3>${producto.title}</h3>
                    <img src="../imagenes/polo-clasico-miniraqueta-coral-122425-producto-1.jpg" alt="">
                    <p>Polo clasica-HOMBRE-Color-Pink</p>
                    <div class="precio">$19,99</div>
                    <button class="css-button-gradient--4 ">Comprar</button>
                </div>`
    })
}
traer()
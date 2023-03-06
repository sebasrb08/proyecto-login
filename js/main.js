
const usuarios=[{
    nombre: 'pepito',
    username:'pepito123',
    userpass:'123456',
    },
    {
    nombre: 'messi',
    username:'messi234',
    userpass:'messicrack',
    },
    {
    nombre: 'camilo',
    username:'camilo123',
    userpass:'holaxd',
    }
]
// mostrar2=doccument.getElementById('mostrar')
mostrar.addEventListener('click',()=>{
    if(password.type=='password'){
        password.type='text'
    }else{
        password.type='password'
    }
})


login.addEventListener('click',(e)=>{
    e.preventDefault()

    if(usuarios.find(usuario=>usuario.username==user.value)){
       indice=usuarios.findIndex(usuario=>usuario.username==user.value)
       if(usuarios[indice].userpass==password.value){
        alert('bienvenido')
        location.href='./html/index2.html'
        
       }
       else{
        mostrarerror()
       }
    }else{
        mostrarerror()
    }
})
function mostrarerror(){
    error.style.display='block'
    setTimeout(() => {
    error.style.display='none'
    }, 2000);
}
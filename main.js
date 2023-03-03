const usuarios=[{
    username:'pepito123',
    userpass:'123456',
}]
// mostrar2=doccument.getElementById('mostrar')
mostrar.addEventListener('click',()=>{  
    password.type='text'
})


login.addEventListener('click',()=>{

    if(usuarios.find(usuario=>usuario.username==user.value)){
        alert('bien')
    }else{
        error.style.display='block'
        setTimeout(() => {
        error.style.display='none'
        }, 2000);
    }
})
let card = document.querySelectorAll('.grid-item')

for(let i = 0; i<card.length;i++){
        card[i].addEventListener('click', (e) => {  
                document.querySelector('.product-sellected').innerHTML = '<div id="cont-product-sellected" class="cont-product-sellected">'+card[i].innerHTML +'</div><div class="cont-btns" ></div>'
                let id = document.getElementById('id').textContent
                let botones = document.querySelector('.cont-btns')
                botones.innerHTML = '<form action="/delete/'+id+'?_method=DELETE" method="POST" ><button type="submit" class="btn-eliminar">ELIMINAR</button></form><a href="/editForm/'+id +'"><button class="btn-editar">Editar</button></a>'
        }
        )
}





let cara = document.querySelectorAll('.card')
document.addEventListener('keyup',e=>{
        
                let cara = document.querySelectorAll('.')
                let i = 0
        if(e.target.matches("#buscador")){
                
                
                document.querySelectorAll('.card-titulo').forEach(element => {
                        
                        element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                        
                        ?cara[i].classList.remove('filtro')//document.querySelector('.card').classList.remove('filtro')
                        
                        :cara[i].classList.add('filtro')//document.querySelector('.card').classList.add('filtro')
                        i++
                })
        
}
})




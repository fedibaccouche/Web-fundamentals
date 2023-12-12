function change(){
    var text=document.querySelector('#log')
    a=String(text.innerText)
    if(a=="Login")
    {
        text.innerText="Logout";
    
    }
    else{
        text.innerText="Login"
    }
    
}

function message(){
    alert("Ninja was liked")
}


function remove_this(element){
    element.remove()
}
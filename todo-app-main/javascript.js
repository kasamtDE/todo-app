let myUL=document.querySelector(".myUL")

let childs=myUL.children

let todoContainer=document.querySelector(".todo-container")

let close=document.querySelector(".close")

let counter=document.querySelector(".todo-footer .counter")

let add=document.querySelector(".add-todo")

let moon=document.querySelector(".moon")

let backgroundDark=document.querySelector(".backgroundImgDark")

let backgroundLight=document.querySelector(".backgroundImgLight")

let light=document.querySelector(".light")

let darklist=document.querySelector(".darkLi")

let all=document.querySelector(".all")

let active=document.querySelector(".active")

let completed=document.querySelector(".completed")

let clearCompleted=document.querySelector(".clearCompleted")








counter.textContent=`${childs.length} items left`



let checking = (e) =>{
    for(let i=0; i<childs.length; i++){
        if(e.target===childs[i]){
            childs[i].classList.toggle("checked")

        }       
     }

    if(e.target.classList.contains("remove")){
        e.target.parentElement.remove()
    }
    counter.textContent=`${childs.length} items left` 


   
}

let addNew = (event) =>{
    var x=event.key
    let newimg = document.createElement("img")  
    newimg.classList.add("close")
    newimg.classList.add("remove") 
    newimg.src="./images/icon-cross.svg"

    if(x==="Enter"){
        let newli=document.createElement("li") 
        var inputValue=add.value
        newli.textContent=inputValue
        if(inputValue !=""){
        newli.append(newimg) 
        myUL.appendChild(newli)
        document.querySelector(".add-todo").value=""
        counter.textContent=`${childs.length} items left` 
        }

        else if (inputValue===""){
            alert("please enter valid to-do")
        }

        if (moon.style.display=="inline-block"){
            for(let i=0; i<myUL.children.length; i++){
                myUL.children[i].style.color=""
        
            }        
        }
        else if(light.style.display=="inline-block" ){
            for(let i=0; i<myUL.children.length; i++){
                myUL.children[i].style.color="white"
        
            }        
        }

    }
}


myUL.addEventListener("click",checking)

add.addEventListener("keyup",addNew)

let main=document.querySelector(".main")

moon.addEventListener("click",function(){
    backgroundDark.style.display="inline-block"
    backgroundLight.style.display="none"
    document.body.style.backgroundColor="hsl(235, 21%, 11%)"
    todoContainer.style.backgroundColor="hsl(235, 24%, 19%)"
    moon.style.display="none"
    light.style.display="inline-block"
    add.style.backgroundColor="hsl(235, 24%, 19%)"
    for(let i=0; i<myUL.children.length; i++){
        myUL.children[i].style.color="white"
        add.style.color="white"

    }
    
})

light.addEventListener("click",function(){
    backgroundDark.style.display=""
    backgroundLight.style.display=""
    document.body.style.backgroundColor=""
    moon.style.display="inline-block"
    light.style.display=""
    todoContainer.style.backgroundColor=""
    add.style.backgroundColor=""
    for(let i=0; i<myUL.children.length; i++){
        myUL.children[i].style.color=""
        add.style.color=""

    }
})

let completedTodos= (e) =>{
    let x=[]
      
    for(let i=0; i<childs.length; i++){

        x.push(childs[i])
    
    }    
    let controllCheck=x.filter(function(checked){

        return checked.classList.contains("checked")

    })
    let controllCheckfalse=x.filter(function(checked){

        return checked.classList.contains("checked")==false

    })

    if(e.target.classList.contains("active") && controllCheck.length>=0){
        for(let t=0; t<controllCheckfalse.length; t++){
            controllCheckfalse[t].style.display="block"
        }
        for(let j=0; j<controllCheck.length; j++){
            controllCheck[j].style.display="none"
        }
        
    }
    else if(e.target.classList.contains("completed") && controllCheckfalse.length>=0){
        for(let y=0; y<controllCheck.length; y++){
            controllCheck[y].style.display="block"
        }
        for(let k=0; k<controllCheckfalse.length; k++){
            controllCheckfalse[k].style.display="none"
        }
    }   
    
    else if (e.target.classList.contains("clearCompleted")){
        for(let j=0; j<controllCheck.length; j++){
            controllCheck[j].remove()
        }     
    }
    else if (e.target.classList.contains("all")){
        for(let y=0; y<controllCheck.length; y++){
            controllCheck[y].style.display=""
        }
        for(let k=0; k<controllCheckfalse.length; k++){
            controllCheckfalse[k].style.display=""
        }
    }
    counter.textContent=`${childs.length} items left`
}

active.addEventListener("click",completedTodos)

completed.addEventListener("click",completedTodos)

clearCompleted.addEventListener("click",completedTodos)

all.addEventListener("click",completedTodos)
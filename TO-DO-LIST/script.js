const inputBox=document.getElementById('input-box');

const listContainer=document.getElementById('list-container');

let v=Object(listContainer)


function addTask() {
    
    
  
    if (inputBox.value === '') {
       
        alert('You Have To write A Task !')
        let n=false
    }
   
    else{
      
        let li= document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);

       
            
    

        h= document.createElement('h2')
        let today=new Date();  
        let v=today.getHours();  
        let m=today.getMinutes();  
        let s=today.getSeconds();  
        li.appendChild(h)
        h.innerHTML=v+":"+m+":"+s;
         console.log('done');
   


           let span= document.createElement('span')
           span.innerHTML="\u00d7";
           li.appendChild(span)


        }

  
        
  
   
        
    
          
       
   
   


    inputBox.value="";
 savedata()

}


listContainer.addEventListener('click',function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata()
    
        }
  
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement. remove () ;
            savedata()
        }
}, false);




function savedata() {
    localStorage.setItem('data',listContainer.innerHTML);

}


function showtask(params) {
    listContainer.innerHTML=localStorage.getItem('data')
}

showtask()


const inputBOX = document.getElementById("input-box");
const listContainer = document.getElementById("List-container");

function AddTask(){
    if(inputBOX.value ===''){
       alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBOX.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBOX.value = "";
    saveData();
    
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classlist.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
 }, false);
   
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
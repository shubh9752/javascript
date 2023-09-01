const form=document.querySelector("form");
const input=document.querySelector("input");
const list=document.querySelector("ul");


form.addEventListener("submit",function (e){
    e.preventDefault();
    todo();
    input.value="";


})
function todo(){
    if(input.value===""){
        alert("please type something");
    }else{
        const value=input.value;
        const newli=document.createElement("li");
        newli.textContent=value;
        const deletebtn=document.createElement("button");
        deletebtn.textContent="delete";
        const editbtn=document.createElement("button");
        editbtn.textContent="edit";
       

        list.append(newli);
        newli.append(" ",deletebtn);
        deletebtn.addEventListener("click",function(){

        })
    }
}
list.addEventListener("click",function (e){
    if(e.target.nodeName==="BUTTON"){
        e.target.closest("LI").remove();
    }
})

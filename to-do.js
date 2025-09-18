const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


addBtn.onclick = function () {
  
 const taskText = input.value.trim();

  
  if (taskText !== "") {

   const li = document.createElement("li");
    li.textContent = taskText;

    
    li.onclick = function () {
      li.classList.toggle("done");
    };

    
   const delBtn = document.createElement("button");
    delBtn.textContent = "false";
    delBtn.onclick = function () {
      li.remove();
    };

    
    li.appendChild(delBtn);

   
    taskList.appendChild(li);

    
    input.value = "";
  }
};


  // To-Do List
  document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if(!taskText){
        alert("Enter Your task to create")
    }else{
      const taskList = document.getElementById('taskList');
      const li = document.createElement('li');
      li.textContent = taskText;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('remove-btn');
      
      removeBtn.addEventListener('click', function() {
        taskList.removeChild(li);

      }); 
      li.appendChild(removeBtn);
      taskList.appendChild(li);
      taskInput.value = '';
      saveData();
    }
  });
  
  function saveData (){
    localStorage.setItem("data",taskList.innerHTML)
  }

  function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
  }

  
  showTask();
 
// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
      document.getElementById('formMessage').textContent = "All fields are required!";
      document.getElementById('formMessage').style.color = "red";
    } else {
      document.getElementById('formMessage').textContent = "Form submitted successfully!";
      document.getElementById('formMessage').style.color = "green";
      this.reset();
    }
  });
  
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
    }
  });
  
document.addEventListener('DOMContentLoaded', function() {
  const nameInput = document.getElementById('name');
  const greetOutput = document.getElementById('greet');

  nameInput.addEventListener('keyup', function() {
    greetOutput.textContent = 'Hello ' + nameInput.value;
  });
});
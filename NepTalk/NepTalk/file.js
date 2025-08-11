let lines = [];
let currentLineIndex = 0;

const button = document.getElementById('next-button');
const display = document.getElementById('file-content');

fetch('data.txt')
  .then(response => response.text())
  .then(data => {
    lines = data.split('\n'); 
  })
  .catch(error => {
    console.error('Error fetching the file:', error);
  });

button.addEventListener('click', () => {
  if (currentLineIndex < lines.length) {
    const line = document.createElement('div');
    line.textContent = lines[currentLineIndex];
    display.appendChild(line);
    currentLineIndex++;
  } else {
    button.disabled = true;
    const endMessage = document.createElement('div');
    endMessage.textContent = 'End of file';
    display.appendChild(endMessage);
  }
});

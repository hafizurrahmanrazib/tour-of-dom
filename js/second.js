console.log('Second File');

const secondList = document.getElementById('second-list');
const li = document.createElement('li');
li.innerText = 'my dynamic item';

secondList.appendChild(li);
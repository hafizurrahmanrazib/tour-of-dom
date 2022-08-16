const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
    <h1>My Dynamic Section</h1>
    <p>Extra Text Added Inside Paragraph</p>
    <ul>
        <li>first item</li>
        <li>secoond item</li>
        <li>third item</li>
        <li>fourth item</li>
    </ul>
`
main.appendChild(section);
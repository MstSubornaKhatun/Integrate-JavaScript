const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
        <h1>My dynamic section</h1>
        <p>Extra text added inside paragraph</p>
        <ul>
            <li>List item-1</li>
            <li>List item-2</li>
            <li>List item-3</li>
            <li>List item-4</li>
        </ul>
`

main.appendChild(section);
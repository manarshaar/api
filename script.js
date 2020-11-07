let btn = document.querySelector('button');
let list = document.querySelector('#list');

btn.addEventListener('click', e => {
    e.preventDefault();
    let url = 'https://cat-fact.herokuapp.com/facts';
    fetch(url, {
        method: 'GET',
        credentials: 'same-origin',
    })
    .then(res => res.json())
    .then(res => {
        let random = Math.floor(Math.random() * 274)
        let l = document.createElement('LI');
        l.textContent = res.all[random].text;
        list.appendChild(l);
        
    })
    .catch(err => console.log(err))
})


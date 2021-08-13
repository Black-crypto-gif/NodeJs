document.querySelector('#api').addEventListener('click', getUsers);

function getUsers() {
    fetch('./users.json').then((res)=>{ console.log(res.json()); }).then((data)=>{ console.log(data[0]);});
}
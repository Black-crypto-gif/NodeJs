document.querySelector('#api').addEventListener('click', () => {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=6999280e10255ab406bfb10644441036')
    .then((response) => {
        
        console.log(response);
    })
    .then((data) => {
        console.log(data);
    })
});
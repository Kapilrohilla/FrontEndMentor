console.clear();
function getData(){
    fetch('https://api.adviceslip.com/advice')
    .then(r=>r.json())
    .then(data=>{
        const {id,advice} = data['slip'];
        document.getElementById('advice').innerHTML = advice;
        document.getElementById('id').innerText = `Advice #${id}`
        console.info('data fetched');
    })
    .catch(()=>console.warn('Unable to fetch data'));
};

window.addEventListener('load',getData);

document.getElementsByTagName('button')[0].addEventListener('click',getData)
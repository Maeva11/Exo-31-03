const btn = document.getElementById('button')
btn.addEventListener('click', function(){
    const div = document.getElementById('popup')
        div.style.display ='none';
        btn.textContent = 'Participer';
});
const submit = document.getElementById('button');



document.addEventListener('keypress', e => {
    if (e.key === 'Enter') {

        e.preventDefault();
        
        submit.click();
    }
} )
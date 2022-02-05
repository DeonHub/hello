document.addEventListener('DOMContentLoaded', () => {

});



function hello(){
    const heading = document.querySelector('h1')

    if ( heading.innerHTML === "Hello!"){
    heading.innerHTML = "Goodbye!"
    }

    else{
        heading.innerHTML = "Hello!"
    }
}


 


if(!localStorage.getItem('counter')){
    localStorage.setItem('counter', 0);
}


function count() {
    let counter = localStorage.getItem('counter');

    counter ++;
    document.querySelector('#count').innerHTML = counter;
    localStorage.setItem('counter', counter);


    // if (counter % 10 === 0){
    //     alert(`Count is now ${counter}`);
    // }

}


function clear() {
    let counter = localStorage.getItem('counter');

    counter = 0;
    document.querySelector('#count').innerHTML = counter;
    localStorage.setItem('counter', counter);

}


document.addEventListener('DOMContentLoaded', () => {
 
    document.querySelector('#count').innerHTML = localStorage.getItem('counter');
    document.querySelector('#counter').onclick = count;
    document.querySelector('#clear').onclick = clear;

})



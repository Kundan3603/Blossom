document.addEventListener('DOMContentLoaded', () => {
    
    const button = document.getElementById('click-btn');
    const title = document.getElementById('main-title');

    button.addEventListener('click', () => {
        // Your interaction logic goes here
        title.innerText = "You clicked the button!";
        alert("Action Triggered!");
    });

});

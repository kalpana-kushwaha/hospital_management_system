let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove ('active');
}

document.addEventListener('DOMContentLoaded', function () {
    // Get all buttons with the class 'btn'
    const buttons = document.querySelectorAll('.btn');

    // Iterate through each button and add a click event listener
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Check if the clicked button is not the "Book Now" button
            if (!button.classList.contains('book-btn')) {
                // Show a pop-up with the message "Page under construction"
                const userChoice = window.confirm('Page under progress. Click OK.');

                // If the user clicks OK, you can redirect to the original website (replace '#' with your actual website URL)
                if (userChoice) {
                    window.location.href = '#';
                }
            }
        });
    });
});

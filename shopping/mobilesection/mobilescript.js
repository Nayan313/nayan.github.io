// search script start



function search() {
    let filter = document.getElementById('find').value.toUpperCase();

    let item = document.querySelectorAll('.product');
    
    let l = document.getElementsByTagName('h3');
    for(var i = 0;i<=l.length;i++){
        let a=item[i].getElementsByTagName('h3')[0];

        let value=a.innerHTML || a.innerText || a.textContent;

        if(value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display="";
        }
        else{
            item[i].style.display="none";
            
        } 
    };
}



// search script end


// Variables
const toggle = document.getElementById('toggle');
const ball = document.getElementById('ball');
const test = document.getElementById('test');

// Create Event Listener for the click
toggle.addEventListener('click', () => {
    //If the ball is at left position of 3 on click itll move it to 25px
    if (ball.style.left == "3px") {
        ball.style.left = "25px";
        ball.style.transition = ".3s linear";
    }
    // Otherwise itll move it back to 3px
    else {
        ball.style.left = "3px";
        ball.style.transition = ".3s linear";
    }
    //Created a function within the Event listener that changed the style for dark mode
    function DarkMode() {
        if (ball.style.left == "3px") {

            document.body.style.backgroundColor = "white";
            document.body.style.transition = ".3s linear";
            test.style.color = "black";
            test.style.transition = ".3s linear";

        } else if (ball.style.left == "25px") {

            document.body.style.backgroundColor = "#17141D";
            document.body.style.transition = ".3s linear";


            test.style.color = "white";
            test.style.transition = ".3s linear";
        }
    }
    //Call the Function
    DarkMode();
})
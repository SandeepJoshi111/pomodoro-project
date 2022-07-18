// 1. select all tabs from tab list
const pomodoroTab = document.getElementById("pomodoro");
const shortBreakTab = document.getElementById("shortBreak");
const longBreakTab = document.getElementById("longBreak");


const pomodoroContentTab = document.getElementById("pomodoro-content");
const shortBreakContentTab = document.getElementById("shortbreak-content");
const longBreakContentTab = document.getElementById("longbreak-content");






// 2.add click event listener to each tab
pomodoroTab.addEventListener("click",function(){
    // 3. remove all active tab from tab list
    // 4. add active class to selected tab   
    pomodoroTab.classList.add("active");
    shortBreakTab.classList.remove("active");
    longBreakTab.classList.remove("active");
    document.body.style.backgroundColor = "#e63946";

    
    // 5. remove all active class from tab content
    // 6.add active class to selected tab content 
    pomodoroContentTab.classList.add("active");
    shortBreakContentTab.classList.remove("active");
    longBreakContentTab.classList.remove("active");
});

shortBreakTab.addEventListener("click",function(){
    pomodoroTab.classList.remove("active");
    shortBreakTab.classList.add("active");
    longBreakTab.classList.remove("active");
    
    pomodoroContentTab.classList.remove("active");
    shortBreakContentTab.classList.add("active");
    longBreakContentTab.classList.remove("active");

    document.body.style.backgroundColor = "#388988";



    
});

longBreakTab.addEventListener("click",function(){
    pomodoroTab.classList.remove("active");
    shortBreakTab.classList.remove("active");
    longBreakTab.classList.add("active");

    pomodoroContentTab.classList.remove("active");
    shortBreakContentTab.classList.remove("active");
    longBreakContentTab.classList.add("active");

    document.body.style.backgroundColor = "#437DBF";


});

// Timer to develop
function timer(seconds){
    const now = Date.now();
    const then = now + (seconds *1000);


    const timerInterval = setInterval(function(){
      
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        //display in website
        displayTime(secondsLeft,pomodoroTime);
        displayTime(secondsLeft,shortBreakTime);
        displayTime(secondsLeft,longBreakTime);



        console.log(secondsLeft);
        if(secondsLeft < 1 ){
            clearInterval(timerInterval); //0 vanda kaam second ma najaos vanera
            
        }
        
    },1000);

    pomodoroStop.addEventListener("click",function(){
        clearInterval(timerInterval);
   
    });
    shortBreakStop.addEventListener("click",function(){
        clearInterval(timerInterval);

 
    
    });
    longBreakStop.addEventListener("click",function(){
        clearInterval(timerInterval);

       
    
    });


    pomodoroReset.addEventListener("click",function(){
        clearInterval(timerInterval);
        pomodoroStop.parentNode.replaceChild(pomodoroButton,pomodoroStop);
        minute = "25";
        second ="00";
        pomodoroTime.innerHTML = minute + " : " + second;
        pomodoroButton.style.visibility='visible';
        pomodoroStop.style.visibility='hidden';
        pomodoroReset.style.visibility='hidden';

        

        
    });
    shortBreakReset.addEventListener("click",function(){
        clearInterval(timerInterval);

        shortBreakStop.parentNode.replaceChild(shortBreakButton,shortBreakStop);
        minute = "5";
        second ="00";
        shortBreakTime.innerHTML = minute + " : " + second;

        shortBreakButton.style.visibility='visible';
        shortBreakStop.style.visibility='hidden';
        shortBreakReset.style.visibility='hidden';
    });

    longBreakReset.addEventListener("click",function(){
        clearInterval(timerInterval);

        longBreakStop.parentNode.replaceChild(longBreakButton,longBreakStop);

        minute = "15";
        second ="00";
        longBreakTime.innerHTML = minute + " : " + second;

        longBreakButton.style.visibility='visible';
        longBreakStop.style.visibility='hidden';
        longBreakReset.style.visibility='hidden';

        

        
    });
};



// minute second form ma rakheko
function displayTime(seconds , element)
{
    const minute = Math.floor(seconds/60);
    const second = seconds %60;

    console.log({minute,second});

    element.innerText = minute + " : " + second;


}







// start thichda chalcha
const pomodoroButton = document.getElementById("pomodoroButton");
pomodoroButton.addEventListener("click",function()
{
    const pomodoroTotalTime = 1500;
    timer(pomodoroTotalTime);

    pomodoroReset.style.display='block';
    pomodoroButton.parentNode.replaceChild(pomodoroStop,pomodoroButton);
    


    pomodoroButton.style.visibility = 'hidden';
    if( pomodoroButton.style.visibility === 'hidden')
    {
        pomodoroStop.style.visibility='visible';
        pomodoroReset.style.visibility='visible';
    }
    else
    {
        pomodoroStop.style.visibility='hidden';
        pomodoroReset.style.visibility='hidden';
    }  

    
});

const shortBreakButton = document.getElementById("shortBreakButton");
shortBreakButton.addEventListener("click",function()
{
    const shortBreakTotalTime = 300;
    timer(shortBreakTotalTime);
    
    shortBreakReset.style.display='block';
    shortBreakButton.parentNode.replaceChild(shortBreakStop,shortBreakButton);
    


    shortBreakButton.style.visibility = 'hidden';
    if( shortBreakButton.style.visibility === 'hidden')
    {
        shortBreakStop.style.visibility='visible';
        shortBreakReset.style.visibility='visible';
    }
    else
    {
        shortBreakStop.style.visibility='hidden';
        shortBreakReset.style.visibility='hidden';
    }  
    
});

const longBreakButton = document.getElementById("longBreakButton");
longBreakButton.addEventListener("click",function()
{
    const longBreakTotalTime = 900;
    timer(longBreakTotalTime);

    longBreakReset.style.display='block';
    longBreakButton.parentNode.replaceChild(longBreakStop,longBreakButton);

    longBreakButton.style.visibility = 'hidden';
    if( longBreakButton.style.visibility === 'hidden')
    {
        longBreakStop.style.visibility='visible';
        longBreakReset.style.visibility='visible';
    }
    else
    {
        longBreakStop.style.visibility='hidden';
        longBreakReset.style.visibility='hidden';
    }  
    
});

//creating a start, stop and reset button


const pomodoroTime = document.getElementById("pomodoroTime");
const shortBreakTime = document.getElementById("shortBreakTime");
const longBreakTime = document.getElementById("longBreakTime");

const pomodoroStop = document.getElementById("pomodoroStop");
const shortBreakStop = document.getElementById("shortBreakStop");
const longBreakStop = document.getElementById("longBreakStop");

const pomodoroReset = document.getElementById("pomodoroReset");
const shortBreakReset = document.getElementById("shortBreakReset");
const longBreakReset = document.getElementById("longBreakReset");

const pomodoroResume = document.getElementById("pomodoroResume");
const shortBreakResume = document.getElementById("shortBreakResume");
const longBreakResume = document.getElementById("longBreakResume");

pomodoroStop.style.visibility='hidden';
shortBreakStop.style.visibility='hidden';
longBreakStop.style.visibility='hidden';

pomodoroReset.style.display='none';
shortBreakReset.style.display='none';
longBreakReset.style.display='none';




//creating a reset function


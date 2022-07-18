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

    // pause funtion
    // pomodoroStop.addEventListener("click",function(){
    //     clearInterval(timerInterval);
    //     pomodoroButton.style.visibility='visible';

    //     pomodoroStop.parentNode.replaceChild(pomodoroButton,pomodoroStop);


    // });
    // shortBreakStop.addEventListener("click",function(){
    //     clearInterval(timerInterval);
    //     shortBreakButton.style.visibility='visible';

    //     shortBreakStop.parentNode.replaceChild(shortBreakButton,shortBreakStop);

 
    
    // });
    // longBreakStop.addEventListener("click",function(){
    //     clearInterval(timerInterval);
    //     longBreakButton.style.visibility='visible';
    //     longBreakStop.parentNode.replaceChild(longBreakButton,longBreakStop);
      
    // });

    //reset funtion
    pomodoroReset.addEventListener("click",function(){
        clearInterval(timerInterval);
        pomodoroReset.parentNode.replaceChild(pomodoroButton,pomodoroReset);
        
        minute = "25";
        second ="00";
        pomodoroTime.innerHTML = minute + " : " + second;
        pomodoroButton.style.visibility='visible';
        pomodoroStop.style.visibility='hidden';
        pomodoroReset.style.visibility='hidden';


        const shortMin = "5";
        const shortSec = "00"
        shortBreakTime.innerHTML = shortMin + " : " + shortSec;

        const longMin ="15";
        const longSec ="00";
        longBreakTime.innerHTML = longMin + " : " + longSec;


    });
    shortBreakReset.addEventListener("click",function(){
        clearInterval(timerInterval);

        shortBreakReset.parentNode.replaceChild(shortBreakButton,shortBreakReset);
        minute = "5";
        second ="00";
        shortBreakTime.innerHTML = minute + " : " + second;

        shortBreakButton.style.visibility='visible';
        shortBreakStop.style.visibility='hidden';
        shortBreakReset.style.visibility='hidden';


        const pomoMin = "25";
        const pomoSec = "00"
        pomodoroTime.innerHTML = pomoMin + " : " + pomoSec;

        const longMin ="15";
        const longSec ="00";
        longBreakTime.innerHTML = longMin + " : " + longSec;

    
    });

    longBreakReset.addEventListener("click",function(){
        clearInterval(timerInterval);

        longBreakReset.parentNode.replaceChild(longBreakButton,longBreakReset);

        minute = "15";
        second ="00";

        longBreakTime.innerHTML = minute + " : " + second;

        longBreakButton.style.visibility='visible';
        longBreakStop.style.visibility='hidden';
        longBreakReset.style.visibility='hidden';

        const pomoMin = "25";
        const pomoSec = "00"
        pomodoroTime.innerHTML = pomoMin + " : " + pomoSec;

        const shortMin = "5";
        const shortSec = "00"
        shortBreakTime.innerHTML = shortMin + " : " + shortSec;

        

        
    });
  

};



// putting in minute and second form
function displayTime(seconds , element)
{
    const minute = Math.floor(seconds/60);
    const second = seconds %60;

    console.log({minute,second});

    element.innerText = minute + " : " + second;


}







// will run when pressed start
const pomodoroButton = document.getElementById("pomodoroButton");
pomodoroButton.addEventListener("click",function()
{
    const pomodoroTotalTime = 1500;
    timer(pomodoroTotalTime);

    pomodoroReset.style.display='block';
    pomodoroButton.parentNode.replaceChild(pomodoroReset,pomodoroButton);

    //once start is presssed then pause and reset buttton comes
    pomodoroButton.style.visibility = 'hidden';
    if( pomodoroButton.style.visibility === 'hidden')
    {
       // pomodoroStop.style.visibility='visible';
        pomodoroReset.style.visibility='visible';
    }
    else
    {
        //pomodoroStop.style.visibility='hidden';
        pomodoroReset.style.visibility='hidden';
    }  


    
});

const shortBreakButton = document.getElementById("shortBreakButton");
shortBreakButton.addEventListener("click",function()
{
  

    const shortBreakTotalTime = 300;
    timer(shortBreakTotalTime);

    shortBreakReset.style.display='block';
    shortBreakButton.parentNode.replaceChild(shortBreakReset,shortBreakButton);
    
    shortBreakButton.style.visibility = 'hidden';
    if( shortBreakButton.style.visibility === 'hidden')
    {
       // shortBreakStop.style.visibility='visible';
        shortBreakReset.style.visibility='visible';
    }
    else
    {
       // shortBreakStop.style.visibility='hidden';
        shortBreakReset.style.visibility='hidden';
    }  

        

  
    
});

const longBreakButton = document.getElementById("longBreakButton");
longBreakButton.addEventListener("click",function()
{
    

    const longBreakTotalTime = 900;
    timer(longBreakTotalTime);

    longBreakReset.style.display='block';
    longBreakButton.parentNode.replaceChild(longBreakReset,longBreakButton);
    
    longBreakButton.style.visibility = 'hidden';

    if( longBreakButton.style.visibility === 'hidden')
    {
       // longBreakStop.style.visibility='visible';
        longBreakReset.style.visibility='visible';
    }
    else
    {
        //longBreakStop.style.visibility='hidden';
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

pomodoroStop.style.display='none';
shortBreakStop.style.display='none';
longBreakStop.style.display='none';

pomodoroReset.style.display='none';
shortBreakReset.style.display='none';
longBreakReset.style.display='none';





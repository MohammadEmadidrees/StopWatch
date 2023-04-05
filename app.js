//js mein 2 function hai ek hai setInterval() ye function repetively chlta rehta hai
//2sra hai settimeout() ye kch dair k baad chlta hai.


//setinterval ek bydeafult function hai ye 2 arguments leta hai apne parameter mein user function jo hmne banaya hua hai aur comma daal kr time leta hai millisecond men k kitny time baad ye function dubara run krna hai.
// function timer()
// {
//     console.log("running setinterval")
// }
// setInterval(timer,3000) //setinterval repetedly chlta rehta hai us time k baad jo hmne diya hai.

// function timeout()
// {
//     console.log("running settimeout")
// }
// setTimeout(timeout,3000) //settimeout bhi 2 values leta hai ek function ka name 2sra miliseconds mein value time ki lekn ye ek baar chal kr ruk jata hai jbke setinteraval time k baad phr again chal jata hai.


                                // is tareeqe se setinterval k function ko roksty hein settimeout ki madad se.
// var count = 0;
// var interval;

// function timer()
// {
//     count++
//     console.log(count)
// }
// interval=setInterval(timer,1000) //setinterval k function ko ek variable mein save krwaliya interval k variable mein jo upr declare kra tha.


// // phr settimeout k function ko call kra usmein function banaya jb hm settimeout ya setinterval k function banaenge tw us function ko name nh denge.
// setTimeout(function(){
//     clearInterval(interval) //clearinterval ek bydefault function hai JS ka usko call kra aur uske parameter mein interval variable pass krdiya.
// },5000) //ye 5000 milisecond time diya hai settimeout function ko k aapne 5 sec baad chalna hai.




var min=0,sec=0,msec=0;
var interval;
var minheading=document.getElementById('min');
var secheading=document.getElementById('sec');
var msecheading=document.getElementById('msec');

function timer()
{
    msec++
    msecheading.innerHTML = msec;
    if(msec>=100)
    {
        sec++
        secheading.innerHTML= sec;
        msec=0
    }
    else if(sec>=60)
    {
        min++
        minheading.innerHTML=min;
        sec=0
    }
}
function start()
{
    interval=setInterval(timer,10)
}
function stop()
{
    clearInterval(interval)
}
function reset()
{
    clearInterval(interval)
    msecheading.innerHTML =0
    secheading.innerHTML =0
    minheading.innerHTML =0
    document.getElementById("btnstart").disabled = false; //reset ka button press hoty hi stopwatch pe 0 show hoga 3no fields mein aur start ka button phr se show hojayega.
}
document.getElementById("btnstart").addEventListener("click", function(){ 
    // Preventing button from clicking
    document.getElementById("btnstart").disabled = true;
});



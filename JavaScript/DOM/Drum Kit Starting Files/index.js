
for(let i=0;i<7;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function() {
        var buttonInnerHtml=this.innerHTML;
        makeSound(buttonInnerHtml);    
        buttonAnimation(buttonInnerHtml);  
        
        // removeAnime(buttonInnerHtml);
});}

// document.querySelectorAll('.drum')[4].addEventListener('click',function() {
//     var crash =new Audio('sounds/crash.mp3');
//     crash.play()
//     this.style.color="white";}
//     );
// document.querySelectorAll('.drum')[5].addEventListener('click',function() {
//         var  kick=new Audio('sounds/kick-bass.mp3');
//         kick.play();
//         this.style.color="white";});
// document.querySelectorAll('.drum')[6].addEventListener('click',function() {
//             var snare =new Audio('sounds/snare.mp3');
//             snare.play();
//             this.style.color="white";});

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    // removeAnime(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;    
        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;  
        case "j":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;  
        case "l":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;  
        default:console.log(buttonInnerHtml);
    }
}

function buttonAnimation(key){

    document.querySelector("."+key).classList.add('pressed');
  setTimeout(function(){
    document.querySelector("."+key).classList.remove('pressed');
  },150);    
}

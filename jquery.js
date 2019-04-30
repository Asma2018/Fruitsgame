var playing=false;
var score;
var trialsleft;
var step;
var action;
var friuts=['fruit','Banana','Strawberry'];

$ (function() {
 $("#startreset").click(function(){
//click on start button  

   if(playing==true){
//reload page 
location.reload();

   }else{// no

    playing=true; //gmale initiated
    //score to 0
    score=0;
    $("#scorevalue").html(score);
    // show trial box
    $("#trialsleft").show();
    trialsleft=3;
    addHeart();
//hide gameover box
$("#gameover").hide();
    $("#startreset").html("Reset Game");
  
//start action
   startAction();
   }
 });

 $("#fruit1").mouseover(function(){
     score++;
     $("#scorevalue").html(score);//update score
     //document.getElementById("slicesound").play();
    $("#slicesound")[0].play();
    //stop fruit
    clearInterval(action);
    //hide fruit
    $("#fruit1").hide("explode", 500); 

    //new fruit
    setTimeout(startAction,500);
 
    }
 );

//if we are playing  
// yes 



   // show trails left box
   // button text to reset game
   // create a randsom fruits
   // defined a ramdom fruits
   // moving fruits down one step every 30 sec

    // low?
    // if fruits is  too low?
    //no > repeat nb2
    // yes> any trial left

    //left?
     //yes 
     //repeat 1
     //no:game over and buttom text to start game


     // slic a friuts
     // play sounds 
     //explore fruits
     function addHeart(){
         $("#trialsleft").empty();
        for(i=0; i< trialsleft;i++){
            $("#trialsleft").append('<img src="images/heart.png" class="life">');
        }
     }

     function startAction(){
         $("#fruit1").show();
         chooseFruit(); //choose random fruits
         $("#fruit1").css({'left':Math.round(550*Math.random()), 'top':-50});
     
      step=1+Math.round(2*Math.random());
       action=setInterval(function(){
       $("#fruit1").css('top',$("#fruit1").position().top +step);
      if($("#fruit1").position().top>
      $("#fruitscontainer").height()){
          if(trialsleft >1){

    $("#fruit1").show();
         chooseFruit(); //choose random fruits
         $("#fruit1").css({'left':Math.round(2*Math.random()),'top':-50});
     
      step=1+Math.round(2*Math.random());
      //reduce heart
      trialsleft--;
      // show left heart
      addHeart();
          
      }
      else{
         playing=false;
         $("#startreset").html("startgame");
         $("#gameover").show();
         $("#gameover").html('<p>Game over</p><p>your score is'+ score +'</p>');
         $("#trialsleft").hide();
         stopAction();
      }
    }
    
    },10);
        }

     //generate a random fruits

     function chooseFruit(){
         $("#fruit1").attr('src' , 'images/'+ friuts[Math.round(2*Math.random())] +'.png');
     }

     function stopAction(){
         clearInterval(action);
         $("#fruit1").hide();
     }
    });
/* const score ={                  //object
                    wins:0,
                    losses:0,
                    ties:0
                };*/

                const score=JSON.parse(localStorage.getItem('score'))  || {
                        wins: 0,
                        losses: 0,
                         ties: 0
                };


            


                updatescoreelement();



     function playgame(playermove){
     const computermove=pickcomputermove();
   
         let result=''; 
         if(playermove==='scissor'){
                        if(computermove==='rock'){
                        result='you loose';
                        }
                        else if(computermove==='paper'){
                        result='you win';
                        }
                        if(computermove==='scissor'){
                        result='tie';
                        }
        }
        else if(playermove==='paper'){
                           

                      
                        if(computermove==='rock'){
                        result='you win ';
                        }
                        else if(computermove==='paper'){
                        result='tie';
                        }
                        if(computermove==='scissor'){
                        result='you loose';
        
                                    }         
          }
        else if(playermove==='rock'){
                                
                
                        if(computermove==='rock'){
                        result='tie';
                        }
                        else if(computermove==='paper'){
                        result='you loose';
                        }
                        if(computermove==='scissor'){
                        result='you win';
                        }
            
           }

           if(result==='you win'){
            score.wins+=1;

           }
           else if(result==='you loose'){
            score.losses+=1;
           }
           else if(result==='tie'){
            score.ties+=1;
           }






            localStorage.setItem('score', JSON.stringify(score))//only support string and data is permanently store


             


           updatescoreelement();




           document.querySelector('.js-result')
           .innerHTML=result;


           document.querySelector('.js-moves')
           .innerHTML=   
                           ` You
                            <img src="${playermove}-emoji.png" class="move-icon">
                            <img src="${computermove}-emoji.png" class="move-icon">
                            Computer`
                        ;
        
        }






        function updatescoreelement(){
             document.querySelector('.js-score')
                .innerHTML= 'wins :'+score.wins+' losses :'+score.losses+' ties :'+score.ties;


        }

          




        function pickcomputermove(){
               let  computermove='';
              const random=Math.random();
     //console.log(random);
  
     if(random>=0 && random<1/3){
        computermove='rock';
     }else if(random>=1/3 && random<2/3){
        computermove='paper';
     }
     else if(random>=2/3 && random<1){
         computermove='scissor';//scope
     }
        // console.log(computermove);
        return  computermove;
        //return


    }


      //  function caltax(x,y){
        //   console.log( x * y);
        //}
        //caltax(2000,0.2);
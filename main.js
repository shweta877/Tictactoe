var sign="x";
document.getElementById("Result").innerHTML="";

//////////////////////////////////////////////////////////
function main(x)///////This is the main function.Program begin from here
{
    var y=document.getElementById("cell"+x);
  //  console.log(y);
    if(y.innerText=="")
    {
        y.innerText=sign;   
        winner();         ////////function call to give result
        checksign();      ////////fucntion call to check sign within the box.
        if(sign=="x")
        {
            document.getElementById("player").innerHTML="player 1 turns";
        }
        else
        {
            document.getElementById("player").innerHTML="player 2 turns";
        }
       
    }
}
/////////////////////////////////////////////////

function checksign() //This function is checking the sign in the box(i.e "x" or "0" )
{
    if(sign=="x")
    {
        
        sign="0";
    }
    else{
        
        sign="x";
    }
}
/////////////////////////////////////////////
 function getbox(no)    ///This function is returning the cell no of the grid.
 {
     return document.getElementById("cell"+no).innerHTML;
 }
////////////////////////////////////////////
 function checkmove(a,b,c,move)//////////////This function is mapping the values inside the boxes.
 {
    if(getbox(a)==move && getbox(b)==move && getbox(c)==move)
    {
        return true;
    }
    else
    {
        return false;
    }
 }
//////////////////////////////////////////////////
 function winner() ///////////////This is the function that decides the game results.
 {
     if(checkmove(1,2,3,sign)||checkmove(4,5,6,sign)||checkmove(7,8,9,sign)
     ||checkmove(1,5,9,sign)||checkmove(1,4,7,sign)||checkmove(2,5,8,sign)||
       checkmove(3,6,9,sign)||checkmove(7,5,3,sign))
     {
         if(sign=="x")
         {
            document.getElementById("Result").innerHTML="Player 1 is winner.";
            document.getElementById("player").innerHTML="Lets Play Again.";
         }
         else
         {
           document.getElementById("Result").innerHTML="Player 2 is winner.";
           document.getElementById("player").innerHTML="Lets Play Again.";
         }
       for(let i=1;i<=9;i++)  /////////This line is used to refresh the cell to original state.
       {
           document.getElementById("cell"+i).innerHTML="";
       }
       
       throw "game end";

     }
     else
     {
         if(getbox(1)!=""&& getbox(2)!=""&& getbox(3)!=""&&
         getbox(4)!=""&& getbox(5)!=""&& getbox(6)!=""&&
         getbox(7)!=""&& getbox(8)!=""&& getbox(9)!="")
         {
             document.getElementById("Result").innerHTML="It is Tie.!!!"
         }
     }
     
     
 }
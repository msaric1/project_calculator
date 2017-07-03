$(document).ready(function(){
   $('input:button').mouseenter(function(){
        $(this).toggleClass('hover');
    });
    $('input:button').mouseleave(function(){
        $(this).toggleClass('hover');
    });

    $('input:button').click(function(){
        var value = $(this).attr("value");

        var res;
        var operator = ["+", "-", "/", "x"];
        var number   = ["0","1","2","3","4","5","6","7","8","9"];
        var brackets = ["(", ")"];
        var bracketcl= ")";
        var bracketop= "(";

        if (operator.indexOf($("#display").val()[$("#display").val().length-1]) >= 0 && 
        operator.indexOf(value) >= 0 ){
           
           $("#display").val( $("#display").val().slice(0,$("#display").val().length-1));

        }
       

        if(bracketcl.indexOf($("#display").val()[$("#display").val().length-1]) >=0 &&
        number.indexOf(value)>=0){

          $("#display").val($("#display").val() + "*");
          
          
        }
          if(bracketcl.indexOf($("#display").val()[$("#display").val().length-1]) >=0 &&
        bracketop.indexOf(value)>=0){

           $("#display").val($("#display").val() + "*"); 
          
        }
              if(number.indexOf($("#display").val()[$("#display").val().length-1]) >=0 &&
        bracketop.indexOf(value)>=0){

           $("#display").val($("#display").val() + "*");
          
        }
        if(value.length===1 && bracketcl.indexOf($("#display").val()[$("#display").val().length-1]) >=0){

            res="";
        }
       

        if (value==="AC"){
           
           res = "";
        }

        else {
           
                res = $("#display").val() + value;
           
        }

         

       if (value === "="){
          
           res = eval($("#display").val().replace(/x/g, "*").replace(/%/g, "/100"));
       }

        
        $("#display").val(res);

    });
});
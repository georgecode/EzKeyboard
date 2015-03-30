$(document).ready(function(){ 
    /*
    var allowed71 = true;

    $(document).keydown(function(){
        if(!allowed71) return;
        allowed71 = false;
        $('#sound').html('<audio autoplay> <source src="sounds/notes/C4.mp3" type="audio/mpeg"></audio>');
        console.log("fuck");                                   
        });

    $(document).keyup(function(){
        $('#sound').html('');
        console.log("fuck");                                   
        allowed71 = true;
    });
    */
//--------------------together--------------------
var allowed71 = true;
var allowed72 = true;

$(document).on("keydown", function(event){
    

    if(event.which === 71){
        if(!allowed71) return;
        allowed71 = false;

        $('#key1').html('<audio autoplay> <source src="sounds/notes/C4.mp3" type="audio/mpeg"></audio>')
        console.log(event.which)


        $(document).on("keyup", function(event){
            if(event.which === 71){
            $('#key1').html('')
            console.log(event.which)
            allowed71 = true;
            }
        })
    }

//------------------------------------------------------
    if(event.which === 72){
        if(!allowed72) return;
        allowed72 = false;

        $('#key2').html('<audio autoplay> <source src="sounds/notes/G4.mp3" type="audio/mpeg"></audio>')
        console.log(event.which)


        $(document).on("keyup", function(event){
            if(event.which === 72){
            $('#key2').html('')
            console.log(event.which)
            allowed72 = true;
            }
        })
    }    
//-------------------------------------------------
/*
    else if(event.which === 72){
       $('#key2').html('<audio autoplay> <source src="sounds/notes/C4.mp3" type="audio/mpeg"></audio>')
    console.log(event.which) 
    }
    */
//--------------------------------------------------------
})



//--------------------together-end------------------



/*
//---------------------------------------------------  
        $(document).keydown(function(key){
            switch(parseInt(key.which)){
               
                //70 = f key
                case 70:
                    $('#sound').html('<audio autoplay> <source src="sounds/notes/C4.mp3" type="audio/mpeg"></audio>');
                         console.log("fuck");                                   
                break;

                //71 = g key
                case 71:
                    $('#sound').html('<audio autoplay> <source src="sounds/notes/G4.mp3" type="audio/mpeg"></audio>');
                break;
               
            }
        });
//-------------------------------------------------













//------------------------------------------------- 

 */









});
/*
$(document).on("keyup", function(event){
    if(event.which === 71){
    $('#key1').html('')
    console.log(event.which)
    }
})
*/





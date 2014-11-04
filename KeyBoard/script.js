$(document).ready(function(){ 
    var cMp3 = '<audio autoplay> <source src="sounds/c_note.mp3" type="audio/mpeg"></audio>'
    var dMp3 = '<audio autoplay> <source src="sounds/d_note.mp3" type="audio/mpeg"></audio>'
    var eMp3 = '<audio autoplay> <source src="sounds/e_note.mp3" type="audio/mpeg"></audio>'
    var fMp3 = '<audio autoplay> <source src="sounds/f_note.mp3" type="audio/mpeg"></audio>'
    var gMp3 = '<audio autoplay> <source src="sounds/g_note.mp3" type="audio/mpeg"></audio>'
    var aMp3 = '<audio autoplay> <source src="sounds/a_note.mp3" type="audio/mpeg"></audio>'
    var bMp3 = '<audio autoplay> <source src="sounds/b_note.mp3" type="audio/mpeg"></audio>'



        $('#c').click(function(){
            $('#c').html(cMp3)   
        });
        $('#d').click(function(){
            $('#d').html(dMp3)   
        });
        $('#e').click(function(){
               $('#e').html(eMp3)
        });
        $('#f').click(function(){
            $('#f').html(fMp3)   
        });
        $('#g').click(function(){
            $('#g').html(gMp3)   
        });
        $('#a').click(function(){
            $('#a').html(aMp3)   
        });
        $('#b').click(function(){
            $('#b').html(bMp3)   
        });



//------------whatKey function start
    function whatKey(one,two,three,four,five){
        $(document).keydown(function(key){
            switch(parseInt(key.which)){
                case 65:
                    $('#d').html(one);
                break;
                case 83:
                    $('#e').html(two);
                break;
                case 68:
                    $('#g').html(three);
                break;
                case 70:
                    $('#a').html(four);
                break;
                case 71:
                    $('#b').html(five);
                break;
            }
        });
    } 
//------------whatKey function end
    $('#Eminor').click(function(){
        var eMinor = whatKey(dMp3,eMp3,gMp3,aMp3,bMp3) 
    });
        
    $('#Cmajor').click(function(){
        var cMajor = whatKey(cMp3,dMp3,eMp3,gMp3,aMp3)
    });


//----------document ready end    
});



 //$('#aNote').play();

  //$(this).fadeOut('fast');







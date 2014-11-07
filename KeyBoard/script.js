$(document).ready(function(){ 



    var c3mp3 = '<audio autoplay> <source src="sounds/notes/C3.mp3" type="audio/mpeg"></audio>'
    var cx3mp3 = '<audio autoplay> <source src="sounds/notes/Cx3.mp3" type="audio/mpeg"></audio>'

    var d3Mp3 = '<audio autoplay> <source src="sounds/notes/D3.mp3" type="audio/mpeg"></audio>'

    var dx3Mp3 = '<audio autoplay> <source src="sounds/notes/Dx3.mp3" type="audio/mpeg"></audio>'

    var e3Mp3 = '<audio autoplay> <source src="sounds/notes/E3.mp3" type="audio/mpeg"></audio>'
    var f3Mp3 = '<audio autoplay> <source src="sounds/notes/F3.mp3" type="audio/mpeg"></audio>'
    var fx3Mp3 = '<audio autoplay> <source src="sounds/notes/Fx3.mp3" type="audio/mpeg"></audio>'
    var g3Mp3 = '<audio autoplay> <source src="sounds/notes/G3.mp3" type="audio/mpeg"></audio>'
    var gx3Mp3 = '<audio autoplay> <source src="sounds/notes/Gx3.mp3" type="audio/mpeg"></audio>'
    var a3Mp3 = '<audio autoplay> <source src="sounds/notes/A3.mp3" type="audio/mpeg"></audio>'
    var ax3Mp3 = '<audio autoplay> <source src="sounds/notes/Ax3.mp3" type="audio/mpeg"></audio>'
    var b3Mp3 = '<audio autoplay> <source src="sounds/notes/B3.mp3" type="audio/mpeg"></audio>'
    
    var c4mp3 = '<audio autoplay> <source src="sounds/notes/C4.mp3" type="audio/mpeg"></audio>'
    var cx4mp3 = '<audio autoplay> <source src="sounds/notes/Cx4.mp3" type="audio/mpeg"></audio>'
    var d4Mp3 = '<audio autoplay> <source src="sounds/notes/D4.mp3" type="audio/mpeg"></audio>'
    var dx4Mp3 = '<audio autoplay> <source src="sounds/notes/Dx4.mp3" type="audio/mpeg"></audio>'
    var e4Mp3 = '<audio autoplay> <source src="sounds/notes/E4.mp3" type="audio/mpeg"></audio>'
    var f4Mp3 = '<audio autoplay> <source src="sounds/notes/F4.mp3" type="audio/mpeg"></audio>'
    var fx4Mp3 = '<audio autoplay> <source src="sounds/notes/Fx4.mp3" type="audio/mpeg"></audio>'
    var g4Mp3 = '<audio autoplay> <source src="sounds/notes/G4.mp3" type="audio/mpeg"></audio>'
    var gx4Mp3 = '<audio autoplay> <source src="sounds/notes/Gx4.mp3" type="audio/mpeg"></audio>'
    var a4Mp3 = '<audio autoplay> <source src="sounds/notes/A4.mp3" type="audio/mpeg"></audio>'
    var ax4Mp3 = '<audio autoplay> <source src="sounds/notes/Ax4.mp3" type="audio/mpeg"></audio>'
    var b4Mp3 = '<audio autoplay> <source src="sounds/notes/B4.mp3" type="audio/mpeg"></audio>'
    



        $('#key1').click(function(){
            $('#key1').html(c3Mp3)
       
        });
        $('#key2').click(function(){
            $('#key2').html(d3Mp3)   
        });
        $('#key3').click(function(){
               $('#key3').html(e3Mp3)
        });
        $('#key4').click(function(){
            $('#key4').html(f3Mp3)   
        });
        $('#key5').click(function(){
            $('#key5').html(g3Mp3)   
        });
        $('#key6').click(function(){
            $('#key6').html(a3Mp3)   
        });
        $('#key7').click(function(){
            $('#key7').html(b3Mp3)   
        });
        $('#key8').click(function(){
            $('#key8').html(b3Mp3)   
        });
        $('#key9').click(function(){
            $('#key9').html(b3Mp3)   
        });



//------------whatKey function start
    function whatKey(one,two,three,four,five,six,seven,eight,nine){
        $(document).keydown(function(key){
            switch(parseInt(key.which)){
                case 65:
                    $('#sound').html(one);
                break;
                case 83:
                    $('#sound').html(two);
                break;
                case 68:
                    $('#sound').html(three);
                break;
                case 70:
                    $('#sound').html(four);
                break;
                case 71:
                    $('#sound').html(five);
                break;
                case 72:
                    $('#sound').html(six);
                break;
                case 74:
                    $('#sound').html(seven);
                break;
                case 75:
                    $('#sound').html(eight);
                break;
                case 76:
                    $('#sound').html(nine);
                break;
            }
        });
    } 
//------------whatKey function end
    $('#em1').click(function(){
        var eMinor = whatKey(e3Mp3,g3Mp3,a3Mp3,b3Mp3,d4Mp3,e4Mp3,g4Mp3,a4Mp3,b4Mp3) 
    });
        
    $('#c1').click(function(){
        var cMajor = whatKey(c3Mp3,d3Mp3,e3Mp3,g3Mp3,a3Mp3)
    });


//----------document ready end
    
});



 //$('#aNote').play();

  //$(this).fadeOut('fast');







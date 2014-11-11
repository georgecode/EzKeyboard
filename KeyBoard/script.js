$(document).ready(function(){ 



    var c3Mp3 = '<audio autoplay> <source src="sounds/notes/C3.mp3" type="audio/mpeg"></audio>'
    var cx3Mp3 = '<audio autoplay> <source src="sounds/notes/Cx3.mp3" type="audio/mpeg"></audio>'

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
    
    var c4Mp3 = '<audio autoplay> <source src="sounds/notes/C4.mp3" type="audio/mpeg"></audio>'
    var cx4Mp3 = '<audio autoplay> <source src="sounds/notes/Cx4.mp3" type="audio/mpeg"></audio>'
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

    $('#c1').click(function(){
        var cAm = whatKey(c3Mp3,d3Mp3,e3Mp3,g3Mp3,a3Mp3,c4Mp3,d4Mp3,e4Mp3,g4Mp3)
    });
    /*$('#c1').click(function(){
        var cAm = whatKey(e3Mp3,g3Mp3,a3Mp3,b3Mp3,d4Mp3,e4Mp3,g4Mp3,a4Mp3,b4Mp3) 
    });*/





    $('#cx1').click(function(){
        var cxAxm =whatKey(cx3Mp3,dx3Mp3,f3Mp3,gx3Mp3,ax3Mp3,cx4Mp3,dx4Mp3,f4Mp3,gx4Mp3)
    });

    $('#d1').click(function(){
        var dxBm =whatKey(d3Mp3,e3Mp3,fx3Mp3,a3Mp3,b3Mp3,d4Mp3,e4Mp3,fx4Mp3,a4Mp3)
    });
    $('#dx1').click(function(){
        var dxCm =whatKey(c3Mp3,dx3Mp3,f3Mp3,g3Mp3,ax3Mp3,c4Mp3,dx4Mp3,f4Mp3,g4Mp3)
    });
    $('#e1').click(function(){
        var eCxm =whatKey(cx3Mp3,e3Mp3,fx3Mp3,gx3Mp3,b3Mp3,cx4Mp3,e4Mp3,fx4Mp3,gx4Mp3)
    });
    $('#f1').click(function(){
        var fDm =whatKey(d3Mp3,f3Mp3,g3Mp3,a3Mp3,c4Mp3,d4Mp3,f4Mp3,g4Mp3,a4Mp3)
    });
    $('#fx1').click(function(){
        var fxDxm =whatKey(dx3Mp3,fx3Mp3,gx3Mp3,ax3Mp3,cx4Mp3,dx4Mp3,fx4Mp3,gx4Mp3,ax4Mp3)
    });

    $('#g1').click(function(){
        var gEm = whatKey(e3Mp3,g3Mp3,a3Mp3,b3Mp3,d4Mp3,e4Mp3,g4Mp3,a4Mp3,b4Mp3) 
    });
        
    $('#gx1').click(function(){
        var gxFm = whatKey(dx3Mp3,f3Mp3,gx3Mp3,ax3Mp3,c4Mp3,dx4Mp3,f4Mp3,gx4Mp3,ax4Mp3)
    });
    $('#a1').click(function(){
        var aFxm =whatKey(e3Mp3,fx3Mp3,a3Mp3,b3Mp3,cx4Mp3,e4Mp3,fx4Mp3,a4Mp3,b4Mp3)
    });
    $('#ax1').click(function(){
        var axGm =whatKey(c3Mp3,d3Mp3,f3Mp3,g3Mp3,ax3Mp3,c4Mp3,d4Mp3,f4Mp3,g4Mp3)
    });
    $('#b1').click(function(){
        var bGxm =whatKey(cx3Mp3,dx3Mp3,fx3Mp3,gx3Mp3,b3Mp3,cx4Mp3,dx4Mp3,fx4Mp3,gx4Mp3)
    });


    $('#gArab').click(function(){
        var gScaleArab = whatKey(g3Mp3,a3Mp3,b3Mp3,c4Mp3,cx4Mp3,dx4Mp3,f4Mp3,g4Mp3,a4Mp3)
    })

    $('#gAlger').click(function(){
        var gScaleArab = whatKey(g3Mp3,a3Mp3,ax3Mp3,c4Mp3,cx4Mp3,d4Mp3,dx4Mp3,fx4Mp3,g4Mp3)
    })


//----------document ready end
    
});



 //$('#aNote').play();

  //$(this).fadeOut('fast');







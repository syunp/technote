$(function (){

    var click_ok_flag = true;

    function go_content( disp ){
        $('#goblog, #gomail, #gowork').animate({ opacity: '0' }, 900);
        $('#goabout').animate({ opacity: '0' }, {
            duration: 900, 
            complete: function(){
                $('#goabout, #goblog, #gomail, #gowork').css('display', 'none');
                $( disp ).css('display', 'block');
                $( disp ).animate({ opacity: '1' }, { 
                    duration: 900, 
                    complete: function(){
                        click_ok_flag = true;
                    },
                });
            },
        });
    }

    function go_menu( click ){
        $( click ).animate({ opacity: '0' }, {
            duration: 900, 
            complete: function(){
                $( click ).css('display', 'none');
                $( '#goabout, #goblog, #gomail, #gowork' ).css('display', 'block');
                $( '#goabout' ).animate({ opacity: '1' }, 900);
                $( '#goblog, #gomail, #gowork' ).animate({ opacity: '1' }, { 
                    duration: 900, 
                    complete: function(){
                        click_ok_flag = true;
                    },
                });
            },
        });
    }


    
    $('#goabout').click(function(){
        if( click_ok_flag ){
            click_ok_flag = false;
            $('#base').animate({ top: '+=700px' }, {duration: 900, easing: 'easeOutExpo'});
            go_content('#menu_godown');
        }
    });

    $('#goblog').click(function(){
        if( click_ok_flag ){
            click_ok_flag = false;
            $('#base').animate({ left: '-=900px' }, {duration: 900, easing: 'easeOutExpo'});
            go_content('#menu_goleft');
        }
    });

    $('#gomail').click(function(){
        if( click_ok_flag ){
            click_ok_flag = false;
            $('#base').animate({ top: '-=700px' }, {duration: 900, easing: 'easeOutExpo'});
            go_content('#menu_goup');
        }
    });

    $('#gowork').click(function(){
        if( click_ok_flag ){
            click_ok_flag = false;
            $('#base').animate({ left: '+=900px' }, {duration: 900, easing: 'easeOutExpo'});
            go_content('#menu_goright');
        }
    });

    $('#menu_godown').click(function(){
        if( click_ok_flag ){
            click_ok_flag = false;
            $('#base').animate({ top: '-=700px' }, {duration: 900, easing: 'easeOutExpo'});
            go_menu('#menu_godown');
        }
    });

    $('#menu_goleft').click(function(){
        if( click_ok_flag ){
            click_ok_flag = false;
            $('#base').animate({ left: '+=900px' }, {duration: 900, easing: 'easeOutExpo'});
            go_menu('#menu_goleft');
        }
    });

    $('#menu_goup').click(function(){
        if( click_ok_flag ){
            click_ok_flag = false;
            $('#base').animate({ top: '+=700px' }, {duration: 900, easing: 'easeOutExpo'});
            go_menu('#menu_goup');
        }
    });

    $('#menu_goright').click(function(){
        if( click_ok_flag ){
            click_ok_flag = false;
            $('#base').animate({ left: '-=900px' }, {duration: 900, easing: 'easeOutExpo'});
            go_menu('#menu_goright');
        }
    });

});

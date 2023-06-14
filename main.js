var itemPositions = [];
var numberOfItems = $('#scroller .item').length;

function assignPositions(){
    for(var i = 0; i<numberOfItems; i++){
        if(i == 0){
            itemPositions[i] = 'left-hidden';
        }else if(i == 1){
            itemPositions[i] = 'left';
        }else if(i == 2){
            itemPositions[i] = 'middle';
        }else if(i == 3){
            itemPositions[i] = 'right';
        }else{
            itemPositions[i] = 'right-hidden';
        }
    }

    $('#scroller .item').each(function(index){
        $(this).addClass(itemPositions[index]);
    });
}


function scroll(direction){
    if(direction === 'prev'){
        itemPositions.push(itemPositions.shift());
    }else if(direction === 'next'){
        itemPositions.unshift(itemPositions.pop());
    }
    $('#scroller .item').removeClass('left-hidden left middle right right-hidden').each(function(index){
        $(this).addClass(itemPositions[index]);
    });
}


$(document).ready(function(){

    assignPositions();
    var autoScroll = window.setInterval("scroll('next')", 4000);


    $('#scroller').hover(function(){
        window.clearInterval(autoScroll);
        $('.nav').stop(true,true).fadeIn(200);
    }, function(){
        autoScroll = window.setInterval("scroll('next')", 4000);
        $('.nav').stop(true,true).fadeOut(200);
    });


    $('.prev').click(function(){
        scroll('prev');
    });
    $('.next').click(function(){
        scroll('next');
    });
});
var one = $('#one').offset().top;
var two = $('#two').offset().top;
var three = $('#three').offset().top;
var four = $('#four').offset().top;
var arr = [one, two, three, four];

$('document').ready(function(){
    var d = $('html').scrollTop()+88;
    // console.log('d is '+d);
    // console.log(' '+one+' '+two+' '+three+' '+four);
    console.log(arr+'Ok');
});

$("a[href='#home']").click(function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#one").offset().top-90
    }, 1000);
    // console.log('clicked 1 '+$(document).scrollTop());
    fresh();
});

$("a[href='#about']").click(function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#two").offset().top-90
    }, 1000);
    // console.log('clicked 2 '+$(document).scrollTop());
    fresh(); 
});

$("a[href='#services']").click(function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#three").offset().top-90
    }, 1000);
    // console.log('clicked 3 '+$(document).scrollTop());
    fresh(); 
});

$("a[href='#contact']").click(function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#four").offset().top-90
    }, 1000);
    // console.log('clicked 4 '+$(document).scrollTop());
    fresh();
});

// console.log('welcome it works fine');

function fresh(){
    $('a').each(function(){
        if($(this).hasClass('bg-danger')){
            $(this).removeClass('bg-danger');
            $(this).addClass('bg-success');
            // console.log($(this).text());
        }
    });
}

$(document).scroll(function(){
    var d = $('html').scrollTop()+88;
    // console.log(d);
    if(d<arr[1]-200 && d>arr[0]){
        fresh();
        $("a[href='#home']").removeClass('bg-success');
        $("a[href='#home']").addClass('bg-danger');
    }
    if(d<arr[2] && d>arr[1]-200){
        fresh();
        $("a[href='#about']").removeClass('bg-success');
        $("a[href='#about']").addClass('bg-danger');
    }
    if(d<arr[3] && d>arr[2]-200){
        fresh();
        $("a[href='#services']").removeClass('bg-success');
        $("a[href='#services']").addClass('bg-danger');
    }
    if(d>arr[3]-200){
        fresh();
        $("a[href='#contact']").removeClass('bg-success');
        $("a[href='#contact']").addClass('bg-danger');
    }
});

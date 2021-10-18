$(document).ready(function() 
{
    $('body').on('click','.wem-next',function(e)
    {
        e.preventDefault();
        var indx = $("body .conception .wrapper_gallery.current").index();
        var divcount = $("div.wrapper_gallery").length;
        divcount = divcount - 1;
        if(indx > divcount)
        {
          indx = 0;
        };
        $(".wrapper_gallery").removeClass("current");
        $(".wrapper_gallery").eq(indx).addClass("current");
    });
});

$(document).ready(function() 
{
    $('body').on('click','.wem-prev',function(e)
    {
        e.preventDefault();
        var indx = $("body .conception .wrapper_gallery.current").index();
        indx = indx - 2;
        var divcount = $("div.wrapper_gallery").length;
        divcount = divcount - 1;
        if(indx < 0)
        {
          indx = divcount;
        };
        $(".wrapper_gallery").removeClass("current");
        $(".wrapper_gallery").eq(indx).addClass("current");
        // alert(divcount);
    });
});

const mobile=document.querySelector('.menu-toggle');
const mobileLink=document.querySelector('.sidebar');

mobile.addEventListener("click",function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

mobileLink.addEventListener("click",function(){
    const menubars=document.querySelector("is-active");
    if(window.innerWidth<=800 && menubars){
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");

    }
})

var step=100;
var stepfilter=60;
var scrolling=true;
(".back").bind("click",function(e)
{
    e.preventDefault();
    (".highlight-wrapper").animate({
        scrollLeft:"+=" + stop +"px"
    })
})

(".next").bind("click",function(e)
{
    e.preventDefault();
    (".highlight-wrapper").animate({
        scrollLeft:"+=" + stop +"px"
    })
})

(".back-menus").bind("click",function(e)
{
    e.preventDefault();
    (".filter-wrapper").animate({
        scrollLeft:"+=" + stop +"px"
    })
})

(".next-menus").bind("click",function(e)
{
    e.preventDefault();
    (".filter-wrapper").animate({
        scrollLeft:"+=" + stop +"px"
    })
})

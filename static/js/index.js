$(function () {
    /*   全屏滚动插件 fullPage 初始化    */
    $('#fullPage').fullpage({
        sectionsColor: ['#66cccc','#99cccc','#ccccff','#ccffcc','#99cccc'],
        scrollingSpeed: 300,
        navigation: true,
        navigationPosition: 'right',
        anchors:['page1','page2','page3','page4','page5'],
        onLeave: function (index, nextIndex, direction) {
            $(this).find('[data-animate]').map(function () {
                $(this).removeClass($(this).data('init'));
            });
            var relate = null;
            if (direction == 'down') {
                relate = $(this).next();
            } else {
                relate = $(this).prev();
            }
            relate.find('[data-animate]').map(function () {
                $(this).addClass($(this).data('init'));
            });
            /*到达最后一页时，向下的箭头消失，否则显示*/ 
            if(nextIndex>4){
                $('#fanye').hide();
            }else{
                $('#fanye').show();                
            }
            $('nav li').eq(nextIndex-1).css('background','#c0c0c0').siblings().css('background','');;
        }

    });
    /*第4页横屏滚动*/ 
    // setInterval(function(){
    //     $.fn.fullpage.moveSlideRight();
    // }, 20000);
    /*底部箭头翻页效果*/
    $('#fanye').click(function(){    
        $.fn.fullpage.moveSectionDown(); 
    })
    /*   页面动画设置   */
    $('[data-animate]').hover(function () {
        $(this).removeClass($(this).data('init')).addClass($(this).data('animate'));
    }, function () {
        $(this).removeClass($(this).data('animate'));
    });

    /*   首屏动画设置   */
    $('.section').first().find('[data-animate]').map(function () {
        $(this).addClass($(this).data('init'));
    });

    /*   计算工作年份   */
    $('#year').html((function () {
        return new Date().getFullYear() - 2015;
    })());
});


let data = Array(
    ["もち","表示するもの無いんでとりあえずもちでもどうぞ","images/moti-icon.png","https://blog.sumahotektek.com/moti-introduce/","おっと、これはもちアイコン！？"],
    ["もち","画像を押すとツイッターへ転送されます！","images/top-logo.png","https://twitter.com/motimoti_dev","Gootal画像"],
    ["(📞^o^)ﾄｩﾙﾙﾙﾙﾙ…","おっおっおっ","","",""],
);
function modalclose(){$(".modals").addClass("hide");}
function modalopen(row){
    document.getElementById("modal-title").innerHTML = data[row][0];
    document.getElementById("modal-text").innerHTML = data[row][1];
    if(data[row][2] != ""){
        $("#modal-image").attr('src', data[row][2]);
        $("#modal-image").attr('alt', data[row][4]);
        $("#modal-link").attr('href', data[row][3]);
        $("#modal-link").attr('style', '');                    
    }else{/*非表示*/
        $("#modal-link").attr('style', 'display:none;');
    }
    $(".modals").removeClass("hide");
}
$(function() {var pageTop = $('.page_top');pageTop.hide();$(window).scroll(function () {if ($(this).scrollTop() > 600) {pageTop.fadeIn();} else {pageTop.fadeOut();}});pageTop.click(function () {$('body, html').animate({scrollTop:0}, 500, 'swing');return false;});});

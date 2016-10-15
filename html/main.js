/**
 * Created by hungm on 10/11/2016.
 */

$(document).ready(function () {
    //loading

    item_count = $('div.dot span').length;


//

    var source = $("#girl_item_template").html();
    var tem = Handlebars.compile(source);

    var sourceModal = $("#girl_modal_template").html();
    var temModal = Handlebars.compile(sourceModal);
    $("div#back-top").hide();
    $('.end-page').hide();
    requestNextPage(tem, temModal);

    $(window).on('scroll', function () {
        if ($(document).height() <= $(window).scrollTop() +  $(window).height() + 500) {
            if (isLoading) return;
            isLoading = true;

            item_current = 0;
            $('div.dot span').eq(item_current).animate({
                opacity: 1
            }, 100);

            $('.end-page').show();
            timedCount();
            setTimeout(function () {
                console.log('---')
                requestNextPage(tem, temModal);
            },3000);


        }
        if ($(this).scrollTop() > 500) {
            $("div#back-top").fadeIn();
        } else {
            $("div#back-top").fadeOut();
        }
    })

    $('div#back-top a').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    })


});


var isLoading = false;
var masonryInitialized = false;

var fadetime = 50;
var timeout = 300;
var to;
var item_current = 0;
var item_count;
var d=0;

var requestNextPage = function (tem, temModal) {

    $.ajax({
        type: "get",
        url: "imagesData.json"
    }).done(function (data) {

        if (masonryInitialized) {

       $('.end-page').hide();
      clearTimeout(to);

      var $item = $(tem(data));
      $('#girl_item_container').append($item).masonry('appended', $item, true);
            isLoading = false;
        } else {

            $("#girl_item_container").html(tem(data));
            $("#girl_item_container").masonry({
                itemSelector: '.girl_item',
                columnWidth: '.girl_item',
                percentPosition: true
            });
            $("#girl_modal").html(
                temModal(data)
            )
            masonryInitialized = true;
        }



    }).fail(function (err) {
        console.log(err);



    }).always(function () {



    });

}
var imgclick = function (event) {
    var target = $(event.target);
    if (target.is("BUTTON")) return;
    var imgId = target.attr("data-id");
    $("#myModal-" + imgId).modal();

}

function timedCount() {

    $('div.dot span').eq(item_current).animate({
        opacity: 0.66
    }, fadetime)

    if (item_current == item_count - 1) {
        item_current = 0;
    } else {
        item_current++;
    }
    $('div.dot span').eq(item_current).animate({
        opacity: 1
    }, fadetime)
    to = setTimeout(function () {
        timedCount();
    }, timeout);


}



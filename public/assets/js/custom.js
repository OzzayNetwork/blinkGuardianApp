$(window).on('load', function() {
    $('body').on('click', '.upload-the-contacts', function() {
        $('.selected-contacts-message').removeClass('d-none')

    })
    $('body').on('click', '.write-msg-btn', function() {
        $('.email-overlay').removeClass('d-none')
        setTimeout(function() {
            $('.the-message-maker').addClass('email-overlay-transform');
        }, 0)

    });
    $('body').on('click', '.close-message-maker', function() {
        $('.the-message-maker').removeClass('email-overlay-transform')
        setTimeout(function() {
            $('.email-overlay').addClass('d-none');
        }, 200);

    });

    $('body').on('click', '.minimize', function() {
        $(this).parent().parent().parent().parent().siblings().toggleClass('d-none');
    });
    $("body").on('change', '.contacts-table tbody input', function() {
        var theTable = $(this).parent().parent().parent().parent().parent();
        if ($(this).is(':checked')) {
            $('.delete-tool-bar').removeClass('d-none').prev().addClass('d-none');

            $(theTable).children('tr').each(function(index) {
                //console.log(index + ": " + $(this).text());
                var theColumn = $(this).children('td').eq(0).find('input');
                if (theColumn.is(':checked')) {
                    // alert('checked');
                    $('#selectAll').prop('checked', true);
                } else {
                    $('#selectAll').prop('checked', false);
                    return false
                }
            });
        } else {
            $('#selectAll').prop('checked', false);
        }
    })
    $('body').on('change', '#selectAll', function() {
        var theTable = $(this).parent().parent().parent().parent().siblings('tbody');

        if ($(this).is(':checked')) {
            $('.delete-tool-bar').removeClass('d-none').prev().addClass('d-none')
            $(theTable).children('tr').each(function(index) {
                //console.log(index + ": " + $(this).text());
                var theColumn = $(this).children('td').eq(0).find('input');
                theColumn.prop('checked', true)
            });

        } else {
            $('.delete-tool-bar').addClass('d-none').prev().removeClass('d-none');
            $(theTable).children('tr').each(function(index) {
                //console.log(index + ": " + $(this).text());
                var theColumn = $(this).children('td').eq(0).find('input');
                theColumn.prop('checked', false);
            });
        }
    });

    //sending payment
    $('body').on('click','.payment-next', function(){

        $('.payment-prev').prop('disabled', false)       
        var countTheSteps = parseFloat($(".payment-panel-parent .payment-panel").length);
        var theCurrentIndex= $(".payment-panel-parent .payment-panel.payment-active-panel").index();
        theCurrentIndex=theCurrentIndex+2;
        if(theCurrentIndex!=countTheSteps){
            $('.payment-panel-parent').find('.payment-active-panel').addClass('d-none').removeClass('payment-active-panel').next().removeClass('d-none').addClass('payment-active-panel')
        }
        if (theCurrentIndex==countTheSteps-1) {
            $('.payment-next').addClass('d-none');
        }

        // else{
        //     $('.payment-next').addClass('d-none'); 
        // }
          
        

    })

    $('body').on('click','.payment-prev', function(){
        $('.payment-next').removeClass('d-none');  
        var countTheSteps = parseFloat($(".payment-panel-parent .payment-panel").length);
        var theCurrentIndex= $(".payment-panel-parent .payment-panel.payment-active-panel").index();
        if(theCurrentIndex!=0){
            $('.payment-panel-parent').find('.payment-active-panel').addClass('d-none').removeClass('payment-active-panel').prev().removeClass('d-none').addClass('payment-active-panel')
        }   
        

    });
    $('body').on('click', '.btn-send', function(){
        $('#walletTopUp .modal-footer').addClass('d-none');
        $('#walletTopUp .close-modal').addClass('d-none');
        $('.stk-timer-container').removeClass('d-none').siblings().addClass('d-none');
        $(this).prop('disabled', true);

        var timeleft = 5;
        var downloadTimer = setInterval(function () {
            if (timeleft <= 0) {
                clearInterval(downloadTimer);
                alert("You took to long to confirm the transaction");
                $(".stk-timer").text("0 s");
                $('.btn-send').prop('disabled', false);
                $('#walletTopUp .close-modal').removeClass('d-none');

                $('#walletTopUp .modal-footer').removeClass('d-none');
                $('.stk-timer-container').addClass('d-none').siblings().removeClass('d-none');
            }

            $(".stk-timer").text(timeleft + " s");
                timeleft -= 1;
               
            }, 1000);
    })

    // $('.loginPageOnly').next('main').addClass('d-none');
    $('body .loginPageOnly').next('main').addClass('d-none');
    $('body').on('click','.close-alert', function(){
        $(this).parent().addClass('d-none');
    })
    

    

});

const currentYear = new Date().getFullYear();
$('.this-year').text(currentYear);
// $('.loginPageOnly').next('main').addClass('d-none');
$('body .loginPageOnly').next('main').addClass('d-none');

$(document).ready(function() {
    $('.selectpicker').selectpicker();
    $('.selectpicker').selectpicker('render')
});
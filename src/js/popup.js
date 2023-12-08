export default function popup(text) {
    var popupContent
    function popupClose(){
        popupContent.hide();
        popupContent = $('#popupContent');
        popupContent.find('.popupHead').find('h2').text('');
        popupContent.find('.popupHead').find('img').removeAttr('src');
        popupContent.find('.popupBody').html('');
        popupContent.find('.popupFooter').find('.buttonsAppend').html('');
        popupContent.find('.popupFooter').find('.footTextAppend').html('');
    }
    function popupCreate(headline, flag, contnet,buttons,buttonText){
        popupContent = $('#popupContent');
        popupContent.find('.popupHead').find('h2').text(headline);
        popupContent.find('.popupHead').find('img').attr('src',flag);
        popupContent.find('.popupBody').html(contnet);
        popupContent.find('.popupFooter').find('.buttonsAppend').html(buttons);
        popupContent.find('.popupFooter').find('.footTextAppend').html(buttonText);
        popupContent.fadeIn();

    }
    $('.countryList ul li a,.videoButton').on('click',function(){
        var countryName =  $(this).find('span').text();
        var countryFlag = $(this).find('img:first-child').attr('src');
        var countryContent = $(this).data('popup-content')
        var countryButtons = $(this).data('popup-buttons')
        var footText = $(this).data('footbutton-text')
        //console.log(countryContent);
        
        
        popupCreate(countryName,countryFlag,countryContent,countryButtons,footText);
        $('#popupContent').removeClass('videoPopup');
       
        return false;
    });

    $('.popupClose').on('click',function(){
        popupClose();
    });

    $('.videoButton').on('click',function(){
        $('#popupContent').addClass('videoPopup');
        return false;
    });


    if(window.location.hash ==  "#video"){
        $('.videoButton').trigger('click');
    }
}
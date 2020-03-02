var n1 = (parseFloat(jQuery("span#allavg.love-count").text()) * (parseFloat(jQuery(".love-countof").text())));
var n2 = ((parseFloat(jQuery(".love-countof").html())));
jQuery(".example:first").prepend('<span class="rating_value"></span>');

var avarge= jQuery('.basic').attr('data-score');
            jQuery('#avg').html(avarge);
            
            
jQuery(document).one('click', '.example', function (e) {

    var post_id = jQuery(this).data('id');

    var value = jQuery(".jRatingInfos").text();
    var rating = jQuery(".rating_value").text();

    var n = (n1 + (parseFloat(rating)));

    n2++;
    var resulto = ((parseFloat(n / n2)) * ((23)));
    var result = (parseFloat(resulto));
    /*  var Mrgntop = jQuery('.example').offset().top;
     jQuery('.spsp').css('margin-top',Mrgntop);	 */
    if (rating) {
        jQuery('.example').prepend('<span class="spsp">Your Rating is : ' + rating + '</span>').fadeIn(2000);
        jQuery('.love-count').html('<img src="' + all_vars.templUrl + '/jRating/jquery/icons/loading.gif">').fadeIn(2000);
        //jQuery('span.love-countof').after('<span class="love-countofXX"></span>'); 
        //jQuery('span.love-countof').hide(); 
        jQuery('span.love-countof').text(n2).fadeIn(2000);
    } /* else {
     // jQuery('.example').prepend('<span class="spsp">Was Rated ..!</span>').before('.basic').fadeIn(5000);  
     //var rating = 0;
     //var value = 0;
     } */
    jQuery('.basic').css('display', 'none');

    jQuery('.basic').unbind();
    jQuery('.jRatingColor,.jRatingAverage').hide();

    setTimeout(function () {
        jQuery(".basic").fadeIn(1000);
    }, 2500);
    setTimeout(function () {
        jQuery(".spsp").fadeOut(1000);
    }, 1500);
    setTimeout(function () {
        jQuery(".example").removeAttr();
    }, 0);
    setTimeout(function () {
        jQuery(".example").addClass("exampleDisable").removeClass('example');
    }, 0);
    setTimeout(function () {
        jQuery(".basic").addClass("jDisabled");
    }, 0);
//setTimeout(function(jAv = ($("#avg").text()*23)) { $('.jRatingColor,.jRatingAverage').show(), $('.jRatingColor,.jRatingAverage').animate({width:jAv}, 5000);}, 5000); 
//setTimeout(function( jAv = ($("#xxu").text()*20)) { alert(jAv)}, 2550); 

//jQuery('.percent,.percentno').hide(); 




//setTimeout(function(jAv = ($("#avg").text()*23)) { $('.jRatingColor,.jRatingAverage').show(), $('.jRatingColor,.jRatingAverage').animate({width:result}, 3000);}, 6000); 

    setTimeout(function () {
        jQuery('.jRatingColor,.jRatingAverage').show(), jQuery('.jRatingColor,.jRatingAverage').animate({width: (resulto)}, 3000);
        
    }, 1000);
    
    setTimeout(function () {
            var avarge= jQuery('.basic').attr('data-score');
            jQuery('#avg').html(avarge);
    }, 1500);
            
    /* $('.YourRatingresults').show(); 
     
     
     */
// setTimeout(function() { $(".Ratingresultsoo").show(); }, 0); 
//setTimeout(function() { $("span#love-countxx,#percent,span#love-countof, span#percentno").show(); }, 600); 
//setTimeout(function() { $(".Ratingresultsoo").hide(); }, 6000); 
    /* setTimeout(function() { $(".Ratingresults").show(); }, 6000); 
     
     
     //$('.Ratingresults').hide(); 
     //$(".Ratingresults").hide().delay(500).show(); 
     
     $(".Ratingresultsoo").show().delay(500).hide(); 
     /*$('span#love-countxx').hide();  */
    /*   */

//$('.Ratingresults').hide('slow');   
//$('.Ratingresults').delay(500).show(0);     
    //$('.YourRatingresults').delay(2500).hide(0);     

    var value = jQuery(".sidebar").width();

    /*               jQuery.ajax({
     url : postlove.ajax_url,
     
     type: "POST",
     data: {value:value,
     action : 'post_love_add_love',
     post_id : post_id},
     success : function(data) {
     // alert (value);
     
     }
     });
     */


    jQuery.ajax({
        url: all_vars.ajaxUrl,
        type: 'post',

        data: {
            action: 'post_love_add_love',
            nextNonce: postlove.security,
            value: rating,
            post_id: post_id
        },
        success: function (response) {
            jQuery('.love-count').html(response);
            
        }
    });
    // نُرجع القيمة false هنا
    return false;

})
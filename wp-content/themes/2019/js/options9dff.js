function createCookie(e, t, s) {
	if (s) {
		var o = new Date;
		o.setTime(o.getTime() + 24 * s * 60 * 60 * 1e3);
		var a = "; expires=" + o.toGMTString()
	} else a = "";
	document.cookie = e + "=" + t + a + "; path=/"
}

function readCookie(e) {
	for (var t = e + "=", s = document.cookie.split(";"), o = 0; o < s.length; o++) {
		for (var a = s[o];
			" " == a.charAt(0);) a = a.substring(1, a.length);
		if (0 == a.indexOf(t)) return a.substring(t.length, a.length)
	}
	return null
}

function eraseCookie(e) {
	createCookie(e, "", -1)
}
jQuery(document).ready(function (e) {
	jQuery(postContentDiv).append('<div class="page-progress"></div>');
	var t = e(this).attr("title");
	jQuery("img").each(function () {
		var img = jQuery(this);
        var alt = img.attr('alt');

        if ((!alt) || (alt === '')) {
            img.attr('title', '' + t);
            img.attr('alt', '' + t);
        }
	}),
	jQuery("span.songo").each(function (t) {
		var s = e(".x" + t),
			o = s.map(function () {
				return e(this).height()
			}).get(),
			a = Math.max.apply(null, o);
		s.height(a)
	})
    
});
	var s = jQuery.noConflict();
	s("body").click(function (e) {
		s("#search-form, #search").removeClass("open"), s("#toggle-search").removeClass("fa-times").addClass("fa-search");
		s("#bio_ep,#bio_ep_bg").hide();
	}), s("#search-form, #bio_ep").click(function (e) {
		e.stopPropagation()
	}), jQuery(window).scroll(function () {
		jQuery(".reviews-box").length && jQuery(window).scrollTop() >= jQuery(".reviews-box").offset().top - 1.7 * jQuery(".reviews-box").height() && jQuery(".rng").each(function (e) {
			var t = jQuery(".elranges" + e).attr("data-range"),
				s = jQuery(".bar" + e).attr("data-range"),
				o = jQuery(".rngo").attr("data-range");
			jQuery(".elranges" + e).animate({
				width: t
			}, 3e3), jQuery(".bar" + e).animate({
				"background-size": s + "%"
			}, 3e3), jQuery(".rngo").animate({
				width: o
			}, 3e3)
		})
	}),
	jQuery(window).scroll(function () {
		var ex = jQuery(window).scrollTop(),
			t = jQuery(postContentDiv).height() - jQuery(window).height(),
			s = (jQuery(window).width(), (ex - jQuery(postContentDiv).offset().top) / t * 100);
		jQuery("#main").height(), jQuery(postContentDiv).height();
		ex >= jQuery(postContentDiv).offset().top ? ex <= jQuery(postContentDiv).offset().top + t ? jQuery(".page-progress").css("width", s + "%") : jQuery(".page-progress").css("width", "100%") : jQuery(".page-progress").css("width", "0px"), s < 100 ? jQuery(".page-progress").css("background", all_vars.skinColor) : s > 100 && jQuery(".page-progress").css("background", "green");
	});
jQuery(".post-thumbnail").scroll(function () {
	var ex = jQuery(this).scrollTop();
	jQuery(this).css("background-position", "0% " + parseInt(-ex / 10) + "px")
});




jQuery(document).ready(function()
{
    

/* FIX COUPON CODE PLUGIN WHEN NOT SHOWN OR NOT CLICKABLE */ 
function copyToClipboard(text) {

   var textArea = document.createElement( "textarea" );
   textArea.value = text;
   document.body.appendChild( textArea );

   textArea.select();

   try {
      var successful = document.execCommand( 'copy' );
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
   } catch (err) {
      console.log('Oops, unable to copy');
   }

   document.body.removeChild( textArea );
}

 
jQuery('.coupon').each(function (){
  var copounClass = jQuery(this);
  var theParent = copounClass.parent();
var href = jQuery(this).attr('href');
var couponCode = jQuery('span', this).text();

jQuery('embed#ZeroClipboardMovie_1').removeAttr('src loop menu quality name pluginspage');    

jQuery('.fluid-width-video-wrapper').parent().remove();

copounClass.append('<a id="couponcode" href="'+href+'" target="_blank">'+couponCode+'</a>');
jQuery('span', this).hide();
jQuery('a' , this).css({
  	'position': 'absolute',
	'top': '0',
	'left': '0',
	'right': '3.5%',
	'font-weight': '700',
	'font-size': '12.5pt', 
	'background': 'crimson',
'width': '100%',
'height': '100%',
'line-height': '2em',
'color': '#fff !important'
	
});

/*
jQuery( 'a' , this).on('mouseover', function()
 {
 */
	jQuery('.hover-message').text('^^ اضغط على الكوبون لنسخه').show();	
		
	jQuery('.hover-message').css({	
	'position': 'absolute',
    'background': '#000',
    'margin': '0 auto',
    'padding': '0px 7px',
    'bottom': '-29px',
    'width': '100%',
    'left': '0',
	'font-size':'9pt'
	});	

/*
});	

	jQuery( 'a' , this).on('mouseout', function()
 {	jQuery('.hover-message').hide();	
	});*/
copounClass.attr('target','_blank');
copounClass.removeAttr('unselectable onselectstart ondragstart');
copounClass.next().remove();

jQuery( 'a' , this).on('click', function()
 {
     var clipboardText = "";
     var couponCode = jQuery(this).text();

     clipboardText = couponCode;

     copyToClipboard( clipboardText );
     console.log(clipboardText);
     alert( "Copied to Clipboard" );
 });
jQuery("a", this).click(function(){
         window.location=jQuery('.coupon').attr("href");
        console.log(jQuery(this).attr("href"));
         return false;
    });
 
theParent.bind('contextmenu', function(e) {
    return false;
}); 

theParent.append('<div class="hover-message-text" style="font-size:9pt">اضغط على الكوبون لنسخه</div>');

		jQuery('.hover-message-text').css({	
    'height': '50px',
	'visibility':'hidden'	
	});	
});

/* Hide wpadminbar */
jQuery('#wpadminbar').append('<a class="closeit" style="color:#fff" href="#">>CloseIt</a>');

jQuery('.closeit').on('click',function(e){
jQuery('#wpadminbar').slideUp(100);    
});
//alert(couponCode);
/*HeaderPromoCode  rgb(17, 153, 1000)*/    
jQuery('.promo-slide-in-close-promo').on('click',function(e){
jQuery('.promo-slide-in').slideUp(100);    
});

jQuery(window).scroll(function(){
    var point = jQuery(document).scrollTop();
    var pointHundred = Math.round(parseFloat((point/500)));
    var pointHundred2 = Math.round(parseFloat((point/15)));
    var promoText = jQuery('.promo-slide-in-content div a').html();
    var promoLink = jQuery('.promo-slide-in-content div a').attr('href');
    
    /*jQuery('.promo-slide-in').before(point+'>>'+pointHundred);*/
        jQuery('.promo-slide-in').css({'height':'40px','background' : 'rgb(26, 195,'+pointHundred2+')'});
        if(pointHundred %2 == 1) {
            jQuery('.promo-slide-in-button').css({'background':'rgb(17, 153,'+point+')'});
            jQuery('.promo-slide-in-content-responsive p a').hide();
            jQuery('.promo-slide-in-content-responsive').append('<a style="display:block !important; position: absolute;" class="promo-slide-in-button" href="'+promoLink+'">'+promoText+'</a>');
        } else if (pointHundred %2 != 1) {
            jQuery('.promo-slide-in-button').css({'background':'#f92c8b'});
            jQuery('.promo-slide-in-content-responsive p a').show();
            jQuery('.promo-slide-in-content-responsive .promo-slide-in-button').remove();

        }
    if(point > 0) {
       jQuery('.promo-slide-in').css({'height':'40px'});
       jQuery('.promo-slide-in-content p').css('margin','1% 0 0');
       jQuery('.promo-slide-in-button').css('margin','0.5% 20px 0 0');
    } else {
        jQuery('.promo-slide-in').removeAttr('style');
       jQuery('.promo-slide-in-content p').removeAttr('style');
       jQuery('.promo-slide-in-button').css('margin','2% 20px 0 0');
    }
});

});
jQuery(document).ready(function($) {
    var $ = jQuery.noConflict();
    var NewContent = '<div class="my_result"></div>';
    $(document).on('click', '.close_results', function() {
        jQuery('.my_result').fadeOut(1500)
    });
    jQuery(NewContent).insertAfter('#select_hosting1');
    $(document).on('click', '.xpp,.xps, .xpt,.xpc,.xpd,.xpa,.xmb,.xfd,.xss', function() {
        var clas = $(this).attr('class');
        $('#' + clas).hide();
        $('body').find('[data-plan="' + clas + '"]').val(-1).trigger('change');
        $('#button_search_hosting').trigger('click')
    });
    jQuery(document).on("change trigger", "#plan_price,#plan_space,#plan_traffic,#plan_cp,#plan_databases,#plan_addon_domain,#plan_money_back,#plan_ssh,#plan_free_domain", function(e) {
        $('#button_search_hosting').trigger('click')
    });
    jQuery(document).on("click", "#button_search_hosting", function(e) {
        $plan_price = $('#plan_price :selected').val();
        if ($plan_price != '-1') {
            $pp = '&plan_price=' + $plan_price + ''
        } else {
            $pp = ''
        }
        $plan_free_domain = $('option:selected', '.plan_free_domain').val();
        if ($plan_free_domain != '-1') {
            $fd = '&plan_free_domain=' + $plan_free_domain + ''
        } else {
            $fd = ''
        }
        $plan_money_back = $('option:selected', '#plan_money_back').val();
        if ($plan_money_back != '-1') {
            $mb = '&plan_money_back=' + $plan_money_back + ''
        } else {
            $mb = ''
        }
        $plan_addon_domain = $('option:selected', '#plan_addon_domain').val();
        if ($plan_addon_domain != '-1') {
            $ad = '&plan_addon_domain=' + $plan_addon_domain + ''
        } else {
            $ad = ''
        }
        $plan_databases = $('option:selected', '#plan_databases').val();
        if ($plan_databases != '-1') {
            $pd = '&plan_databases=' + $plan_databases + ''
        } else {
            $pd = ''
        }
        $plan_cp = $('option:selected', '#plan_cp').val();
        if ($plan_cp != '-1') {
            $cp = '&plan_cp=' + $plan_cp + ''
        } else {
            $cp = ''
        }
        $plan_ssh = $('option:selected', '#plan_ssh').val();
        if ($plan_ssh != '-1') {
            $ssh = '&plan_ssh=' + $plan_ssh + ''
        } else {
            $ssh = ''
        }
        jQuery('.my_result').css({
            minHeight: '500px',
            marginTop: '30px',
            border: 'solid 2px #eee',
            padding: '20px'
        }).html('<div id="overlay-loading"><img src="' + all_vars.templateUrl + '/images/big_loading.gif" class="loading_circle" alt="loading" /></div>');
        if (jQuery('body').hasClass('entry-content')) {
            jQuery('.entry-content').css('min-height', '700px')
        } else {
            jQuery('#content').css('min-height', '700px')
        }
        jQuery.ajax({
            url: all_vars.ajaxUrl,
            type: 'POST',
            data: 'action=webhosting_plan_features_front_action' + $fd + $pp + $mb + $ad + $cp + $pd + $ssh,
            success: function(results) {
                jQuery('.my_result').show();
                setTimeout(function() {
                    jQuery(".my_result").prepend('<div class="close_results"></div>')
                }, 10);
                jQuery(".my_result").html(results);
                jQuery('html, body').animate({
                    scrollTop: ($(".my_result").offset().top) - 130
                }, 1000)
            },
        error: function(responseText){
            console.log(responseText);
        }
        })
    });
    jQuery('body').on('click', '#more_link2', function(e) {
        e.preventDefault();
        var link = jQuery(this).attr('href');
        var Url = jQuery(this).attr('data-url');
        setTimeout(function() {
            jQuery('.more_link').last().css('min-height', '100px').html('<center><img style="margin:50px auto;" src="' + all_vars.templateUrl + '/images/loader_small.gif" class="loading_circle" alt="loading" /></center>')
        }, 10);
        setTimeout(function() {
            jQuery('.more_link').last().load(Url + ' .products-row-container')
        }, 100);
        jQuery('.more_link').last().html("<div class='more_link'></div>");
        jQuery('a#more_link2').last().remove();
        var elementHeightsxo = $('li.first-box-product div.plan_details_img').map(function() {
            return $(this).height()
        }).get();
        var maxHeightxo = Math.max.apply(null, elementHeightsxo);
        setTimeout(function() {
            $('li.first-box-product div.plan_details_img').height(maxHeightxo)
        }, 2500);
        var elementHeightsox = $('li.first-box-product div.plan_details').map(function() {
            return $(this).height()
        }).get();
        var maxHeightox = Math.max.apply(null, elementHeightsox);
        setTimeout(function() {
            $('li.first-box-product div.plan_details').height(maxHeightox)
        }, 2500);
        return false
    })
});
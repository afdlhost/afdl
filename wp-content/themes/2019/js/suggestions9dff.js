var eles = document.getElementsByClassName('custom-search');
for (var i = 0; i < eles.length; i++) {
    eles[i].addEventListener('keyup', function (event) {
        suggest(event);
    });
    eles[i].getElementsByTagName('input')[0].addEventListener('blur', function () {
        document.addEventListener('click', function () {
            suggestremove();
			/* document.removeEventListener(event.type, arguments.callee); */
			document.removeEventListener('click', arguments.callee);
        });
    });
}

function suggest(eve) {
    var str = eve.target.value;
    if (str.length == 0) {
        suggestremove();
        return;
    }
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            suggestremove();
            var snode = document.createElement('div');
            snode.innerHTML = xmlhttp.responseText + '<center><a href = ' + all_vars.siteUrl + '/?s=' + str + '> <div class = "search-deeper">' + xx.search_deeply +'<strong> '+ str + ' </strong></div> </a></center>';
            snode.className = 'search-suggestions';
            eve.target.parentNode.appendChild(snode);
            suggestbold(str, snode);
        }
    }
    xmlhttp.open("https://afdlhost.com/cheap-webhosting", all_vars.templateUrl + "/ajax.search.php?s=" + str, true);
    xmlhttp.send();
    /*	
     var data = "action=myAjaxFunction&str="+str;
     xmlhttp.open("POST",ajaxurl,true);
     xmlhttp.send(data);*/
}

function suggestremove() {
    var eles = document.getElementsByClassName('search-suggestions');
    while (eles.length > 0) {
        eles[0].parentNode.removeChild(eles[0]);
    }
}

function suggestbold(str, ele) {
    var t = ele.getElementsByTagName('li');
    var reg = new RegExp('(' + str + ')', 'ig');
    for (var j = 0; j < t.length; j++) {
        t[j].innerHTML = t[j].innerHTML.replace(reg, '<strong>$1</strong>');
    }
}
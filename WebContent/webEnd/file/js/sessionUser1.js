$().ready(function () {
    var username = sessionStorage.getItem('name');
    if (username != null) {
        $("#userName").html("欢迎你 <a href='#' id='nameContent'>" + username + "</a><div class='userBox'></div>");
        // var div = $("<div></div>");
        var div1 = $("<div><a href='order.html'>订单中心</a></div>");
        var div2 = $("<div id='exit'><a href='../../index.html'>退出登录</a></div>");

        $(".userBox").append(div1);
        $(".userBox").append(div2);
        var t = 0;
        $("#exit").click(function () {
            sessionStorage.removeItem('name');
            window.location = "index.html";
        })
        $("#nameContent").click(function () {
            if (t == 0) {
                $(".userBox").show();
                t = 1;
            } else {
                $(".userBox").hide();
                t = 0;
            }
        });
    } else {
        $("#userName").html('<a href="login.html">登录</a><a href="registered.html">注册</a>');
    }
    $('.SearchLogo').click(function () {
        var key = $(".search").val();
        window.location = 'produce.html?id='+key;
    })
});
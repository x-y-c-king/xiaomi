$(function () {
    function add(key) {
        $("#add" + key).click(function () {
            var number = parseInt($("#number" + key).html()) + 1;
            var price = parseFloat($("#price" + key).html().slice(0, -1));
            $('#countPrice' + key).html(price * number + '元')
            $("#number" + key).html(number);
        });
        $("#less" + key).click(function () {
            var number = parseInt($("#number" + key).html()) - 1;
            var price = parseFloat($("#price" + key).html().slice(0, -1));
            if (number != -1) {
                $("#number" + key).html(number);
                $('#countPrice' + key).html(price * number + '元')
            }
        });
        $("#delete" + key).click(function () {
            deleteShopping(key);
        });
    }
    function deleteShopping(key) {
        $.ajax({
            type: "POST",
            url: "../../../DefaultServlet", //servlet地址
            data:{key:"8",keyValue:key},//传的数据  form表单 里面的数据
            dataType:"text",//数据类型(json/xml/html/text 对于返回的值很关键)。如果返回的值是String则用text类型；如果返回的值是JSON则用json类型；
            async:true,//false是否异步
            success:function(data){//传数据成功之后的操作   data是servlet回传过来的数据  这个函数对result进行处
                if(data != -1){
                    window.location.reload();
                }
                //return data;
                // $("#resultDiv").html(data);
            },
            error:function(data){
                return 3;
                //$("#resultDiv").text("Error:" + JSON.stringify(data));
            }
        });

    }
    function shoppingCartShow() {
        $.ajax({
            type: "POST",
            url: "../../../DefaultServlet", //servlet地址
            data: {key: "7",userName:sessionStorage.getItem('name')},//传的数据  form表单 里面的数据
            dataType: "text",//数据类型(json/xml/html/text 对于返回的值很关键)。如果返回的值是String则用text类型；如果返回的值是JSON则用json类型；
            async: true,//false是否异步
            success: function (data) {//传数据成功之后的操作   data是servlet回传过来的数据  这个函数对result进行处
                var rows = data.split('@');
                var rowsArray = new Array();

                for (var i = 0; i < rows.length; i++) {
                    rowsArray.push(rows[i].split('$'));
                }

                var str = '<tr>\n' +
                    '                    <td><div class="btn btn-danger" id="allSelect">全选</div></td>\n' +
                    '                    <td>缩略图</td>\n' +
                    '                    <td>商品名</td>\n' +
                    '                    <td>单价</td>\n' +
                    '                    <td>数量</td>\n' +
                    '                    <td>小计</td>\n' +
                    '                    <td>操作</td>\n' +
                    '                </tr>';

                //1 $ 3699.0 $ 1 $ 小米cc9 Pro $miCC9Pro.jpg
                for (var i = 0; i < rowsArray.length; i++) {
                    str += '<tr>\n' +
                        '                    <td><input type="checkbox" value="' + rowsArray[i][0] + '"/></td>\n' +
                        '                    <td><img src="../../images/' + rowsArray[i][4] + '" width="50px" height="50px"/></td>\n' +
                        '                    <td>' + rowsArray[i][3] + '</td>\n' +
                        '                    <td id="' + "price" + rowsArray[i][0] + '">' + rowsArray[i][1] + '元</td>\n' +
                        '                    <td>\n' +
                        '                        <input type="button" class="btn btn-default" value="-" id="' + "less" + rowsArray[i][0] + '">\n' +
                        '                        <font id="' +"number"+ rowsArray[i][0] + '">' + rowsArray[i][2] + '</font>\n' +
                        '                        <input class="btn btn-default" type="button" value="+" id="' + "add" + rowsArray[i][0] + '">\n' +
                        '                    </td>\n' +
                        '                    <td id="' + "countPrice"+rowsArray[i][0] + '">' + rowsArray[i][1] * rowsArray[i][2] + '元</td>\n' +
                        '                    <td><input type="button" class="btn btn-primary" id="' + "delete" + rowsArray[i][0] + '" value="删除"/></td>\n' +
                        '                </tr>';
                }
                $('.shoppingCartContent').html(str);
                for(var i=0;i<rowsArray.length;i++) {
                    add(parseInt(rowsArray[i][0]));
                }
                var flag1 = 0;
                $("#allSelect").click(function () {
                    var input = $('input[type=checkbox]');
                    if (flag1) {
                        for (var i = 0; i < input.length; i++) {
                            input[i].checked = false;
                        }
                        flag1 = 0;
                    } else {
                        for (var i = 0; i < input.length; i++) {
                            input[i].checked = true;
                        }
                        flag1 = 1;
                    }

                    // if(input[i].checked){
                    //     alert(i+1);
                    // }

                });
                $("#ok").click(function () {
                    var select = $(":checkbox");
                    var orderId = "";
                    for (var i = 0; i < select.length; i++) {

                        if (select[i].checked) {
                            // id 单价 数量
                            var goodsId = select[i].value;             //商品id

                            var dt = new Array();
                            var date = new Date();
                            orderId = "";      //订单号
                            var time = date.getFullYear() + '-' + date.getMonth() + "-" + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds(); //时间
                            orderId += date.getFullYear().toString();
                            orderId += date.getMonth().toString();
                            orderId += date.getDate().toString();
                            orderId += date.getHours().toString();
                            orderId += date.getMinutes().toString();
                            orderId += date.getSeconds().toString();
                            orderId += i;

                            dt.push(goodsId);         ////商品id
                            dt.push($('#price' + goodsId).html());       //价格
                            dt.push($('#number' + goodsId).html());      //数量

                            $.ajax({
                                type: "POST",
                                url: "../../../DefaultServlet", //servlet地址
                                data: {
                                    key: "5",
                                    order: orderId,
                                    userName: sessionStorage.getItem('name'),
                                    goodsId: dt[0],
                                    time1: time,
                                    goodsNumber: dt[2],
                                    isSopping:1
                                },//传的数据  form表单 里面的数据
                                dataType: "text",//数据类型(json/xml/html/text 对于返回的值很关键)。如果返回的值是String则用text类型；如果返回的值是JSON则用json类型；
                                async: true,//false是否异步
                                success: function (data) {//传数据成功之后的操作   data是servlet回传过来的数据  这个函数对result进行处
                                    if (data != -1) {
                                        alert("购买成功！");
                                        window.location.reload();
                                    }
                                },
                                error: function (data) {
                                    alert("购买失败！");
                                }
                            });
                        }
                    }
                })
            },
            error: function (data) {
                showContent(0);
            }
        });

    }

    function showContent(data) {
        if (data == 0) {
            $('#empty').show();
            $('#full').hide();

        } else {
            $('#full').show();
            $('#empty').hide();
            shoppingCartShow();
        }
    }
    var Name = sessionStorage.getItem('name');
    if(Name != null){
        init();
    }else{
        showContent(0);
    }


    function init() {  //初始化
        $.ajax({
            type: "POST",
            url: "../../../DefaultServlet", //servlet地址
            data: {key: "6",userName:sessionStorage.getItem("name")},//传的数据  form表单 里面的数据
            dataType: "text",//数据类型(json/xml/html/text 对于返回的值很关键)。如果返回的值是String则用text类型；如果返回的值是JSON则用json类型；
            async: true,//false是否异步
            success: function (data) {//传数据成功之后的操作   data是servlet回传过来的数据  这个函数对result进行处
                showContent(data);
            },
            error: function (data) {
                showContent(0);
            }
        });
    }


    $("#ok").click(function () {
        var username = sessionStorage.getItem('name');  //用户名
        if (username != null) {
           // $(this).attr('id',"ok1");
        } else {
            alert("亲，请登录！");
        }
    });
    $(".toGG").click(function () {
        window.location = "produce.html";
    })

})
$().ready(function () {
    var url =  document.location.href.toString();
    var value = url.split('?');
    if (value.length != 1) {
        value[1] = decodeURI(decodeURI(value[1]));
        var values = value[1].split('=')[1];

        var valueArray = values.split('@');

        $('.contentRow2 > div:first-child').html('<img src="../../images/' + valueArray[2] + '" />'); //图片
        $('.content > div:first-child > div:first-child').html(valueArray[1]);  //标题1
        $('#caption').html(valueArray[4]); //标题2
        $('#content').html(valueArray[5]); //内容
        $('#price').html(valueArray[3]); //价格

        var colorArray = valueArray[7].split('*');
        var optionStr = "";
        for (var i = 0; i < colorArray.length; i++) {
            var str = ' <option value="' + colorArray[i] + '">' + colorArray[i] + '</option>';
            optionStr += str;
        }
        $('#selectOption').html(optionStr);  //颜色

        $('.ok > div:first-child').html(valueArray[1]+' '+colorArray[0]);
        $('.ok > div:last-child').html(valueArray[3] + '元');

        $('#zongJi').html("总结：" + valueArray[3] + "元");
    } else {
        document.location = "../../index.html";
    }

    var stock = 40;

    $('.less').click(function () {
        var price = $('#price').html();
        var number = parseInt($('.showNumber').html());
        if (number != 0) {
            $('.showNumber').html(number - 1);
            $('#zongJi').html("总结：" + price * (number - 1) + "元");
        }
    });
    $('.add').click(function () {
        var price = $('#price').html();
        var number = parseInt($('.showNumber').html());

        if (number != stock) {
            $('.showNumber').html(number + 1);
            $('#zongJi').html("总结：" + price * (number + 1) + "元");
        }
    });
    
    
    $('#selectOption').change(function () {
        $('.ok > div:first-child').html(valueArray[1]+' '+ $(this).val());
    });

    $('.addSoppingCart').click(function () {
        var username = sessionStorage.getItem('name');
        var danPrice = valueArray[3];
        var number =  $('.showNumber').html();
        if(username == null) {
            alert('亲，你还没有登录哦！')
        }else{
          //  valueArray 0:good_id;
            //1 goods 名; 2 img 3 价格 4 5 备注 6 时间 7 颜色 8手机 9 库存
            $.ajax({
                type: "POST",
                url: "../../../DefaultServlet", //servlet地址

                data:{key:"4",userName:username,goodsId:valueArray[0],goodsPrice:danPrice,goodsNumber:number},//传的数据  form表单 里面的数据
                dataType:"text",//数据类型(json/xml/html/text 对于返回的值很关键)。如果返回的值是String则用text类型；如果返回的值是JSON则用json类型；
                async:true,//false是否异步
                success:function(data){//传数据成功之后的操作   data是servlet回传过来的数据  这个函数对result进行处
                    alert("添加成功！");
                    //return data;
                    // $("#resultDiv").html(data);
                },
                error:function(data){
                    return 3;
                    //$("#resultDiv").text("Error:" + JSON.stringify(data));
                }
            });
        }
    });

    $('.subGouMai').click(function () {
        var date = new Date();

        var username = sessionStorage.getItem('name');
        var number =  $('.showNumber').html();
        var time = date.getFullYear()+'-'+date.getMonth()+"-"+date.getDate() + ' ' + date.getHours()+':'+date.getMinutes()+":"+date.getSeconds();

        var orderId = "";
        orderId += date.getFullYear();
        orderId += date.getMonth();
        orderId += date.getDate();
        orderId += date.getHours();
        orderId += date.getMinutes();
        orderId += date.getSeconds();
        orderId += 1;
        if(username == null) {
            alert('亲，你还没有登录哦！')
        }else{
            $.ajax({
                type: "POST",
                url: "../../../DefaultServlet", //servlet地址
                data:{key:"5",order:orderId,userName:username,goodsId:valueArray[0],time1:time,goodsNumber:number,isSopping:0},//传的数据  form表单 里面的数据
                dataType:"text",//数据类型(json/xml/html/text 对于返回的值很关键)。如果返回的值是String则用text类型；如果返回的值是JSON则用json类型；
                async:true,//false是否异步
                success:function(data){//传数据成功之后的操作   data是servlet回传过来的数据  这个函数对result进行处
                    if(data != -1){
                        alert("购买成功！");
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
    });

});
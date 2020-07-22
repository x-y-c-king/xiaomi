$().ready(function () {

    function message(data) {
        var one = data.split('@');
        var dt = new Array();
        var content = ' <tr>\n' +
            '                    <td>id</td>\n' +
            '                    <td>订单号</td>\n' +
            '                    <td>商品id</td>\n' +
            '                    <td>用户id</td>\n' +
            '                    <td>购买时间</td>\n' +
            '                    <td>用户名</td>\n' +
            '                    <td>商品名</td>\n' +
            '                    <td>缩略图</td>\n' +
            '                    <td>单价</td>\n' +
            '                    <td>购买数量</td>\n' +
            '                </tr>';
        for(var i=0;i<one.length;i++){
            dt.push(one[i].split('$'));
        }

        for(var i=0;i<dt.length;i++){
            content += '<tr>\n' +
                '                    <td>'+dt[i][0]+'</td>\n' +
                '                    <td>'+dt[i][1]+'</td>\n' +
                '                    <td>'+dt[i][2]+'</td>\n' +
                '                    <td>'+dt[i][3]+'</td>\n' +
                '                    <td>'+dt[i][4]+'</td>\n' +
                '                    <td>'+dt[i][5]+'</td>\n' +
                '                    <td>'+dt[i][6]+'</td>\n' +
                '                    <td><img src="../../images/'+dt[i][7]+'"></td>\n' +
                '                    <td>'+dt[i][8]+'</td>\n' +
                '                    <td>'+dt[i][9]+'</td>\n' +
                '                </tr>';
        }
        $('#order').html(content);
    }


    var username = sessionStorage.getItem("name");
    if(username != null){
        $.ajax({
            type: "POST",
            url: "../../../DefaultServlet", //servlet地址
            data:{key:"11",userNames:username},//传的数据  form表单 里面的数据
            dataType:"text",//数据类型(json/xml/html/text 对于返回的值很关键)。如果返回的值是String则用text类型；如果返回的值是JSON则用json类型；
            async:true,//false是否异步
            success:function(data){//传数据成功之后的操作   data是servlet回传过来的数据  这个函数对result进行处
                message(data);
                //return data;
                // $("#resultDiv").html(data);
            },
            error:function(data){
                return 3;
                //$("#resultDiv").text("Error:" + JSON.stringify(data));
            }
        });

    }else {
        alert("还没有登录");
    }


})
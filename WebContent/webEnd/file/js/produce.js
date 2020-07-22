$().ready(function () {
    var url = window.location.href;
    var avg = url.split('?');
    var gjz = null;
    var datas = new Array();
    if (avg.length != 1) {
        var pos = url.indexOf('=');
        gjz = url.substr(pos + 1);
        gjz = decodeURI(decodeURI(gjz));
    }
    function setData(datas){
    	this.datas = datas;
    }

    function message(data) {
    	
        var content = "";
        var splits = data.split('@');
        var size = splits.length;
        var datas = new Array()
        //alert(splits.length)
        for (var i = 0; i < splits.length * 3; i++) {
            datas.push(splits[i % size].split('$'));
        }
        for (var i = 0; i < datas.length; i++) {
            if (gjz != null) {
                if (datas[i][8] == gjz) {

                    content += '<a href="showProduce.html?id=' + encodeURI(encodeURI((datas[i].join("@")).trim())) + '"">\n' +
                        '            <div class="col-lg-3">\n' +
                        '                <img src="../../images/' + datas[i][2] + '" title="' + datas[i][1] + '" alt="' + datas[i][1] + '"/>\n' +
                        '                <p>' + datas[i][1] + '</p>\n' +
                        '                <p>' + datas[i][4] + '</p>\n' +
                        '                <p>' + datas[i][3] + '</p>\n' +
                        '            </div>\n' +
                        '        </a>';
                }
            } else {
                content += '<a href="showProduce.html?id=' + encodeURI(encodeURI((datas[i].join("@")).trim())) + '"">\n' +
                    '            <div class="col-lg-3">\n' +
                    '                <img src="../../images/' + datas[i][2] + '" title="' + datas[i][1] + '" alt="' + datas[i][1] + '"/>\n' +
                    '                <p>' + datas[i][1] + '</p>\n' +
                    '                <p>' + datas[i][4] + '</p>\n' +
                    '                <p>' + datas[i][3] + '</p>\n' +
                    '            </div>\n' +
                    '        </a>';
            }
        }
        if (content == "") {
            content = "没有找到数据";
        }
        $('.goodsContent').html(content);
        setData(datas);
    }
    function setData(datas){
        $('.SearchLogo1').click(function () {
            var t = $('.search1').val();
            var content1 = "";
            for (var i = 0; i < datas.length; i++) {
                if (datas[i][1].indexOf(t) != -1) {

                    content1 += '<a href="showProduce.html?id=' + encodeURI(encodeURI((datas[i].join("@")).trim())) + '"">\n' +
                        '            <div class="col-lg-3">\n' +
                        '                <img src="../../images/' + datas[i][2] + '" title="' + datas[i][1] + '" alt="' + datas[i][1] + '"/>\n' +
                        '                <p>' + datas[i][1] + '</p>\n' +
                        '                <p>' + datas[i][4] + '</p>\n' +
                        '                <p>' + datas[i][3] + '</p>\n' +
                        '            </div>\n' +
                        '        </a>';
                }
            }
            if(content1 == ""){
                alert('暂无该商品!');
            }else{
                $('.goodsContent').html(content1);
            }


        })
    }

    $.ajax({
        type: "POST",
        url: "../../../DefaultServlet", //servlet地址
        data: {key: "9"},//传的数据  form表单 里面的数据
        dataType: "text",//数据类型(json/xml/html/text 对于返回的值很关键)。如果返回的值是String则用text类型；如果返回的值是JSON则用json类型；
        async: true,//false是否异步
        success: function (data) {//传数据成功之后的操作   data是servlet回传过来的数据  这个函数对result进行处
            message(data);
        },
        error: function (data) {
            return 3;
        }
    });
})
;
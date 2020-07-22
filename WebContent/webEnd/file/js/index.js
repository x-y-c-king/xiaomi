$().ready(function () {
    //////////////////


    //轮播图片
    Carousel();
    function Carousel(){
        $.ajax({
            type: "POST",
            url: "../DefaultServlet",
            data:{key:"10"},
            dataType:"text",
            async:true,
            success:function(data){
                var carouselPaths = data.split('$');
                var zb = "";        //项目
                var xm = "";        //指标
                for(var i=0;i<carouselPaths.length;i++) {
                    if(i==0){i
                        zb += ' <li data-target="#myCarousel" data-slide-to="'+i+'" class="active"></li>';
                        xm += ' <div class="item active"><img src="images/Carousel/'+carouselPaths[i]+'" alt=""></div>'
                    }else{
                        zb += '<li data-target="#myCarousel" data-slide-to="'+i+'"></li>';
                        xm += '<div class="item"><img src="images/Carousel/'+carouselPaths[i]+'" alt=""></div>'
                    }
                }
                if(zb != ""){
                	 $('#zb').html(zb);
                     $('#xm').html(xm);
                }
               
            },
            error:function(data){

            }
        });

    }

    //显示导航的图片
    function addContent(number,rowArray,value) {
        var key = Math.ceil(number / 10);

        for (var i = 0; i < key; i++) {
            var size;
            var row3Div = '<div class="col-lg-3">';
            if ((i + 1) == key) {
                if (number % 10 != 0) {
                    size = number % 10;
                } else {
                    size = 10;
                }
            } else {
                size = 10;
            }
            for (var j = 0; j < size; j++) {
                row3Div += '<img src="images/' + rowArray[i * 10 + j][2] + '"  class="col-lg-3" title="'+rowArray[i * 10 + j][1]+'"/>';
                row3Div += '<div class="col-lg-offset-1 col-lg-8">' + (rowArray[i * 10 + j][1]).substr(0,5) + '</div>';
            }
            row3Div += '</div>';
            $('.row3Box > div > div:nth-of-type('+value+') .row3innerBox').html(row3Div);
        }
    }
    function replacePhone(data) {  //替换手机内容
        var top = "";
        var bottom = "";
        var size = data.length;
        for(var i=0;i<4;i++){
            data[i] = data[i%size];
            // if(i >= size){
            //     data[i] = data[1];
            // }
            top+='<a href="file/html/showProduce.html?id='+encodeURI(encodeURI((data[i].join("@")).trim() ))+'"><div class="col-lg-3">\n' +
                '                        <img src="images/'+ data[i][2] +'" title="'+data[i][1]+'" alt="'+data[i][1]+'"/>\n' +
                '                        <p>'+data[i][1]+'</p>\n' +
                '                        <p>'+data[i][4]+'</p>\n' +
                '                        <p>'+data[i][3]+'</p>\n' +
                '                    </div></a>'
        }
        for(var i=4;i<8;i++){
            data[i] = data[i%size];
            // if(i >= size){
            //     data[i] = data[1];
            // }
            bottom+='<a href="file/html/showProduce.html?id='+ encodeURI(encodeURI((data[i].join("@")).trim() )) +'"><div class="col-lg-3">\n' +
                '                        <img src="images/'+ data[i][2] +'" title="'+data[i][1]+'" alt="'+data[i][1]+'"/>\n' +
                '                        <p>'+data[i][1]+'</p>\n' +
                '                        <p>'+data[i][4]+'</p>\n' +
                '                        <p>'+data[i][3]+'</p>\n' +
                '                    </div></a>'
        }
        $(".row6Box > div:last-child .row6Content:nth-of-type(1)").html(top);
        $(".row6Box > div:last-child .row6Content:nth-of-type(2)").html(bottom);

    }
    function replaceHomeDian(data) {
        var size = data.length;

        var top = "<a><div class=\"col-lg-offset-1 col-lg-2\">\n" +
            "                    <img src=\"images/Appliances/appliancesLogo1.jpg\" title=\"小米CC9 Pro\" alt=\"小米CC9 Pro\"/>\n" +
            "                </div></a>";
        var bottom = "<a><div class=\"col-lg-offset-1 col-lg-2\">\n" +
            "                    <img src=\"images/Appliances/appliancesLogo2.jpg\" title=\"小米CC9 Pro\" alt=\"小米CC9 Pro\"/>\n" +
            "                </div></a>";
        
        for(var i=0;i<4;i++) {
            data[i] = data[i % size];

            top+='<a href="file/html/showProduce.html?id='+ encodeURI(encodeURI((data[i].join("@")).trim() )) +'"><div class="col-lg-2">\n' +
                '                    <img src="images/Appliances/'+data[i][2]+'" title="'+data[i][1]+'" alt="'+data[i][1]+'"/>\n' +
                '                    <p>'+data[i][1]+'</p>\n' +
                '                    <p>'+data[i][4]+'</p>\n' +
                '                    <p>'+data[i][3]+'</p>\n' +
                '                </div></a>'
        }

        for(var i=4;i<8;i++) {
            data[i] = data[i % size];

            bottom+='<a href="file/html/showProduce.html?id='+ encodeURI(encodeURI((data[i].join("@")).trim() )) +'"><div class="col-lg-2">\n' +
                '                    <img src="images/Appliances/'+data[i][2]+'" title="'+data[i][1]+'" alt="'+data[i][1]+'"/>\n' +
                '                    <p>'+data[i][1]+'</p>\n' +
                '                    <p>'+data[i][4]+'</p>\n' +
                '                    <p>'+data[i][3]+'</p>\n' +
                '                </div></a>'
        }
        $('#AppliancesContent1 > div:first-child').html(top);
        $('#AppliancesContent1 > div:last-child').html(bottom);
    }
    function replaceParts(data) {
        var size = data.length;
        var top = '<a><div class="col-lg-offset-1 col-lg-2">\n' +
            '                    <img src="images/parts/partsLogo1.jpg"/>\n' +
            '                </div></a>';
        var bottom = '<a><div class="col-lg-offset-1 col-lg-2">\n' +
            '                    <img src="images/parts/partsLogo2.jpg" title="小米CC9 Pro" alt="小米CC9 Pro"/>\n' +
            '                </div></a>';

        for(var i=0;i<4;i++) {
            data[i] = data[i % size];
            top += '<a href="file/html/showProduce.html?id='+ encodeURI(encodeURI((data[i].join("@")).trim() )) +'"><div class="col-lg-2">\n' +
                '                    <img src="images/parts/'+data[i][2]+'" title="'+data[i][1]+'" alt="'+data[i][1]+'"/>\n' +
                '                    <p>'+data[i][1]+'</p>\n' +
                '                    <p>'+data[i][4]+'</p>\n' +
                '                    <p>'+data[i][3]+'</p>\n' +
                '                </div></a>';
        }
        for(var i=4;i<8;i++) {
            data[i] = data[i % size];
            bottom += '<a href="file/html/showProduce.html?id='+ encodeURI(encodeURI((data[i].join("@")).trim() )) +'"><div class="col-lg-2">\n' +
                '                    <img src="images/parts/'+data[i][2]+'" title="'+data[i][1]+'" alt="'+data[i][1]+'"/>\n' +
                '                    <p>'+data[i][1]+'</p>\n' +
                '                    <p>'+data[i][4]+'</p>\n' +
                '                    <p>'+data[i][3]+'</p>\n' +
                '                </div></a>';

        }
        $('#AppliancesContent2 > div:first-child').html(top);
        $('#AppliancesContent2 > div:last-child').html(bottom);

    }

    function message(data,flag){
        var row = parseInt((data.split(' '))[0]) ;
        var noLength = data.indexOf(" ");
        var rowData = data.slice(noLength);

        var rows = rowData.split("#");

        var allDataArray = new Array();
        for(var i=0; i<row; i++) {
            allDataArray.push (rows[i].split("$"));
        }
        addContent(row,allDataArray,flag);          //处理返回数据，在导航的导航框理显示

        switch (flag) {
            case 1:
                replacePhone(allDataArray);
                break;
            case 2:

                break;
            case 3:break;
            case 4:
                replaceHomeDian(allDataArray);
                break;
            case 5:break;
            case 6:break;
            case 7:
                replaceParts(allDataArray);
                break;
            case 8:break;
            case 9:break;
            case 10:break;
        }

    }
    
    function navData(myValue,flag){
        $.ajax({
            type: "POST",
            url: "../DefaultServlet",
            data:{key:"3",valueKey:myValue},
            dataType:"text",
            async:true,
            success:function(data){
                message(data,flag);
                // $("#resultDiv").html(data);
            },
            error:function(data){
                //$("#resultDiv").text("Error:" + JSON.stringify(data));
            }
        });
    }
    navData("手机",1);
    navData("电视",2);
    navData("笔记本",3);
    navData("家电",4);
    navData("穿戴",5);
    navData("路由器",6);
    navData("配件",7);
    navData("健康",8);
    navData("耳机",9);
    navData("生活",10);

});



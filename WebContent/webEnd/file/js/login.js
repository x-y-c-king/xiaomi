$().ready(function () {

    /// 验证码
    var code = "";

    function codefn(){
        code = "";
        for(var i=0;i<6;i++) {
            code += Math.floor(Math.random()*10).toString();
        }
        $(".random").html(code);
    }
    codefn();
    $(".random").click(function() {codefn();});

    //登录
    function isNull(id,str){
        $(id).blur(function () {
            var name = $(this).val().trim();
            if(name == ""){
                $(".error").show();
                $("#error").html(str);
            }else{
                $(".error").hide();
            }
        });
    }
    isNull("#name","用户名不能为空！");
    isNull("#password","密码不能为空！");
    $("#code").blur(function () {
      if( $(this).val() == code ){
          $(".error").hide();
      }else{
          $(".error").show();
          $("#error").html("验证码不正确！");
      }
    });

    //ajax异步传回值的操作
    function message(data){
        var name = $("#name").val();
        switch (parseInt(data)) {
            case 1:
                $(".error").hide();
                sessionStorage.setItem("name",name);
                window.location = "../../index.html";
                break;
            case 2:
                $(".error").show();
                $("#error").html("用户名不存在！");
                break;
            case 3:
                $(".error").show();
                $("#error").html("用户名或密码不正确！");
                break;
            default:
                alert(data);
        }
    }
    function verify(name,password){
        $.ajax({
            type: "POST",
            url: "../../../DefaultServlet", //servlet地址
            data:{key:"1",userNames:name,passWords:password},//传的数据  form表单 里面的数据
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
    }
    $("#login").click(function () {
        var name = $("#name").val();
        var password = $("#password").val();
        var inputCode = $("#code").val();

        if(name == ""){
            $(".error").show();
            $("#error").html("请输入用户名！");
        }else{
            $(".error").hide();
            if(password == ""){
                $(".error").show();
                $("#error").html("请输入密码！");
            }else{
                $(".error").hide();
                if(inputCode != code){
                    $(".error").show();
                    $("#error").html("验证码不正确！");
                }else {
                    $(".error").hide();
                    verify(name, password);
                }
            }
        }
    });

});
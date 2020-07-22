$().ready(function () {
    function message(data) {
        var name = $("#name").val();
        if(eval(data)) {
            $(".error").hide();
            sessionStorage.setItem("name",name);
            window.location = "../../index.html";
        }else{
            $(".error").show();
            $("#error").html("用户名也存在，请从新输入！");
        }
    }

    function addUser(name,pwd){
        $.ajax({
            type: "POST",
            url: "../../../DefaultServlet", //servlet地址
            data:{key:"2",userNames:name,passWords:pwd},//传的数据  form表单 里面的数据
            dataType:"text",//数据类型(json/xml/html/text 对于返回的值很关键)。如果返回的值是String则用text类型；如果返回的值是JSON则用json类型；
            async:true,//false是否异步
            success:function(data){//传数据成功之后的操作   data是servlet回传过来的数据  这个函数对result进行处
                message(data);
                //return data;
                // $("#resultDiv").html(data);
            },
            error:function(data){
                message(false);
                //$("#resultDiv").text("Error:" + JSON.stringify(data));
            }
        });

    }
    $("#name").blur(function () {
      if ( $(this).val() == ""){
          $(".error").show();
          $("#error").html("用户名不能为空！");
      }else{
          $(".error").hide();
      }
    });
    $("#pwd").blur(function () {
        if ( $(this).val() == ""){
            $(".error").show();
            $("#error").html("密码不能为空！");
        }else{
            $(".error").hide();
        }
    });
    $("#newPwd").blur(function () {

        if ($(this).val() != $("#pwd").val() ){
            $(".error").show();
            $("#error").html("两次密码输入不一样！");
        }else{
            $(".error").hide();
        }
    });

    $("#registereds").click(function () {
        var name = $("#name").val();
        var pwd = $("#pwd").val();
        var newPwd = $("#newPwd").val();

        if(name != ""){
            $(".error").hide();
            if(pwd != ""){
                $(".error").hide();
                if(pwd == newPwd){
                    $(".error").hide();

                    addUser(name,pwd);

                }else {
                    $(".error").show();
                    $("#error").html("两次密码输入不一样！");
                }

            }else{
                $(".error").show();
                $("#error").html("密码不能为空！");
            }
        }else{
            $(".error").show();
            $("#error").html("用户名不能为空!");
        }

    })
})
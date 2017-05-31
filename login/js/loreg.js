// JavaScript Document

	/**
	登陆界面--用户名，密码检验函数
	*/
	function yz(obj){
		
		var error = 0;
		var pass = 0;
		
		//检验用户名是否在数据库中，必须要进行数据库查询，我现在先设个变量error，把数据库查到的那个值给error，
		if(error!=0)
		{
			   document.getElementById('usern').innerHTML = '该用户名不存在';
		}
		//密码检验，也只是检测密码长度是否符合规定
		for(j=0;j<obj.password.value.length;j++)
		{
			if(obj.password.value.length < 6 || obj.password.value.length > 20)
			{
				document.getElementById('passw').innerHTML = '请输入正确密码';	
			}	
		}
	}
	
	/**
	注册页面--用户名，邮箱，密码检验函数
	*/
	
	function Check () {
		var name = document.all.form1.username.value;			
		var psd = document.all.form1.password.value;
		var confirpsd = document.all.form1.confirepassword.value;
				
		if(!name){
			document.getElementById('name').innerHTML = '请输入用户名';
		}
		var emailStr=document.all.form1.email.value;
		var emailPat=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
				
		if (!emailPat.test(emailStr)) {
			document.getElementById('email').innerHTML = '请输入正确的邮箱地址';
		}
		if(!psd){
			document.getElementById('psd').innerHTML = '请输入密码';
		}
		if(!(psd == confirpsd)){
			document.getElementById('confpsd').innerHTML = '两次密码输入不相同';
		}
	}
	
	/**
	传输用户名密码给后台
	*/
	function logincheck(){  
		var name = document.all.frm.username.value;			
		var psd = document.all.frm.password.value;
		$.ajax({
			type: "POST",
			url: "login.php",
			dataType:'json',
			data: {'username':name,'password':psd},   //也可以是字符串链接"name=张三&sex=1"，建议用对象
			success: function(data){
				//实际操作的时候，返回的json对象中可能会有成功错误的判断标记，所以可能也需要判断一下
				//var str = data.year + "年" + data.month + "月" + data.day+"日  "+data.hour + ":" + data.min + ":"+ data.sec;
				//console.log("返回的数据: " + data );
				alert("用户名" + data.name +"   "+data.pwd);
				//$("tbody").append(str);
				//$("#hhh").text(str);
				sessionStorage.setItem("username", data.name);
				sessionStorage.setItem("password", data.pwd);
				//通过key来获取value
				var dt = sessionStorage.getItem("username");
				alert(dt);
				window.location.href='main.html';
				//清空所有的key-value数据。
				//sessionStorage.clear();
				//alert(sessionStorage.length);
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				// 通常 textStatus 和 errorThrown 之中
				// 只有一个会包含信息
				// this 调用本次AJAX请求时传递的options参数
				alert("出错了");
			}	
		});
	}
	



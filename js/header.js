$(function(){
	  $(".subordinate").mouseover(function(){ //计算子菜单出现位置 屏幕宽度大于900时
		   $(this).children('.sub').css("left",$(this).width()+20+'px');
	  });
	  function getSubMenu(html){  //显示子菜单时使用 一个含有返回按钮的元素
		  return  "<ul class='showMenu sub'><li class='breakMenu'>返回</li>" +html+"</ul>";
	  }
	  $(".menu").click(function(event){   //因为后面添加的节点 在这直接click是不会触发事件 所以在这用事件冒泡
		if($(window).width()>900) return; //小屏幕使用 
		  var target = event.target.tagName =='SPAN' ? $(event.target).parent("li") : $(event.target);
		  var className= target.attr("class");
		  if(className=='submenu' || className=='subordinate'){ 
			 $(".menu").append(getSubMenu(target.children(".sub").html()));
			 $(".menu").children("ul:last-child").animate({"left":'0'},300);
		  }else if(className == 'breakMenu'){ //点击返回 
				$(target).parent(".showMenu").animate({"left":'-100%'},300,function(){
					$(this).remove();
				})
		  }
	  })
	  $("#navSwitch").click(function(){ //小窗口 点击按钮 展示或者收缩顶级菜单
		 if($(".menu").offset().left==0){
			   $("#navSwitch").removeClass('open')
			   $(".menu").animate({"left":'-100%'},300)
		      $("nav").removeClass("nav_open")
		 }else{
			 $("#navSwitch").addClass('open')
			 $(".menu").animate({"left":'0'},300)
			 $("nav").addClass("nav_open")
		 }
	  })
	  $(window).resize(function(){  // 监听resize事件
		  if($(window).width()>900&&$(".showMenu").length>0){
			   $(".showMenu").remove(); //移除所有已经显示出来的子菜单
		  }
	  })
})
function toPath(url){
	location.href=url;
}
function dataWrite(obj,num){
	let str = $(obj).html();
	let html='';
	for(let i=0;i<num;i++){
		html+=str;
	}
	$(obj).html(html);
}
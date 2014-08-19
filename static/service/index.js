base.addScript(RELATIVE_PATH+'service/module/resume-table.js'); 
$(function(){
	var tbCon = $('#tb')[0];
	var naviCon = $('.navi')[0];
	
	var tb = new base.ResumeTable();
	$(tbCon).append(tb.getRoot());
	tb.reflushData(base.ResumeTable.Data);
	
    var navi_data = [
		{data:{label:'关于我',index:0}},
		{data:{label:'个人简历预览',index:1}}
	];
	
	var select = function(inx,ele,data){
		$('.content').each(function(i){
			if(inx == 0){
				tb.init();
			}
			if(i==inx){
				$(this).show();
			}else{
				$(this).hide();
			}
		});
	};

	var t = new base.component.TabNavi({
		cb_select:select,
		default_index:1,
	});
	$(naviCon).append(t.getRoot());
	t.reflushData(navi_data);
})

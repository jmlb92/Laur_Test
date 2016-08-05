$('#bt_render').on('click', function(){
	if (!$("#raw_html").val()) {
		alert("Ingrese HTML");
	}
	else{
		var html = $('#raw_html').val();
		var parsed = $.parseHTML(html);
		$('.render_html').html(parsed);
	}
	
});

var res = [];

$('#bt_process').on('click', function(){
	if (!$("#raw_html").val()) {
		alert("Ingrese HTML");
	}
	else{
		var html = $('#raw_html').val();
		res = html.match(/([_][_]%%)+([a-zA-Z0-9]*)+(%%[_][_])/g);
		//console.log(res);
		var arr = [];
		$.each(res, function(index, value){
			arr.push('<tr class="replacements"><td class="orig">'+ value +'</td><td class="rep"><input type="text" class="tf_'+ index + '"></td></tr>');
		});
		$('#tabla').html(arr.toString().replace(',', ''));
	}
});

$('#bt_replace').on('click', function(){
	

	if (!$("#raw_html").val()) {
		alert("Ingrese HTML");
	}
	else{
		var html = $('#raw_html').val();
		$.each(res, function(index, val){
			$(".render_html *").replaceText(val, $('#tbl td.rep input')[index].value);

		});
	}
});

$('#bt_print').on('click', function(){

	 if (!$("#raw_html").val()) {
		alert("Ingrese HTML");
	}
	else{
		$(document).ready(function(){
	  		$('#render_html').printThis();
	  	});
	}

	  

});
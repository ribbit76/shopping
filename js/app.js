$(document).ready(function(){
  	//validate text box and enter items	
		$('#items-needed').click(function() {
			//alert("I can click!");
			if ( $('#items').val().trim().length == 0 ) {
				//alert("No Value!!!");
				$('#empty').show();
				} else {
					//alert("We have Value!");
          var value=$('input').val();
          var fullHtmlItem="<li>"+value+"</li>";
					$('ul').append('<li class="todo"><button class="item">Done</button>' + $(fullHtmlItem).text() + '</li>');
					$('#empty').hide();
					$('input#items').val("");
				}

		});
//when user clicks done
					$('ul').on('click', '.item', function() {
					$(this).closest('li').toggleClass('todo done');
					$(this).remove();
	})

});





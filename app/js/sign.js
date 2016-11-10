define(function(require,exports,module) {
	var nav = require('../view/nav-left.html');
	
	var navjs = require('../js/nav.js');
	var sigin = {
		init:function(){
			this.render();
		},
		events:function(event){
			navjs.init();
			$('.sign_in_click').click(function() {
			$(this).addClass('active')
			$('.sign_out_click').removeClass('active')
			$('.sign_in').show();
			$('.sign_out').hide()
		});
		$('.sign_out_click').click(function() {
			$(this).addClass('active')
			$('.sign_in_click').removeClass('active')
			$('.sign_out').show()
			$('.sign_in').hide()
		})
		},
		render:function(){
			$('.ccl-nav').html(nav);
			this.events();
		}
	};

	module.exports = sigin;
})
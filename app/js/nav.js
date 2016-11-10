define(function(require,exports,module){
	var nav_left = require('../view/nav-left.html');

	var nav = {
		init:function(){
			this.render();
			this.setInterval();
		},
		events:function(){
			$('.ccl-nav-left a .icon-mulu').hover(function(){
			$('.ccl-nav-left a .mulu').css({display:'block'});
			},function(){
				$('.ccl-nav-left a .mulu').css({display:'none'});
			});

			$('.ccl-nav-left a .icon-shouji').hover(function(){
				$('.shouji').css({display:'block'});
			},function(){
				$('.shouji').css({display:'none'});
				$(function(){
					$('.shouji').hover(function(){
						$('.shouji').css({display:'block'})
					},
					function(){
						$('.shouji').css({display:'none'})
					});
				});
			});
		},
		setInterval:function(){
			var timer = setInterval(runloop,4000);
			var count=0;
			function runloop(){
				count++
				if (count==3){
					count=0
				}
				$('.ccl-nav-img .img').eq(count).show().siblings('.img').hide();
			}
		},
		render:function(){
			$('.ccl-nav-left').html(nav_left);
			this.events();
		}
	}
	module.exports = nav;
})


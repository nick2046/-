define(function(require,exports,module){
	var article = require('../view/article-list.html');
	var _html = _.template(article);
	var download = require('../view/app-download-guide.html');
	var nav = require('../view/nav.html');
	var navjs = require('../js/nav.js');

	var index = {
		init:function(){
			this.server();
		},
		events:function(){
			var that = this;
			 navjs.init();
			 var unstyled = $('.unstyled');
			    for(var i = 0;i < that.res.array.length;i++){
			    	unstyled.append('<li><a href="#">'+that.res.array[i]+'</a></li>')
			    }
			    unstyled.find('li').eq(0).addClass('active');

			$('.article-list').html(_html({data:that.res.article}));
			$('.article-list .have-img').eq(3).before(download);
			$('.qrcode').hover(function(){
				$('.btn-part .img').css("display","block");
			},function(){
				$('.btn-part .img').css("display","none");
			});
		},
		render:function(){
			$('#nav').html(nav);
			this.events();
		},
		server:function(){
			var that = this;
			$.ajax({
				url:'../jianshu.json',
				type:'get',
				success:function(res){
					that.res = res;
					that.render();
				}
			});
		}
	}
	module.exports = index;
})

define(function(require, exports, module) {
    var nav_left = require('../view/nav-left.html');
    var navjs = require("../js/nav.js");

    var Choice = {
        init: function() {
            this.render();
        },
        events: function() {
            navjs.init();
            $('.open-in-mobile').click(function() {
                $('.modal').css({ "display": "block" });
            });
            $('.button').click(function() {
                $('.modal').css({ "display": "none" });
            })
            $('.share-container .more .icon-jiantou').click(function() {
                $('.icon-jiantou').addClass('active');
                $('.dropdown-menu').css({ "display": "block" });
            })
            $('.share-container .more em').click(function() {
                $('.icon-jiantou').removeClass('active');
                $('.dropdown-menu').css({ "display": "none" });
            })
            $('.swiper-slide').hover(function(e) {
                var $index = $(e.currentTarget);
                $('.pan .mask').eq($index.index()).css({ "opacity": '1' })
                $('.pan .mask .btn').eq($index.index()).css({ "display": "block" });
            }, function(e) {
                var $index = $(e.currentTarget);
                $('.pan .mask').eq($index.index()).css({ "opacity": '0' })
                $('.pan .mask .btn').eq($index.index()).css({ "display": "none" });
            })
        },
        render: function() {
            $('.ccl-nav').html(nav_left);
            this.events();
        }
    }
    module.exports = Choice;
});

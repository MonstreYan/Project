(function($, window, document, undefined) {

	var pluginName = "tabulous",
		defaults = {
			effect: 'slideLeft'
		};

	function Plugin(element, options) {
		this.element = element;
		this.$elem = $(this.element);
		this.options = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	Plugin.prototype = {

		init: function() {

			var links = this.$elem.find('a');
			var firstchild = this.$elem.find('li:first-child').find('a');
			var lastchild = this.$elem.find('li:last-child').after('<span class="tabulousclear"></span>');

			tab_content = this.$elem.find('.tabs_container_item').not(':first').not(':nth-child(1)').addClass('hideleft');

			var firstdiv = this.$elem.find('#tabs_container');
			var firstdivheight = firstdiv.find('div:first').height();
			
			var alldivs = this.$elem.find('.tabs_container_item');
			alldivs.css({
				'position': 'absolute',
				'top': '40px'
			});

			firstdiv.css('height', firstdivheight + 'px');

			firstchild.addClass('tabulous_active');
			firstchild.parent().addClass('tab_li_active')

			links.bind('click', {
				myOptions: this.options
			}, function(e) {
				
				console.log('执行了-----')
				e.preventDefault();

				var $options = e.data.myOptions;
				var effect = $options.effect;
				//a
				var mythis = $(this);
				console.dir(mythis);
				
				//thisform -> #tabs2
				var thisform = mythis.parent().parent().parent();

				//跳转到的模块：#tabs-n
				var thislink = mythis.attr('href');

				firstdiv.addClass('transition');

				//标签样式变化
				links.removeClass('tabulous_active');
				links.parent().removeClass('tab_li_active');
				mythis.addClass('tabulous_active');
				mythis.parent().addClass('tab_li_active');

				thisdivwidth = thisform.find('div' + thislink).height();

				alldivs.removeClass('showleft').addClass('make_transist').addClass('hideleft');
				thisform.find('div' + thislink).addClass('make_transist').addClass('showleft');

				firstdiv.css('height', thisdivwidth + 'px');

			});

		},

		yourOtherFunction: function(el, options) {
			// some logic
		}
	};

	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[pluginName] = function(options) {
		return this.each(function() {
			new Plugin(this, options);
		});
	};

})(jQuery, window, document);
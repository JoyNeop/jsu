/*
	@author Neruthes
	@year 2020
	@license AGPL-3.0 https://www.gnu.org/licenses/agpl-3.0.html
*/

window.uuid_10a70394667c4d3a947f7c3954e83951_func = function (styleTag, arg1, callback) {
	var styleText = `html, body, h1, h2, h3, h4, h5, h6, p, ul, ol, li, aside, textarea, input, button, blockquote, form, table, tbody, tl, td, tr, article, section, div, figure, header, footer, q, cite, em, strong, span, address, time, dfn, caption
	{
		color: #AAA !important;
		background-color: #000 !important;
		box-shadow: none !important;
	}
	pre, code, pre code {
		background: rgba(255, 255, 255, 0.15);
	}
	a, a > * {
		color: #C80;
	}
	`;
	if (styleTag) {
		styleTag.remove();
		callback({
			err: 0,
			msg: 'Removed night.js styles.',
			enabled: false
		});
	} else {
		var st = document.createElement('style');
		st.setAttribute('id', 'uuid_10a70394667c4d3a947f7c3954e83951');
		st.innerHTML = styleText;
		document.head.appendChild(st);
		callback({
			err: 0,
			msg: 'Added night.js styles.',
			enabled: true
		});
	};
});

window.uuid_10a70394667c4d3a947f7c3954e83951_func(document.getElementById('uuid_10a70394667c4d3a947f7c3954e83951'));

(function () {
	function applyIcon() {
		var btn = document.getElementById('theme-toggle-btn');
		if (!btn) return;
		var isDark = document.documentElement.classList.contains('dark-mode');
		btn.className = isDark ? 'fa-sun' : 'fa-moon';
		btn.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
	}

	document.addEventListener('DOMContentLoaded', function () {
		applyIcon();
		var btn = document.getElementById('theme-toggle-btn');
		if (!btn) return;
		btn.addEventListener('click', function (e) {
			e.preventDefault();
			var isDark = document.documentElement.classList.toggle('dark-mode');
			try {
				localStorage.setItem('gics-theme', isDark ? 'dark' : 'light');
			} catch (err) {}
			applyIcon();
		});
	});
})();

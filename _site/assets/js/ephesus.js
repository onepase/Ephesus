function toggleNightMode(){
	if(document.documentElement.getAttribute('data-theme') == 'light'){
		document.documentElement.setAttribute('data-theme', 'dark');
		document.getElementById('mode-switcher').classList.add('active');
		localStorage.setItem("theme","dark");
	}
	else{
		document.documentElement.setAttribute('data-theme', 'light');
		document.getElementById('mode-switcher').classList.remove('active');
		localStorage.setItem("theme","");
	}
}
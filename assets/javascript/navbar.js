let mainHench = {
	toggleSidebar: function() {
		let menuButton = document.querySelector( '.burger-logo' );
		let navigationBar = document.getElementById( 'navbar-box' );

		menuButton.addEventListener( 'click', function() {
			navigationBar.classList.toggle( 'sidemenu-opened' );
			document.getElementsByTagName( 'body' )[0].classList.toggle( 'no-scroll' );
		});
	}
}

document.addEventListener("DOMContentLoaded", function(event) { 
	mainHench.toggleSidebar();
})
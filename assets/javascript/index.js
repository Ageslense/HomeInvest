let homeHench = {
	toggleAdvancedSearch: function() {
		let triggerButton = document.querySelector( '.advanced-search' );
		let advancedSearchFields = document.getElementById( 'advanced-search-details' );

		triggerButton.addEventListener( 'click', function() {
			// If the advanced search fields are hidden
			// Remove the class and alter the wording on the button
			// 
			if ( advancedSearchFields.classList.contains( 'hidden' ) ) {
				advancedSearchFields.classList.remove( 'hidden' );
				triggerButton.innerHTML = 'Hide Advanced Search';
			} else {
				advancedSearchFields.classList.add( 'hidden' );
				triggerButton.innerHTML = 'Advanced Search';
			}
		});
	},
	toggleGraphsHoverState: function() {
		let bars = document.querySelectorAll( '.bar' );

		bars.forEach( function( bar ) {
			// On mouse hover select the hovered item and add class to its parent and that very object
			// Styling is on the CSS file
			// 
			bar.addEventListener( 'mouseover', function(el) {
				let hoveredBar = el.target;
				hoveredBar.parentNode.classList.add( 'bars-hovered' );
				hoveredBar.classList.add( 'bar-hovered' );
			});
			bar.addEventListener( 'mouseleave', function() {
				bar.parentNode.classList.remove( 'bars-hovered' );
				bar.classList.remove( 'bar-hovered' );
			});
		})
	}
}

document.addEventListener("DOMContentLoaded", function(event) { 
	homeHench.toggleAdvancedSearch();
	homeHench.toggleGraphsHoverState();
});
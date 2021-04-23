const openSidebarButton = document.getElementById("toggleSideNavBtn");
const closeSidebarButton = document.getElementById("closeSideNavBtn");
const sideNavbar = document.getElementById("sideNavbar");

function openCloseSideNavbar() {
	if (sideNavbar.classList.contains("inactive-close-sidebar")) {
		sideNavbar.classList.remove("inactive-close-sidebar");
		sideNavbar.classList.add("active-open-sidebar");
	} else {
		sideNavbar.classList.remove("active-open-sidebar");
		sideNavbar.classList.add("inactive-close-sidebar");
	}
}

(function () {
	var swiper = new Swiper(".swiper-container", {
		slidesPerView: 3,
		spaceBetween: 10,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: false,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			// when window width is >= 700px
			700: {
				slidesPerView: 2,
			},
			// when window width is >= 1000px
			1000: {
				slidesPerView: 3,
			},
		},
	});
	console.log(swiper);
})();

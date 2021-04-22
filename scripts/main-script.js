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

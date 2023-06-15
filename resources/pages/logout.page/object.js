const $ = require('@wdio/globals').$;

class Logout {
	get menuButton() { return $('//*[@id="react-burger-menu-btn"]');}
	get sideMenu() { return $('//*[@id="menu_button_container"]/div/div[2]/div[1]/nav');}
	get logoutButton() { return $('//*[@id="logout_sidebar_link"]');}
}

module.exports = new Logout();
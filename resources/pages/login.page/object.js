const $ = require('@wdio/globals').$;

class Login {
	get loginLogo() { return $('//*[@id="root"]/div/div[1]');}
	get usernameField() { return $('//*[@id="user-name"]');}
	get passwordField() { return $('//*[@id="password"]');}
	get loginButton() { return $('//*[@id="login-button"]');}
	get loginFailedErrorBox() { return $('//*[@id="login_button_container"]/div/form/div[3]/h3');}
}

module.exports = new Login();
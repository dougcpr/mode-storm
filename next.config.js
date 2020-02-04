const path = require('path');

module.exports = {
	env: {
		apiBaseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://mode-storm.now.sh'
	},
	webpack (config) {
		// The following alias configurations will allow devs to not worry about the relative path scoping
		config.resolve.alias['lib'] = path.join(__dirname, 'src', 'lib');
		config.resolve.alias['zones'] = path.join(__dirname, 'src', 'zones');
		return config;
	}
};

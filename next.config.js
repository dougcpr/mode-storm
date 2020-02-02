const path = require('path');

module.exports = {
	env: {
		apiBaseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://mode-storm.now.sh'
	},
	webpack (config) {
		// The following alias configurations will allow devs to not worry about the relative path scoping
		config.resolve.alias['components'] = path.join(__dirname, 'src', 'components');
		config.resolve.alias['capra'] = path.join(__dirname, 'src', 'components', 'capra');
		config.resolve.alias['lib'] = path.join(__dirname, 'src', 'lib');
		config.resolve.alias['modules'] = path.join(__dirname, 'src', 'modules');
		return config;
	}
};

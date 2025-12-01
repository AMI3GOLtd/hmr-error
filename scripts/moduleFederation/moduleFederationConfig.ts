const deps = require('../../package.json').dependencies;

export const mfConfig = {
    name: 'CoreUIComponents',
    filename: 'remoteEntry.js',
    exposes: {
        './components': './src/components',
    },
    shared: {
        ...deps,
        react: {
            singleton: true,
            requiredVersion: deps.react,
        },
        'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
        }
    },
};

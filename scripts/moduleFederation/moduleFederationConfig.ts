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
        },
        'react-router-dom': {
            singleton: true,
            requiredVersion: deps['react-router-dom'],
        },
        '@emotion/react': {
            singleton: true,
            requiredVersion: '*',
        },
        '@emotion/styled': {
            singleton: true,
            requiredVersion: '*',
        },
        '@mui/material': {
            singleton: true,
            requiredVersion: '*',
        },
    },
};

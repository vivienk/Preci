const allowedVariants = new Set(['development', 'staging', 'production']);

module.exports = ({ config }) => {
  const appVariant = process.env.EXPO_PUBLIC_APP_VARIANT || 'development';
  if (!allowedVariants.has(appVariant)) {
    throw new Error(`Unknown EXPO_PUBLIC_APP_VARIANT: ${appVariant}`);
  }

  const isProduction = appVariant === 'production';
  return {
    ...config,
    name: isProduction ? 'Preci' : 'Preci Staging',
    ios: {
      ...config.ios,
      bundleIdentifier: isProduction ? 'com.vivienkong.preci' : 'com.vivienkong.preci.staging',
    },
    extra: { ...config.extra, appVariant },
  };
};

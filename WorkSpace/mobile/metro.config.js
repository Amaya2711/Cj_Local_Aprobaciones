const { getDefaultConfig } = require('expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

// Ignorar la carpeta client/public/favicon.ico para evitar errores de assets
const exclusionList = require('metro-config/src/defaults/exclusionList');
defaultConfig.resolver.blacklistRE = exclusionList([/client\/public\/favicon\.ico/]);

module.exports = defaultConfig;

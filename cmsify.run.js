import cmsifyConfig from './cmsify.config.js'
import cmsifyCms from 'cmsify-cms'
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
cmsifyCms(cmsifyConfig, __dirname)
const path = require('path');

const UPLOADS_DIR = path.resolve(__dirname, '../../uploads');
const PROFILE_IMGS_DIR = path.join(UPLOADS_DIR, 'profile-images');

/** --- Dev test --- */
// Time in milliseconds
const SIMULATE_RES_DELAY = 0;

module.exports = { UPLOADS_DIR, PROFILE_IMGS_DIR, SIMULATE_RES_DELAY };

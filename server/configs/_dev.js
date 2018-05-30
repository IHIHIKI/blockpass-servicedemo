module.exports = {
    BLOCKPASS_BASE_URL: process.env.BLOCKPASS_BASE_URL,
    MONGODB_URI: process.env.MONGODB_URI,
    KYC_RECORD_EXPIRED_AFTER_MS: process.env.KYC_RECORD_EXPIRED_AFTER_MS,

    BLOCKPASS_CLIENT_ID: process.env.BLOCKPASS_CLIENT_ID || '3rd_service_demo',
    BLOCKPASS_SECRET_ID: process.env.BLOCKPASS_SECRET_ID || '3rd_service_demo'
}
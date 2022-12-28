const crypto = require('crypto');

const pK = process.env.PRIVATE_KEY;

if (!pK) {
    throw new Error('You must define a PRIVATE_KEY in the environment variables.');
}

const privateKey = pK.replace(/\\n/g, '\n');

// Create a decrypt message that can be decrypted by the private key
const decrypt = (message) => {
    const buffer = Buffer.from(message, 'base64');
    return crypto.privateDecrypt(privateKey, buffer).toString('utf8');
}

const encryptedMessage = 'XDu3vfpMGU7q14Zl++OcV0e0Zjs7CJ2D+uLasw5AyWKtcSuQgy8txuVL8u0UcAnEZXo2vt/NtC6NJXAkRPZuXtB9KJrcBZfT5+Sc5bJIeQDbopDpz/5AszTnq7tVrKBYR+pQXjC1pP62Cwr7kscs3jfHjT4xUbiu/Wj5taJYuIHBVvWif7bvcw3L8jHu4jb+xrV4em/lXnxSWu2mfOWKCg1xz8P3YtgPRaGlFr2lo/LA3e5uohDT09dS9wGUWSuRwJIm+MHdSOp/c2NPL3jRhHOfNhko54nK4g26unfPt+aQKot/F7ubLswuAVQTeaj6kq7D1sjnovAUNS6bW1ku3Q==';

try {
    console.log(decrypt(encryptedMessage));
} catch (error) {
    console.error('Unable to decrypt message.');
}
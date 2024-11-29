import * as forge from 'node-forge';
import * as CryptoJS from 'crypto-js';

const pemKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCMj4P1kWULjw12K5nnVHNaYn5R
LnodPEWXff5HJzzT4KjDtGKb+mIuKfXJW3gxdql2QCeLlHb7OiPr801aKCLdOWq7
0qeYYzDX04qbJN5lS1Y9MreeEUzBQTNMHCTzosbHQLMNx2ccSqvwnsXiWN4QGd88
+gFD+pHk+isu53oikwIDAQAB
-----END PUBLIC KEY-----`;

// To encrypt the data with rsa algorithm
export const rsaEncrypt = (dataToEncrypt, keyToEncrypt) => {
    const publicKey = forge.pki.publicKeyFromPem(keyToEncrypt);
    const encrypted = publicKey.encrypt(dataToEncrypt);
    dataToEncrypt = forge.util.encode64(encrypted);
    return dataToEncrypt;
}

// To decrypt the data with rsa algorithm
export const rsaDecrypt = (dataToDecrypt, keyToDecrypt) => {
    const privateKey = forge.pki.privateKeyFromPem(keyToDecrypt);
    const decodeText = forge.util.decode64(dataToDecrypt);
    return privateKey.decrypt(decodeText);
}

// To encrypt data with AES algorithm
export const aesEncrypt = (dataToEncrypt, keyToEncrypt) => {
    const iv = CryptoJS.enc.Hex.parse(generateRandomUUID());
    return CryptoJS.AES.encrypt(JSON.stringify(dataToEncrypt), keyToEncrypt, { iv: iv }).toString();
}

// To decrypt data with AES algorithm
export const aesDecrypt = (dataToDecrypt, keyToDecrypt) => {
    const bytes = CryptoJS.AES.decrypt(dataToDecrypt, keyToDecrypt);
    return bytes.toString(CryptoJS.enc.Utf8);
}

// This function is used to generate AES encryption key of 256 bits
const generateAESKey = () => {
    const password = generateRandomUUID();
    const salt = CryptoJS.lib.WordArray.random(128 / 8);
    return CryptoJS.PBKDF2(password, salt, { keySize: 256 / 32 }).toString();
}

// To generate random uuid of 64 characters.
const generateRandomUUID = () => {
    let key = "";
    const hex = "0123456789abcdef";

    for (let i = 0; i < 64; i++) {
        key += hex.charAt(Math.floor(Math.random() * 16));
    }
    return key;
}

/**
 * @author Hannan Desai
 * @param data 
 *          Holds the data which is to pass to API
 * @desciption
 *          This function is used to encrypt the request data before sending it to api, here we encrypt data using AES algo,
 *          and pass AES key to api to decrypt the data and that key will be sent encrypted using RSA algo.
 */
export const encryptRequestBody = (data) => {
    const aesKey = generateAESKey();
    return {
        data: aesEncrypt(data, aesKey),
        key: rsaEncrypt(aesKey, pemKey),
        aesKey: aesKey
    }
}
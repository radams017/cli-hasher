const inquirer = require("inquirer");
const crypto = require("crypto")

// launches app
function init() {
    console.log('\nWelcome To Hasher!\n');
    collectData();
};

// collects data to be hashed
function collectData() {

    inquirer.prompt([{
        type: 'input',
        message: 'Input Value To Be Hashed: ',
        name: 'value',
    }]).then(data => {
        hashData(data.value)
    })
};

// hashes data
function hashData(data) {
    const sha1 = crypto.createHash('sha1').update(data).digest('hex');
    const sha2 = crypto.createHash('sha256').update(data).digest('hex');
    const md5 = crypto.createHash('md5').update(data).digest('hex');

    console.log('SHA1:', sha1)
    console.log('SHA2:', sha2)
    console.log('MD5:', md5)
};

init();
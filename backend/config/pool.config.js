// module.exports = {
//     host: process.env.HOST,
//     port: process.env.DB_PORT,
//     username: process.env.USERNAME,
//     password: process.env.PASSWORD,
//     database: process.env.DB_NAME,
//     max: process.env.MAX,
//     min: process.env.MIN,
//     idle: process.env.IDLE,
//     acquire: process.env.ACQUIRE
// };

module.exports = {
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'leo',
    database: 'bigil',
    max: 10,
    min: 0,
    idle: 10000,
    acquire: 10000
};

// module.exports = {
//     host: 'localhost',
//     port: 5432,
//     username: 'postgres',
//     password: 'leo',
//     database: 'bigil',
//     max: 10,
//     min: 0,
//     idle: 10000,
//     acquire: 10000
// };
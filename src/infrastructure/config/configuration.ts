export default () => ({
    port: parseInt(process.env.PORT, 10),
    database: {
        conection: process.env.DATABASE_STRING,
        name: process.env.DATABASE_NAME
    },
    todo: process.env
});
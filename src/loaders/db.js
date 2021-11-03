const Mongoose = require('mongoose');

const db = Mongoose.connection;

db.once("open", () => {
    console.log("Db Bağlantısı başarılı");
});

const connectDb = async () => {
    await Mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = {
    connectDb
};

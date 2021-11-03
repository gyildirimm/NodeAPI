const Mongoose = require('mongoose');

const UserSchema = new Mongoose.Schema({
    email: { 
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
      },
    password: String,
    full_name: String,
    profile_image: String
},
{timestamps: true, versionKey: false}
);

module.exports = Mongoose.model("user", UserSchema);
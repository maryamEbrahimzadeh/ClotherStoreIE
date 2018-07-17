const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userModel = new Schema({
    islogin :{type :Boolean },
    id : { type: String  },
    username: { type: String  },
    password : { type: String  },
    credit : { type: Number  },
    avatarurl : { type: String  },
    addresses :{ type : Array},//??????????
    orders : {type : Array }
})
module.exports = mongoose.model('user', userModel)
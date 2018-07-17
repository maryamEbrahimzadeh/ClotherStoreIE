const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const addressModel = new Schema({
    id : { type: String  },
    addresstext: { type: String  },
    city : { type: String  },
    code : { type: Number  },
    phone : { type: Number  },
    mobilephone : { type: Number },
    lat : { type: String  },
    lon : { type: String  },
})
module.exports = mongoose.model('address', addressModel)
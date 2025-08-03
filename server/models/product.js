const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({


ModelName:{

    type:String,
    require:true

},
desc:{

    type:String,
    require:true

},
price:{

    type:Number,
    require:true


},
Img:{

    type:String,
    require:true

}


})

const product = mongoose.model("product",ProductSchema);

module.exports = product;





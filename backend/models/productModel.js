const  mongoose = require("mongoose");


const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Please enter Product name"]
        },
        description:{
            type:String,
            required:[true, "Please enter product description"]
        },
        price:{
            type:String,
            required:[true,"Please enter price of the product"],
            maxLength:[8,"Cannot exceed the 8 digits"]
        }, 
        category:{
            type:String,
            required:[true,"enter the product category"]
        },
        images:[
            {
                public_id:{
                    type:String,
                    required: true
                },
                url:{
                    type:String,
                    required:true
                }
            }
        ],
        stock:{
            type:String,
            maxLength: [4,"cannot exceed 4 characters"]
        },
        numofReview:{
            type:Number,
            default:0
        },
        reviews:[
            {
                name:{
                    type:String,
                    required:true
                },
                rating:{
                    type:Number,
                    required:true
                },
                comment:{
                    type:String,
                    required:true
                }
            }
        ],
        createdAt:{
            type:Date,
            default:Date.now
        }
    }
)
module.exports = mongoose.model("Product",productSchema)
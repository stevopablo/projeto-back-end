require('dotenv').config()
    const { Sequelize, DataTypes} = require('sequelize')
const connection = new Sequelize({
    dialect: process.env.dialect,
    database: process.env.database,
    host: process.env.host,
    username: process.env.dataname,
    password: process.env.password,
    port: process.env.porta
})
console.log("database connected with sucess")

const User = connection.define("user",{
    id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true   
    },
    firstname: 
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    password:
    {   type: DataTypes.STRING
        ,allowNull:false
    }
},
{tableName:'Users', timestamps:true})

module.exports = User;

const Category = connection.define("categorie",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:
        DataTypes.STRING,
        allowNull:false
    },
    slug:{type:
        DataTypes.STRING,
        allowNull:false
    },
    use_in_menu: DataTypes.BOOLEAN
},
{timestamps:true});

const Product = connection.define("Product" ,{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{type:
        DataTypes.STRING,
        allowNull:false
    },
    slug:{type:
        DataTypes.STRING,
        allowNull:false
    },
    use_in_menu: DataTypes.BOOLEAN,

    stock:DataTypes.INTEGER,

    description:DataTypes.STRING,

    price: {type:
        DataTypes.STRING,
        allowNull:false
    },
    price_with_descount:{type:
        DataTypes.STRING,
        allowNull:false
    },
},{timestamps:true})



const image_product = connection.define("image_product", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id'
        }
    },
    enable: {
        type: DataTypes.BOOLEAN,
    },
    path: {
        type: DataTypes.STRING,
    },
    shape: {
        type: DataTypes.ENUM('square', 'circle'),
        defaultValue: 'square'
    },
    radius: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    type: {
        type: DataTypes.ENUM('text', 'color'),
        defaultValue: 'text'
    },
    values: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});


const product_category = connection.define("product_category",{
    product_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Product,
            key: 'id'
        },
        Category_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:Category,
                key: 'id'
            }
        }        
    }
})
// users.connection.sync({alter:true})
connection.sync({force:true})

exports.models = connection;
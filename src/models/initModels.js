const Users = require('./users.models')
const Posts = require('./posts.models')
const Categories = require('./categories.models')

const initModels = () => {

    Posts.belongsTo(Users)
    
    Users.hasMany(Posts)

 
    Posts.belongsTo(Categories)
   
    Categories.hasMany(Posts)
}


module.exports = initModels
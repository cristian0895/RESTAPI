let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let UserSchema = Schema({
mail:{
    type:String,
    require: true
}, 
password:{
    type: String,
    require: true
}
},
{
    versionKey:false
});

module.exports = moongoose.model('User', UserSchema);
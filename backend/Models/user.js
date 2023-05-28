const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class User  {
  constructor ({user_id, user_name, created_at, email, user_type, password, broker, token}) {
    
      this.user_id= user_id,
      this.user_name= user_name,
      this.created_at= created_at,
      this.email= email,
      this.user_type= user_type,
      this.password= password,
      this.broker=broker,
      this.token=token
    }
};

const generateAuthToken = async function (user) {
    const token = jwt.sign({ _id: user.user_id.toString() }, process.env.JWT_SECRET)
    return token
}

const hashPassword = async function (password){
    password = await bcrypt.hash(password, 8)
    return password
}

module.exports={
    User,
    generateAuthToken,
    hashPassword
}

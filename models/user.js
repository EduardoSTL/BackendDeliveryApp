const db = require('../config/config')

const User ={};
    
User.create = async (user, result) => {

    const hash = await bcrypt.hash(user.password, 10)
    const sql = `
    INSERT INTO
            users(
            email,
            name,
            lastname,
            phone,
            image,
            password,
            created_at,
            updated_at
       )
       VALUES ( ?,?,?,?,?,?,?,?)
       `;
        
       db.query
       (
        sql,[
            user.email,
            user.name,
            user.lastname,
            user.phone,
            user.image,
            user.hash,
            new Date(),
            new Date()
        ],
        (err, res) => {
            if(err){
                console.log('error: ', err)
                result(err, null)
            }else{
                console.log('Id del nuevo Usuario:  ', res.insertId);
                result(err, null)
            }
        }
       )

    
}

module.exports = User;
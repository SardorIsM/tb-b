import pool from '../config/db_config.js'
import jwt from 'jsonwebtoken'

const login = async (req, res) => {
    let { login, password } = req.body

    let getOne = await pool.query(`select * from admin where login = $1`, [login])
    if (!getOne.rows[0]) {
        return res.send({msg: "Login xato!"})
    }

    if (getOne.rows[0].password != password) {
        return res.send({msg: "Parol notori!"})
    }
    let token = await jwt.sign({ id: getOne.rows[0].id, login: getOne.rows[0].login, password: getOne.rows[0].password }, process.env.SECRET_KEY, { expiresIn: process.env.JWT_TIME })

    res.send({
        msg: "Success!",
        token
    })

}



export {
    login
}
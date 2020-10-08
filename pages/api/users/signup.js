
import bcrypt from 'bcrypt';
import route from '../../../middleware';

const saltRounds = 5;

route.post( async (req, res) => {
    const { data } = req;
    if (!data.username || !data.password) {
        return res.json({"message": "You must provide a username and password to signup"})
    }
    
    bcrypt.hash(data.password, saltRounds, async (err, hash) => {
        let user = await req.db.collection("users").insertOne({
            "username": data.username,
            "password": hash
        })
        console.log(user)
        res.json({"message": "User successfully registered"});
    })
})

route.get( (req, res) => {
    res.status(500).json({})
})

export default route;
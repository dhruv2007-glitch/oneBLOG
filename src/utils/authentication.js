import JWT from "jsonwebtoken"

const secret = process.env.JWT_SECRET || "asdfghjkljhfdsdghjk986545uhvb"

const createTokenForUser = (user) =>{
    const payload = {
        _id: user.id,
        email: user.email,
        profileImageUrl: user.profileImageUrl,
        role: user.role
    }

    const token = JWT.sign(payload, secret);
    return token;
}

const validateToken = (token)=>{
    const payload = JWT.verify(token, secret)
    return payload
}

export {
    createTokenForUser,
    validateToken
}
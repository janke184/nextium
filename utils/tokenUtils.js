const jwt = require('jsonwebtoken');


export const createJWT = (data, expiresIn = 60 * 30) => {

	if(!process.env.JWT_SECRET){
		throw new Error('JWT_SECRET is not set');
	}

	return jwt.sign(
		 data
		, process.env.JWT_SECRET, 
		{
			expiresIn: expiresIn
		}
	);
}

export const decodeJWT = (token) => {
    let decoded = null;

	if(!process.env.JWT_SECRET){
		throw new Error('JWT_SECRET is not set');
	}

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);    
    } catch (error) {
        console.log('Error decoding token: '+ error.message);
    }

    return decoded;
}

export const createJWTUserToken = (user_id) => {

	return createJWT({_id: user_id}, 60 * 60 * 24 * 30);

}
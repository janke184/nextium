const jwt = require('jsonwebtoken');

export const createJWTUserToken = (user_id) => {
	return jwt.sign(
		{ 
			_id: user_id
		}
		, process.env.JWT_SECRET, 
		{
			expiresIn: 60 * 60 * 24 * 30 // 30 days
		}
	);
}

export const decodeJWTUserToken = (token) => {
    let decoded = null;

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);    
    } catch (error) {
        console.log('Error decoding token: '+ error.message);
    }

    return decoded;
}
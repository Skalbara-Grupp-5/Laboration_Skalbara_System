const axios = require('axios');

module.exports.GetUsers = async (req, res) =>{
    try {
        // Make a request to the external API
        const axiosRes = await axios.get("http://localhost:8083/users",
        {
            params: req.query // Pass query parameters from the original request
        }
        );

        // Forward the response from the external API to the client
        res.json(axiosRes.data);
    } catch (error) {
        console.error('Error fetching data from external API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.UpdateUser = async (req, res) =>{
    try {
        const {
			newFirstName,
			newLastName,
			newGender,
			newEmail,
			newTelephone,
			newAge,
			newDescription,
			newPassword,
			emailChanged,
		} = req.body;
        // Make a request to the external API
        const axiosRes = await axios.post("http://localhost:8083/updateUser",
        {
            newFirstName,
			newLastName,
			newGender,
			newEmail,
			newTelephone,
			newAge,
			newDescription,
			newPassword,
			emailChanged, // Pass query parameters from the original request
        },
        { withCredentials: true }
        );

        // Forward the response from the external API to the client
        res.json(axiosRes.data);
    } catch (error) {
        console.error('Error fetching data from external API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
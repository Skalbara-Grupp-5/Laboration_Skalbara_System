const axios = require('axios');

module.exports.UserVerification = async (req, res) =>{
    try {
        // Make a request to the external API
        const axiosRes = await axios.post("http://localhost:8081/", {
            params: req.query // Pass query parameters from the original request
        });

        // Forward the response from the external API to the client
        res.json(axiosRes.data);
    } catch (error) {
        console.error('Error fetching data from external API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
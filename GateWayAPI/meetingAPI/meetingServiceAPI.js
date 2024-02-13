const axios = require('axios');

module.exports.GetMeetingsByUserId = async (req, res) =>{
    try {
        // Make a request to the external API
        const res = await axios.post("http://localhost:8082/register",
        {
            params: req.query // Pass query parameters from the original request
        }
        );

        // Forward the response from the external API to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from external API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.GetMeetingsByDate = async (req, res) =>{
    try {
        // Make a request to the external API
        const res = await axios.post("http://localhost:8082/register",
        {
            params: req.query // Pass query parameters from the original request
        }
        );

        // Forward the response from the external API to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from external API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.Create = async (req, res) =>{
    try {
        // Make a request to the external API
        const res = await axios.post("http://localhost:8082/register",
        {
            params: req.query // Pass query parameters from the original request
        }
        );

        // Forward the response from the external API to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from external API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.Update = async (req, res) =>{
    try {
        // Make a request to the external API
        const res = await axios.post("http://localhost:8082/register",
        {
            params: req.query // Pass query parameters from the original request
        },
        );

        // Forward the response from the external API to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from external API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.Delete = async (req, res) =>{
    try {
        // Make a request to the external API
        const res = await axios.post("http://localhost:8082/register",
        {
            params: req.query // Pass query parameters from the original request
        },
        );

        // Forward the response from the external API to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from external API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
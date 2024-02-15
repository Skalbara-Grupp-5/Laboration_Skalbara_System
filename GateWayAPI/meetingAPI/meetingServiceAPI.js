const axios = require('axios');

module.exports.GetMeetingsByUserId = async (req, res) =>{
    try {
        // Make a request to the external API
        const axiosRes = await axios.get("http://localhost:8082/meeting/users",
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

module.exports.GetMeetingsByDate = async (req, res) =>{
    try {
        // Make a request to the external API
        const axiosRes = await axios.get("http://localhost:8082/meeting/date",
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

module.exports.Create = async (req, res) =>{
    try {
		const {
			organizer,
			participants,
			startTime,
			endTime,
			startDate,
			endDate,
			location,
			title,
			description,
		} = req.body;
        // Make a request to the external API
        const axiosRes = await axios.post("http://localhost:8082/meeting/create",
        {
			organizer,
			participants,
			startTime,
			endTime,
			startDate,
			endDate,
			location,
			title,
			description, // Pass query parameters from the original request
        },
        );

        // Forward the response from the external API to the client
        res.json(axiosRes.data);
    } catch (error) {
        console.error('Error fetching data from external API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.Update = async (req, res) =>{
    try {
        const {
			organizer,
			participants,
			startTime,
			endTime,
			startDate,
			endDate,
			location,
			title,
			description,
		} = req.body;
        // Make a request to the external API
        const axiosRes = await axios.post("http://localhost:8082/meeting/update",
        {
            organizer,
			participants,
			startTime,
			endTime,
			startDate,
			endDate,
			location,
			title,
			description, // Pass query parameters from the original request
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

module.exports.Delete = async (req, res) =>{
    try {
        // Make a request to the external API
        const axiosRes = await axios.delete("http://localhost:8082/meeting/delete",
        {
            params: req.query // Pass query parameters from the original request
        },
        );

        // Forward the response from the external API to the client
        res.json(axiosRes.data);
    } catch (error) {
        console.error('Error fetching data from external API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
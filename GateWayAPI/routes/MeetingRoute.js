const {
	Create,
	Update,
	Delete,
	GetMeetingsByUserId,
	GetMeetingsByDate,
} = require("../meetingAPI/meetingServiceAPI");
const router = require("express").Router();

//Routes for different paths
router.get("/gateway/meeting/users", GetMeetingsByUserId);
router.get("/gateway/meeting/date", GetMeetingsByDate);
router.post("/gateway/meeting/create", Create);
router.post("/gateway/meeting/update", Update);
router.delete("/gateway/meeting/delete", Delete);

module.exports = router;

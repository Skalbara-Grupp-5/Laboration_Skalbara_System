const { default: mongoose } = require('mongoose');
const meetingController = require('./meetingController');
beforeAll(async() => {
  //connect to database
  mongoose.connect(`mongodb+srv://matilda:hej123@cluster0.40ijduc.mongodb.net/User?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  )
  .then(() => console.log("MongoDB is connected successfully \n"))
  .catch(err => console.error(err));
});

//Close connection when done
afterAll(async () => {
  mongoose.connection.close();
});

//Test to see if a meeting is found by injecting a user with booked meetings in the database and check so that code 200 is returned
describe('GetMeetingsByUserId Positive Outcome', () => {
    test('Test if meeting from user sad sad is found', async () => {   
    const req = {query: {paramName: '65df34fb4530da1eb13537c8'}}; 
    const res = {
        status: jest.fn(()=> res),
        json: jest.fn(),
    };
    await meetingController.GetMeetingsByUserId(req, res);   
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
//Test if the function returns code 400 if input string is invalid
describe('GetMeetingsByUserId Negative Outcome', () => {
    test('Test if the function returns code 400 if input string is invalid', async () => {   
    const req = {query: {paramName: '65dfde3cf07fba'}};
    const res = {
        status: jest.fn(()=> res),
        json: jest.fn(),
    };
    await meetingController.GetMeetingsByUserId(req, res);   
    expect(res.status).toHaveBeenCalledWith(400);
  });
});

//Test if mock meeting is found, expected outcome is code 200
describe('GetMeetingsByDate Positive Outcome', () => {
  test('Test to see if the function GetmeetingsByDate return code 200 if the meeting vårstämning is found', async () => {   
  const req = {query: {date: '2024-09-30'}};
  const res = {
      status: jest.fn(()=> res),
      json: jest.fn(),
  };
  await meetingController.GetMeetingsByDate(req, res);   
  expect(res.status).toHaveBeenCalledWith(200);
  });
});







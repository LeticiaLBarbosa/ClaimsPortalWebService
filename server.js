const express = require('express');
const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello, this is the webservice developed to carry out the challenge of AION TECH!');
});

app.post('/login', (req, res) => {
    // logs in to the system
    const username = req.body.username;
    const password = req.body.password;
    let userInfo = {}

    if (username === 'mariaBarbosa0888' && password === 'Maria@2021') {
        userInfo = {
            name: "Maria Leticia",
            firstName: "Maria",
            lastName: "Barbosa",
            accountNumber: "111111",
            taxId: "08882047440",
            address: "Some street",
            userId: "mariaBarbosa0888",
            password: "Maria@2021",
            type: "customer",
          }
        res.status(200).send(userInfo);
    } else if (username === 'janeDoe1234' && password === 'Jane@2021') {
        userInfo = {
            name: "Jane Done",
            firstName: "Jane",
            lastName: "Doe",
            address: "Some street",
            userId: "janeDoe1234",
            password: "Jane@2021",
            type: "employee",
            employeeId: "123456",
          },
        res.status(200).send(userInfo);
    } else {
        res.status(401).send();
    }

});


app.post('/register', (req, res) => {
    // register a new user in the system.
    const userInfo = req.body;
    
    // executes the logic of registering an user
    res.status(201).send(userInfo);
});


app.get('/claims', (req, res) => {
    // return a list of claims
    const response = [
        {
            "type": "NO_SERVICE",
            "serviceLostDate": "2021-05-25",
            "gasReading": null,
            "description": "First claim",
            "customerUserId": "mariaBarbosa0888",
            "date": "2021-05-30",
            "status": "NOT ATTENDED",
            "id": 1
        },
        {
            "type": "OVER_BILLING",
            "serviceLostDate": null,
            "gasReading": "40",
            "description": "Second claim",
            "customerUserId": "mariaBarbosa0888",
            "date": "2021-05-30",
            "status": "NOT ATTENDED",
            "id": 2
        }

    ]
    res.status(200).send(response);
});


app.get('/claims/:id', (req, res) => {
    // return claim based in the claim id.
    if (req.params.id === 1) {
        const claim = {
            "type": "NO_SERVICE",
            "serviceLostDate": "2021-05-25",
            "gasReading": null,
            "description": "First claim",
            "customerUserId": "mariaBarbosa0888",
            "date": "2021-05-30",
            "status": "NOT ATTENDED",
            "id": 1
        }
        res.status(200).send(claim);
    } else {
        res.status(404).send()
    }
});


app.post('/claims', (req, res) => {
    // creates the claim
    const claim = {}
    // executes logic of claim creation
    res.status(201).send(claim);
});


app.put('/claims/:id', (req, res) => {
    // update claim
    // executes logic for updating a claim
    res.status(204).send();
});

app.post('/claims/:id/allocate', (req, res) => {
    // allocate claim
    // executes the logic to allocate an employee to a claim
    res.status(200).send();
});


//user
app.get('/users/:id/claims', (req, res) => {
    // executes the logic for retrieving the claims from an specific user
    res.status(200).send(claims);
});

// Listen to the App Engine-specified port, or 80 otherwise
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
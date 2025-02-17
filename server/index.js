const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();

const port = 8000;
app.use(bodyParser.json());

let users = [];

let conn = null;

const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8830
    })
}

// path = GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
app.get('/users', async (req, res) => {
    const [rows] = await conn.query('SELECT * FROM users');
    res.json(results);  
});

// path = GET /users/:id สำหรับดึง users รายคนออกมา
app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    let selectedUser = users.find(user => user.id == id);

    if (!selectedUser) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(selectedUser);
});

// path = POST /users สำหรับสร้าง users ใหม่บันทึกเข้าไป
app.post('/users', async (req, res) => {  
    let user = req.body;
    
    const [results] = await conn.query('INSERT INTO users SET ?', user);
    
    console.log('results', results);

    res.json({
        message: 'Create new user successfully',
        data: results[0]
    })
})


// path = PUT /users/:id ใช้สำหรับแก้ไขข้อมูล user โดยใช้ id
app.put('/users/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    let selectedIndex = users.findIndex(user => user.id == id);

    if (selectedIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    let selectedUser = users[selectedIndex];
    selectedUser.firstname = updateUser.firstname || selectedUser.firstname;
    selectedUser.lastname = updateUser.lastname || selectedUser.lastname;
    selectedUser.age = updateUser.age || selectedUser.age;
    selectedUser.gender = updateUser.gender || selectedUser.gender;

    res.json({
        message: "Update user successfully",
        data: selectedUser
    });
});

// path = DELETE /users/:id สำหรับลบ users รายคนตาม id
app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    let selectedIndex = users.findIndex(user => user.id == id);

    if (selectedIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users.splice(selectedIndex, 1);
    res.json({
        message: "Delete user successfully",
        indexDeleted: selectedIndex
    });
});

app.listen(port, async (req, res) => {
    await initMySQL();
    console.log('Http Server is running on port'  + port);
});
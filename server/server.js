const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const port = 3001;

app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.static(path.join(__dirname, '../client/build')));

const dbPath = path.join(__dirname, 'database.db');

console.log('Attempting to connect to database at:', dbPath);

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Failed to open database:', err.message);
    throw err;
  }
  console.log('Connected to the SQLite database.');
});

db.serialize(() => {
  console.log('Creating tables if they do not exist...');
  
  db.run(`
    CREATE TABLE IF NOT EXISTS mentors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      area TEXT NOT NULL
    )
  `, (err) => {
    if (err) {
      console.error('Error creating mentors table:', err.message);
    } else {
      console.log('Mentors table ready.');
    }
  });

  db.run(`
    CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      studentName TEXT NOT NULL,
      mentorId INTEGER NOT NULL,
      duration INTEGER NOT NULL,
      amount INTEGER NOT NULL,
      FOREIGN KEY (mentorId) REFERENCES mentors(id)
    )
  `, (err) => {
    if (err) {
      console.error('Error creating bookings table:', err.message);
    } else {
      console.log('Bookings table ready.');
    }
  });
});

app.get('/api/mentors', (req, res) => {
  db.all('SELECT * FROM mentors', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ mentors: rows });
  });
});

app.post('/api/bookings', (req, res) => {
  const { studentName, mentorId, duration, amount } = req.body;
  const query = `
    INSERT INTO bookings (studentName, mentorId, duration, amount)
    VALUES (?, ?, ?, ?)
  `;

  db.run(query, [studentName, mentorId, duration, amount], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ bookingId: this.lastID });
  });
});

app.get('/api/bookings', (req, res) => {
  const { studentName, mentorId } = req.query;
  let query = 'SELECT * FROM bookings WHERE 1=1';
  const params = [];

  if (studentName) {
    query += ' AND studentName = ?';
    params.push(studentName);
  }

  if (mentorId) {
    query += ' AND mentorId = ?';
    params.push(mentorId);
  }

  db.all(query, params, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ bookings: rows });
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

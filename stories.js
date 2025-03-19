// Create a new story
app.post('/api/stories', (req, res) => {
    const { title, description, user_id } = req.body;

    db.query(
        'INSERT INTO stories (title, description, user_id) VALUES (?, ?, ?)',
        [title, description, user_id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'Story created successfully!' });
        }
    );
});


// Add a chapter to a story
app.post('/api/chapters', (req, res) => {
    const { content, story_id, user_id } = req.body;

    db.query(
        'INSERT INTO chapters (content, story_id, user_id) VALUES (?, ?, ?)',
        [content, story_id, user_id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'Chapter added successfully!' });
        }
    );
});

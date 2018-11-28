const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/rentals', (req, res) => {
	res.json({ success: true });
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));

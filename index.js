const express = require('express');
const app = express();

// Use the port from environment (for Render) or 3000 locally
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from Komputasi Awan Langit!</h1>
    <p>This simple app is deployed on Render.</p>
    <p>Made by: Khayriz Zafran Nandika – [103012340398]</p>
    <p>         Dionisius Felysto Bagastama – [103012340459]</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

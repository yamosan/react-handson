import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, "../build")));

app.get("/", (req, res) => {
  const html = `
    <html lang="en">
      <head>
        <script src="index.js" async defer></script>
      </head>
      <body>
        <div id="root" />
      </body>
    </html>
    `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server listening at: http://localhost:${PORT}`);
});

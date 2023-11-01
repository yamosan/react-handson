import express from "express";
import ReactDOMServer from "react-dom/server";
import { App } from "./App";
import path from "path";
import { getUser } from "./service";

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, "../build")));

app.get("/", async (req, res) => {
  const user = await getUser();
  const app = ReactDOMServer.renderToString(<App hydrationData={user} />);
  const html = `
    <html lang="en">
      <head>
        <script>window.____hydrationData = ${JSON.stringify(user)}</script>
        <script src="index.js" async defer></script>
      <body>
        <div id="root">${app}</div>
      </body>
    </html>
    `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server listening at: http://localhost:${PORT}`);
});

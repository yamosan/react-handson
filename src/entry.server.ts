import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, "../build")));

app.get("/", (req, res) => {
  const html = `
    <html lang="en">
      <body>
        <div id="root">
          <p>count: <span id="count">0</span></p>
          <button id="plus">+1</button>
          <button id="minus">-1</button>
        </div>
      </body>

      <script>
        const count = document.getElementById("count");
        const plusButton = document.getElementById("plus");
        const minusButton = document.getElementById("minus");

        plusButton.addEventListener("click", () => {
          count.innerText = parseInt(count.innerText, 10) + 1;
        });
        minusButton.addEventListener("click", () => {
          count.innerText = parseInt(count.innerText, 10) - 1;
        });
      </script>
    </html>
`;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server listening at: http://localhost:${PORT}`);
});

const del = require("del");
const fs = require("fs");

fs.writeFileSync("./out/.nojekyll");

const dir = "docs";

(async () => {
  try {
    await del(dir);

    fs.rename("out", "docs", (error) => {
      if (error) {
        throw error;
      }
    });
  } catch (error) {
    console.error(error);
  }
})();

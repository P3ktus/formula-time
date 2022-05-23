import fs from "fs";
import sequelize from "./initOrm";

fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js" && file !== "initOrm.js")
  .forEach((file) => {
    require(`./${file}`);
  });


  
export default sequelize;

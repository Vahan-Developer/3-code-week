const fs = require("fs").promises;

const readData = async (url) => {
    try {
        const data = await fs.readFile(url, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
    }
};

const writeData = async (url, data) => {
    const json = JSON.stringify(data);
    await fs.writeFile(url, json);
};

module.exports = { readData, writeData };
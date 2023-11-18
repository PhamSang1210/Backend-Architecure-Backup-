import mongoose from "mongoose";
import os from "os";

const _SECONDS = 5000;

const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log(`Number of connection: ${numConnection}`);
};

const checkOverLoad = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length;
        // take number cores of computer
        const numCores = os.cpus().length;
        // take memoryUsage
        const memoryUsage = process.memoryUsage().rss;
        // Example maximum number of connections based on number osf cores
        const maxConnection = numCores * 5;

        console.log(`Number of connection: ${numConnection}`);
        console.log(`Memory Usage: ${memoryUsage / 1024 / 1024} MB`);

        if (numConnection > maxConnection) {
            console.log(`Connection Overload deteced !`);
        }
    }, _SECONDS);
};

export { countConnect, checkOverLoad };

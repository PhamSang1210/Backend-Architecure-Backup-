import mongoose from "mongoose";

const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log(`Number of connection: ${numConnection}`);
};

export { countConnect };

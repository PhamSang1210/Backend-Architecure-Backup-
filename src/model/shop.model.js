import mongoose, { Schema, model } from "mongoose";

const DOCCUMENT_NAME = "shop";
const COLLECTION_NAME = "shops";

const shopSchema = new Schema(
    {
        name: { type: String, trim: true, maxLength: 150 },
        email: { type: String, unique: true, trim: true },
        password: { type: String, require: true, trim: true },
        status: { type: String, enum: ["active", "inactive"] },
        verify: { type: Schema.Types.Boolean, default: false },
        roles: { type: Schema.Types.Array, default: [] },
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
    }
);

export default model(DOCCUMENT_NAME, shopSchema);

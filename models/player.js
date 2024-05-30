import mongoose, { Schema } from "mongoose";
const playerSchema = new Schema({
    name: String,
    createdAt: { type: Date, default: Date.now },
    rank: { type: Number, default: 0 },
    reputation: { type: Number, default: 0 },
    badges: [{
      name: { type: String, default: 'New Badge' },
      points: { type: Number, default: 0 },
      createdAt: { type: Date, default: Date.now },
    }],
});
const Player = mongoose.models.Player || mongoose.model("Player", playerSchema);
export default Player;
import { Schema, model, models } from "mongoose";


const TattleSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    tattle: {
        type: String,
        required: [true, "Tattle is required"],
    },
    tag: {
        type: String,
        required: [true, "Tag is required"],
    }
})

const Tattle = models.Tattle || model('Tattle', TattleSchema);

export default Tattle;
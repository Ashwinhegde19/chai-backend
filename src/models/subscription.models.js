import mongoose , {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, // one who is suscribing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, // one who subscriber is suscribing
        ref: "User"
    }
},{timestamps})




export const Subscription = mongoose.model("Subscription", subscriptionSchema)
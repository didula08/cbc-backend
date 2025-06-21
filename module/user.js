import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,   
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type : String,
        required: true,
        default: 'customer'},

    isBlocked: {
        type: Boolean,
         required: true,
        default: false,
    },

    img: {
        type: String,
        required: true,
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxwing.com%2Fman-user-circle-icon%2F&psig=AOvVaw1OQxfoBxpF06fttcEzDhR_&ust=1749724796944000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCCgv2W6Y0DFQAAAAAdAAAAABAE',
    },


});

const User = mongoose.model("Users", userSchema);

export default User;
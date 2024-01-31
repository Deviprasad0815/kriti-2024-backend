const mongoose = require("mongoose");

const psSchema = new mongoose.Schema({
  psName: {
    type: String,
    required: true,
  },

  hostel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hostels",
  },
  hostelName: {
    type: String,
    required: true,
  },
  studentsData: [
    {
      name: {
        type: String,
        required: true,
      },
      rollNo: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      discordID: {
        type: String,
        required: true,
      },
      programme: {
        type: String,
        required: true,
      },
      year: {
        type: String,
        required: true,
      },
    },
  ],
});

const PS = mongoose.model("PS", psSchema);

module.exports = PS;

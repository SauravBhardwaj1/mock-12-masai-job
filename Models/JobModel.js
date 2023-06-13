const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    company: { String, required: true },
    postedAt: { String, required: true },
    city: { String, required: true },
    location: { String, required: true },
    role: { String, required: true },
    level: { String, required: true },
    contract: { String, required: true },
    position: { String, required: true },
    language: { String, required: true },
  },
  {
    versionKey: false,
  }
);

const jobModel = mongoose.model("Job", jobSchema);

module.exports = {
  jobModel,
};

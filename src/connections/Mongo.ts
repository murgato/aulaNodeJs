const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db_ernetwork', { useNewUrlParser: true, useUnifiedTopology: true });

export { mongoose }
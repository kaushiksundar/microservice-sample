const axios = require('axios');

const config = require('../config');


module.exports.list = async (req, res) => {
  const response = await axios.get(config.PYTHON_LIBS);

  res.json(response.data);
};


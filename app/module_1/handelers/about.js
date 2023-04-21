const { getAllModels, createModel } = require('../service');

const aboutHandler = async (req, res) => {
  const allModels = await getAllModels();

  // const newModel = await createModel();

  console.log('allModels', allModels);
  // console.log('newModel', newModel);

  res.send(`${JSON.stringify(allModels)}`);
};

module.exports = aboutHandler;

const Module1Model = require('./model');

const getAllModels = async () => {
  const docs = await Module1Model.find().lean().select('-__v -_id');

  console.log('All Module1Models', docs);

  return docs;
};

const createModel = async () => {
  const doc = await Module1Model.create({
    a: 'a',
    b: Date.now(),
  }).then((x) => x.toJSON());

  console.log('Created Module1Model', doc);

  return doc;
};

module.exports = {
  getAllModels,
  createModel,
};

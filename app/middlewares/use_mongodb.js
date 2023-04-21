const mongoConn = require('../common/mongo_conn');

const useMongodb = async (req, res, next, error) => {
  if (error) {
    console.log('app.use error', error);
  }

  await mongoConn()
    .then((x) => {
      console.log('app.use mongo', x);
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = useMongodb;

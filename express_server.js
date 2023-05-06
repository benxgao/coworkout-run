const app = require('./app');
// const connectMongoDB = require('./app/common/mongo_conn');

const PORT = 8080;
const HOST = '0.0.0.0';

const startServer = async () => {
  try {
    // await connectMongoDB();

    return app.listen(PORT, () =>
      console.log(`Server is running on http://${HOST}:${PORT}`),
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();

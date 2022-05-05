const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  port: 5050,
  database: {
    uri: isDev ? 'mongodb+srv://jaspreet:Jaspreet@cloudstorage.uyppm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' : process.env.MONGO_URI,
  },
};

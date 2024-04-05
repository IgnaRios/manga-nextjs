import mongose from 'mongoose';

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) throw new Error(' MONGODE_URI must be defined');

export const connectDB = async () => {
  try {
    const { connection } = await mongose.connect(MONGODB_URI);
    if (connection.readyState === 1) {
      console.log(
        'Conexión con la base de datos: ' + connection.name + 'establecida'
      );
      return Promise.resolve(true);
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(false);
  }
};

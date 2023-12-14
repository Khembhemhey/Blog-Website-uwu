import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@blog-app.2alimqw.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true }); // Remove useNewUrlParser
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;

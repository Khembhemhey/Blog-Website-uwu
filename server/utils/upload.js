import multer from 'multer';
import pkg from 'multer-gridfs-storage';
const { GridFsStorage } = pkg;


const storage = new GridFsStorage({
    url: `mongodb+srv://user:qEZ8qXDhyPz5QTKO@blog-app.2alimqw.mongodb.net/?retryWrites=true&w=majority`,
    options: { useNewUrlParser: true, useUnifiedTopology: true},
     // Add this line,
    file: (request, file) => {
        const allowedMimeTypes = ["image/png", "image/jpg"];

        if (allowedMimeTypes.indexOf(file.mimetype) === -1) 
            return `${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`,
        };
    }
});

export default multer({ storage });

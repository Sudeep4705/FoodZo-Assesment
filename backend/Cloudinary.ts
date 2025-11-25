import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
    api_key: process.env.API_KEY as string,
    api_secret: process.env.API_SECRET as string,
    cloud_name: process.env.CLOUD_NAME as string,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async () => {
    return {
        folder: "Foodzo",
        allowed_formats: ["jpeg", "jpg", "png"],
    };
}

});

export { cloudinary, storage };

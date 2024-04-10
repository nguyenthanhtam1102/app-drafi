// import fs from 'web-fs';

const path = require('path-browserify');
const folderPath = "C:\\Project\\CNM\\drafi-fe\\app-client\\src\\image\\fileChat"
console.log(folderPath)

const getImages = async () => {
    const files = await fs.readdir(folderPath);
    const imageFiles = files.filter(file => file.type.match(/image\/.*/));

    const imageList = await Promise.all(imageFiles.map(async file => {
        const buffer = await fs.readFile(file.path);
        return `data:${file.type};base64,${buffer.toString('base64')}`;
    }));

    return imageList;
};

export default getImages;
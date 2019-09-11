const path = require('path');
const fs = require('fs');
import {Request, Response} from 'express';

const { rootDirectory } = require('../../config');

export function getFiles(req: Request, res: Response) {
    let currentDir =  rootDirectory;
    let query = req.query.path || '';
    if (query) currentDir = path.join(rootDirectory, query);
    const x = getFileInfoFromFolder(currentDir, query);
    res.render('pages/myDrive.ejs', {data: x});
}

const getFileInfoFromFolder = (route, query) => {
    const files = fs.readdirSync(route, 'utf8');
    const response = [];
    for (let file of files) {
        // const extension = path.extname(file);
        const fileSize = humanFileSize(fs.statSync(path.join(route, file)).size);
        const fileType = fs.lstatSync(path.join(route, file)).isDirectory() ? 'folder' : 'file';
        // console.log(fileType);
        const fileLastModified = formatDate(fs.statSync(path.join(route, file)).mtime);
        // we ignore the DS_Store file
        if (file !== '.DS_Store') {
            response.push({ name: file, fileSize, fileLastModified, type: fileType, path : path.join(query, file) });
        }
    }
    // this sort will put all folders in the beginning of the array
    response.sort((a,b) => (a.type < b.type) ? 1 : -1);
    return response;
};

const humanFileSize = (size: any) => {
    let i = size == 0 ? 0 : Math.floor( Math.log(size) / Math.log(1024) );
    // @ts-ignore
    return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
};

export const formatDate = (d: Date) => {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = `${d.getFullYear()}`,
        month =  months[d.getMonth()],
        date = (d.getDate() > 9) ? d.getDate() : '0' + d.getDate();
        // hours = (d.getHours()),
        // minutes = (d.getMinutes() > 9) ? d.getMinutes() : '0' + d.getMinutes();
    return `${date} ${month} ${year}`;
};

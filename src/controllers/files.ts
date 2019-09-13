import * as path from "path";
import * as fs from "fs";
import { Request, Response } from "express";
const { rootDirectory } = require("../../config");

// ======== multer configuration =========
import * as multer from "multer";
let storage = multer.diskStorage({
    destination: function(req: any, file, cb) {
        let x = rootDirectory;
        if (req.params.path !== undefined) {
            x = rootDirectory + req.params.path;
        }
        cb(null, x);
    },
    filename: function(req, file, cb) {
        // handle file name collusion
        let currentDir = rootDirectory;
        let query = req.query.path || "";
        if (query) currentDir = path.join(rootDirectory, query);
        const files = fs.readdirSync(currentDir, "utf8");
        let fileName = file.originalname;
        for (let x of files) {
            if (x === fileName) {
                const extension = path.extname(x);
                fileName = fileName.split(extension)[0] + "(" + Date.now() + ")" + extension;
            }
        }
        cb(null, fileName);
    }
});
export const multerUploadInstance = multer({ storage: storage });
// ======== END OF multer configuration ======

export function getFiles(req: Request, res: Response) {
    let currentDir = rootDirectory;
    let query = req.query.path || "";
    if (query) currentDir = path.join(rootDirectory, query);
    const data = getFileInfoFromFolder(currentDir, query);
    res.render("pages/myDrive.ejs", { data: data });
}

const getFileInfoFromFolder = (route, query) => {
    const files = fs.readdirSync(route, "utf8");
    const response = [];
    for (let file of files) {
        // const extension = path.extname(file);
        const fileSize = formatFileSize(
            Number(fs.statSync(path.join(route, file)).size)
        );
        const fileType = fs.lstatSync(path.join(route, file)).isDirectory()
            ? "folder"
            : "file";
        // console.log(fileType);
        const fileLastModified = formatDate(
            fs.statSync(path.join(route, file)).mtime
        );
        // we ignore the DS_Store file
        if (file !== ".DS_Store") {
            response.push({
                name: file,
                fileSize,
                fileLastModified,
                type: fileType,
                path: path.join(query, file)
            });
        }
    }
    // this sort will put all folders in the beginning of the array
    response.sort((a, b) => (a.type < b.type ? 1 : -1));
    return response;
};

const formatFileSize = (size: number) => {
    let i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
    let x: any = (size / Math.pow(1024, i)).toFixed(2);
    return x * 1 + " " + ["B", "kB", "MB", "GB", "TB"][i];
};

const formatDate = (d: Date) => {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let year = `${d.getFullYear()}`,
        month = months[d.getMonth()],
        date = d.getDate() > 9 ? d.getDate() : "0" + d.getDate();
    // hours = (d.getHours()),
    // minutes = (d.getMinutes() > 9) ? d.getMinutes() : '0' + d.getMinutes();
    return `${date} ${month} ${year}`;
};

export const downloadFile = (req: Request, res: Response) => {
    let path = req.params.path;
    let file = __dirname + rootDirectory + "/" + path;
    res.download(file); // Set disposition and send it.
};

export const uploadFile = (req: any, res: Response, next) => {
    const file = req.file;
    if (!file) {
        const error = new Error("Please upload a file");
        return next(error);
    }

    // res.send(file);

    res.redirect("back"); // reloads the current url again to reflect the changes.
};

export const deleteFile = (req: Request, res: Response) => {
    let path = req.params.path;
    let file = __dirname + rootDirectory + "/" + path;
    console.log(path);
    try {
        fs.unlink(file, function() {
            console.log('file deleted');
            res.redirect("back"); // reloads the current url again to reflect the changes.
        });
    } catch (e) {
        console.log(e);
    }

};

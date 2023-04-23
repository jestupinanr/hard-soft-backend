/// <reference types="multer" />
export declare class UploadController {
    uploadImage(file: Express.Multer.File): {
        route: string;
    };
    serveImage(filename: any, res: any): Promise<any>;
}

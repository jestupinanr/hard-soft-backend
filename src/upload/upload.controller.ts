import { Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';

@Controller('upload')
export class UploadController {


  @UseInterceptors(
    FileInterceptor(
      'file',
      {
        storage: diskStorage({
          destination: './uploads/profile',
          filename(req, file, cb) {
            cb(null, file.originalname);
          },
        })
      }
    )
  )
  @Post('imagen')
  uploadImage(@UploadedFile() file : Express.Multer.File){
    return {
      route: `/uploads/profile/${file.filename}`
    }
  }

  @Get(':filename')
  async serveImage(@Param('filename') filename, @Res() res): Promise<any> {
    return res.sendFile(filename, { root: join(process.cwd(), 'uploads') });
  }
}

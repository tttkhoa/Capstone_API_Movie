import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { NguoiDung, LoaiNguoiDung } from '@prisma/client';
import { UserSignUp } from './entities/user.entity';

@ApiTags('QuanLyNguoiDung')
@Controller('api/QuanLyNguoiDung')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/LayDanhSachLoaiNguoiDung')
  LayDanhLoaiSachNguoiDung(): Promise<LoaiNguoiDung[]> {
    return this.userService.LayDanhSachLoaiNguoiDung();
  }

  @Get('/LayDanhSachNguoiDung')
  LayDanhSachNguoiDung(): Promise<NguoiDung[]> {
    return this.userService.LayDanhSachNguoiDung();
  }

  @Get('/TimKiemNguoiDung')
  TimKiemNguoiDung(@Query('tuKhoa') tuKhoa: string): Promise<NguoiDung[]> {
    return this.userService.TimKiemNguoiDung(tuKhoa);
  }

  @Post('/DangKy')
  DangKy(@Body() body: UserSignUp): Promise<any> {
    let { tai_khoan, mat_khau, email, so_dt, ho_ten } = body;
    return this.userService.DangKy(body);
  }
}

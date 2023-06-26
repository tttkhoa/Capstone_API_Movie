import { Injectable } from '@nestjs/common';
import {PrismaClient,NguoiDung,LoaiNguoiDung} from "@prisma/client"
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  private prisma = new PrismaClient()

  async LayDanhSachLoaiNguoiDung():Promise<LoaiNguoiDung[]> {
    let data: LoaiNguoiDung[] = await this.prisma.loaiNguoiDung.findMany()
    return data;
  }

  async LayDanhSachNguoiDung():Promise<NguoiDung[]> {
    let data: NguoiDung[] = await this.prisma.nguoiDung.findMany()
    return data;
  }

  async TimKiemNguoiDung(tuKhoa:string): Promise<NguoiDung[]> {
    let data:NguoiDung[] = await this.prisma.nguoiDung.findMany({
      where:{
        tai_khoan:{
          contains: `${tuKhoa}`,
        }
      }
    })
    return data
  }

  async DangKy(body):Promise<any>{
    let {tai_khoan,mat_khau,email,so_dt,ho_ten} = body

    let data = {
      tai_khoan,
      mat_khau:bcrypt.hashSync(mat_khau,10),
      email,
      so_dt,
      ho_ten
    }

    return data;
  }

}

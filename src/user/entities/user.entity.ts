import { ApiProperty } from "@nestjs/swagger";

export class User {}
export class UserSignUp{
    @ApiProperty()
    tai_khoan: string;

    @ApiProperty()
    mat_khau:string;

    @ApiProperty()
    ho_ten:string;

    @ApiProperty()
    email:string;

    @ApiProperty()
    so_dt:string;
}
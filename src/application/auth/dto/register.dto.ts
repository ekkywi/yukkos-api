import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../../../domain/entities/user.entity';

export class RegisterDto {
  @ApiProperty({ example: 'Budi Santoso' })
  @IsString()
  @IsNotEmpty({ message: 'Nama lengkap tidak boleh kosong' })
  fullName: string;

  @ApiProperty({ example: 'budi@yukkos.com' })
  @IsEmail()
  @IsNotEmpty({ message: 'Email tidak boleh kosong' })
  email: string;

  @ApiProperty({
    example: '081234567890',
    description: 'Nomor WhatsApp harus minimal 10 digit (Wajib diisi untuk komunikasi)',
  })
  @IsNotEmpty({ message: 'Nomor WhatsApp tidak boleh kosong' })
  @IsString()
  @MinLength(10, { message: 'Nomor WhatsApp minimal 10 digit' })
  phone: string;

  @ApiProperty({ example: 'Rahasia123!', minLength: 8 })
  @IsString()
  @MinLength(8, { message: 'Password minimal 8 karakter' })
  password: string;

  @ApiProperty({ enum: UserRole, example: UserRole.OWNER, description: 'Pilih sebagai OWNER atau SEEKER' })
  @IsEnum(UserRole, { message: 'Role harus berupa OWNER atau SEEKER' })
  @IsNotEmpty({ message: 'Role tidak boleh kosong' })
  role: UserRole;
}

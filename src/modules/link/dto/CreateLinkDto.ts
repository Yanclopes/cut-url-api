import { IsString, IsOptional, IsDateString } from 'class-validator';
import { Transform } from 'class-transformer';
import { randomBytes } from 'crypto';

export class CreateLinkDto {
  @IsString()
  url: string;

  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsDateString()
  expiredIn?: string;
}

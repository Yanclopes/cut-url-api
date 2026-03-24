import { IsString, IsOptional, IsDateString } from 'class-validator';

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

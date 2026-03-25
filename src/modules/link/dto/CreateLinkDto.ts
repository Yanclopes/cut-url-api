import { IsString, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateLinkDto {
  @ApiProperty({ example: 'https://google.com', description: 'URL original para encurtar' })
  @IsString()
  url: string;

  @ApiPropertyOptional({ example: 'promo-verao', description: 'Código customizado (opcional)' })
  @IsOptional()
  @IsString()
  code?: string;

  @ApiPropertyOptional({ example: '2026-12-31', description: 'Data de expiração do link' })
  @IsOptional()
  @IsDateString()
  expiredIn?: string;
}
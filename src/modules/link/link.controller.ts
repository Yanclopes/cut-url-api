import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateLinkDto } from './dto/CreateLinkDto';
import { LinkService } from './link.service';
import type { Response } from 'express';

@ApiTags('links')
@Controller()
export class LinkController {
    constructor(private readonly linkService: LinkService) {}

    @Post()
    @ApiOperation({ summary: 'Cria um novo link encurtado' })
    @ApiResponse({ status: 201, description: 'Link criado com sucesso.' })
    async create(@Body() body: CreateLinkDto) {
        return this.linkService.create(body);
    }

    @Get('/:code')
    @ApiOperation({ summary: 'Redireciona para a URL original' })
    @ApiResponse({ status: 302, description: 'Redirecionamento executado.' })
    @ApiResponse({ status: 404, description: 'Link não encontrado ou expirado.' })
    async redirect(@Param('code') code: string, @Res() res: Response) {
        const link = await this.linkService.findByRedirect(code);
        return res.redirect(link.url);
    }
}
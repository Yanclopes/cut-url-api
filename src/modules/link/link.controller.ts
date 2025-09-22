import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { CreateLinkDto } from './dto/CreateLinkDto';
import { LinkService } from './link.service';
import type { Response } from 'express';

@Controller()
export class LinkController {

  constructor(private readonly linkService: LinkService) {}

    @Post()
    async create(@Body() body: CreateLinkDto) {
        return this.linkService.create(body)
    }

    @Get('/:code')
    async redirect(@Param('code') code: string, @Res() res: Response) {
        const link = await this.linkService.findByRedirect(code);
        return res.redirect(link.url);
    }
}

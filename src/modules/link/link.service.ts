import { ConflictException, GoneException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLinkDto } from './dto/CreateLinkDto';
import { Link } from '.prisma/client';
import { randomBytes } from 'crypto';

@Injectable()
export class LinkService {
    constructor(private prisma: PrismaService) {}

    async findByCode(code: string) {
        return this.prisma.link.findUnique({ where: { code }})
    }

    async findByRedirect(code: string): Promise<Link> {
        const link = await this.findByCode(code)
        if (!link) {
            throw new NotFoundException('Link não encontrado para código informado.');
        }

        if (link.expiredIn && new Date() > link.expiredIn) {
            throw new GoneException('Este link expirou.');
        }

        return link;
    }

    async create(data: CreateLinkDto ): Promise<Link> {
        if (data.code) {
            const link = await this.findByCode(data.code)
            if (link) {
                throw new ConflictException('Já existe link com o código escolhido!');
            }
        }

        return this.prisma.link.create({ 
            data: {
                ...data,
                code: data.code || randomBytes(4).toString('hex')
            }
         });
    }
}

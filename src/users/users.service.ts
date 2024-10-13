import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common"
import { CreateUserInputDTO } from "./dtos/createUserInput.dto"
import { UptadeUserDTO } from "./dtos/uptadeUserInput.dto"
import { PrismaService } from "src/prisma.service"

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) { }

    async findAll(id: number) { //parametro ( o new é pra precisar pssar parametro)
        console.log(id)
        if (id) {
            const user = await this.prisma.user.findUnique({ where: { id } })
            return user;
        }
        const users = await this.prisma.user.findMany()
        return users;

    }

    async findById(id: number) {// new ParseIntPipe tranforma para o tipo number 
        const user = await this.prisma.user.findUnique({ where: {id} })
        if (user) return user
        throw new NotFoundException() //excessão acoplada ao prot http que retorna uma msg personalizada
    }

    async create(body: CreateUserInputDTO) {
        const user = await this.prisma.user.findUnique({
            where: { email: body.email }
        })
        if (user) {
            throw new BadRequestException('Email ja cadastrado')
        }
        const newUser = await this.prisma.user.create(
            {
                data: body
            }
        );
        return newUser;
    }

    async uptade(id: number, body: UptadeUserDTO) {
        let user = await this.findById(id)
        if (!user) throw new NotFoundException()
        user = await this.prisma.user.update({ where: { id }, data: body })
        return user
    }

    async delete(id: number) {
        let user = await this.findById(id)
        if (!user) throw new NotFoundException()
        await this.prisma.user.delete({ where: { id } })
        return { message: 'User deleted' }
    }
}
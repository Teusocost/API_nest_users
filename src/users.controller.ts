import { Query, Controller, Get, Param, Post, Put, Delete, ParseIntPipe, DefaultValuePipe, RawBody, Body, NotFoundException, BadRequestException } from "@nestjs/common";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { CreateUserInputDTO } from "./dtos/createUserInput.dto"
import { UptadeUserDTO } from "./dtos/uptadeUserInput.dto";
import { UserService } from "./users.service";





@Controller('users') //prefixo de rota, todos as rotas terão esse prefixo 
export class UserController { //classe

    constructor (private readonly usersService: UserService) {} // Injeção do serviço

    @Get() //método
    findAll(@Query('id', new DefaultValuePipe(0), ParseIntPipe) id = 0) { //parametro ( o new é pra precisar pssar parametro)
        return this.usersService.findAll(id);
    }

    @Get(':id')
    findById(@Param('id', new ParseIntPipe()) id: number) {// new ParseIntPipe tranforma para o tipo number 
        return this.usersService.findById(id)
    }

    @Post()
    create(@Body() body: CreateUserInputDTO) {
        return this.usersService.create(body)
    }
    @Put(':id')
    uptade(@Param('id', ParseIntPipe) id: number, @Body() body: UptadeUserDTO) {
        return this.usersService.uptade(id, body)
    }


    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id)
    }
}
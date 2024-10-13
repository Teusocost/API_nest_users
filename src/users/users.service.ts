import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common"
import { CreateUserInputDTO } from "./dtos/createUserInput.dto"
import { UptadeUserDTO } from "./dtos/uptadeUserInput.dto"

@Injectable()
export class UserService{
    private users = [{
        id:1,
        name: 'joao',
        email: 'joao@email.com',
        password: '123'
    },
    {
        id:2,
        name: 'Maria',
        email: 'Maria@email.com',
        password: '123'
    },
    {
        id:3,
        name: 'mateus',
        email: 'mateus@email.com',
        password: '123'
    }
    ]

    findAll(id:number) { //parametro ( o new é pra precisar pssar parametro)
        console.log(id)
        if (id) {
            const user = this.users.find((users) => users.id === id)
            return [user].filter((user) => user)
        }
        return this.users
        
    }

    findById(id:number) {// new ParseIntPipe tranforma para o tipo number 
        const user = this.users.find((users) => users.id === id)
        if(user) return user
        throw new NotFoundException() //excessão acoplada ao prot http que retorna uma msg personalizada
    }

    create(body: CreateUserInputDTO) {
        const user = this.users.find((users) => users.email ===body.email)
        if(user) throw new BadRequestException('Email ja cadastrado')
        const lastUser = this.users[this.users.length - 1]
        const newUser = {
            id: lastUser.id + 1,
            ...body,}

        this.users.push(newUser)
        return newUser;
    }

    uptade(id: number, body: UptadeUserDTO) {
        const user = this.users.find((user) => user.id === id) 
        if(!user) throw new NotFoundException()
        this.users.map((user) => {
        if(user.id === id)
            return {...user, ...body}
        return user
        })
        return {...user, ...body}
    }

    delete(id: number) {
        const user = this.users.find((user) => user.id === id) 
        if(!user) throw new NotFoundException()
        this.users = this.users.filter((user) => user.id !== id) 
        return {message: 'User deleted'}
    }
}
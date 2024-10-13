import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { UserController } from "src/users/users.controller";
import { UserService } from "src/users/users.service";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService, PrismaService],
})
export class UsersModule {}
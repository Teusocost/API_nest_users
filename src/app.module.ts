import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // Importa o MongooseModule
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

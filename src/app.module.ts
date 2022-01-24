import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './domain/entities/cliente.entity';
import { ClienteService } from './domain/services/clienteService';
import { ClientesController } from './domain/controllers/cliente-controller';
import { ProdutoController } from './domain/controllers/produto-controller';
import { ProdutoService } from './domain/services/produtoService';
import { Produto } from './domain/entities/produto.entity';
import { Compra } from './domain/entities/compra.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: 'app',
      database: 'teste_db',
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Cliente,Produto,Compra])
  ],
  controllers: [ClientesController,ProdutoController],
  providers: [ClienteService,ProdutoService],
})
export class AppModule { }

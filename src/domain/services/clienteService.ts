import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClienteDto } from '../dto/create-cliente-dto';
import { CreateProdutoDto } from '../dto/create-produto-dto';
import { Cliente } from '../entities/cliente.entity';
import { Produto } from '../entities/produto.entity';

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(Cliente)
        private clienteRepository: Repository<Cliente>,

    ) { }

    async getAll(): Promise<Cliente[]> {
        return await this.clienteRepository.find()
    }

    async createCliente(novoCliente: CreateClienteDto): Promise<Cliente> {
        const novo = new Cliente();
        novo.nome = novoCliente.nome;
        novo.telefone = novoCliente.telefone;
        novo.email = novoCliente.email;


        return this.clienteRepository.save(novo);
    }

    async updateCliente(idCliente: number, atualizaCliente: CreateClienteDto): Promise<Cliente> {
        const clienteUpdate = await this.clienteRepository.findOne(idCliente);
        clienteUpdate.nome = atualizaCliente.nome;
        clienteUpdate.telefone = atualizaCliente.telefone;
        clienteUpdate.email = atualizaCliente.email;

        return this.clienteRepository.save(clienteUpdate);

    }

    async deleteCliente(idCliente: number): Promise<any> {
        return await this.clienteRepository.delete(idCliente);
    }

}

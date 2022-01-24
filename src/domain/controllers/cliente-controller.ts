import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { response } from 'express';
import { ClienteService } from '../services/clienteService';
import { CreateClienteDto } from '../dto/create-cliente-dto';
import { CreateProdutoDto } from '../dto/create-produto-dto';



@Controller('clientes')
export class ClientesController {
    constructor(
        private clientesServices: ClienteService,
    ) { }

    @Post()
    create(@Body() createClienteDto: CreateClienteDto, @Res() response) {
        this.clientesServices.createCliente(createClienteDto).then(cliente => {
            response.status(HttpStatus.CREATED).json(cliente);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json('error na criação do cliente!');
        })
    }
    
    @Get()
    getAll(@Res() response) {
        this.clientesServices.getAll().then(clienteList => {
            response.status(HttpStatus.OK).json(clienteList)
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json('error na captura do cliente!');
        })
    }

    @Put(':id')
    update(@Body() updateClienteDto: CreateClienteDto, @Res() response, @Param('id') idCliente) {
        this.clientesServices.updateCliente(idCliente, updateClienteDto).then(cliente => {
            response.status(HttpStatus.OK).json(cliente);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json('error na atualização do cliente!');
        })
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') idCliente) {
        this.clientesServices.deleteCliente(idCliente).then(res => {
            response.status(HttpStatus.OK).json(res);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json('error ao deletar o cliente!');
        })
    }


}


import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { CreateCompraDto } from "../dto/create-compra.dto";
import { CreateProdutoDto } from "../dto/create-produto-dto";
import { CompraService } from "../services/compraService";

@Controller('compra')
export class ClientesController {
    constructor(
        private comprasServices: CompraService,
    ) { }

    @Post()
    create(@Body() createCompraDto: CreateCompraDto,setProdutoDto:CreateProdutoDto, @Res() response) {
        this.comprasServices.createCompra(createCompraDto,setProdutoDto).then(compra => {
            response.status(HttpStatus.CREATED).json(compra);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json('error na criação do compra!');
        })
    }
    
    @Get()
    getAll(@Res() response) {
        this.comprasServices.getAll().then(compraList => {
            response.status(HttpStatus.OK).json(compraList)
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json('error na captura do compra!');
        })
    }

    @Put(':id')
    update(@Body() updateCompraDto:CreateCompraDto, @Res() response, @Param('id') idCompra) {
        this.comprasServices.updateCompra(idCompra, updateCompraDto).then(compra => {
            response.status(HttpStatus.OK).json(compra);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json('error na atualização do compra!');
        })
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') idCompra) {
        this.comprasServices.deleteCompra(idCompra).then(res => {
            response.status(HttpStatus.OK).json(res);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json('error ao deletar o compra!');
        })
    }


}


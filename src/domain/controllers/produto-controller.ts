import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateProdutoDto } from '../dto/create-produto-dto';
import { ProdutoService } from '../services/produtoService';



@Controller('produtos')
export class ProdutoController {
    constructor(
        private produtoServices: ProdutoService
    ){}

    @Post()
    create(@Body() createProdutoDto: CreateProdutoDto, @Res() response) {
        this.produtoServices.createProduto(createProdutoDto).then(produto => {
            response.status(HttpStatus.CREATED).json(produto);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json('error na criação do produto!');
        })
    }

    @Get()
    getAll(@Res() response) {
        this.produtoServices.getAll().then(produtoList => {
            response.status(HttpStatus.OK).json(produtoList)
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json('error na captura do cliente!');
        })
    }

    @Put(':id')
    update(@Body() updateProdutoDto: CreateProdutoDto, @Res() response, @Param('id') idProduto) {
        this.produtoServices.updateProduto(idProduto, updateProdutoDto).then(produto => {
            response.status(HttpStatus.OK).json(produto);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json('error na atualização do produto!');
        })
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') idProduto) {
        this.produtoServices.deleteProduto(idProduto).then(res => {
            response.status(HttpStatus.OK).json(res);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json('error ao deletar o produto!');
        })
    }


}

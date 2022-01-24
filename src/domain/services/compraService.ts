import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import moment from "moment";
import { Repository } from "typeorm";
import { CreateCompraDto } from "../dto/create-compra.dto";
import { CreateProdutoDto } from "../dto/create-produto-dto";
import { Compra } from "../entities/compra.entity";

@Injectable()
export class CompraService {
    constructor(
        @InjectRepository(Compra)
        private compraRepository: Repository<Compra>

    ) { }


    async getComprasByCliente(idCliente: string): Promise<Compra[]> {
        const compras = await this.getAll()
        return compras.filter(compra => {
            compra.ClienteId === idCliente;
        })
    }

    async getComprasClienteByData(idCliente: string, dataCompra: Date): Promise<Compra[]> {
        const compras = await this.getComprasByCliente(idCliente)
        return compras.filter(compra => {
            compra.ReleaseDate === dataCompra;
        })


    }

    async getProdutosOrderedByData(qtdestoque: number, dataCompra: String): Promise<Compra[]> {
        const produtos = await this.getAll()
        return produtos.filter(produto => {
            produto.idCompra === dataCompra
        }).sort()
    }

    async getClientesGastamOrderedByData(dataCompra: String): Promise<Compra[]> {
        const compras = await this.getAll()
        return compras.filter(compra =>{
            compra.valor
        }).sort().filter(comprasMaisCaras =>{
            comprasMaisCaras.ClienteId;
            comprasMaisCaras.ReleaseDate;
        })

    }

    async getAll(): Promise<Compra[]> {
        return await this.compraRepository.find()
    }


    async converteData(DataDDMMYY) {
        const dataSplit = DataDDMMYY.split("/");
        const novaData = new Date(parseInt(dataSplit[2], 10),
            parseInt(dataSplit[1], 10) - 1,
            parseInt(dataSplit[0], 10));
        return novaData;
    }

    async createCompra(novaCompra: CreateCompraDto,produto:CreateProdutoDto): Promise<Compra> {
        const nova = new Compra();
        nova.ClienteId = novaCompra.idCliente;
        nova.ProdutoId = novaCompra.idProduto;
        nova.ReleaseDate = novaCompra.ReleaseDate;
        produto.qtdestoque - nova.qtdDeprodutos;
        
        return this.compraRepository.save(nova);
    }

    async updateCompra(idCompra: string, atualizaCompra: CreateCompraDto): Promise<Compra> {
        const compraUpdate = await this.compraRepository.findOne(idCompra);
        compraUpdate.ClienteId = atualizaCompra.idCliente;
        compraUpdate.ProdutoId = atualizaCompra.idProduto;
        compraUpdate.ReleaseDate.getDate();

        return this.compraRepository.save(compraUpdate);

    }

    async deleteCompra(idCompra: string): Promise<any> {
        return await this.compraRepository.delete(idCompra);
    }

}

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateProdutoDto } from "../dto/create-produto-dto";
import { Produto } from "../entities/produto.entity";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>

    ) { }

    async getAll(): Promise<Produto[]> {
        return await this.produtoRepository.find()
    }

    async createProduto(novoProduto: CreateProdutoDto): Promise<Produto> {
        const novo = new Produto();
        novo.nome = novoProduto.nome;
        novo.qtdestoque = novoProduto.qtdestoque;
        novo.preco = novoProduto.preco;

        return this.produtoRepository.save(novo);
    }

    async updateProduto(idProduto: number, atualizaProduto: CreateProdutoDto): Promise<Produto> {
        const produtoUpdate = await this.produtoRepository.findOne(idProduto);
        produtoUpdate.nome = atualizaProduto.nome;
        produtoUpdate.qtdestoque = atualizaProduto.qtdestoque;
        produtoUpdate.preco = atualizaProduto.preco;

        return this.produtoRepository.save(produtoUpdate);

    }

    async deleteProduto(idProduto: number): Promise<any> {
        return await this.produtoRepository.delete(idProduto);
    }

}

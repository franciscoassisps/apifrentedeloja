import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Compra } from "./compra.entity";
import { Produto } from "./produto.entity";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    idCliente: string;

    @Column()
    nome: string;

    @Column()
    telefone:string;

    @Column()
    email:string;

    @OneToMany(type => Compra, compra => compra.Cliente)
    Compras: Compra[];
}

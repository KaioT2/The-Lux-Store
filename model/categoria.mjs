import { DataTypes } from "sequelize";
import conexao from "../database/mysql.mjs";

const Categoria = conexao.define('Categoria', {
    descricao: DataTypes.STRING(800)
});


export default Categoria;
import Knex from 'knex';

export async function seed(Knex: Knex) {
    await Knex("items").insert([
        { title: 'Lâmpada', image: 'lampadas.svg' },
        { title: 'Pilhas e Baterias', image: 'baterias.svg' },
        { title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
        { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
        { title: 'Resíduos Orgânicos', image: 'organicos.svg' },
        { title: 'Ôleo de Cozinha', image: 'oleo.svg' },
    ])
}
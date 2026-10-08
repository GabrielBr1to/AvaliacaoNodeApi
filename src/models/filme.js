const filmes = new Array (
    {
        titulo:"shrek",
        classificacao:"L",
        descricao:"filme do ogro",
        lancado:true
    },

    {
        titulo:"carros",
        classificacao:"L",
        descricao:"filme do katiau",
        lancado:true
    },

    {
        titulo:"vida de inseto",
        classificacao:"L",
        descricao:"filme do zikavirus",
        lancado:true
    },

    {
        titulo:"tropa de elite",
        classificacao:"18",
        descricao:".50",
        lancado:true
    },

    {
        titulo:"odisseia",
        classificacao:"18",
        descricao:"filme do caba voltando pra muié",
        lancado:true
    },

    {
        titulo:"Homem aranha",
        classificacao:"16",
        descricao:"homem que gruda na parede",
        lancado:true
    },

    {
        titulo:"barbie",
        classificacao:"L",
        descricao:"filme de macho",
        lancado:true
    },

    {
        titulo:"os sem floresta",
        classificacao:"L",
        descricao:"filme do esquilo maluco",
        lancado:true
    },

    {
        titulo:"ta dando onda",
        classificacao:"L",
        descricao:"filme do taca a mae pra ver se quica",
        lancado:true
    },

    {
        titulo:"a fulga das galinhas",
        classificacao:"L",
        descricao:"quem disse que pinguim não voa?",
        lancado:true
    }
);

class filme {
    buscar (){
        return filmes
    }
}

export default new filme()
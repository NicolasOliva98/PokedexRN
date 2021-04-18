
const types = {
    ghost: "Fantasma",
    dark: "Siniestro",
    electric: "Eléctrico",
    normal: "Normal",
    fire: "Fuego",
    psychic: "Psíquico",
    flying: "Volador",
    steel: "Acero",
    poison: "Veneno",
    dragon: "Dragón",
    water: "Agua",
    ice: "Hielo",
    rock: "Roca",
    fighting: "Lucha",
    grass: "Planta",
    bug: "Bicho",
    ground: "Tierra",
    fairy: "Hada",
}

export const Typetras = (x) => {
    switch (x) {
        case 'grass':
            return types.grass
        case 'fire':
            return types.fire
        case 'water':
            return types.water
        case 'bug':
            return types.bug
        case 'poison':
            return types.poison
        case 'electric':
            return types.electric
        case 'fairy':
            return types.fairy
        case 'fighting':
            return types.fighting
        case 'dark':
            return types.dark
        case 'dragon':
            return types.dragon
        case 'flying':
            return types.flying
        case 'ghost':
            return types.ghost
        case 'ground':
            return types.ground
        case 'ice':
            return types.ice
        case 'rock':
            return types.rock
        case 'steel':
            return types.steel
        case 'psychic':
            return types.psychic
        default:
            return types.normal
    }
}

export const colors = {
    ghost: "rgb(185,222,224)",
    dark: "rgb(33,31,31)",
    electric: 'rgb(255,206,75)',
    normal: 'rgb(165,173,176)',
    fire: 'rgb(251,108,108)',
    psychic: "rgb(242,81,132)",
    flying: "rgb(182,99,87)",
    steel: "rgb(158,158,158)",
    poison: 'rgb(124,83,140)',
    dragon: "rgb(156,102,110)",
    water: 'rgb(118,189,254)',
    ice: "rgb(97,208,229)",
    rock: "rgb(182,143,73)",
    fighting: "rgb(68,55,55)",
    grass: 'rgb(79,213,183)',
    bug: 'rgb(131,168,81)',
    ground: "rgb(145,102,69)",
    fairy: "rgb(251,199,244)",
}
export const ActiveColor = (item) => {
    const exp = item.type.find(x => x === 'grass' | x === 'fire' | x === 'water' | x === 'bug' | x === 'poison' | x === 'electric' | x === 'ground' | x === 'fairy' |
        x === 'fighting' | x === 'rock' | x === 'ice' | x === 'steel' | x === 'flying' | x === 'psychic' | x === 'dark' | x === 'ghost' | x === 'dragon')
    switch (exp) {
        case 'grass':
            return colors.grass
        case 'fire':
            return colors.fire
        case 'water':
            return colors.water
        case 'bug':
            return colors.bug
        case 'poison':
            return colors.poison
        case 'electric':
            return colors.electric
        case 'fairy':
            return colors.fairy
        case 'fighting':
            return colors.fighting
        case 'dark':
            return colors.dark
        case 'dragon':
            return colors.dragon
        case 'flying':
            return colors.flying
        case 'ghost':
            return colors.ghost
        case 'ground':
            return colors.ground
        case 'ice':
            return colors.ice
        case 'rock':
            return colors.rock
        case 'steel':
            return colors.steel
        case 'psychic':
            return colors.psychic
        default:
            return colors.normal
    }
}
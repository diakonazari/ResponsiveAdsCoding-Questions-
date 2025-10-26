// You have an array.
// An item of the array has `name`, a string, and `types`, an array of strings.
// The length of `types` in a record can be 1-99 (not always 1-2)
// e.g. [{ name: "bulbasaur", types: ["grass", "poison"] }]
const pokes = [
    {
        "name": "bulbasaur",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "ivysaur",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "venusaur",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "charmander",
        "types": [
            "fire"
        ]
    },
    {
        "name": "charmeleon",
        "types": [
            "fire"
        ]
    },
    {
        "name": "charizard",
        "types": [
            "fire",
            "flying"
        ]
    },
    {
        "name": "squirtle",
        "types": [
            "water"
        ]
    },
    {
        "name": "wartortle",
        "types": [
            "water"
        ]
    },
    {
        "name": "blastoise",
        "types": [
            "water"
        ]
    },
    {
        "name": "caterpie",
        "types": [
            "bug"
        ]
    },
    {
        "name": "metapod",
        "types": [
            "bug"
        ]
    },
    {
        "name": "butterfree",
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "name": "weedle",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "kakuna",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "beedrill",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "pidgey",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "pidgeotto",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "pidgeot",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "rattata",
        "types": [
            "normal"
        ]
    },
    {
        "name": "raticate",
        "types": [
            "normal"
        ]
    },
    {
        "name": "spearow",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "fearow",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "ekans",
        "types": [
            "poison"
        ]
    },
    {
        "name": "arbok",
        "types": [
            "poison"
        ]
    },
    {
        "name": "pikachu",
        "types": [
            "electric"
        ]
    },
    {
        "name": "raichu",
        "types": [
            "electric"
        ]
    },
    {
        "name": "sandshrew",
        "types": [
            "ground"
        ]
    },
    {
        "name": "sandslash",
        "types": [
            "ground"
        ]
    },
    {
        "name": "nidoran-f",
        "types": [
            "poison"
        ]
    },
    {
        "name": "nidorina",
        "types": [
            "poison"
        ]
    },
    {
        "name": "nidoqueen",
        "types": [
            "poison",
            "ground"
        ]
    },
    {
        "name": "nidoran-m",
        "types": [
            "poison"
        ]
    },
    {
        "name": "nidorino",
        "types": [
            "poison"
        ]
    },
    {
        "name": "nidoking",
        "types": [
            "poison",
            "ground"
        ]
    },
    {
        "name": "clefairy",
        "types": [
            "fairy"
        ]
    },
    {
        "name": "clefable",
        "types": [
            "fairy"
        ]
    },
    {
        "name": "vulpix",
        "types": [
            "fire"
        ]
    },
    {
        "name": "ninetales",
        "types": [
            "fire"
        ]
    },
    {
        "name": "jigglypuff",
        "types": [
            "normal",
            "fairy"
        ]
    },
    {
        "name": "wigglytuff",
        "types": [
            "normal",
            "fairy"
        ]
    },
    {
        "name": "zubat",
        "types": [
            "poison",
            "flying"
        ]
    },
    {
        "name": "golbat",
        "types": [
            "poison",
            "flying"
        ]
    },
    {
        "name": "oddish",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "gloom",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "vileplume",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "paras",
        "types": [
            "bug",
            "grass"
        ]
    },
    {
        "name": "parasect",
        "types": [
            "bug",
            "grass"
        ]
    },
    {
        "name": "venonat",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "venomoth",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "diglett",
        "types": [
            "ground"
        ]
    }
];

// Problem 1: Filter by type
// - Populate `answer1` with Pokemon names that contain the type string
const type = "grass";

const answer1 = []; // TODO
pokes.forEach(poke => {
    poke.types.forEach(t => {
        if (t === type){
            answer1.push(poke.name)
        }
    })
})

// Problem 2: Filter by types (AND / OR)
// - Populate `answer2Or` with Pokemon names that satisfy AT LEAST ONE of the given types
// - Populate `answer2And` with Pokemon names that satisfy ALL of the given types
// (Note that the length of the given `types` can be 1-99. (not always 1-2))
const types = ["bug", "poison"];
const answer2Or = []; // TODO
const answer2And = []; // TODO

pokes.forEach(poke => {
    let j = 0;
   for (let i = 0 ; i < poke.types.length ; i++) {
    types.forEach(t => {
        if (t === poke.types[i]) {
            j++;
        }
    })
   }
   if (j>0) {
    answer2Or.push(poke.name)
    if ( j === types.length){
        answer2And.push(poke.name)
    }
}
})

// See your results in your DevTools console
console.log("Answer 1", answer1);
console.log("Answer 2 (OR)", answer2Or);
console.log("Answer 2 (AND)", answer2And);

// --------------------------------

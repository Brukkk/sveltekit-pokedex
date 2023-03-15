function fromTypeColor(type) {
    switch (type) {
        case "normal":
            return "from-gray-300";
        case "grass":
            return "from-green-500";
        case "fire":
            return "from-red-500";
        case "water":
            return "from-blue-500";
        case "electric":
            return "from-yellow-400";
        case "ice":
            return "from-teal-500";
        case "fighting":
            return "from-red-600";
        case "poison":
            return "from-purple-500";
        case "ground":
            return "from-yellow-600";
        case "flying":
            return "from-blue-400";
        case "psychic":
            return "from-pink-500";
        case "bug":
            return "from-green-600";
        case "rock":
            return "from-gray-500";
        case "ghost":
            return "from-indigo-400";
        case "dragon":
            return "from-red-700";
        case "dark":
            return "from-gray-800";
        case "steel":
            return "from-gray-600";
        case "fairy":
            return "from-pink-400";
        default:
            return "from-gray-500";
    }
}

function toTypeColor(type) {
    switch (type) {
        case "normal":
            return "to-gray-300";
        case "grass":
            return "to-green-500";
        case "fire":
            return "to-red-500";
        case "water":
            return "to-blue-500";
        case "electric":
            return "to-yellow-400";
        case "ice":
            return "to-teal-500";
        case "fighting":
            return "to-red-600";
        case "poison":
            return "to-purple-500";
        case "ground":
            return "to-yellow-600";
        case "flying":
            return "to-blue-400";
        case "psychic":
            return "to-pink-500";
        case "bug":
            return "to-green-600";
        case "rock":
            return "to-gray-500";
        case "ghost":
            return "to-indigo-400";
        case "dragon":
            return "to-red-700";
        case "dark":
            return "to-gray-800";
        case "steel":
            return "to-gray-600";
        case "fairy":
            return "to-pink-400";
        default:
            return "to-gray-500";
    }
}


export { fromTypeColor, toTypeColor}
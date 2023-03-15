export function getBackgroundColor(type1, type2) {
    let getTypeColor = (type) => {
        switch (type) {
            case "normal":
                return "bg-gray-300";
            case "grass":
                return "bg-green-500";
            case "fire":
                return "bg-red-500";
            case "water":
                return "bg-blue-500";
            case "electric":
                return "bg-yellow-400";
            case "ice":
                return "bg-teal-500";
            case "fighting":
                return "bg-red-600";
            case "poison":
                return "bg-purple-500";
            case "ground":
                return "bg-yellow-600";
            case "flying":
                return "bg-blue-400";
            case "psychic":
                return "bg-pink-500";
            case "bug":
                return "bg-green-600";
            case "rock":
                return "bg-gray-500";
            case "ghost":
                return "bg-indigo-400";
            case "dragon":
                return "bg-red-700";
            case "dark":
                return "bg-gray-800";
            case "steel":
                return "bg-gray-600";
            case "fairy":
                return "bg-pink-400";
            default:
                return "bg-gray-200";
        }
    };

    if (type1 && type2) {
        return "bg-gradient-to-r"; 
    } else {
        return  getTypeColor(type1);
    }
}
export function getBackgroundColor(type1, type2) {
    let getTypeColor = (type) => {
        switch (type) {
            case "normal":
                return "bg-gradient-to-br from-gray-300 via-slate-200 to-gray-300";
            case "grass":
                return "bg-gradient-to-br from-green-500 via-slate-200 to-green-500";
            case "fire":
                return "bg-gradient-to-br from-red-500 via-slate-200 to-red-500";
            case "water":
                return "bg-gradient-to-br from-blue-500 via-slate-200 to-blue-500";
            case "electric":
                return "bg-gradient-to-br from-yellow-400 via-slate-200 to-yellow-400";
            case "ice":
                return "bg-gradient-to-br from-teal-500 via-slate-200 to-teal-500";
            case "fighting":
                return "bg-gradient-to-br from-amber-900 via-slate-200 to-amber-900";
            case "poison":
                return "bg-gradient-to-br from-purple-500 via-slate-200 to-purple-500";
            case "ground":
                return "bg-gradient-to-br from-yellow-600 via-slate-200 to-yellow-600";
            case "flying":
                return "bg-gradient-to-br from-blue-400 via-slate-200 to-blue-400";
            case "psychic":
                return "bg-gradient-to-br from-pink-500 via-slate-200 to-pink-500";
            case "bug":
                return "bg-gradient-to-br from-green-600 via-slate-200 to-green-600";
            case "rock":
                return "bg-gradient-to-br from-gray-500 via-slate-200 to-gray-500";
            case "ghost":
                return "bg-gradient-to-br from-indigo-400 via-slate-200 to-indigo-400";
            case "dragon":
                return "bg-gradient-to-br from-red-700 via-slate-200 to-red-700";
            case "dark":
                return "bg-gradient-to-br from-gray-800 via-slate-200 to-gray-800";
            case "steel":
                return "bg-gradient-to-br from-gray-600 via-slate-200 to-gray-600";
            case "fairy":
                return "bg-gradient-to-br from-pink-400 via-slate-200 to-pink-400";
            default:
                return "bg-gradient-to-br from-gray-200 via-slate-200 to-gray-200";
        }
    };

    if (type1 && type2) {
        return "bg-gradient-to-tl via-slate-200"; 
    } else {
        return  getTypeColor(type1);
    }
}
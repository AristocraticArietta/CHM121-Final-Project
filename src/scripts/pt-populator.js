// Export the helper function
export function getGroupColor(group) {
    const colors = {
        'nonmetal': 'bg-green-200 text-green-900',
        'noble-gas': 'bg-purple-200 text-purple-900',
        'alkali-metal': 'bg-red-200 text-red-900',
        'alkaline-earth': 'bg-orange-200 text-orange-900',
        'metalloid': 'bg-yellow-200 text-yellow-900',
        'halogen': 'bg-blue-200 text-blue-900',
        'transition-metal': 'bg-indigo-200 text-indigo-900',
        'post-transition-metal': 'bg-pink-200 text-pink-900',
        'lanthanide': 'bg-teal-200 text-teal-900',
        'actinide': 'bg-gray-200 text-gray-900'
    };
    return colors[group] || 'bg-gray-200 text-gray-900'; 
}
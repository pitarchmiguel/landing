export default function Card({title, description}) {
    return (
        <div className="w-96 h-56 bg-gray-700 rounded-xl shadow-2xl p-4 flex-auto">
            <h2 className="font-bold">{title}</h2>
            <h4 className="text-sm">{description}</h4>
        </div>
    )
}
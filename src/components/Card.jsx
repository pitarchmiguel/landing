export default function Card({title, description}) {
    return (
        <div className="md:w-80 md:h-48 h-32 bg-gray-50 rounded-xl p-5 flex-auto">
            <h2 className="font-bold">{title}</h2>
            <h4 className="text-sm">{description}</h4>
        </div>
    )
}
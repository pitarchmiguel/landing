export default function Card({title, description}) {
    return (
        <div className="md:w-96 md:h-56 h-32 bg-gray-50 rounded-xl p-5 flex-auto">
            <h2 className="font-bold">{title}</h2>
            <h4 className="text-sm">{description}</h4>
        </div>
    )
}
function ConfessionCard({confession}) {
    return (
        <div className="component relative pl-4 pr-4 pt-2 pb-6 min-h-32 md:min-h-56 leading-7 overflow-hidden rounded-xl bg-secondary space-y-5">
            {/* Header */}
            <div className="font-bold text-white pl-2 pr-2 justify-center w-20 rounded-full bg-gray-600 bg-opacity-50">
                {confession._id}
            </div>

            {/* Content */}
            <div className="text-textColor">
                {confession.content}
            </div>
        </div>
    )
}

export default ConfessionCard

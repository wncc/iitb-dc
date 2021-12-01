const ConfessionCard = ({ confession }) => {
  return (
    <div className="relative p-6 space-y-5 overflow-hidden leading-7 component min-h-32 md:min-h-56 rounded-xl bg-secondary">
      {/* Header */}
      <span className="flex justify-center w-20 font-semibold tracking-wider text-white bg-gray-900 bg-opacity-50 rounded-full">
        # {confession.id}
      </span>

      {/* Content */}
      <p className="text-textColor">{confession.content}</p>
    </div>
  );
};

export default ConfessionCard;

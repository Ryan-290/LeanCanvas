

export default function ContentTag ( {children} ) {

  return (
    <div className="px-2 py-1 max-w-fit soild rounded-2xl bg-gray-600 text-xs text-white font-semibold">
     {children}
    </div>
  );
};
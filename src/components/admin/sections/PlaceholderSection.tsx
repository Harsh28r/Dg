interface PlaceholderProps {
  title: string;
  description: string;
}

export function PlaceholderSection({ title, description }: PlaceholderProps) {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-6">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="mt-2 text-gray-500">{description}</p>
      </div>
    </div>
  );
}
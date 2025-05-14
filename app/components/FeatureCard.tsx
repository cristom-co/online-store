
export default function FeatureCard({ title, description, icon }: {
    title: string, description: string, icon: string
}) {
    return (
      <div className="text-center p-6 bg-white rounded-lg shadow">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
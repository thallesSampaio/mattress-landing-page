// components/ServiceCard.tsx
interface ServiceCardProps {
    icon: JSX.Element;
    title: string;
    description: string;
  }
  
  export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
      <div className="shadow-lg border border-gray-300 rounded-lg p-4 flex flex-wrap flex-col items-start">
        <div className="mb-4 text-2xl text-blue-500">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
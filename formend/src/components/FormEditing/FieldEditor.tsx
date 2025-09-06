import { FiTrash2 } from 'react-icons/fi';

interface FieldEditorProps {
  id: string;
  label: string;
  onDelete: (id: string) => void;
  children: React.ReactNode;
}

export default function FieldEditor({
  id,
  label,
  onDelete,
  children,
}: FieldEditorProps) {
  return (
    <section className="mb-4 rounded-md border border-gray-300 bg-gray-50 p-5 shadow-sm">
      <header className="mb-3 flex justify-between items-center">
        <h4 className="text-base font-semibold text-gray-900">{label}</h4>
        <button
          type="button"
          onClick={() => onDelete(id)}
          aria-label={`Delete field ${label}`}
          className="text-red-600 hover:text-red-800 focus:outline-none"
        >
          <FiTrash2 size={20} />
        </button>
      </header>
      <div className="divide-y divide-gray-300 pt-3">{children}</div>
    </section>
  );
}

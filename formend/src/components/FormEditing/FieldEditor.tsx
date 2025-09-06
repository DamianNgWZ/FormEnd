import { useState } from 'react';
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
  const [required, setRequired] = useState(false);

  return (
    <section className="mb-4 rounded-md border border-gray-300 bg-gray-50 p-5 shadow-sm">
      <header className="mb-3 flex justify-between items-center">
        <h4 className="text-base font-semibold text-gray-900">{label}</h4>
        <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-2">
            <input
              id={`req-toggle-${id}`}
              type="checkbox"
              checked={required}
              onChange={(e) => setRequired(e.target.checked)}
              className="cursor-pointer rounded border-gray-400 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor={`req-toggle-${id}`}
              className="cursor-pointer text-sm text-gray-600"
            >
              Required
            </label>
          </div>
          <button
            type="button"
            onClick={() => onDelete(id)}
            aria-label={`Delete field ${label}`}
            className="text-red-600 hover:text-red-800 focus:outline-none"
          >
            <FiTrash2 size={20} />
          </button>
        </div>
      </header>
      <div className="divide-y divide-gray-300 pt-3">{children}</div>
    </section>
  );
}
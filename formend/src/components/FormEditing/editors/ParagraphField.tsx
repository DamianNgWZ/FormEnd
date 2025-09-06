import { useState, useEffect } from 'react';
import FieldEditor from '../FieldEditor';

interface ParagraphData {
  label: string;
  placeholder: string;
  required: boolean;
}

interface ParagraphProps {
  id: string;
  initialData?: ParagraphData;
  onDelete: (id: string) => void;
  onChange: (id: string, data: ParagraphData) => void;
}

export default function ParagraphField({
  id,
  initialData = { label: '', placeholder: '', required: false },
  onDelete,
  onChange,
}: ParagraphProps) {
  const [label, setLabel] = useState(initialData.label);
  const [placeholder, setPlaceholder] = useState(initialData.placeholder);
  const [required, setRequired] = useState(initialData.required);

  useEffect(() => {
    onChange(id, { label, placeholder, required });
  }, [id, label, placeholder, required, onChange]);

  return (
    <FieldEditor id={id} label="Paragraph Field" onDelete={onDelete}>
      <div className="mb-3">
        <label className="block text-xs font-medium text-text-secondary mb-1">
          Label
        </label>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Paragraph Label"
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-brand-default focus:border-brand-default"
        />
      </div>
      <div className="mb-3">
        <label className="block text-xs font-medium text-text-secondary mb-1">
          Placeholder
        </label>
        <textarea
          value={placeholder}
          onChange={(e) => setPlaceholder(e.target.value)}
          placeholder="Enter text here"
          rows={3}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-brand-default focus:border-brand-default resize-none"
        />
      </div>
      <div className="flex items-center gap-2">
        <input
          id={`required-${id}`}
          type="checkbox"
          checked={required}
          onChange={(e) => setRequired(e.target.checked)}
          className="w-4 h-4 text-brand-default border-gray-300 rounded focus:ring-brand-default"
        />
        <label
          htmlFor={`required-${id}`}
          className="text-xs font-medium text-text-secondary cursor-pointer"
        >
          Required
        </label>
      </div>
    </FieldEditor>
  );
}

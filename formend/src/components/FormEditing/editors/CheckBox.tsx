import { useState, useEffect } from 'react';
import FieldEditor from '../FieldEditor';

interface CheckboxData {
  label: string;
  required: boolean;
}

interface CheckboxProps {
  id: string;
  initialData?: CheckboxData;
  onDelete: (id: string) => void;
  onChange: (id: string, data: CheckboxData) => void;
}

export default function Checkbox({
  id,
  initialData = { label: '', required: false },
  onDelete,
  onChange,
}: CheckboxProps) {
  const [label, setLabel] = useState(initialData.label);
  const [required, setRequired] = useState(initialData.required);

  useEffect(() => {
    onChange(id, { label, required });
  }, [id, label, required, onChange]);

  return (
    <FieldEditor id={id} label="Checkbox Field" onDelete={onDelete}>
      <div>
        <label className="block text-xs font-medium text-text-secondary mb-1">Label</label>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Checkbox Label"
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-brand-default focus:border-brand-default"
        />
      </div>
      <div className="flex items-center gap-2 mt-2">
        <input
          id={`required-${id}`}
          type="checkbox"
          checked={required}
          onChange={(e) => setRequired(e.target.checked)}
          className="w-4 h-4 text-brand-default border-gray-300 rounded focus:ring-brand-default"
        />
        <label htmlFor={`required-${id}`} className="text-xs font-medium text-text-secondary cursor-pointer">
          Required
        </label>
      </div>
    </FieldEditor>
  );
}
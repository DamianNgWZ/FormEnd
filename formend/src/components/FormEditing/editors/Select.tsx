import { useState, useEffect } from 'react';
import FieldEditor from '../FieldEditor';

interface SelectData {
  label: string;
  options: string[];
  required: boolean;
}

interface SelectProps {
  id: string;
  initialData?: SelectData;
  onDelete: (id: string) => void;
  onChange: (id: string, data: SelectData) => void;
}

export default function Select({
  id,
  initialData = { label: '', options: [''], required: false },
  onDelete,
  onChange,
}: SelectProps) {
  const [label, setLabel] = useState(initialData.label);
  const [options, setOptions] = useState(initialData.options);
  const [required, setRequired] = useState(initialData.required);

  useEffect(() => {
    onChange(id, { label, options, required });
  }, [id, label, options, required, onChange]);

  const updateOption = (value: string, index: number) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => setOptions([...options, '']);

  const removeOption = (index: number) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  return (
    <FieldEditor id={id} label="Select Field" onDelete={onDelete}>
      <div>
        <label className="block text-xs font-medium text-text-secondary mb-1">Label</label>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Select Label"
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-brand-default focus:border-brand-default"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-text-secondary mb-1">Options</label>
        {options.map((option, idx) => (
          <div key={idx} className="flex items-center gap-2 mb-2">
            <input
              type="text"
              value={option}
              onChange={(e) => updateOption(e.target.value, idx)}
              placeholder={`Option ${idx + 1}`}
              className="flex-grow px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-brand-default focus:border-brand-default"
            />
            <button
              type="button"
              onClick={() => removeOption(idx)}
              className="text-red-500 hover:text-red-700"
              aria-label={`Remove option ${idx + 1}`}
            >
              &times;
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addOption}
          className="text-brand-default hover:underline text-sm"
        >
          + Add option
        </button>
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
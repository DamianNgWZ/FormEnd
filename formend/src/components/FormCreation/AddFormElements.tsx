import { FiType, FiAlignLeft, FiCheckSquare } from 'react-icons/fi';
import { MdFormatListBulleted } from 'react-icons/md';
import ElementButton from './ElementButton';

interface AddFormElementsProps {
  onAddElement: (type: 'text' | 'paragraph' | 'checkbox' | 'select') => void;
}

export default function AddFormElements({ onAddElement }: AddFormElementsProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-5">
        Add Form Elements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ElementButton
          label="Text"
          icon={<FiType />}
          onClick={() => onAddElement('text')}
        />
        <ElementButton
          label="Paragraph"
          icon={<FiAlignLeft />}
          onClick={() => onAddElement('paragraph')}
        />
        <ElementButton
          label="Checkbox"
          icon={<FiCheckSquare />}
          onClick={() => onAddElement('checkbox')}
        />
        <ElementButton
          label="Select"
          icon={<MdFormatListBulleted />}
          onClick={() => onAddElement('select')}
        />
      </div>
    </div>
  );
}

import { FiType, FiAlignLeft, FiCheckSquare } from 'react-icons/fi';
import { MdFormatListBulleted } from 'react-icons/md';
import ElementButton from './ElementButton';

export default function ElementBox() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm">
      <h2 className="text-medium font-medium text-gray-900 mb-5">Add Form Elements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ElementButton
          label="Text"
          icon={<FiType />}
          onClick={() => console.log('Text clicked')}
        />
        <ElementButton
          label="Paragraph"
          icon={<FiAlignLeft />}
          onClick={() => console.log('Paragraph clicked')}
        />
        <ElementButton
          label="Checkbox"
          icon={<FiCheckSquare />}
          onClick={() => console.log('Checkbox clicked')}
        />
        <ElementButton
          label="Select"
          icon={<MdFormatListBulleted />}
          onClick={() => console.log('Select clicked')}
        />
      </div>
    </div>
  );
}
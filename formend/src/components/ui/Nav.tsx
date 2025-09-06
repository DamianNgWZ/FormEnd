import logo from '../../assets/logo.svg';
import { IoSaveOutline } from 'react-icons/io5';

interface NavProps {
  isPreviewMode: boolean;
  onTogglePreview: () => void;
  disablePreviewToggle?: boolean;
}

export default function Nav({
  isPreviewMode,
  onTogglePreview,
  disablePreviewToggle = false,
}: NavProps) {
  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-8">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-5" />
          <div className="text-2xl font-bold text-gray-800">FormEnd</div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="border rounded-full border-gray-500 flex flex-row items-center bg-brand text-gray-800 px-4 py-1 rounded hover:bg-gray-400 text-sm">
            <IoSaveOutline className="inline-block mr-2 text-sm" />
            Save
          </button>
          <button
            onClick={onTogglePreview}
            disabled={disablePreviewToggle}
            className={`border rounded-full border-gray-500 flex flex-row items-center bg-brand text-gray-800 px-4 py-1 rounded hover:bg-gray-400 text-sm transition-colors duration-200 ${
              disablePreviewToggle ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isPreviewMode ? (
              <>
                <span className="hidden sm:inline">Edit Form</span>
                <span className="sm:hidden">Edit</span>
              </>
            ) : (
              <>
                <span className="hidden sm:inline">Preview Form</span>
                <span className="sm:hidden">Preview</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

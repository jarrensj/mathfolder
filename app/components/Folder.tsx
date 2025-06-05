import React, { useState } from 'react';
import { Folder as FolderIcon, ChevronRight, ChevronDown } from 'lucide-react';
import File from './File';
import { IconType } from '../types/icons';

interface FolderProps {
  name: string;
  files: Array<{
    name: string;
    href: string;
    iconType?: IconType;
  }>;
}

const Folder = ({ name, files }: FolderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="select-none">
      <div 
        className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200 group"
        onClick={toggleFolder}
      >
        <div className="transition-transform duration-200">
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </div>
        <FolderIcon 
          size={20} 
          className="text-yellow-400 group-hover:text-blue-600 transition-colors duration-200"
        />
        <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
          {name}
        </span>
      </div>
      
      <div className={`ml-6 overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="border-l-2 border-gray-200 pl-4 py-2 space-y-1">
          {files.map((file, index) => (
            <File 
              key={index}
              name={file.name}
              href={file.href}
              iconType={file.iconType}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Folder; 
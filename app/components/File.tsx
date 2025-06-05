import React from 'react';
import Link from 'next/link';
import { File as FileIcon, Link as LinkIcon, Mail, Users } from 'lucide-react';
import { IconType } from '../types/icons';

interface FileProps {
  name: string;
  href: string;
  iconType?: IconType;
}

const File = ({ name, href, iconType = 'file' }: FileProps) => {
  const getIcon = () => {
    switch (iconType) {
      case 'link': return <LinkIcon size={16} />;
      case 'envelope': return <Mail size={16} />;
      case 'people': return <Users size={16} />;
      default: return <FileIcon size={16} />;
    }
  };

  const isMailto = href.startsWith('mailto:');

  return (
    <Link 
      href={href}
      target={isMailto ? undefined : '_blank'}
      rel={isMailto ? undefined : 'noopener noreferrer'}
      className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded-md cursor-pointer transition-all duration-200 group"
    >
      <span className="text-gray-500 group-hover:text-blue-600 transition-colors duration-200">
        {getIcon()}
      </span>
      <span className="text-gray-700 group-hover:text-blue-700 transition-colors duration-200 text-sm">
        {name}
      </span>
    </Link>
  );
};

export default File; 
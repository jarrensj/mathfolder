'use client';

import React from 'react';
import Folder from './components/Folder';

export default function Home() {
  const files = [
    {
      name: 'the chaos is calculated',
      href: 'blog/the-chaos-is-calculated',
      iconType: 'file' as const
    },
    {
      name: 'contact',
      href: 'mailto:contact@mathfolder.com',
      iconType: 'envelope' as const
    },
    {
      name: 'team',
      href: 'https://kwaji.com',
      iconType: 'people' as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <Folder 
          name="Math Folder" 
          files={files}
        />
      </div>
    </div>
  );
}

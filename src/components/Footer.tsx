import { profileData } from '../constants/profile';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-black border-t border-slate-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 flex items-center justify-center gap-2">
          Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by {profileData.name}
        </p>
        <p className="text-gray-600 text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

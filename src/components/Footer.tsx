import { profileData } from '../constants/profile';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-black border-t border-slate-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          Built by {profileData.name}
        </p>
        <p className="text-gray-600 text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

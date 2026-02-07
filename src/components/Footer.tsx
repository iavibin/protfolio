import { profileData } from '../constants/profile';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-300">
          Built by {profileData.name}
        </p>
        <p className="text-gray-500 text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

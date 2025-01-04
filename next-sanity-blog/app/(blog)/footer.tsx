import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} KITTEN-BLOGS . All rights reserved.</p>
        <div className="mt-2">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">Instagram</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">Facebook</a>
          <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer" className="mx-2">Discord</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdownMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="text-white py-4">
      <div className="flex justify-between items-center px-6">

        <div className="text-xl font-semibold">Alex Weakland</div>

      </div>
    </header>
  );
}

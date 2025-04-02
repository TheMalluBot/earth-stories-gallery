
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { text: 'Portfolio', href: '#portfolio' },
    { text: 'Workshops', href: '#workshops' },
    { text: 'Blog', href: '#blog' },
    { text: 'About', href: '#about' },
    { text: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="container flex justify-between items-center">
        <a href="#" className="font-serif text-xl md:text-2xl font-bold text-primary">
          Nature's Lens
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-sm font-medium hover:text-primary/80 transition-colors"
            >
              {link.text}
            </a>
          ))}
          <Button>Book a Session</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-20">
          <div className="flex flex-col items-center space-y-6 p-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-lg font-medium hover:text-primary/80 transition-colors"
                onClick={toggleMenu}
              >
                {link.text}
              </a>
            ))}
            <Button onClick={toggleMenu}>Book a Session</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;

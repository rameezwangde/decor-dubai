import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import DecorStudioModal from './components/DecorStudioModal';

export default function App() {
  const [activeStudioCategory, setActiveStudioCategory] = useState(null);

  const handleOpenStudio = (categoryId) => {
    setActiveStudioCategory(categoryId);
  };

  const handleCloseStudio = () => {
    setActiveStudioCategory(null);
  };

  return (
    <div className="app-container">
      <Navbar onOpenStudio={handleOpenStudio} />
      <main>
        <Hero onOpenStudio={handleOpenStudio} />
        <Services onOpenStudio={handleOpenStudio} />
      </main>
      <Footer onOpenStudio={handleOpenStudio} />

      {/* Interactive Decor Studio Modal Overlay */}
      {activeStudioCategory && (
        <DecorStudioModal
          categoryId={activeStudioCategory}
          onClose={handleCloseStudio}
        />
      )}
    </div>
  );
}


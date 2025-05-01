// src/Layout.jsx
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full bg-[#1A1A1A] text-gray-800">
      <div className="w-full">
        <Header />
        <main className="px-6 py-6">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

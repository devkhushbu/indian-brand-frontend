export function Footer() {
  return (
    <footer className="w-full bg-[#1e293b] text-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} IndianBrand.in. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

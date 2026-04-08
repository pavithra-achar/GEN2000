const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center bg-[#449495] px-5 py-2 text-white z-100">
  <div className="flex items-center gap-3">
    <a href="/" className="flex items-center gap-3">
      <img src="/atam-logo.png" alt="ATAM Logo" className="h-10 w-10 object-contain" />
      <span className="text-lg font-bold">ATAM Folk Arts Gallery</span>
    </a>
  </div>
</nav>
  );
};

export default Navbar;
export default function Footer() {
  return (
    <footer className="relative w-full pt-20 pb-10 bg-[#010101] border-t border-white/[0.05]">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-black text-white text-lg italic">
                S
              </div>
              <span className="text-xl font-bold text-white tracking-tighter">SISWIT</span>
            </div>
            <p className="text-white/35 max-w-xs leading-relaxed text-[14px]">
              Empowering enterprises with unified cloud intelligence for CPQ, CLM, and CRM.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-bold text-[14px] mb-5">Product</h4>
            <ul className="space-y-3">
              {["CPQ", "CLM", "CRM", "Analytics"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/35 text-[14px] hover:text-cyan-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-[14px] mb-5">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/35 text-[14px] hover:text-cyan-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-[14px] mb-5">Legal</h4>
            <ul className="space-y-3">
              {["Privacy", "Terms", "Security", "GDPR"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/35 text-[14px] hover:text-cyan-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-[13px]">© 2026 SISWIT Infra. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((item) => (
              <a key={item} href="#" className="text-white/20 text-[13px] hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

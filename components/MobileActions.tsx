import { MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

export function MobileActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-slate-200/80 bg-white/90 p-2 shadow-[0_-14px_40px_rgba(15,35,66,.12)] backdrop-blur-xl md:hidden">
      <a className="btn-primary min-h-12" href={`tel:${siteConfig.phoneHref}`}><Phone size={19} /> Anrufen</a>
      <a className="btn-whatsapp min-h-12" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={19} /> WhatsApp</a>
    </div>
  );
}

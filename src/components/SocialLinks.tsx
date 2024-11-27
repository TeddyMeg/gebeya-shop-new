import { Instagram, MessageCircle, Twitter } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a href="#" className="text-white hover:text-gray-200 transition-colors">
        <Instagram size={24} />
      </a>
      <a href="#" className="text-white hover:text-gray-200 transition-colors">
        <MessageCircle size={24} />
      </a>
      <a href="#" className="text-white hover:text-gray-200 transition-colors">
        <Twitter size={24} />
      </a>
    </div>
  );
}
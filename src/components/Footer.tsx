import { FooterColumn } from './FooterColumn';
import { FooterLink } from './FooterLink';
import { SocialLinks } from './SocialLinks';
import { Logo } from './Logo/Logo.tsx';

export function Footer() {
  return (
    <footer className="bg-[#9333EA] py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-6">
            <Logo />
            <SocialLinks />
          </div>

          <div className="flex gap-20">
            <FooterColumn title={<span className="font-bold">About</span>}>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">News & Blog</FooterLink>
              <FooterLink href="#">Location</FooterLink>
            </FooterColumn>

            <FooterColumn title={<span className="font-bold">Products</span>}>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Store</FooterLink>
              <FooterLink href="#">Features</FooterLink>
            </FooterColumn>

            <FooterColumn title={<span className="font-bold">Discover</span>}>
              <FooterLink href="#">Contact Us</FooterLink>
              <FooterLink href="#">Customers</FooterLink>
              <FooterLink href="#">Affiliates</FooterLink>
            </FooterColumn>
          </div>
        </div>
      </div>
    </footer>
  );
}
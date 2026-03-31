import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Dynamic Coaching Classes',
  description: 'Learn about Imran Ali Sir and our elite faculty dedicated to your NEET success.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

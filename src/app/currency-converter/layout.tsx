import Hero from '@/components/ui-kit/Hero';

export default function ConverterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Hero />
      {children}
    </>
  );
}

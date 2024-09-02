import LocaleSwitcher from '@/components/LocaleSwitcher';

export interface HeaderProps {}

export const Header = ({}: HeaderProps) => (
  <header className="flex items-center justify-between px-6 py-3 shadow-md">
    <h1>Home Assignment</h1>
    <LocaleSwitcher />
  </header>
);

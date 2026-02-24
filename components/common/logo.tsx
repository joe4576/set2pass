export const Logo = ({ onClick }: { onClick?: () => void }) => {
  return (
    <a href="/" onClick={onClick}>
      <img src="/images/set2pass.webp" alt="Set2Pass Logo" className="w-44" />
    </a>
  );
};

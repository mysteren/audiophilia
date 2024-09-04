type Props = {
  className?: string;
};

export default function WebIcon({ className }: Props) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use href="/icons/sprite.svg#icon-web" />
    </svg>
  );
}

type Props = {
  className?: string;
};

export default function HeartIcon({ className }: Props) {
  return (
    <svg
      width="100%"
      height="100%"
      className={className}
      viewBox="0 0 24 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use href="/icons/sprite.svg#icon-heart" />
    </svg>
  );
}

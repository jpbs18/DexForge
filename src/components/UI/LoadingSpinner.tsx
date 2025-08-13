export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 496"
        className="w-10 h-10 animate-spin"
      >
        <path
          fill="#EE1515"
          d="M248,0C111.03,0,0,111.03,0,248h124c8.84-70.58,69.04-124,140-124s131.16,53.42,140,124h124 C496,111.03,384.97,0,248,0z"
        />
        <path
          fill="#FFFFFF"
          d="M248,496c136.97,0,248-111.03,248-248H372c-8.84,70.58-69.04,124-140,124S100.84,318.58,92,248H-32 C-32,384.97,79.03,496,248,496z"
        />
        <circle fill="#FFFFFF" cx="248" cy="248" r="48" />
        <circle fill="#000000" cx="248" cy="248" r="40" />
        <circle fill="#FFFFFF" cx="248" cy="248" r="24" />
        <path
          fill="#000000"
          d="M0,248h124c0,68.38,55.62,124,124,124s124-55.62,124-124h124v0c0,0,0,0,0,0c0,136.97-111.03,248-248,248 S0,384.97,0,248z"
        />
      </svg>
    </div>
  );
}

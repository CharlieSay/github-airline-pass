
interface ShareButtonProps {
  shareUrl: string;
  shareText: string;
}

export const ShareButton = ({ shareUrl, shareText }: ShareButtonProps) => {
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    shareUrl
  )}&text=${encodeURIComponent(shareText)}`;

  return (
    <button
      onClick={() => window.open(twitterShareUrl, "_blank")}
      className="flex items-center font-mono uppercase"
    >
      <span className="pr-2">Share to</span>
      <svg
        height={16}
        width={16}
        aria-hidden="true"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>X</title>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    </button>
  );
};

export default ShareButton;

import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg
        width="24"
        height="22"
        viewBox="0 0 72 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.3551 53.1043L10.8159 29.6575C10.1275 28.4702 10.1275 27.0035 10.8159 25.8162L24.3551 2.36947C25.0436 1.18217 26.3107 0.443848 27.6876 0.443848H54.7661C56.143 0.443848 57.4101 1.17219 58.0985 2.36947L71.6378 25.8162L64.9829 29.6575L52.5511 8.13638H29.9125L18.5982 27.7419L31.03 49.263L24.3751 53.1043H24.3551Z"
          fill="#9C6CFF"
        />
        <path
          d="M44.1545 65.8455H17.076C15.6992 65.8455 14.432 65.1171 13.7436 63.9198L0.204346 40.4731L6.85923 36.6318L19.291 58.1529H41.9296L53.2439 38.5475L40.8121 17.0263L47.467 13.1851L61.0063 36.6318C61.6947 37.8191 61.6947 39.2858 61.0063 40.4731L47.467 63.9198C46.7786 65.1071 45.5115 65.8455 44.1346 65.8455H44.1545Z"
          fill="#05D2DD"
        />
      </svg>

      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>Cosmostation</span>
    </>
  ),
  project: {
    link: "https://github.com/cosmostation",
  },
  docsRepositoryBase:
    "https://github.com/cosmostation/cosmostation-wallet-docs",

  useNextSeoProps() {
    return {
      titleTemplate: "%s – Cosmostation Docs",
    };
  },
};

export default config;

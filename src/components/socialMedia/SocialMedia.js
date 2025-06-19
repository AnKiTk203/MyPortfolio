import React from "react";
import "./SocialMedia.scss";
import { socialMediaLinks } from "../../portfolio";

// Map each platform to its icon image and alt text
const iconMap = {
  github:      { src: "/icons/github.png",      alt: "Github" },
  linkedin:    { src: "/icons/linkedin.jpg",    alt: "Linkedin" },
  codechef:    { src: "/icons/codechef.png",    alt: "CodeChef" },
  codeforces:  { src: "/icons/codeforces.png",  alt: "Codeforces" },
  leetcode:    { src: "/icons/leetcode.png",    alt: "LeetCode" },
  gfg:         { src: "/icons/gfg.png",         alt: "GeeksforGeeks" },
  gmail:       { src: "/icons/gmail.png",       alt: "Gmail" },
  facebook:    { src: "/icons/facebook.png",    alt: "Facebook" },
  instagram:   { src: "/icons/instagram.png",   alt: "Instagram" },
  twitter:     { src: "/icons/twitter.png",     alt: "Twitter" },
  medium:      { src: "/icons/medium.png",      alt: "Medium" },
  stackoverflow:{ src: "/icons/stackoverflow.png", alt: "Stack Overflow" },
  kaggle:      { src: "/icons/kaggle.png",      alt: "Kaggle" }
};

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }

  // List of platforms in desired order
  const platforms = [
    "github", "linkedin", "codechef", "codeforces", "leetcode", "gfg",
    "gmail", "facebook", "instagram", "twitter", "medium", "stackoverflow", "kaggle"
  ];

  return (
    <div className="social-media-div left-align">
      {platforms.map((platform) => {
        const link = socialMediaLinks[platform];
        if (!link) {
          return null;
        }
        const { src, alt } = iconMap[platform];
        const href = platform === "gmail" ? `mailto:${link}` : link;
        return (
          <a
            key={platform}
            href={href}
            className={`icon-button ${platform}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={src} alt={alt} />
          </a>
        );
      })}
    </div>
  );
}

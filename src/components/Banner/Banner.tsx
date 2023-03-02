import { ReactNode } from "react";
import "./Banner.css";

interface BannerI {
  children: ReactNode;
}

function Banner({ children }: BannerI) {
  return <div className="banner">{children}</div>;
}

export default Banner;

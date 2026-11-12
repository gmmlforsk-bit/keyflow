import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "字间 Keyflow · 按下空格，找到节奏",
  description: "会示范手部动作、能跟练纠错的打字课堂，提供正确与错误音效。指法学习专注动作，自由练习显示速度与计时；30 节课程、90 轮练习和 48 篇素材，支持连续练习。",
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}

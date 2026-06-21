import type { Metadata, Viewport } from "next"
import "./globals.css"
import { AssessmentProvider } from "@/lib/store/assessmentStore"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { SiteFooter } from "@/components/layout/SiteFooter"

export const metadata: Metadata = {
	title: {
		default: "Hướng Nghiệp — Định hướng chọn ngành sau lớp 12",
		template: "%s | Hướng Nghiệp",
	},
	description:
		"Công cụ tiếng Việt giúp học sinh THPT định hướng chọn ngành và nghề nghiệp dựa trên sở thích, kỹ năng, hoàn cảnh và tính cách.",
	keywords: ["hướng nghiệp", "chọn ngành", "MBTI", "đại học", "lớp 12"],
}

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#4f46e5",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="vi">
			<body className="flex min-h-screen flex-col">
				<AssessmentProvider>
					<SiteHeader />
					<main className="flex-1">{children}</main>
					<SiteFooter />
				</AssessmentProvider>
			</body>
		</html>
	)
}

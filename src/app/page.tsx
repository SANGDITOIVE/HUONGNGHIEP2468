import Link from "next/link"
import {
	ArrowRight, Compass, GraduationCap, ListChecks, Sparkles, Target, Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DisclaimerBanner } from "@/components/layout/DisclaimerBanner"

const STEPS = [
	{ icon: ListChecks, title: "Trả lời vài câu hỏi", desc: "Khối học, sở thích, kỹ năng, hoàn cảnh và định hướng nghề." },
	{ icon: Sparkles, title: "Hệ thống phân tích", desc: "Chấm điểm minh bạch theo nhiều yếu tố, không đoán mò." },
	{ icon: Target, title: "Nhận gợi ý ngành", desc: "Top ngành phù hợp, lý do rõ ràng và trường đào tạo." },
]

const FEATURES = [
	{ icon: Compass, title: "Đánh giá toàn diện", desc: "Không chỉ dựa vào tính cách — kết hợp sở thích, kỹ năng, hoàn cảnh gia đình và hình mẫu bạn hướng tới." },
	{ icon: Users, title: "MBTI là một phần", desc: "Nếu chưa hiểu rõ bản thân, bài trắc nghiệm ngắn giúp gợi mở — nhưng không quyết định thay bạn." },
	{ icon: GraduationCap, title: "Trường đào tạo minh bạch", desc: "Xếp hạng trường theo điểm nội bộ rõ tiêu chí, không mạo danh bảng xếp hạng quốc gia." },
]

export default function HomePage() {
	return (
		<div>
			{/* Hero */}
			<section className="border-b bg-gradient-to-b from-primary/5 to-background">
				<div className="container flex flex-col items-center gap-6 py-16 text-center md:py-24">
					<span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm text-muted-foreground">
						<Sparkles className="h-4 w-4 text-primary" /> Dành cho học sinh THPT
					</span>
					<h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight md:text-5xl">
						Chọn ngành sau lớp 12, dựa trên chính bạn
					</h1>
					<p className="max-w-2xl text-balance text-lg text-muted-foreground">
						Hướng Nghiệp giúp bạn kết nối sở thích, kỹ năng, hoàn cảnh và định
						hướng nghề với những ngành học phù hợp — bằng một hệ thống chấm điểm
						minh bạch, dễ hiểu.
					</p>
					<div className="flex flex-col gap-3 sm:flex-row">
						<Button asChild size="lg">
							<Link href="/danh-gia">
								Bắt đầu đánh giá <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
						<Button asChild size="lg" variant="outline">
							<Link href="/nganh-hoc">Khám phá ngành học</Link>
						</Button>
						<Button asChild size="lg" variant="ghost">
							<Link href="/trac-nghiem-tinh-cach">Làm trắc nghiệm tính cách</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Cách hoạt động */}
			<section className="container py-16">
				<h2 className="text-center text-2xl font-bold md:text-3xl">3 bước đơn giản</h2>
				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{STEPS.map((s, i) => (
						<Card key={s.title}>
							<CardContent className="flex flex-col gap-3 p-6">
								<div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
									<s.icon className="h-6 w-6" />
								</div>
								<div className="text-sm font-medium text-muted-foreground">Bước {i + 1}</div>
								<h3 className="text-lg font-semibold">{s.title}</h3>
								<p className="text-sm text-muted-foreground">{s.desc}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* Điểm mạnh */}
			<section className="border-t bg-card">
				<div className="container py-16">
					<div className="grid gap-6 md:grid-cols-3">
						{FEATURES.map((f) => (
							<div key={f.title} className="flex flex-col gap-3">
								<div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
									<f.icon className="h-6 w-6" />
								</div>
								<h3 className="text-lg font-semibold">{f.title}</h3>
								<p className="text-sm text-muted-foreground">{f.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="container py-12">
				<DisclaimerBanner />
			</section>
		</div>
	)
}

import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DisclaimerBanner } from "@/components/layout/DisclaimerBanner"
import { FACTOR_WEIGHTS, UNIVERSITY_SCORE_WEIGHTS } from "@/config/scoring"

export const metadata: Metadata = {
	title: "Giới thiệu & phương pháp",
	description: "Cách Hướng Nghiệp chấm điểm ngành và xếp hạng trường một cách minh bạch.",
}

const FACTOR_LABELS: Record<string, string> = {
	familyFit: "Nền tảng & định hướng gia đình",
	interestFit: "Sở thích",
	skillFit: "Kỹ năng",
	roleModelFit: "Hình mẫu lý tưởng",
	knowledgeAreaFit: "Vùng kiến thức muốn học",
	personalityFit: "Tính cách (MBTI)",
	careerFit: "Đích đến nghề nghiệp",
	streamFit: "Khối / ban đang học",
}

const UNI_LABELS: Record<string, string> = {
	programReputation: "Uy tín chương trình",
	trainingStrength: "Năng lực đào tạo",
	relevance: "Mức liên quan tới ngành",
	recognitionBreadth: "Độ công nhận rộng rãi",
}

export default function GioiThieuPage() {
	return (
		<div className="container max-w-3xl py-12">
			<h1 className="text-3xl font-bold">Hướng Nghiệp hoạt động như thế nào?</h1>
			<p className="mt-4 text-muted-foreground">
				Chúng tôi không đoán mò. Mọi gợi ý đều đến từ một hệ thống chấm điểm có
				tiêu chí rõ ràng, có thể kiểm tra và điều chỉnh.
			</p>

			<Card className="mt-8">
				<CardHeader>
					<CardTitle>Trọng số chấm điểm ngành</CardTitle>
				</CardHeader>
				<CardContent className="space-y-2">
					{Object.entries(FACTOR_WEIGHTS).map(([key, weight]) => (
						<div key={key} className="flex items-center justify-between border-b py-2 text-sm last:border-0">
							<span>{FACTOR_LABELS[key] ?? key}</span>
							<span className="font-semibold">{Math.round(weight * 100)}%</span>
						</div>
					))}
				</CardContent>
			</Card>

			<Card className="mt-6">
				<CardHeader>
					<CardTitle>Tiêu chí xếp hạng trường</CardTitle>
				</CardHeader>
				<CardContent className="space-y-2">
					<p className="text-sm text-muted-foreground">
						Đây là điểm nội bộ để so sánh tương đối, KHÔNG phải bảng xếp hạng
						chính thức quốc gia.
					</p>
					{Object.entries(UNIVERSITY_SCORE_WEIGHTS).map(([key, weight]) => (
						<div key={key} className="flex items-center justify-between border-b py-2 text-sm last:border-0">
							<span>{UNI_LABELS[key] ?? key}</span>
							<span className="font-semibold">{Math.round(weight * 100)}%</span>
						</div>
					))}
				</CardContent>
			</Card>

			<div className="mt-8">
				<DisclaimerBanner />
			</div>
		</div>
	)
}

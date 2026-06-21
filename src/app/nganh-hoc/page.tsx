"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DisclaimerBanner } from "@/components/layout/DisclaimerBanner"
import { cn } from "@/lib/utils"
import {
	GROUP_CATEGORIES, MAJOR_GROUPS, type GroupCategory,
} from "@/data/majorGroups"
import { MAJOR_FIELDS } from "@/data/majorFields"
import { MAJOR_BY_ID } from "@/data/majors"

export default function NganhHocPage() {
	const [query, setQuery] = useState("")
	const [category, setCategory] = useState<GroupCategory | "all">("all")

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase()
		return MAJOR_GROUPS.filter((g) => {
			const byCat = category === "all" || g.category === category
			const byText =
				q === "" ||
				g.name.toLowerCase().includes(q) ||
				g.examples.some((e) => e.toLowerCase().includes(q))
			return byCat && byText
		})
	}, [query, category])

	const catLabel = (id: GroupCategory) =>
		GROUP_CATEGORIES.find((c) => c.id === id)?.label ?? id

	return (
		<div className="container py-10">
			<div className="max-w-2xl">
				<h1 className="text-3xl font-bold">Khám phá ngành học</h1>
				<p className="mt-3 text-muted-foreground">
					Xem hướng dẫn chi tiết cho các ngành tiêu biểu, hoặc duyệt toàn bộ{" "}
					{MAJOR_GROUPS.length} nhóm ngành đào tạo tại Việt Nam theo lĩnh vực.
				</p>
			</div>

			{/* Ngành có hướng dẫn chi tiết */}
			<section className="mt-8">
				<h2 className="text-xl font-semibold">Ngành có hướng dẫn chi tiết</h2>
				<p className="mt-1 text-sm text-muted-foreground">
					Nhấn vào một ngành để xem bản chất, cơ hội, thách thức và các trường đào tạo.
				</p>
				<div className="mt-4 space-y-6">
					{MAJOR_FIELDS.map((field) => {
						const majors = field.majorIds
							.map((id) => MAJOR_BY_ID[id])
							.filter(Boolean)
						if (majors.length === 0) return null
						return (
							<div key={field.id}>
								<div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
									<span>{field.icon}</span> {field.name}
								</div>
								<div className="mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
									{majors.map((m) => (
										<Link
											key={m.id}
											href={`/nganh-hoc/${m.id}`}
											className="group rounded-lg border bg-card p-4 transition-colors hover:border-primary hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
										>
											<div className="flex items-center justify-between gap-2">
												<span className="font-medium">{m.name}</span>
												<ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
											</div>
											<p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{m.definition}</p>
										</Link>
									))}
								</div>
							</div>
						)
					})}
				</div>
			</section>

			<hr className="my-10 border-border" />

			{/* Toàn bộ nhóm ngành */}
			<section>
				<h2 className="text-xl font-semibold">Toàn bộ nhóm ngành đào tạo</h2>
				<p className="mt-1 text-sm text-muted-foreground">
					Danh mục {MAJOR_GROUPS.length} nhóm ngành để tham khảo nhanh. Hướng dẫn chi tiết sẽ được bổ sung dần.
				</p>

				{/* Tìm kiếm */}
				<div className="mt-6">
					<label className="relative block max-w-md">
						<span className="sr-only">Tìm ngành</span>
						<Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
						<input
							type="search"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Tìm ngành, ví dụ: luật, AI, điều dưỡng…"
							className="h-11 w-full rounded-lg border border-input bg-card pl-9 pr-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
						/>
					</label>
				</div>

				{/* Bộ lọc */}
				<div className="mt-4 flex flex-wrap gap-2">
					<FilterPill active={category === "all"} onClick={() => setCategory("all")} label="Tất cả" />
					{GROUP_CATEGORIES.map((c) => (
						<FilterPill key={c.id} active={category === c.id} onClick={() => setCategory(c.id)} label={c.label} />
					))}
				</div>

				{/* Danh sách */}
				<div className="mt-6">
					{filtered.length === 0 ? (
						<p className="py-10 text-center text-muted-foreground">Không tìm thấy nhóm ngành phù hợp.</p>
					) : (
						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
							{filtered.map((g) => (
								<Card key={g.id} className="flex flex-col">
									<CardHeader>
										<Badge variant="muted" className="w-fit">{catLabel(g.category)}</Badge>
										<CardTitle className="mt-2">{g.name}</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="mb-2 text-xs font-medium text-muted-foreground">Ngành tiêu biểu</p>
										<div className="flex flex-wrap gap-1.5">
											{g.examples.map((e) => (
												<Badge key={e} variant="outline">{e}</Badge>
											))}
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					)}
				</div>
			</section>

			<div className="mt-10">
				<DisclaimerBanner />
			</div>
		</div>
	)
}

function FilterPill({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
	return (
		<button
			type="button"
			onClick={onClick}
			aria-pressed={active}
			className={cn(
				"rounded-full border px-3.5 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
				active ? "border-primary bg-primary text-primary-foreground" : "border-input bg-card hover:bg-muted",
			)}
		>
			{label}
		</button>
	)
}

import Link from "next/link"

export function SiteFooter() {
	return (
		<footer className="border-t bg-card">
			<div className="container flex flex-col gap-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
				<p className="max-w-xl">
					Hướng Nghiệp là công cụ hỗ trợ định hướng chọn ngành. Kết quả mang
					tính tham khảo, không phải quyết định thay bạn.
				</p>
				<div className="flex gap-4">
					<Link href="/gioi-thieu" className="hover:text-foreground">Giới thiệu</Link>
					<Link href="/danh-gia" className="hover:text-foreground">Làm đánh giá</Link>
					<Link href="/nganh-hoc" className="hover:text-foreground">Khám phá ngành</Link>
					<Link href="/ban-do-mon-hoc" className="hover:text-foreground">Bản đồ môn học</Link>
					<Link href="/cam-nang" className="hover:text-foreground">Cẩm nang</Link>
					<Link href="/danh-cho-phu-huynh" className="hover:text-foreground">Phụ huynh</Link>
				</div>
			</div>
			<div className="border-t py-4 text-center text-xs text-muted-foreground">
				© {new Date().getFullYear()} Hướng Nghiệp · Thực hiện bởi{" "}
				<span className="font-medium text-foreground">Pro-Đa-Zi-Năng &amp; QuangDai368</span>
			</div>
		</footer>
	)
}

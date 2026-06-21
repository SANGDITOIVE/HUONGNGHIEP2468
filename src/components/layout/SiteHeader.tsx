"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Compass } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV = [
	{ href: "/", label: "Trang chủ" },
	{ href: "/danh-gia", label: "Làm đánh giá" },
	{ href: "/trac-nghiem-tinh-cach", label: "Trắc nghiệm" },
	{ href: "/nganh-hoc", label: "Khám phá ngành" },
	{ href: "/ban-do-mon-hoc", label: "Bản đồ môn học" },
	{ href: "/cam-nang", label: "Cẩm nang" },
	{ href: "/danh-cho-phu-huynh", label: "Phụ huynh" },
	{ href: "/gioi-thieu", label: "Giới thiệu" },
]

export function SiteHeader() {
	const pathname = usePathname()
	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
			<div className="container flex h-16 items-center justify-between">
				<Link href="/" className="flex items-center gap-2 font-semibold">
					<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
						<Compass className="h-5 w-5" />
					</span>
					<span>Hướng Nghiệp</span>
				</Link>
				<nav className="hidden items-center gap-1 md:flex" aria-label="Điều hướng chính">
					{NAV.map((item) => {
						const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
						return (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									"rounded-md px-3 py-2 text-sm font-medium transition-colors",
									active ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground",
								)}
							>
								{item.label}
							</Link>
						)
					})}
				</nav>
			</div>
			<nav
				className="flex items-center gap-1 overflow-x-auto border-t px-3 py-2 md:hidden"
				aria-label="Điều hướng chính (di động)"
			>
				{NAV.map((item) => {
					const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
					return (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								"whitespace-nowrap rounded-md px-3 py-1.5 text-sm",
								active ? "bg-muted text-foreground" : "text-muted-foreground",
							)}
						>
							{item.label}
						</Link>
					)
				})}
			</nav>
		</header>
	)
}

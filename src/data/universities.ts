import type { University, UniversityProgram } from "@/types"

// =============================================================
// Trường đại học Việt Nam (dữ liệu nghiên cứu thủ công, có thể bổ sung).
// Lưu ý: KHÔNG phải xếp hạng quốc gia chính thức. Xem methodology ở /gioi-thieu.
// =============================================================

export const UNIVERSITIES: University[] = [
	// --- Miền Bắc ---
	{ id: "hust", name: "Đại học Bách khoa Hà Nội", shortName: "Bách khoa HN", region: "bac", city: "Hà Nội", type: "cong-lap", website: "https://hust.edu.vn" },
	{ id: "uet-vnu", name: "Trường ĐH Công nghệ – ĐHQG Hà Nội", shortName: "UET – ĐHQGHN", region: "bac", city: "Hà Nội", type: "cong-lap", website: "https://uet.vnu.edu.vn" },
	{ id: "neu", name: "Đại học Kinh tế Quốc dân", shortName: "NEU", region: "bac", city: "Hà Nội", type: "cong-lap", website: "https://neu.edu.vn" },
	{ id: "ftu", name: "Đại học Ngoại thương", shortName: "FTU", region: "bac", city: "Hà Nội", type: "cong-lap", website: "https://ftu.edu.vn" },
	{ id: "aof", name: "Học viện Tài chính", shortName: "AOF", region: "bac", city: "Hà Nội", type: "cong-lap", website: "https://hvtc.edu.vn" },
	{ id: "bav", name: "Học viện Ngân hàng", shortName: "Học viện Ngân hàng", region: "bac", city: "Hà Nội", type: "cong-lap", website: "https://hvnh.edu.vn" },
	{ id: "hlu", name: "Đại học Luật Hà Nội", shortName: "Luật HN", region: "bac", city: "Hà Nội", type: "cong-lap", website: "https://hlu.edu.vn" },
	{ id: "law-vnu", name: "Trường ĐH Luật – ĐHQG Hà Nội", shortName: "Luật – ĐHQGHN", region: "bac", city: "Hà Nội", type: "cong-lap", website: "https://law.vnu.edu.vn" },
	{ id: "hmu", name: "Đại học Y Hà Nội", shortName: "Y HN", region: "bac", city: "Hà Nội", type: "cong-lap", website: "https://hmu.edu.vn" },
	{ id: "hup", name: "Đại học Dược Hà Nội", shortName: "Dược HN", region: "bac", city: "Hà Nội", type: "cong-lap", website: "https://hup.edu.vn" },
	{ id: "ndun", name: "Đại học Điều dưỡng Nam Định", shortName: "Điều dưỡng Nam Định", region: "bac", city: "Nam Định", type: "cong-lap", website: "https://ndun.edu.vn" },
	{ id: "hnue", name: "Đại học Sư phạm Hà Nội", shortName: "Sư phạm HN", region: "bac", city: "Hà Nội", type: "cong-lap", website: "https://hnue.edu.vn" },
	{ id: "ussh-vnu", name: "Trường ĐH KHXH&NV – ĐHQG Hà Nội", shortName: "KHXH&NV HN", region: "bac", city: "Hà Nội", type: "cong-lap", website: "https://ussh.vnu.edu.vn" },
	{ id: "ulis-vnu", name: "Trường ĐH Ngoại ngữ – ĐHQG Hà Nội", shortName: "ULIS – ĐHQGHN", region: "bac", city: "Hà Nội", type: "cong-lap", website: "https://ulis.vnu.edu.vn" },
	{ id: "hanu", name: "Đại học Hà Nội", shortName: "HANU", region: "bac", city: "Hà Nội", type: "cong-lap", website: "https://hanu.vn" },
	{ id: "huce", name: "Đại học Xây dựng Hà Nội", shortName: "Xây dựng HN", region: "bac", city: "Hà Nội", type: "cong-lap", website: "https://huce.edu.vn" },
	{ id: "hau", name: "Đại học Kiến trúc Hà Nội", shortName: "Kiến trúc HN", region: "bac", city: "Hà Nội", type: "cong-lap", website: "https://hau.edu.vn" },
	{ id: "uia", name: "Đại học Mỹ thuật Công nghiệp", shortName: "Mỹ thuật CN", region: "bac", city: "Hà Nội", type: "cong-lap", website: "https://mythuatcongnghiep.edu.vn" },
	{ id: "ajc", name: "Học viện Báo chí và Tuyên truyền", shortName: "Báo chí – Tuyên truyền", region: "bac", city: "Hà Nội", type: "cong-lap", website: "https://ajc.hcma.vn" },
	{ id: "huc", name: "Đại học Văn hóa Hà Nội", shortName: "Văn hóa HN", region: "bac", city: "Hà Nội", type: "cong-lap", website: "https://huc.edu.vn" },
	{ id: "fpt", name: "Đại học FPT", shortName: "FPT", region: "bac", city: "Hà Nội", type: "tu-thuc", website: "https://daihoc.fpt.edu.vn" },

	// --- Miền Trung ---
	{ id: "dut", name: "Trường ĐH Bách khoa – ĐH Đà Nẵng", shortName: "Bách khoa ĐN", region: "trung", city: "Đà Nẵng", type: "cong-lap", website: "https://dut.udn.vn" },
	{ id: "sp-dn", name: "Trường ĐH Sư phạm – ĐH Đà Nẵng", shortName: "Sư phạm ĐN", region: "trung", city: "Đà Nẵng", type: "cong-lap", website: "https://ued.udn.vn" },
	{ id: "hueuni-med", name: "Trường ĐH Y – Dược – ĐH Huế", shortName: "Y Dược Huế", region: "trung", city: "Huế", type: "cong-lap", website: "https://huemed-univ.edu.vn" },

	// --- Miền Nam ---
	{ id: "hcmut", name: "Trường ĐH Bách khoa – ĐHQG TP.HCM", shortName: "Bách khoa TP.HCM", region: "nam", city: "TP.HCM", type: "cong-lap", website: "https://hcmut.edu.vn" },
	{ id: "uit", name: "Trường ĐH Công nghệ Thông tin – ĐHQG TP.HCM", shortName: "UIT – ĐHQG HCM", region: "nam", city: "TP.HCM", type: "cong-lap", website: "https://uit.edu.vn" },
	{ id: "ueh", name: "Đại học Kinh tế TP.HCM", shortName: "UEH", region: "nam", city: "TP.HCM", type: "cong-lap", website: "https://ueh.edu.vn" },
	{ id: "uel", name: "Trường ĐH Kinh tế – Luật – ĐHQG TP.HCM", shortName: "UEL", region: "nam", city: "TP.HCM", type: "cong-lap", website: "https://uel.edu.vn" },
	{ id: "buh", name: "Đại học Ngân hàng TP.HCM", shortName: "Ngân hàng TP.HCM", region: "nam", city: "TP.HCM", type: "cong-lap", website: "https://buh.edu.vn" },
	{ id: "hcmulaw", name: "Đại học Luật TP.HCM", shortName: "Luật TP.HCM", region: "nam", city: "TP.HCM", type: "cong-lap", website: "https://hcmulaw.edu.vn" },
	{ id: "ump", name: "Đại học Y Dược TP.HCM", shortName: "Y Dược TP.HCM", region: "nam", city: "TP.HCM", type: "cong-lap", website: "https://ump.edu.vn" },
	{ id: "pntu", name: "Đại học Y khoa Phạm Ngọc Thạch", shortName: "Phạm Ngọc Thạch", region: "nam", city: "TP.HCM", type: "cong-lap", website: "https://pnt.edu.vn" },
	{ id: "hcmue", name: "Đại học Sư phạm TP.HCM", shortName: "Sư phạm TP.HCM", region: "nam", city: "TP.HCM", type: "cong-lap", website: "https://hcmue.edu.vn" },
	{ id: "ussh-hcm", name: "Trường ĐH KHXH&NV – ĐHQG TP.HCM", shortName: "KHXH&NV HCM", region: "nam", city: "TP.HCM", type: "cong-lap", website: "https://hcmussh.edu.vn" },
	{ id: "uah", name: "Đại học Kiến trúc TP.HCM", shortName: "Kiến trúc TP.HCM", region: "nam", city: "TP.HCM", type: "cong-lap", website: "https://uah.edu.vn" },
]

// Builder gọn cho chương trình đào tạo. id = `${majorId}@${universityId}`.
function prog(
	majorId: string, universityId: string,
	reputation: number, training: number, relevance: number, recognition: number,
	note?: string,
): UniversityProgram {
	return {
		id: `${majorId}@${universityId}`,
		universityId, majorId,
		scores: {
			programReputation: reputation,
			trainingStrength: training,
			relevance, recognitionBreadth: recognition,
		},
		note,
	}
}

export const UNIVERSITY_PROGRAMS: UniversityProgram[] = [
	// Công nghệ thông tin
	prog("cong-nghe-thong-tin", "hust", 96, 95, 95, 95),
	prog("cong-nghe-thong-tin", "hcmut", 93, 92, 93, 90),
	prog("cong-nghe-thong-tin", "uet-vnu", 90, 90, 92, 88),
	prog("cong-nghe-thong-tin", "uit", 88, 88, 92, 85),
	prog("cong-nghe-thong-tin", "fpt", 82, 83, 86, 80),
	// Trí tuệ nhân tạo
	prog("tri-tue-nhan-tao", "hust", 95, 94, 95, 92),
	prog("tri-tue-nhan-tao", "uet-vnu", 90, 90, 93, 88),
	prog("tri-tue-nhan-tao", "hcmut", 90, 89, 92, 88),
	prog("tri-tue-nhan-tao", "uit", 87, 87, 92, 84),
	prog("tri-tue-nhan-tao", "fpt", 80, 82, 85, 80),
	// Kỹ thuật điện – điện tử
	prog("ky-thuat-dien-tu", "hust", 95, 94, 94, 92),
	prog("ky-thuat-dien-tu", "hcmut", 92, 91, 92, 89),
	prog("ky-thuat-dien-tu", "uet-vnu", 88, 88, 90, 85),
	prog("ky-thuat-dien-tu", "dut", 84, 84, 88, 80),
	// Kỹ thuật xây dựng
	prog("ky-thuat-xay-dung", "huce", 93, 92, 95, 88),
	prog("ky-thuat-xay-dung", "hust", 90, 89, 90, 88),
	prog("ky-thuat-xay-dung", "hcmut", 90, 89, 91, 87),
	prog("ky-thuat-xay-dung", "dut", 82, 82, 87, 78),
	// Kiến trúc
	prog("kien-truc", "hau", 92, 91, 94, 88),
	prog("kien-truc", "uah", 90, 90, 93, 86),
	prog("kien-truc", "huce", 84, 84, 88, 80),
	prog("kien-truc", "dut", 80, 80, 85, 76),
	// Thiết kế đồ họa
	prog("thiet-ke-do-hoa", "uia", 90, 89, 93, 85),
	prog("thiet-ke-do-hoa", "hau", 82, 82, 86, 80),
	prog("thiet-ke-do-hoa", "uah", 82, 81, 86, 79),
	prog("thiet-ke-do-hoa", "fpt", 80, 81, 85, 80),
	// Quản trị kinh doanh
	prog("quan-tri-kinh-doanh", "neu", 95, 93, 94, 93),
	prog("quan-tri-kinh-doanh", "ftu", 93, 91, 92, 92),
	prog("quan-tri-kinh-doanh", "ueh", 92, 90, 92, 90),
	prog("quan-tri-kinh-doanh", "uel", 86, 85, 88, 84),
	// Marketing
	prog("marketing", "neu", 93, 91, 93, 90),
	prog("marketing", "ueh", 91, 90, 92, 89),
	prog("marketing", "ftu", 88, 87, 88, 88),
	prog("marketing", "ajc", 82, 82, 86, 82),
	// Tài chính – Ngân hàng
	prog("tai-chinh-ngan-hang", "neu", 94, 92, 93, 92),
	prog("tai-chinh-ngan-hang", "ftu", 92, 90, 91, 91),
	prog("tai-chinh-ngan-hang", "aof", 90, 90, 93, 86),
	prog("tai-chinh-ngan-hang", "ueh", 91, 89, 91, 89),
	prog("tai-chinh-ngan-hang", "bav", 84, 84, 88, 82),
	// Kế toán – Kiểm toán
	prog("ke-toan-kiem-toan", "neu", 93, 91, 93, 90),
	prog("ke-toan-kiem-toan", "aof", 90, 90, 93, 86),
	prog("ke-toan-kiem-toan", "ueh", 90, 89, 91, 88),
	prog("ke-toan-kiem-toan", "uel", 85, 84, 87, 83),
	// Luật kinh tế
	prog("luat-kinh-te", "hlu", 93, 92, 94, 90),
	prog("luat-kinh-te", "hcmulaw", 91, 90, 93, 88),
	prog("luat-kinh-te", "uel", 85, 84, 88, 82),
	prog("luat-kinh-te", "law-vnu", 84, 84, 87, 82),
	// Y khoa
	prog("y-khoa", "hmu", 96, 95, 96, 94),
	prog("y-khoa", "ump", 94, 93, 95, 92),
	prog("y-khoa", "pntu", 85, 85, 90, 82),
	prog("y-khoa", "hueuni-med", 86, 86, 90, 83),
	// Điều dưỡng
	prog("dieu-duong", "hmu", 92, 91, 93, 88),
	prog("dieu-duong", "ump", 90, 90, 92, 87),
	prog("dieu-duong", "ndun", 85, 86, 92, 80),
	prog("dieu-duong", "hueuni-med", 82, 83, 88, 79),
	// Sư phạm
	prog("su-pham", "hnue", 94, 92, 94, 90),
	prog("su-pham", "hcmue", 92, 90, 93, 88),
	prog("su-pham", "sp-dn", 82, 82, 87, 78),
	// Tâm lý học
	prog("tam-ly-hoc", "ussh-vnu", 90, 89, 92, 87),
	prog("tam-ly-hoc", "ussh-hcm", 89, 88, 92, 86),
	prog("tam-ly-hoc", "hnue", 85, 85, 88, 83),
	// Ngôn ngữ Anh
	prog("ngon-ngu-anh", "ulis-vnu", 93, 92, 94, 90),
	prog("ngon-ngu-anh", "hanu", 90, 89, 92, 87),
	prog("ngon-ngu-anh", "ftu", 87, 86, 87, 88),
	// Quản trị dịch vụ du lịch & lữ hành
	prog("quan-tri-du-lich", "ueh", 88, 87, 90, 86),
	prog("quan-tri-du-lich", "hanu", 84, 84, 88, 82),
	prog("quan-tri-du-lich", "huc", 80, 81, 86, 78),
]

export const UNIVERSITY_BY_ID: Record<string, University> = Object.fromEntries(
	UNIVERSITIES.map((u) => [u.id, u]),
)

export const PROGRAM_BY_ID: Record<string, UniversityProgram> = Object.fromEntries(
	UNIVERSITY_PROGRAMS.map((p) => [p.id, p]),
)

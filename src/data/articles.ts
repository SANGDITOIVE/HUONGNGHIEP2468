// Bài viết cẩm nang hướng nghiệp - nội dung tĩnh, tiếng Việt.
// Giữ giọng văn thực tế, không tô hồng, không hứa hẹn chắc chắn.

export interface ArticleSection {
	heading: string
	paragraphs: string[]
}

export interface Article {
	slug: string
	title: string
	description: string
	category: string
	readingMinutes: number
	updated: string
	sections: ArticleSection[]
}

export const ARTICLES: Article[] = [
	{
		slug: "chua-biet-thich-gi",
		title: "Chưa biết mình thích gì thì chọn ngành thế nào?",
		description: "Một số cách thực tế để bắt đầu khi bạn chưa rõ sở thích hay thế mạnh của mình.",
		category: "Định hướng",
		readingMinutes: 5,
		updated: "2025-01-01",
		sections: [
			{
				heading: "Bắt đầu bằng việc loại trừ",
				paragraphs: [
					"Không biết thích gì là điều rất bình thường ở tuổi 17 - 18. Thay vì cố tìm ngay đam mê lớn, hãy bắt đầu bằng việc loại bớt: những môn nào bạn thấy mệt mỏi, những công việc nào bạn chắc chắn không muốn làm.",
				"Khi danh sách thu hẹp lại, lựa chọn sẽ bớt rối và bạn dễ tập trung tìm hiểu sâu hơn vào số ít còn lại.",
			],
			},
			{
				heading: "Quan sát điều bạn làm một cách tự nhiên",
				paragraphs: [
					"Đam mê thường ẩn trong những việc bạn làm mà không thấy chán: hay giúp bạn bè giảng bài, thích sửa đồ, mê sắp xếp sự kiện, hay vẽ vời. Đó là manh mối về thế mạnh.",
				"Hãy thử ghi lại trong một tuần những lúc bạn thấy hứng thú nhất. Mẫu số chung của chúng nói lên nhiều điều.",
			],
			},
			{
				heading: "Chọn hướng đủ rộng, đừng ép mình quá sớm",
				paragraphs: [
					"Nếu vẫn phân vân, hãy chọn một lĩnh vực đủ rộng để còn rẽ nhánh sau này, thay vì một ngành quá hẹp. Nhiều người tìm ra hướng đi rõ ràng trong quá trình học chứ không phải trước khi học.",
				"Công cụ đánh giá và bản đồ môn học trên trang này là điểm khởi đầu để khám phá, không phải lời phán quyết cuối cùng.",
			],
			},
		],
	},
	{
		slug: "khoi-thi-to-hop",
		title: "Hiểu đúng về khối thi và tổ hợp xét tuyển",
		description: "Khối thi, tổ hợp môn và cách chọn sao cho mở rộng cơ hội xét tuyển.",
		category: "Tuyển sinh",
		readingMinutes: 4,
		updated: "2025-01-01",
		sections: [
			{
				heading: "Khối thi và tổ hợp là gì?",
				paragraphs: [
					"Tổ hợp xét tuyển là nhóm các môn được dùng để tính điểm vào một ngành. Ví dụ khối A gồm Toán - Lý - Hóa, khối D gồm Toán - Văn - Anh.",
				"Mỗi trường và mỗi ngành có thể nhận nhiều tổ hợp khác nhau, nên bạn cần xem kỹ đề án tuyển sinh của từng trường.",
			],
			},
			{
				heading: "Một ngành thường có nhiều tổ hợp",
				paragraphs: [
					"Đừng nghĩ một ngành chỉ xét một khối. Nhiều ngành nhận 3 - 4 tổ hợp, nghĩa là bạn có thể tận dụng tổ hợp mạnh nhất của mình để tăng cơ hội.",
				"Hãy chọn tổ hợp dựa trên môn bạn thực sự làm tốt, không chỉ dựa trên thói quen của lớp hay bạn bè.",
			],
			},
			{
				heading: "Lời khuyên khi chọn tổ hợp",
				paragraphs: [
					"Ưu tiên tổ hợp giúp bạn vừa đạt điểm cao vừa mở ra nhiều ngành phù hợp. Luôn kiểm tra thông tin chính thức từ trang tuyển sinh của trường, vì quy định có thể thay đổi theo năm.",
			],
			},
		],
	},
	{
		slug: "mbti-huong-nghiep",
		title: "MBTI trong hướng nghiệp: dùng sao cho đúng?",
		description: "MBTI có thể gợi ý hữu ích nếu bạn hiểu giới hạn của nó.",
		category: "Tính cách",
		readingMinutes: 5,
		updated: "2025-01-01",
		sections: [
			{
				heading: "MBTI là một gợi ý, không phải nhãn cố định",
				paragraphs: [
					"MBTI mô tả xu hướng bạn nạp năng lượng, tiếp nhận thông tin và ra quyết định. Nó hữu ích để bạn hiểu bản thân hơn, nhưng không đo được năng lực hay quyết định bạn hợp nghề gì.",
				"Kết quả MBTI có thể thay đổi theo thời gian và tâm trạng, nên đừng coi nó là sự thật tuyệt đối.",
			],
			},
			{
				heading: "Dùng MBTI để hiểu cách mình làm việc",
				paragraphs: [
					"Thay vì hỏi 'kiểu của tôi nên làm nghề gì', hãy hỏi 'tôi làm việc thoải mái nhất trong môi trường thế nào'. Ví dụ người hướng nội có thể vẫn làm tốt nghề giao tiếp nếu được chuẩn bị kỹ.",
			],
			},
			{
				heading: "Đừng để MBTI giới hạn bạn",
				paragraphs: [
					"Có vô số người thành công trong những nghề 'không hợp kiểu tính cách' của họ. MBTI nên là một mảnh ghép, đặt cạnh sở thích, kỹ năng và hoàn cảnh, chứ không phải tiêu chí duy nhất.",
			],
			},
		],
	},
	{
		slug: "khac-y-gia-dinh",
		title: "Khi định hướng của bạn khác với mong muốn của gia đình",
		description: "Cách đối thoại với bố mẹ khi hai bên chưa cùng quan điểm về chọn ngành.",
		category: "Gia đình",
		readingMinutes: 6,
		updated: "2025-01-01",
		sections: [
			{
				heading: "Hiểu lý do đằng sau mong muốn của bố mẹ",
				paragraphs: [
					"Phần lớn bố mẹ định hướng con vì lo cho sự ổn định và an toàn, dựa trên kinh nghiệm của họ. Hiểu được nỗi lo đó giúp cuộc trò chuyện bớt căng thẳng.",
				"Khi bạn cho thấy mình đã suy nghĩ nghiêm túc, bố mẹ thường sẵn sàng lắng nghe hơn.",
			],
			},
			{
				heading: "Chuẩn bị lập luận bằng thông tin",
				paragraphs: [
					"Thay vì chỉ nói 'con thích', hãy trình bày: ngành học gì, ra trường làm gì, cơ hội và thách thức ra sao. Thông tin cụ thể thuyết phục hơn cảm xúc.",
				"Bạn có thể dùng phần Khám phá ngành trên trang này để dẫn chứng về nghề nghiệp và triển vọng.",
			],
			},
			{
				heading: "Tìm điểm giao thoa",
				paragraphs: [
					"Nhiều khi có hướng đi dung hoà được cả mong muốn của bạn lẫn kỳ vọng của gia đình. Hãy tìm ngành hoặc lộ trình thoả mãn phần lớn cả hai bên, thay vì xem đây là cuộc thắng - thua.",
			],
			},
		],
	},
	{
		slug: "ky-nang-tuong-lai",
		title: "Nghề nghiệp tương lai: kỹ năng nào sẽ quan trọng?",
		description: "Những nhóm kỹ năng có giá trị lâu dài dù ngành nghề thay đổi.",
		category: "Xu hướng",
		readingMinutes: 5,
		updated: "2025-01-01",
		sections: [
			{
				heading: "Kỹ năng nền tảng ít lỗi thời",
				paragraphs: [
					"Tư duy phản biện, giao tiếp, làm việc nhóm và giải quyết vấn đề là những kỹ năng có giá trị ở hầu hết ngành nghề và khó bị thay thế.",
				"Đầu tư vào chúng từ sớm thường mang lại lợi ích lâu dài hơn là chạy theo một công cụ cụ thể.",
			],
			},
			{
				heading: "Khả năng tự học liên tục",
				paragraphs: [
					"Công việc thay đổi nhanh, nên biết cách tự học một kỹ năng mới có khi quan trọng hơn kiến thức bạn có hôm nay. Hãy luyện thói quen học đều đặn.",
			],
			},
			{
				heading: "Kết hợp chuyên môn với công nghệ",
				paragraphs: [
					"Dù theo ngành nào, biết tận dụng công cụ số và dữ liệu sẽ giúp bạn nổi bật. Bạn không cần thành chuyên gia công nghệ, chỉ cần đủ thoải mái để dùng chúng phục vụ công việc của mình.",
			],
			},
		],
	},
]

export const ARTICLE_BY_SLUG: Record<string, Article> = Object.fromEntries(
	ARTICLES.map((a) => [a.slug, a]),
)

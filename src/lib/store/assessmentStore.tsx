"use client"

import {
	createContext, useCallback, useContext, useEffect, useMemo, useState,
} from "react"
import type { AssessmentInput } from "@/types"

const STORAGE_KEY = "huong-nghiep:assessment:v1"

export const EMPTY_INPUT: AssessmentInput = {
	stream: null,
	favoriteSubjects: [],
	skills: [],
	interests: [],
	workingStyles: [],
	preferredEnvironments: [],
	careerDestinations: [],
	values: [],
	familySupport: null,
	familyField: null,
	followFamily: null,
	roleModels: [],
	knowledgeAreas: [],
	knowsMBTI: false,
	mbtiType: null,
	mbtiSource: "none",
}

interface AssessmentContextValue {
	input: AssessmentInput
	update: (patch: Partial<AssessmentInput>) => void
	reset: () => void
	hydrated: boolean
}

const AssessmentContext = createContext<AssessmentContextValue | null>(null)

export function AssessmentProvider({ children }: { children: React.ReactNode }) {
	const [input, setInput] = useState<AssessmentInput>(EMPTY_INPUT)
	const [hydrated, setHydrated] = useState(false)

	useEffect(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY)
			if (raw) setInput({ ...EMPTY_INPUT, ...JSON.parse(raw) })
		} catch {
			/* bỏ qua lỗi parse */
		}
		setHydrated(true)
	}, [])

	useEffect(() => {
		if (!hydrated) return
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(input))
		} catch {
			/* bỏ qua lỗi ghi */
		}
	}, [input, hydrated])

	const update = useCallback((patch: Partial<AssessmentInput>) => {
		setInput((prev) => ({ ...prev, ...patch }))
	}, [])

	const reset = useCallback(() => setInput(EMPTY_INPUT), [])

	const value = useMemo(
		() => ({ input, update, reset, hydrated }),
		[input, update, reset, hydrated],
	)

	return (
		<AssessmentContext.Provider value={value}>
			{children}
		</AssessmentContext.Provider>
	)
}

export function useAssessment() {
	const ctx = useContext(AssessmentContext)
	if (!ctx) throw new Error("useAssessment phải dùng trong AssessmentProvider")
	return ctx
}

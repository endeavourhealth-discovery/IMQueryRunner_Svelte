import { TTIriRefSchema } from './TTIriRef';
import { SearchTermCodeSchema } from './SearchTermCode';
import z from 'zod';

export const SearchResultSummarySchema = z.strictObject({
	name: z.string().optional(),
	code: z.string().optional(),
	description: z.string().optional(),
	status: TTIriRefSchema,
	scheme: TTIriRefSchema,
	type: z.array(TTIriRefSchema).prefault([]),
	usageTotal: z.number().optional(),
	bestMatch: z.string().optional(),
	preferredName: z.string().optional(),
	key: z.array(z.string()).optional(),
	isA: z.array(TTIriRefSchema).optional(),
	termCode: z.array(SearchTermCodeSchema).optional(),
	unit: z.array(TTIriRefSchema).optional(),
	qualifier: z.array(TTIriRefSchema).optional(),
	iri: z.url()
});

export type SearchResultSummary = z.output<typeof SearchResultSummarySchema>;

export function isSearchResultSummary(value: unknown): value is SearchResultSummary {
	return SearchResultSummarySchema.safeParse(value).success;
}

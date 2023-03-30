import { mapTechnology, mapTechnologyCollection } from './technology';
import { TechnologyEntity } from '@prisma/client';
import { Technology, TechnologyCollection } from '../schema/generated/types';
import { createMockTechnologyEntityCollection } from '../../mocks/technology-entity';
import { createMockTechnology } from '../../mocks/technology';

jest.mock('./technology', () => {
	const originalModule = jest.requireActual<typeof import('./technology')>('./technology');

	return {
		__esModule: true, // Use it when dealing with esModules
		...originalModule,
		mapTechnology: jest.spyOn(originalModule, 'mapTechnology'),
	};
});

const SPY_MAP_TECHNOLOGY = mapTechnology as unknown as jest.SpyInstance<
	Technology,
	[entity: TechnologyEntity],
	unknown
>;

describe('.mapTechnology', () => {
	describe('when called', () => {
		it('returns expected result', () => {
			const MOCK_TECHNOLOGY: TechnologyEntity = {
				id: 123,
				displayName: 'MOCK_TECHNOLOGY',
				description: 'MOCK_TECHNOLOGY_DESCRIPTION',
				url: 'MOCK_TECHNOLOGY_URL',
			};
			const EXPECTED_RESULT: Technology = {
				__typename: 'Technology',
				id: '123',
				displayName: 'MOCK_TECHNOLOGY',
				description: 'MOCK_TECHNOLOGY_DESCRIPTION',
				url: 'MOCK_TECHNOLOGY_URL',
			};

			const result = mapTechnology(MOCK_TECHNOLOGY);

			expect(result).toEqual(EXPECTED_RESULT);
		});
	});
});

describe('.mapTechnologyCollection', () => {
	describe('when called with arguments', () => {
		const MOCK_TECHNOLOGY_ENTITY_COLLECTION_PAGE = createMockTechnologyEntityCollection(3, 11);
		const MOCK_TECHNOLOGY = createMockTechnology();
		const EXPECTED_RESULT: TechnologyCollection = {
			totalCount: 11,
			edges: Array(3).fill(MOCK_TECHNOLOGY),
		};
		let result: TechnologyCollection;

		beforeAll(() => {
			SPY_MAP_TECHNOLOGY.mockReturnValue(MOCK_TECHNOLOGY);
			result = mapTechnologyCollection(MOCK_TECHNOLOGY_ENTITY_COLLECTION_PAGE);
		});

		afterAll(() => {
			SPY_MAP_TECHNOLOGY.mockRestore();
		});

		it('returns expected result', () => {
			expect(result).toEqual(EXPECTED_RESULT);
		});
	});
});
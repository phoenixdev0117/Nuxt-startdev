import { TechnologyEntity } from '@prisma/client';
import { Technology } from '../schema/generated/types';

export const mapTechnology = (entity: TechnologyEntity): Technology => ({
	__typename: 'Technology',
	id: String(entity.id),
	name: entity.name,
});

import { campProgramRepository } from '../repositories/campProgramRepository';

export const campProgramService = {
  getCampProgramWithExtraLogic: async (id: string) => {
    const camp = await campProgramRepository.findById(id);

    if (!camp) throw new Error('Camp not found');

    return camp;
  },
};
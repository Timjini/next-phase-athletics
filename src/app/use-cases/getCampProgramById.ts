import { campProgramService } from "../services/campProgramService";

export const getCampProgramById = async (id: string) => {
  return campProgramService.getCampProgramWithExtraLogic(id);
};
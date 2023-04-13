import { PrismaGymsRepository } from '@/repositories/prisma/prirsma-gyms-repository'
import { FetchNearbGymsUseCase } from '../fetch-nearby-gyms'

export function makeFetchNearbyGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const fetchNearbGymsUseCase = new FetchNearbGymsUseCase(gymsRepository)

  return fetchNearbGymsUseCase
}

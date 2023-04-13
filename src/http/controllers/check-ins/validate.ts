import { LateCheckInValidationError } from '@/use-cases/errors/late-check-in-validation-error'
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { makeValidateCheckInUseCase } from '@/use-cases/factories/make-validate-check-in-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function validate(request: FastifyRequest, reply: FastifyReply) {
  const validateCheackInParamsSchema = z.object({
    checkInId: z.string().uuid(),
  })

  const { checkInId } = validateCheackInParamsSchema.parse(request.params)

  try {
    const validateCheckInUseCase = makeValidateCheckInUseCase()

    await validateCheckInUseCase.execute({ checkInId })
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.status(404).send({ message: error.message })
    }
    if (error instanceof LateCheckInValidationError) {
      return reply.status(406).send({ message: error.message })
    }

    throw error
  }

  return reply.status(204).send()
}

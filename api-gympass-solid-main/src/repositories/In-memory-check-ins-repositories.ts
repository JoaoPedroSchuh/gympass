import type { CheckIn, Prisma } from "@prisma/client";
import type { CheckInsRepository } from "./check-ins-repositories";
import { randomUUID } from "crypto";

export class InMemoryCheckInRepository implements CheckInsRepository{
  public items:CheckIn[] = []
  async create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn> {
    const checkIn = {
        id: randomUUID(),
        user_id: data.user_id,
        gym_id: data.gym_id,
        validated_at: data.validated_at? new Date(data.validated_at):null,
        created_at: new Date()
    }
    this.items.push(checkIn)
    return checkIn
  }
}


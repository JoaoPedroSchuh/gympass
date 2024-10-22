import type { Prisma, User } from "@prisma/client";
import type { UsersRepository } from "./users-repository";

export class UsersInMemoryRepository implements UsersRepository {
  public items: User[] = []
  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user:User = {
      id: '1234-123-1234-12345a',
      name: data.name,
      email: data.email,
      password_hash: data.password_hash ?? null,
      created_at: new Date()
    }

    this.items.push(user)
    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.items.find((item) => item.email === email)
    if(!user){
      return null
    }
    return user
  }

  async findById(id: string): Promise<User | null> {
    const user = this.items.find((item) => item.id === id)
    if(!user){
      return null
    }
    return user
  }

}

'use server'

import { prismaClient } from "@/lib/prisma";
import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  autor: z.string(),
  gender: z.string()
});

type CreateBookFormData = z.infer<typeof formSchema>

export async function createBook(createBookFormData:CreateBookFormData) {
  const {name,autor,gender} = createBookFormData

  await prismaClient.book.create({
    data:{
      title:name,
      autor,
      gender
    }
  })
}
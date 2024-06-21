
import { prismaClient } from "@/lib/prisma";

export default async function Home() {
  const books = await prismaClient.book.findMany()
  return (
    <div className="w-full h-full max-w-[1600px]">
      home
      livros: {books.length}
    </div>
  );
}

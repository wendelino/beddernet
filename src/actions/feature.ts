"use server";

import { db } from "@/lib/db";
import { Feature } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createFeature({ data }: { data: Omit<Feature, "id" | "createdAt"| "updatedAt"> }) {
  await db.feature.create({
    data,
  });

  revalidatePath("/")
}

export async function getAllFeatures() {
  const features = await db.feature.findMany();

  return features;
}

export async function deleteFeature({ id }: { id: string }) {
  await db.feature.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
}

export async function updateFeature({ id, data }: { id: string; data: Partial<Feature> }) {
  await db.feature.update({
    where: {
      id,
    },
    data,
  });

  revalidatePath("/");
}
import { createClient } from "@/prismicio";
import { draftMode } from "next/headers";
import { redirectToPreviewURL } from "@prismicio/next";

export async function GET(request: any) {
  const client = createClient();

  draftMode().enable();

  await redirectToPreviewURL({ client, request });
}

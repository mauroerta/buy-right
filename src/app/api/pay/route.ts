import { NextRequest, NextResponse } from "next/server";

function sleep(delay: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, delay);
  });
}

export async function POST() {
  await sleep(200);

  return NextResponse.json({
    type: "success",
    message: "Your order has been successfully placed.",
  });
}

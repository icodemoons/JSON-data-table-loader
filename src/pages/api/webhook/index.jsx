import clientPromise from "@/modules/db";

export default async function StripeWebHook(req, res) {
  let json = { error: "shit happened" };

  switch (req.body.type) {
    case "charge.succeeded":
      json = await handlePaymentSucceeded(req.body);
      break;
  }
  res.json(json);
}

async function handlePaymentSucceeded(pqyload) {
  const json = await (await clientPromise)
    .db()
    .collection("accounts")
    .find({}.toArray());
  console.dir(json);
  return json;
}

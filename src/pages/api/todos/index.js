import { createRouter } from "next-connect";
export const handler = createRouter();

handler.get((req, res) => {
  res.json({
    todos: [
      {
        _id: "1",
        label: "walk the dog!",
        completeAt: "2022:11-7T09:00:00,000",
      },
      {
        _id: "2",
        label: "get groceries!",
        completeAt: "2022:11-7T09:00:00,000",
      },
    ],
  });
});

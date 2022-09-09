import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const hello = trpc.hello.useQuery({ text: "client" });

  if (!hello.data) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      {/* the type is define, it can be autocompleted */}
      <h1>{hello.data.greeting}</h1>
    </div>
  );
}

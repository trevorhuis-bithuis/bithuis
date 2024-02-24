import { Link } from "@repo/ui";

export default function Index(): JSX.Element {
  return (
    <div className="container">
      <h1 className="title">
        Bithuis <br />
        <span>Admin Site</span>
      </h1>
      <p className="description">
        Built With <Link href="https://turbo.build/repo">Turborepo</Link>
        {" & "}
        <Link href="https://remix.run/">Remix</Link>
      </p>
    </div>
  );
}

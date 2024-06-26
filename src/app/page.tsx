import { sql } from "@vercel/postgres";
import styles from "./page.module.css";
import { Stepful } from "./stepful/Stepful";

export type User = {
  id: string,
  name: string,
  phone_number: string,
  type: string,
}

export default async function Home() {
  const queryResults = await sql`SELECT * FROM users`;
  return (
    <main className={styles.main}>
      <Stepful queryUsers={queryResults.rows as User[]}/>
    </main>
  );
}

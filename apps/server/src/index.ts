import { app } from "./app";
import { env } from "env";
const PORT = env.PORT || 3000;

app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`server is started on ${PORT}`);
});

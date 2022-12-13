import { db } from "./db";
import { authenticated, username } from "./store";
import "gun/sea";

export const user = db.user().recall({sessionStorage: true});

user.get('alias').on(value => username.set(value));

db.on("auth", (_user, message, event) => {
  authenticated.set(!!user.is);
});

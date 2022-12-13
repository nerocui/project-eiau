<script lang="ts">
  import { authenticated, username } from "../lib/store";
  import { navigate } from "svelte-routing";

  authenticated.subscribe(loggedIn => {
    if (!loggedIn) {
      navigate("/auth");
    }
  });

</script>

<main>
  chat
</main>

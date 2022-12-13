<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Auth from "./pages/Auth.svelte";
  import Home from "./pages/Home.svelte";
  import { authenticated } from "./lib/store";
  import { navigate } from "svelte-routing";

  authenticated.subscribe(loggedIn => {
    if (!loggedIn) {
      navigate("/auth");
    } else {
      navigate("/home")
    }
  });
</script>

<Router>
  <Route path="auth" component="{Auth}"/>
  <Route path="home" component="{Home}"/>
</Router>

<style>

</style>
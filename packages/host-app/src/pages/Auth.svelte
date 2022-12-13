<script lang="ts">
  import { user } from "../lib/user";
  import { navigate } from "svelte-routing";
  import AuthForm from "../components/AuthForm.svelte";

  let page: string = "Login";
  let error = "";
  let alias = "";
  let pass = "";

  const handleSignUp = (e) => {
    if (alias !== "" && pass !== "") {
      user.create(alias, pass, (payload) => {
        if (payload && payload.err) {
          error = payload.err;
        } else {
          page = "Login";
        }
      });
    }
  }

  const handleLogin = (e) => {
    user.auth(alias, pass, payload => {
      if (payload && payload.err) {
        error = payload.err;
      } else {
        navigate("/home");
      }
    });
  }
</script>

<main>
  {#if page === "Login"}
    <AuthForm
      bind:title={page}
      bind:alias={alias}
      bind:pass={pass}
      bind:error={error}
      handleSubmit={handleLogin}
    />
    <p>Don't have an account?</p>
    <button on:click={() => page = "Signup"}>Signup</button>
  {:else}
    <AuthForm
      bind:title={page}
      bind:alias={alias}
      bind:pass={pass}
      bind:error={error}
      handleSubmit={handleSignUp}
    />
    <p>Already have an account?</p>
    <button on:click={() => page = "Login"}>Login</button>
  {/if}
</main>

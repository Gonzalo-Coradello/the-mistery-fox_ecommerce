const Register = () => {
  return (
    <section>
      <h2 class="text-2xl mt-12 mb-8">Registrar usuarios</h2>
      <form action="/sessions/register" method="post">
        <input
          required
          type="text"
          name="first_name"
          placeholder="First name"
          class="input input-bordered border-white w-full max-w-xs mb-2"
        />
        <br></br>
        <input
          required
          type="text"
          name="last_name"
          placeholder="Last name"
          class="input input-bordered border-white w-full max-w-xs mb-2"
        />
        <br></br>
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          class="input input-bordered border-white w-full max-w-xs mb-2"
        />
        <br></br>
        <input
          required
          type="tel"
          name="age"
          placeholder="Age"
          class="input input-bordered border-white w-full max-w-xs mb-2"
        />
        <br></br>
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          class="input input-bordered border-white w-full max-w-xs mb-2"
        />
        <br></br>

        <button type="submit" class="btn btn-outline mt-4">
          Enviar
        </button>
      </form>

      <p>¿Ya estás registrado?</p>
      <p>
        <a href="/sessions/login" class="btn btn-sm btn-ghost mt-1 normal-case">
          Inicia sesión
        </a>
      </p>
    </section>
  );
};

export default Register
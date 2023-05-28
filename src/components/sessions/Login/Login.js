import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionContext } from "../../../context/UserContext";
import Button from "../../Buttons/Button";
import GhostButton from "../../Buttons/GhostButton";
import GhostLink from "../../Buttons/GhostLink";

const Login = () => {

  const { loginWithEmail } = useSessionContext()
  const [formData, setFormData] = useState({email: "", password: ""})
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await loginWithEmail(formData)
    navigate("/books")
  }

  return (
    <section>
      <h2 className="text-2xl mt-12 mb-8">Iniciar sesión</h2>

      <form action="/sessions/login" method="post">
        <input required type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input input-bordered border-white w-full max-w-xs mb-2"/>
        <br></br>
        <input required type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="input input-bordered border-white w-full max-w-xs mb-2"/>
        <br></br>
        <Button type="submit" handleClick={handleSubmit} >
          Enviar
        </Button>
      </form>

      <p>
        <GhostLink
          url="/sessions/password_reset" classes='font-semibold my-4'
        >
          Olvidé mi contraseña
        </GhostLink>
      </p>

      <p>¿No tenés cuenta?</p>
      <p>
        <GhostLink
          url="/sessions/register"
          classes='font-semibold mt-2'
        >
          Registrate
        </GhostLink>
      </p>

        <GhostButton classes='mt-4 font-semibold'>
          Ingresar con Github
          <svg
            aria-hidden="true"
            fill="var(--primary-color)"
            className="ml-2"
            height="24"
            version="1.1"
            viewBox="0 0 16 16"
            width="24"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </GhostButton>
    </section>
  );
};

export default Login;

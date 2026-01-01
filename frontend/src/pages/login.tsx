import { useForm } from "react-hook-form";
import { Input } from "../components/input";
import { Button } from "../components/button";

export default function Login() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data: unknown) {
    console.log(data);
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-10 rounded-xl shadow-lg w-[380px]"
      >
        <h1 className="text-2xl font-bold text-center mb-2">
          Bem-vindo
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Faça login para continuar
        </p>

        <div className="mb-4">
          <Input
            {...register("email")}
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="mb-6">
          <Input
            {...register("password")}
            type="password"
            placeholder="Senha"
          />
        </div>

        <Button type="submit">
          Entrar
        </Button>
      </form>
    </div>
  );
}


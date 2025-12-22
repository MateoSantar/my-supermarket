// /app/login/page.jsx (o donde tengas tu formulario)
"use client";

import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // Usamos useRouter del App Router
export default function Login() {
    // 1. Estados para capturar el email y la contraseña
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/dashboard');
        }
    },[status,router]);

    if (status === 'loading') {
        return <div className="text-white mx-auto mt-20">Cargando sesión...</div>;
    }



    // 2. Función que maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto de recargar la página

        setError(''); // Limpia errores anteriores

        // 3. Llama a signIn con el proveedor 'credentials' y las opciones
        // Recuerda que el nombre del campo en NextAuth era 'email', no 'username'
        const result = await signIn('credentials', {
            email: email,
            password: password,
            redirect: false,
            // callbackUrl: '/' // Puedes especificar una URL si quieres
        });

        // 4. Manejo de la respuesta
        if (result?.error) {
            // El error se activa si la función authorize() retorna 'null'
            setError('Credenciales inválidas. Inténtalo de nuevo.');
            console.error(result.error);
        } else {
            // Si no hay error, la sesión se estableció correctamente.
            // Redirigimos al usuario a la página de inicio o a la que desees.
            router.push('/dashboard');
        }
    };

    return (
        // Modificamos el div para que sea un formulario real y le asignamos el manejador
        <form onSubmit={handleSubmit} className="text-white bg-gray-600 w-fit flex flex-col p-5 rounded shadow-lg gap-3 mx-auto mt-20">
            <h1 className="text-xl font-bold">Iniciar Sesión</h1>

            {/* Mostrar mensaje de error si existe */}
            {error && (
                <p className="text-red-300 bg-red-800 p-2 rounded text-sm">{error}</p>
            )}

            <div className="flex flex-col gap-2">
                {/* Cambiamos 'username' por 'email' para que coincida con el proveedor */}
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    className="text-black bg-white p-2 rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <input
                    type="password" // ¡Cambiamos a tipo 'password' para ocultar la entrada!
                    name="password"
                    className="text-black bg-white p-2 rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            {/* El botón ahora es de tipo 'submit' para activar handleSubmit */}
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded transition duration-200">
                Log in
            </button>
        </form>
    );
}
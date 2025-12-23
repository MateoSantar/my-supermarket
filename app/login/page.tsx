"use client";

import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { bebas_neue as bebas } from "@/app/utils/fonts"; // Importamos la fuente para consistencia
import { ArrowRightIcon } from "@heroicons/react/24/outline"; // Opcional: para el botón

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
    }, [status, router]);

    if (status === 'loading') {
        // Estilo de carga acorde al tema
        return (
            <div className="flex min-h-screen items-center justify-center bg-green-50">
                <div className="text-green-700 text-xl font-bold animate-pulse">
                    Cargando sesión...
                </div>
            </div>
        );
    }

    // 2. Función que maneja el envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); 
        setError(''); 

        // 3. Llama a signIn
        const result = await signIn('credentials', {
            email: email,
            password: password,
            redirect: false,
        });

        // 4. Manejo de la respuesta
        if (result?.error) {
            setError('Credenciales inválidas. Inténtalo de nuevo.');
            console.error(result.error);
        } else {
            router.push('/dashboard');
        }
    };

    return (
        // Contenedor principal centrado con fondo suave
        <main className="flex min-h-screen items-center justify-center bg-green-50 p-4">
            
            <form 
                onSubmit={handleSubmit} 
                className="w-full max-w-md bg-white rounded-xl shadow-lg border border-green-200 overflow-hidden"
            >
                {/* Cabecera del Formulario */}
                <div className="bg-green-100 p-6 text-center border-b border-green-200">
                    <h1 className={`text-4xl text-green-800 tracking-widest ${bebas.className}`}>
                        My Supermarket
                    </h1>
                    <p className="text-green-600 mt-2 text-sm font-medium">
                        Bienvenido, por favor inicia sesión
                    </p>
                </div>

                <div className="p-8 flex flex-col gap-5">
                    {/* Mensaje de error */}
                    {error && (
                        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-3 rounded text-sm mb-2">
                            <p className="font-bold">Error</p>
                            <p>{error}</p>
                        </div>
                    )}

                    {/* Input Email */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-600">
                            Email Corporativo
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="empleado@mysupermarket.com"
                            className="w-full bg-white border border-green-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 transition-all placeholder-gray-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Input Password */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-semibold text-gray-600">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            className="w-full bg-white border border-green-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 transition-all placeholder-gray-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Botón de Submit */}
                    <button 
                        type="submit" 
                        className="mt-4 w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold py-3 rounded-lg transition-colors shadow-md flex justify-center items-end gap-2"
                    >
                        <span>Ingresar al Sistema</span>
                        <ArrowRightIcon className="w-5 h-5"/>
                    </button>
                </div>
                
                {/* Pie del formulario decorativo */}
                <div className="bg-gray-50 p-4 text-center text-xs text-gray-400 border-t border-gray-100">
                    &copy; {new Date().getFullYear()} My Supermarket Dashboard
                </div>
            </form>
        </main>
    );
}
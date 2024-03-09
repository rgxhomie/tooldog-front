import { useState } from "react";

interface ILoginData {
    username: string,
    password: string
}

const LoginPage: React.FC = () => {
    const [loginData, setLoginData] = useState<ILoginData>({
        username: '',
        password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log('Submitting', {loginData});
    }

    return (
        <div className="bg-gray-100 flex justify-center items-center h-screen">
            <div className="w-1/2 h-screen hidden lg:block">
                <img 
                    src="https://placehold.co/800x/667fff/ffffff.png?text=Tool+Dog&font=Montserrat" 
                    alt="Placeholder Image" 
                    className="object-cover w-full h-full"
                ></img>
            </div>
        
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-600">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
                            autoComplete="off"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
                            autoComplete="off"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                </form>
        
                <div className="mt-6 text-blue-500 text-center">
                    <a href="#" className="hover:underline">Sign up Here</a>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
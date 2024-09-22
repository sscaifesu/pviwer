import React, { useState, ChangeEvent } from 'react';

function Login() {
    const [authMethod, setAuthMethod] = useState<string>('linux-pam');
    const [formData, setFormData] = useState({
        serverAddress: '',
        port: '',
        username: '',
        password: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleReset = () => {
        setFormData({
            serverAddress: '',
            port: '',
            username: '',
            password: ''
        });
        setAuthMethod('linux-pam');
    };

    const isFormEmpty = () => {
        return !formData.serverAddress && !formData.port && !formData.username && !formData.password;
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">登 录</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="server-address">
                            服务器地址
                        </label>
                        <input
                            type="text"
                            id="server-address"
                            name="serverAddress"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="请输入服务器地址"
                            autoComplete="server-address"
                            value={formData.serverAddress}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="port">
                            端口
                        </label>
                        <input
                            type="text"
                            id="port"
                            name="port"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="请输入端口"
                            autoComplete="port"
                            value={formData.port}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            用户名
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="请输入用户名"
                            autoComplete="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            密码
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="请输入密码"
                            autoComplete="current-password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="auth-method">
                            认证方式
                        </label>
                        <select
                            id="auth-method"
                            name="authMethod"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={authMethod}
                            onChange={(e) => setAuthMethod(e.target.value)}
                        >
                            <option value="linux-pam">Linux PAM</option>
                            <option value="proxmox-ve">Proxmox VE 内置认证</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isFormEmpty() ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-500 hover:bg-red-700 text-white'}`}
                            onClick={handleReset}
                            disabled={isFormEmpty()}
                        >
                            重置
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            登录
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
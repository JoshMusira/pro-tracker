import Link from "next/link"

const page = () => {
    return (
        <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white mx-auto shadow-sm shadow-gray-600">
            <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span className="text-[#7747ff]">App</span></div>
            <div className=" font-normal mb-4 text-center text-gray-600">Log in to your account</div>
            <form className="flex flex-col gap-3">
                <div className="block relative">
                    <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
                    <input type="email" id="email" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />

                </div>
                <div className="block relative">
                    <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
                    <input type="password" id="password" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />

                </div>
                <div>
                    <Link className="text-sm text-[#7747ff]" href={'/resetpassword'}>
                        Forgot your password?
                    </Link></div>
                <button type="submit" className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>

            </form>
            <div className="text-sm text-center mt-[1.6rem]">Don’t have an account yet? <Link className="text-sm text-[#7747ff]" href={'/signup'}>Sign up here</Link></div>
        </div>
    )
}

export default page
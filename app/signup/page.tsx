import Link from "next/link"

const page = () => {
    return (

        <form className="px-7  flex  justify-center items-center ">
            <div className="grid gap-6 shadow-sm shadow-gray-600 p-4" id="form">
                <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center"><span>Create an account</span></div>
                <div className="w-full flex gap-3">
                    <input className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black" type="text" placeholder="First Name" id="First-Name" name="First-Name" required />
                    <input className="p-3 capitalize shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="text" placeholder="Last Name" id="Last-Name" name="Last-Name" />
                </div>
                <div className="grid gap-5 w-full">
                    <input className="p-3 shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]" type="Email" placeholder="Email" id="Email" name="email" />
                    <input className="p-3 shadow-2xl   glass w-full text-black outline-none focus:border-solid focus:border-[1px]border-[#035ec5]" type="date" required />
                </div>
                <div className="flex gap-3">
                    <input className="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="password" placeholder="Password" id="password" name="password" required />
                    <input className="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="password" placeholder="Confirm password" required />
                </div>
                <button className="outline-none glass shadow-2xl  w-full p-3 rounded-3xl  bg-[#035ec5] text-white font-bold" type="submit">Register</button>
                <div className="text-sm text-center mt-[1.6rem] mb-2">Have an account ? <Link className="text-sm text-[#7747ff]" href={'/login'}>Login here</Link></div>
            </div>
        </form>

    )
}

export default page
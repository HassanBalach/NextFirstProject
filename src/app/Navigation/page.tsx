
export default function NavBar() {

    const nav = ["Home", "About", "Contact", "Info"]

    return (
        <>
            <div className="flex justify-center  bg-slate-600 rounded-2xl p-5 w-10">
                {
                    nav.map((item, index) => (
                        <li key={index} className="list-none pl-4 mt-10">{item}</li>
                    ))
                }
            </div>
        </>
    )
}
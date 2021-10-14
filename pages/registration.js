import Layout from "../components/Layout"
import Image from "next/image"
import { signIn, signOut, useSession,providers } from "next-auth/client";

var fetchForm = "";
var gitUrl = "";
if (process.browser) {
    fetchForm = document.querySelector('.fetchForm');
    gitUrl = "http://118.27.7.106:9443/api/github";
    // windowやdocumentを使う処理を記述
}
export default function Registration({ Providers }) {
    const [session] = useSession();
    

    return (
        <Layout title="会員登録">
            { console.dir(session) }
            <form action="#" className="fetchForm w-full md:w-3/4 lg:w-3/6 p-4">
                <div className="p-3">
                    <input className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="text" placeholder="Name" name="userName" value={session?.user?.name} required />
                    
                </div>
                <div className="p-3">
                    <input className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="password" placeholder="password" name="password" required/>
                </div>
                <div className="p-3">
                    <input className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="email" placeholder="Email Id" name="userMail" value={session?.user?.email} required />
                    <input className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="hidden" name="git" value={ session?.accessToken }/>
                </div>
                <div className="p-3">
                    <input className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="number" placeholder="Mobile Number" required/>
                </div>
                <div className="p-3">
                    <textarea className="resize-none border rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56" placeholder="Message" required></textarea>
                </div>
                <div className="p-3 pt-4">
                    <button className="w-full bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded text-2xl"onClick={() => postFetch()}>
                    Send
                    </button>
                </div>
                </form>
        </Layout>
    )
}

export async function getStaticProps(context) {
    const Providers = await providers(context);
    return {
      props: { Providers },
    }
}
  
const postFetch = () => {
    let formData = new FormData(fetchForm);
    for (let value of formData.entries()) {
        console.log(value);
    }

    fetch(gitUrl, {
        mode: 'cors',
        method: 'POST',
        body: formData
    }).then((response) => {
        if(!response.ok) {
            console.log('error!');
        } 
        console.log('ok!');
        return response.json();
    }).then((data)  => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
};
import Layout from "../components/Layout"
import Image from "next/image"
import { signIn, signOut, useSession, providers } from "next-auth/client";
import {useState, useRef } from 'react'
import axios from 'axios';

var fetchForm = "";
var gitUrl = "";
if (process.browser) {
    fetchForm = document.querySelector('.fetchForm');
    gitUrl = "https://my-profile-test.herokuapp.com/api/github";
    // windowやdocumentを使う処理を記述
}
export default function Registration({ Providers }) {
    const [session] = useSession();
    const userName = useRef(null);
    const password = useRef(null);
    const email = useRef(null);
    const gitToken = useRef(null);

    return (
        <Layout title="会員登録">
            {console.dir(session)}
            <form action="#" className="fetchForm w-full md:w-3/4 lg:w-3/6 p-4">
                <div className="p-3">
                    <input className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="text" placeholder="Name" name="name" id="user" ref={userName} value={session?.user?.name} required />

                </div>
                <div className="p-3">
                    <input className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="password" placeholder="password" id="password" name="password" ref={password} required />
                </div>
                <div className="p-3">
                    <input className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="email" placeholder="Email Id" name="email" id="email" value={session?.user?.email} ref={email} required />
                    <input className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="hidden" name="gitToken" id="gitToken" value={session?.accessToken} ref={gitToken} />
                </div>
                <div className="p-3">
                    <input className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="number" placeholder="Mobile Number" required />
                </div>
                <div className="p-3">
                    <textarea className="resize-none border rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56" placeholder="Message" required></textarea>
                </div>
                <div className="p-3 pt-4">
                    <button className="w-full bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded text-2xl" onClick={() => postFetch(session)}>
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

const postFetch = (session) => {
    let formData = new FormData(fetchForm);
    var json = '{';
    for (let value of formData.entries()) {
        console.log(value);
        json += '"' + value[0] + '":"' + value[1] + '",'
    }
    json = removeLastComma(json);
    json += '}'
    console.log(json);
    if (session?.user?.name.toLowerCase() == "github") {
        json = {
            "name": userName.current.value,
            "password": password.current.value,
            "email": email.current.value,
            "gitToken": gitToken.current.value
        }
    }
    console.dir(json)
    console.dir(JSON.parse(json))
    /*json = {
        name: "DICE",
        password: "testaaa",
        email: "ds_work_prog@outlook.jp",
        gitToken: "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"
    }*/
    axios
        .post(gitUrl, json)
        .then(response => {
            console.log(response);
        });
    /*fetch(gitUrl, {
        //mode: 'cors',
        headers: {
            //'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        method: 'POST',
        body: formData
    }).then((response) => {
        if (!response.ok) {
            console.log('error!');
        }
        else {
            console.log('ok!');
        }
        return response.json();
    }).then((data)  => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });*/
};

function removeLastComma(strng){        
    var n=strng.lastIndexOf(",");
    var a=strng.substring(0,n) 
    return a;
}
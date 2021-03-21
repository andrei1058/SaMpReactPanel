import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import { Link, Redirect } from 'react-router-dom';
import 'whatwg-fetch';
import { useState } from 'react';

export const ArticleEditor = () => {
    const { quill, quillRef } = useQuill();
    const [title, setTitle] = useState(" ");
    const [redirect, setRedirect] = useState(false);

    function onSubmitClicked(e: any) {
        e.preventDefault();
        let delta = quill.getContents().ops;
        if (delta.length == 0){
            return;
        }
        let token = localStorage.getItem('token');
        fetch('/api/news/add', {
            method: "PUT",
            headers: {
                'x-access-token': token || '',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                body: delta,
                title: title
            }),
        }).then(respnse => respnse.json())
        .then(result => {
            setRedirect(true);
            console.log(result);
        }).catch(err => {
            console.log(err);
        })
    }

    var buttonCss = "inline-block text-black font-semibold border border-black py-1 px-2 rounded hover:bg-black hover:text-white transition ease-in duration-100";

    return (
        <>
        {redirect && <Redirect to='/' />}
            <div className="grid grid-cols-2">
                <form className="mt-10 space-y-5" onSubmit={e => onSubmitClicked(e)}>
                    <div className="text font-semibold space-y-1 block">
                        <label htmlFor="titleInput" className="block text-xl">Article Title</label>
                        <input onChange={e => setTitle(e.target.value)} className="w-full block border border-gray-300 rounded-sm" name="titleInput" id="titleInput" maxLength={40} required={true} />
                    </div>
                    <div style={{ height: 400 }} className="block">
                        <div className="bg-white mt-5 h-5/6">
                            <div ref={quillRef} className="bg-white" />
                        </div>
                    </div>
                    <div id="buttons" className="inline-block space-x-3">
                        <Link to={'/'}>
                            <button type="reset" className={buttonCss}>Cancel</button>
                        </Link>
                        <button type="submit" className={buttonCss}>Submit</button>
                    </div>
                    <p className="text-sm text-gray-500 font-thin">News are fetched every two minutes</p>
                </form>
            </div>
        </>
    );
};
import UserAccount from '../../containers/Account';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';

export const ShowNewsArticle = (article: any) => {
    var delta = [];
    try {
        delta = JSON.parse(article.body);
    } catch (err) {
        console.log(err);
    }
    console.log(delta);
    var converter = new QuillDeltaToHtmlConverter(delta, {});
    return (
        <div className="bg-white shadow-lg rounded-lg mr-10" key={article.id}>
            <div className="row-auto bg-gradient-to-tr from-gray-200 to-indigo-100 -ml-6 -mr-2 shadow-md rounded-xl">
                <Link to={'/' + article.server_accounts.playerName}>
                    <img className="h-8 w-8 rounded-full inline-block ml-2 -mt-6 border border-white" src={UserAccount.getAvatarUrlForId(article.server_accounts.playerSkin)} alt="Avatar" />
                </Link>
                <div className="px-2 text-gray-600 inline-block">
                    <p className="text-xl block font-semibold">{article.title}</p>
                    <div className="-mt-2">
                        <Link to={'/' + article.server_accounts.playerName}>
                            <p className="text-xs inline-block">{article.server_accounts.playerName}</p>
                        </Link>
                    </div>
                </div>
                <p className="text-xs block float-right pt-2 pr-5">{dateFormat(article.date, 'yyyy-mm-dd')}</p>
            </div>
            <div className="px-3 pb-2 my-4">
                {ReactHtmlParser(converter.convert())}
            </div>
        </div>
    );
}
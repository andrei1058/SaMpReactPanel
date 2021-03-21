import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ShowNewsArticle } from '../../components/Overview/NewsArticleComponent';
import { AccountContainer, AccountSubscribe } from '../Account';

export default class NewsContainer extends React.Component {
    state = {
        lastArticle: -1,
        news: [] as any
    }

    componentDidMount() {
        this.processNews();
        setInterval(() => {
            this.processNews();
        }, 120_000);
    }

    processNews() {

        fetch('/api/news')
            .then(response => response.json())
            .then(json => {
                if (json.length > 0 && json[0].id !== this.state.lastArticle) {
                    this.setState({ lastArticle: json[0].id, news: json });
                }
            });
    }

    render() {
        return (
            <div className="w-2/2 h-auto inline-block">
                <NewsHeader />
                <div className="mt-1 gap-2 space-y-7 ml-10">
                    {
                        this.state.news.length > 0 && this.state.news.map((article: any) => {
                            return (
                                ShowNewsArticle(article)
                            );
                        })
                    }
                    {
                        this.state.news.length == 0 &&
                        <>No articles to show
                        </>
                    }
                </div>
            </div>
        );
    }
}

const NewsHeader = () => {
    const { t } = useTranslation();
    return (
        <div className="block">
            <p className="inline-block text-lg font-bold text-gray-800 ml-5 mb-5">{t("overview.news-header")}</p>
            <AccountSubscribe>
                {(account: AccountContainer) => {
                    return (
                        account.canManageNews() &&
                        <Link to="/news/add">
                            <button className="mr-9 text-sm inline-block text-black font-semibold border border-black px-1 rounded hover:bg-black hover:text-white transition ease-in duration-100 float-right">
                                {t("overview.add-article")}
                            </button>
                        </Link>
                    )
                }
                }
            </AccountSubscribe>
        </div>
    );
}
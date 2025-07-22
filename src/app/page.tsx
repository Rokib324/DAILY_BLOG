import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import NewsLetter from "@/components/shared/NewsLetter";
import Image from "next/image";

export default async function Home() {
  const data = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=bc4d702712b74bc8b934025415c45a71')
  const news = await data.json()
  // console.log(news)
  return (
    <div className="py-12">
      <Banner />
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-8">
          Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            news.articles.slice(0, 6).map((article: any) => (
              <NewsCard key={article.title} article={article} />
            ))
          }
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}

import { lazy, Suspense, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader'
import ArticleProps from '@/types/ArticleProps'
import calculateMinRead from '@/utils/calculateMinRead'
import truncateText from '@/utils/truncateText'
import { reportPageLoad } from '@/API/Analytics/triggerEvent'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Navbar = lazy(() => import('@/components/layouts/Navbar'))
const Blog = lazy(() => import('@/components/sections/Blog'))
const Footer = lazy(() => import('@/components/layouts/Footer'))

export default function BlogPage(): JSX.Element {
  
  useEffect((): void => {
        reportPageLoad("Blog")
  }, []);
  
  const [articles, setArticles] = useState<ArticleProps[]>([])

  const getProperty = (item: Element, query: string): string =>
    item.querySelector(query)?.textContent ?? ''

  useEffect((): void => {
    fetch('/blog/rss')
      .then((res: Response): Promise<string> => res.text())
      .then((str: string): Document => new DOMParser().parseFromString(str, 'text/xml'))
      .then((data: Document): void => {
        const items: NodeListOf<Element> = data.querySelectorAll('item')
        const loadedItems: ArticleProps[] = []

        for (const item of items) {
          const title: string = getProperty(item, 'title')
          const link: string = getProperty(item, 'link')

          const pubDate: Date = new Date(getProperty(item, 'pubDate'))
          const formattedDate: string = pubDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })

          const content: Element | null = item.getElementsByTagNameNS('*', 'encoded').item(0)
          const parsedContent: Document = new DOMParser().parseFromString(
            content?.textContent ?? '',
            'text/html'
          )
          const minRead: number = calculateMinRead(parsedContent.body.textContent ?? '')
          const preview: string = truncateText(parsedContent.body.textContent ?? '', 120)

          loadedItems.push({
            title,
            link,
            datePublished: formattedDate,
            minRead,
            preview
          })
        }

        setArticles(loadedItems)
      })
      .catch((): void => setArticles([]))
  }, [])

  return (
    <>
      <Helmet>
        <title>Blog | Justin Goulet</title>
        <meta
          name="description"
          content="Read Justin Goulet's blog for insights on software engineering!"
        />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper id='Blog Page'>
          <Navbar />
          <Blog id='blog-section' articles={articles} />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}

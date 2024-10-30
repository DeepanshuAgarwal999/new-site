import { Endpoints } from '@/constants/endpoints'
import { ApiResponse, News } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NewsItems = ({ title, data }: { title: string, data: any }) => {
    return <div className='space-y-8 lg:pl-4'>
        <h1 className='sub-heading text-2xl mb-8'>{title}</h1>
        <>
            {
                data.slice(0, 3).map((news: News) => (
                    <Link href={'/'} key={news.id}>
                        <article className='flex lg:flex-nowrap flex-wrap gap-4 border-b-2 border-dotted py-2 border-black'>
                            <Image src={Endpoints.ImageUrl + news.images} alt={news.image_alt} width={250} height={250} className='w-[250px] h-[150px] lg:w-[150xp] lg:h-[100px]' />
                            <p className='text-lg lg:text-sm hover:underline'>
                                {
                                    news.title
                                }
                            </p>
                        </article></Link>
                ))
            }
        </>

    </div>
}

const CombineNewsSection = ({ data }: { data: ApiResponse }) => {
    return (
        <section className='bg-white py-6 '>
            <div className='container'>
                <main className="grid  grid-cols-1 lg:grid-cols-3 divide-black lg:divide-x  mx-auto justify-items-center gap-6 ">
                    <NewsItems data={data.data.news?.entrepreneurs?.data} title='Entrepreneurs' />
                    <NewsItems data={data.data.news?.entertainment_media?.data} title='Entertainment Media' />
                    <NewsItems data={data.data.news?.awards_events?.data} title='Awards Events' />
                </main>
            </div>
        </section>
    )
}

export default CombineNewsSection
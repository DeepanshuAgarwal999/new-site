import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { HomeNewsResponse } from '@/types'
import Link from 'next/link'
import React from 'react'

const LeaderShipProfileSection = ({ data }: { data: HomeNewsResponse }) => {
    console.log(data.data.featured_people)
    return (
        <section className='bg-white py-10'>
            <div className='container '>
                <h2 className='section-title mt-5'>Leadership Profiles</h2>
                <BentoGrid className="pt-8">
                    {data.data.featured_people.data!.slice(0, 6).map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            image_alt={item.image_alt}
                            url={item.url}
                            images={item.images}

                        // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
                <div className='flex items-center justify-center mt-8'>
                    <Link className="tag" href={'/'}>
                        View more
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default LeaderShipProfileSection
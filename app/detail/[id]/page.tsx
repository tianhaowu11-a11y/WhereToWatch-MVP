// app/detail/[id]/page.tsx
import React from 'react';
import Link from 'next/link';

export default function DetailPage({ params }: { params: { id: string } }) {
  // 模拟：根据 ID 拿到电影数据 (以后这里会接真实的 API)
  // 这里暂时写死，无论点哪个都显示《狂飙》的数据，为了演示效果
  const movie = {
    title: '狂飙',
    year: 2023,
    type: '电视剧',
    rating: '8.5',
    intro:
      '京海市一线刑警安欣（张译 饰），在与黑恶势力的斗争中，不断遭到保护伞的打击...',
    // 修复后的海报链接
    poster:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
    sources: [
      {
        name: '爱奇艺',
        type: 'vip',
        link: 'https://www.iqiyi.com',
        logo: '🟢',
      },
      { name: 'CCTV', type: 'free', link: 'https://tv.cctv.com', logo: '📺' },
    ],
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* 1. 顶部海报背景区 */}
      <div className="relative h-64 bg-gray-900 overflow-hidden">
        {/* 背景模糊图 */}
        <img
          src={movie.poster}
          className="absolute w-full h-full object-cover opacity-30 blur-sm"
        />

        {/* 顶部导航 */}
        <div className="absolute top-0 left-0 w-full p-4 flex items-center z-10 text-white">
          <Link href="/search?q=狂飙" className="text-2xl drop-shadow-md">
            ←
          </Link>
          <span className="ml-4 font-bold drop-shadow-md">作品详情</span>
        </div>

        {/* 内容主体 */}
        <div className="absolute bottom-0 left-0 w-full p-4 flex gap-4 bg-gradient-to-t from-white to-transparent pt-20">
          <img
            src={movie.poster}
            className="w-28 h-40 rounded-lg shadow-xl object-cover border-2 border-white"
          />
          <div className="flex-1 text-white pb-2 text-shadow">
            <h1 className="text-2xl font-bold text-gray-900">{movie.title}</h1>
            <div className="text-xs text-gray-800 mt-1">
              {movie.year} · {movie.type}
            </div>
            <div className="mt-2 flex items-center">
              <span className="text-yellow-500 text-lg">⭐⭐⭐⭐</span>
              <span className="ml-2 text-gray-700 font-bold">
                {movie.rating}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mt-4">
        {/* 2. 剧情简介 */}
        <div className="mb-8">
          <h2 className="font-bold text-gray-900 mb-2">🎬 剧情简介</h2>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
            {movie.intro}
          </p>
        </div>

        {/* 3. 播放源列表 (核心功能) */}
        <div>
          <h2 className="font-bold text-gray-900 mb-4 flex items-center">
            📺 谁家能看?{' '}
            <span className="ml-2 text-xs font-normal text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              全网比价
            </span>
          </h2>

          <div className="space-y-3">
            {movie.sources.map((source, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl border border-gray-100 shadow-sm bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                    {source.logo}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{source.name}</div>
                    <div
                      className={`text-xs px-1.5 py-0.5 rounded w-fit mt-1 ${
                        source.type === 'vip'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {source.type === 'vip' ? '会员专享' : '免费观看'}
                    </div>
                  </div>
                </div>

                <a
                  href={source.link}
                  target="_blank"
                  className="bg-blue-600 text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-blue-700 shadow-blue-200 shadow-md"
                >
                  去观看 ▶
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

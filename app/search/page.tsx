// app/search/page.tsx (最终版：可点击跳转)
import React from 'react';
import Link from 'next/link';

export default function SearchResultPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const query = searchParams.q || '全部';

  const results = [
    {
      id: 1,
      title: '狂飙',
      year: 2023,
      type: '电视剧',
      rating: '8.5',
      director: '徐纪周',
      // 换成了 Unsplash 的高清电影感图片，绝对能显示！
      poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&q=80', 
      platforms: ['爱奇艺'],
    },
    {
      id: 2,
      title: '狂飙 (纪录片)',
      year: 2023,
      type: '纪录片',
      rating: '7.2',
      director: '未知',
      // 另一张不同的图
      poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=400&q=80', 
      platforms: ['Bilibili'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 顶部栏 */}
      <div className="bg-white sticky top-0 z-10 shadow-sm px-4 py-3 flex items-center">
        <Link href="/" className="text-gray-500 mr-4 text-xl">
          ←
        </Link>
        <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-600">
          {query}
        </div>
      </div>

      <div className="p-4 space-y-4">
        <p className="text-xs text-gray-400">
          找到 {results.length} 个与“{query}”相关的结果
        </p>

        {results.map((item) => (
          // 关键修改：这里加了一个 Link 包裹，点击就能跳到详情页
          <Link href={`/detail/${item.id}`} key={item.id} className="block">
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex gap-4 active:scale-95 transition-transform">
              <div className="w-24 h-32 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden relative">
                <img
                  src={item.poster}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-900 text-lg">
                      {item.title}
                    </h3>
                    <span className="bg-green-100 text-green-700 text-xs px-1.5 py-0.5 rounded font-medium">
                      {item.rating}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {item.year} · {item.type} · {item.director}
                  </p>
                </div>

                <div className="mt-2">
                  <span className="text-xs text-gray-400 mr-2">播放源:</span>
                  {item.platforms.map((p) => (
                    <span
                      key={p}
                      className="inline-block bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-md mr-1 border border-blue-100"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

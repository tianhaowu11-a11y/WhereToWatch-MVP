// app/page.tsx (更新版：支持跳转)
'use client'; // 这一行很重要，表示这是一个可交互的组件

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // 用于页面跳转

export default function HomePage() {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');

  // 处理搜索跳转的函数
  const handleSearch = () => {
    if (keyword.trim()) {
      // 跳转到 /search 页面，并带上查询参数 q
      router.push(`/search?q=${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center px-4 pt-20">
      
      {/* 1. Logo */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          哪里看 <span className="text-blue-600">.</span>
        </h1>
        <p className="text-gray-500 mt-2 text-sm">全网影视版权索引工具</p>
      </div>

      {/* 2. 搜索框 (已激活) */}
      <div className="w-full max-w-md relative mb-10">
        <div className="relative">
          <input 
            type="text" 
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // 按回车触发
            placeholder="搜电影、电视剧、综艺..." 
            className="w-full h-14 pl-6 pr-14 rounded-full border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-lg"
          />
          {/* 搜索按钮 */}
          <button 
            onClick={handleSearch}
            className="absolute right-2 top-2 bottom-2 bg-blue-600 text-white rounded-full px-4 font-medium text-sm hover:bg-blue-700 transition-colors"
          >
            搜索
          </button>
        </div>
      </div>

      {/* 3. 热门搜索 */}
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-800 font-semibold">🔥 全网热搜 Top 10</h2>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {[
            { rank: 1, title: '狂飙', type: '电视剧', platform: '爱奇艺' },
            { rank: 2, title: '三体', type: '电视剧', platform: '腾讯视频' },
            { rank: 3, title: '流浪地球2', type: '电影', platform: '院线热映' },
          ].map((item, index) => (
            <div 
              key={index} 
              onClick={() => router.push(`/search?q=${item.title}`)} // 点击热门也能跳转
              className="flex items-center p-4 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer"
            >
              <span className={`w-6 text-center font-bold mr-4 ${index < 3 ? 'text-red-500' : 'text-gray-400'}`}>
                {item.rank}
              </span>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{item.title}</div>
                <div className="text-xs text-gray-400">{item.type} • {item.platform}</div>
              </div>
              <span className="text-gray-300">→</span>
            </div>
          ))}
        </div>
      </div>
      
      <footer className="mt-10 text-xs text-gray-400">
        MVP版本 v1.0
      </footer>

    </main>
  );
}
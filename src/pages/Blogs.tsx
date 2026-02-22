import { BLOGS } from '../constants/blogs';
import { PageHead } from '../components/ui/PageHead';

const Blogs = () => {
  return (
    <article className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <PageHead
        title="Blogs"
        description="Latest security insights, tips, and technology updates from AA2000."
      />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-2 text-center">Security Insights</h1>
        <p className="text-slate-600 text-center mb-12">Latest news, tips, and technology updates.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((blog) => (
            <article
              key={blog.id}
              className="bg-white-light rounded-2xl overflow-hidden border border-slate-200/50 hover:border-aa-blue/30 transition-all duration-300 shadow-lg"
            >
              <img src={blog.image} alt={blog.title} loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3 text-xs text-aa-cyan font-bold uppercase tracking-wider">
                  <span>{blog.category}</span>
                  <span>{blog.date}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 hover:text-aa-blue transition-colors cursor-pointer">{blog.title}</h2>
                <p className="text-slate-600 text-sm mb-4">{blog.excerpt}</p>
                <button className="text-aa-blue font-semibold text-sm hover:underline">Read More →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Blogs;

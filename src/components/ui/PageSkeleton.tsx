const Skeleton = ({ className = '' }: { className?: string }) => (
  <div className={`bg-slate-200/60 rounded animate-pulse ${className}`} />
);

export const PageSkeleton = () => (
  <div className="min-h-[60vh] bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="text-center space-y-3">
        <Skeleton className="h-10 w-64 mx-auto" />
        <Skeleton className="h-5 w-96 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-2xl border border-slate-200/50 overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <div className="p-6 space-y-4">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-10 w-full rounded-lg mt-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

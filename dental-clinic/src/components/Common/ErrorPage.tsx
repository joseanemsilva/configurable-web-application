'use client'
interface ErrorPageProps {
  title?: string;
  message?: string;
}

export default function ErrorPage({ 
  title = "Content Not Found", 
  message = "We couldn't retrieve the data you were looking for. It might have been moved, deleted, or there's a temporary issue." 
}: ErrorPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">

      <div className="bg-red-50 text-red-500 rounded-full p-6 mb-6">
        <svg 
          className="w-12 h-12" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth="2"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
          />
        </svg>
      </div>
      
      {/* Typography / Copy */}
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2">
        {title}
      </h2>
      <p className="text-lg text-gray-500 mb-8 max-w-md">
        {message}
      </p>
      
      {/* Call to Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Retry Button */}
        <button 
          onClick={() => window.location.reload()}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold btn rounded-4xl text-white bg-primary hover:bg-accent2 transition-colors duration-300 ease-in-out cursor-pointer"
        >
          Try Again
        </button>
      </div>
      
    </div>
  );
}
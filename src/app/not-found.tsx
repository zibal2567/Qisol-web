import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-100">
      <div className="text-center max-w-lg px-6">
        {/* 404 Title */}
        <div className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#439b83] via-emerald-600 to-teal-400 mb-4 tracking-tight">
          404
        </div>

        {/* Heading */}
        <div className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 leading-tight">
          Page Not Found
        </div>

        {/* Description */}
        <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-md mx-auto">
          Sorry, the page you’re looking for might have been moved or no longer exists.
        </p>

        {/* Back to Home Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-[#439b83] to-emerald-600 text-white font-semibold hover:from-emerald-700 hover:to-[#439b83] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-12 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            IRONPATHASCENT
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Return to fitness. Rebuild consistency. Reclaim your identity.
          </p>
        </header>

        {/* Tagline */}
        <div className="bg-gray-900 text-white rounded-2xl p-6 mb-8">
          <p className="text-xl font-medium text-center">
            &ldquo;Climb your path. Show up. Progress matters more than perfection.&rdquo;
          </p>
        </div>

        {/* For the Returning Lifter */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
            For the Returning Lifter
          </h2>
          
          <ul className="space-y-4 text-gray-700 mb-8">
            <li className="flex items-start">
              <span className="inline-block mr-3 mt-1 text-green-600 font-bold">✓</span>
              <span>Trained seriously before, then stepped away</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-3 mt-1 text-green-600 font-bold">✓</span>
              <span>Struggles to consistently show up</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-3 mt-1 text-green-600 font-bold">✓</span>
              <span>Knows the basics but lacks structure</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-3 mt-1 text-green-600 font-bold">✓</span>
              <span>Wants guidance without intimidation</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-3 mt-1 text-green-600 font-bold">✓</span>
              <span>Avoids comparison culture</span>
            </li>
          </ul>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="font-medium text-gray-900 mb-3">Our Promise</h3>
            <p className="text-gray-600">
              No pressure. No comparison. No shame. Just honest effort and structured guidance.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/day-zero"
            className="inline-block bg-gray-900 text-white text-lg font-medium px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Your Iron Path
          </a>
          <p className="mt-4 text-gray-500 text-sm">
            Day 0 begins with intention, not perfection
          </p>
        </div>

        {/* Core Values */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Effort over perfection</h4>
            <p className="text-sm text-gray-600">Showing up matters more than peak performance</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Consistency over intensity</h4>
            <p className="text-sm text-gray-600">Progress is built by repeated action, not extremes</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Progress over aesthetics</h4>
            <p className="text-sm text-gray-600">Visible results are secondary; the journey is primary</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Community over comparison</h4>
            <p className="text-sm text-gray-600">Support, not competition, is rewarded</p>
          </div>
        </div>
      </div>
    </main>
  )
}

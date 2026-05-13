export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          For HR Teams &amp; Recruiters
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Find Optimal Interview Times<br />Across Global Timezones
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Instantly analyze candidate and interviewer timezones to suggest the best meeting slots. Stop the endless scheduling back-and-forth.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Start Scheduling Smarter
        </a>
        <p className="text-[#8b949e] text-sm mt-3">$15/mo &mdash; cancel anytime</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto bg-[#161b22]">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-4xl font-bold text-white mb-1">$15<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to schedule globally</p>
          <ul className="space-y-3 mb-8">
            {[
              "Automatic timezone detection",
              "Optimal time slot suggestions",
              "Calendar integration (Google &amp; Outlook)",
              "Unlimited candidates &amp; interviewers",
              "Real-time scheduling dashboard",
              "Priority email support"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">&#10003;</span>
                <span dangerouslySetInnerHTML={{ __html: feature }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="text-white font-semibold mb-2">How does timezone detection work?</h3>
            <p className="text-[#8b949e] text-sm">We automatically detect timezones from email addresses, calendar invites, or manual input. Our algorithm then calculates overlapping business hours to surface the best meeting windows for all participants.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="text-white font-semibold mb-2">Which calendars are supported?</h3>
            <p className="text-[#8b949e] text-sm">We integrate with Google Calendar and Microsoft Outlook. Simply connect your calendar and we&apos;ll factor in existing events when suggesting available slots.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="text-white font-semibold mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes, absolutely. Cancel anytime from your account dashboard with no questions asked. You&apos;ll retain access until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Interview Scheduling Timezone Optimizer. All rights reserved.
      </footer>
    </main>
  );
}

import React from 'react';

export const App: React.FC = () => {
  return (
    <main id="app-container" className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-400 font-sans p-6">
      <section id="welcome-card" className="text-center max-w-md p-8 rounded-xl border border-neutral-800 bg-neutral-900/60 shadow-lg">
        <h1 id="app-title" className="text-3xl font-semibold tracking-tight text-neutral-100 mb-2">
          wd-photos
        </h1>
        <p id="app-subtitle" className="text-neutral-400 text-sm mb-4">
          By Todd Benrud
        </p>
        <p id="app-status" className="text-neutral-500 text-xs leading-relaxed">
          Development server running on port 3000. Ready to build your photo gallery.
        </p>
      </section>
    </main>
  );
};

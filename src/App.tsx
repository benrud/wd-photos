import React from 'react';

interface PhotoItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
}

const PHOTOS: PhotoItem[] = [
  {
    id: 'photo-card-1',
    title: 'Alpine Sunrise',
    subtitle: 'Morning light across mountain peaks',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=600&fit=crop&auto=format&q=80',
  },
  {
    id: 'photo-card-2',
    title: 'Coastal Serenity',
    subtitle: 'Tides along the sandy shores',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop&auto=format&q=80',
  },
  {
    id: 'photo-card-3',
    title: 'Whispering Woods',
    subtitle: 'Sunlight piercing through deep forest',
    url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=600&fit=crop&auto=format&q=80',
  },
  {
    id: 'photo-card-4',
    title: 'Golden Horizon',
    subtitle: 'Shadows dancing on desert dunes',
    url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=600&fit=crop&auto=format&q=80',
  },
  {
    id: 'photo-card-5',
    title: 'Starlight Peak',
    subtitle: 'Clear celestial skies above the summit',
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=600&fit=crop&auto=format&q=80',
  },
  {
    id: 'photo-card-6',
    title: 'Metropolitan Angles',
    subtitle: 'Reflective glass and geometric towers',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop&auto=format&q=80',
  },
  {
    id: 'photo-card-7',
    title: 'Cascade Falls',
    subtitle: 'Crisp rushing water over mossy rocks',
    url: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600&h=600&fit=crop&auto=format&q=80',
  },
  {
    id: 'photo-card-8',
    title: 'Still Waters',
    subtitle: 'Mirror reflections on a tranquil lake',
    url: 'https://images.unsplash.com/photo-1439853941329-a99ce04511b7?w=600&h=600&fit=crop&auto=format&q=80',
  },
  {
    id: 'photo-card-9',
    title: 'Autumn Canopy',
    subtitle: 'Vibrant amber foliage in the fall',
    url: 'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=600&h=600&fit=crop&auto=format&q=80',
  },
];

export const App: React.FC = () => {
  return (
    <div id="gallery-root" className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      <header id="gallery-header" className="text-center py-10 px-4">
        <h1 id="gallery-title" className="text-3xl font-semibold tracking-tight text-neutral-100 mb-1">
          wd-photos
        </h1>
        <p id="gallery-subtitle" className="text-neutral-400 text-sm">
          Portfolio by Todd Benrud
        </p>
      </header>

      <main id="gallery-main" className="flex-1 w-full max-w-5xl mx-auto px-4 pb-14">
        <div id="photo-grid" className="grid grid-cols-3 gap-3 sm:gap-6">
          {PHOTOS.map((photo, index) => (
            <article
              key={photo.id}
              id={photo.id}
              className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-neutral-700 shadow-sm"
            >
              <div
                id={`image-wrapper-${index + 1}`}
                className="w-full aspect-square overflow-hidden bg-neutral-800"
              >
                <img
                  id={`photo-img-${index + 1}`}
                  src={photo.url}
                  alt={photo.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div id={`photo-info-${index + 1}`} className="p-3 sm:p-4">
                <h2
                  id={`photo-title-${index + 1}`}
                  className="text-xs sm:text-base font-medium text-neutral-200 truncate"
                >
                  {photo.title}
                </h2>
                <p
                  id={`photo-desc-${index + 1}`}
                  className="hidden sm:block text-xs text-neutral-500 mt-1 truncate"
                >
                  {photo.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};
